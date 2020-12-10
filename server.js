
//Include frameworks
const fs = require('fs');
const url = require('url');
const express = require('express');
const path = require('path');
const bodyparser = require('body-parser');
const nodemailer = require('nodemailer');
var cors = require('cors');
var validator = require('validator');
//const emailExistence = require('email-existence');
/*database = */require('dotenv').config();

//FOR GETTING SONG / SHOW LISTS
const fetch = require('node-fetch');

//Include custom frameworks
var dbMgr = require('./database-manager.js');
var storMgr = require('./storage-manager.js');
var geocoder = require('./geocoder.js');
require('./public/objects/addresses.json');

//Assign constants
//const hostname = "localhost";
const imageTable = "Images2";

//VARS FOR GETTING SONG AND SHOW LIST
let songsUrl = "https://www.bandhelper.com/feed/smart_list/9PSR83/23856";
let showsUrl = "https://www.bandhelper.com/feed/calendar/23856?range=12";
let showFetchSettings = { method: "Get" };

//Instantiate managers
var app = express();
var httpPort = process.env.PORT || 8000;
var api = express();
//var apiHttpPort = 8091;

app.use(cors());
app.options('*', cors())
// var corsOptions = {
//   origin: 'http://localhost:8000',
//   optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
// }

//Create filepaths
var publicFolder = path.join(__dirname + '/public');
var homePage = path.join(__dirname + '/views/main.html');
var backPage = path.join(__dirname + '/views/backend-main.html');
var temperror = path.join(__dirname + '/views/temp-error.html');
var tempsuccess = path.join(__dirname + '/views/temp-success.html');
var slideshowBackend = path.join(__dirname + '/views/slideshow-backend.html');
var imagesPage = path.join(__dirname + '/views/images.html');
var songsJSON = path.join(__dirname + '/public/objects/songsList.json');
var showsJSON = path.join(__dirname + '/public/objects/showsList.json');
var addressesJSON = path.join(__dirname + '/public/objects/addresses.json');
var favicon = path.join(__dirname + '/public/images/cgicon.ico');
var slidesDir = path.join(__dirname + '/public/images/slides/');
//var songsList = path.join(publicFolder + '/songsLists/songList.json');

//Static Routes
app.use(express.static(publicFolder));

//Tell express to use body parser and not parse extended bodies directly
app.use(bodyparser.urlencoded({ extended: true }));
api.use(bodyparser.urlencoded({ extended: true }));

//Custom Routing functions
function setCorsHeaders(res) {
  res.header("Access-Control-Allow-Origin", '*');
  res.header("Access-Control-Allow-Credentials", true);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
  return res;
}

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//Standard Routes
app.get('/', (req, res) => {
  res.sendFile(homePage);
});
app.get('/backend', (req, res) => {
  res.sendFile(backPage);
});
app.get('/slideshow-backend', (req, res) => {
  res.sendFile(slideshowBackend);
});
app.get('/images', (req, res) => {
  res.sendFile(imagesPage);
});
app.get('/favicon.ico', (req, res) => {
  res.sendFile(favicon);
});
app.get('/songsJSON', (req, res) => {
  res.sendFile(songsJSON);
});
app.get('/showsJSON', (req, res) => {
  res.sendFile(showsJSON);
});
app.get('/addressesJSON', (req, res) => {
  res.sendFile(addressesJSON);
});
app.get('/slides', (req, res) => {
  fs.readdir(slidesDir,  
    { withFileTypes: true }, 
    (err, files) => { 
    console.log("\nCurrent directory files:"); 
    if (err) 
      console.log(err); 
    else { 
      res.send(files); 
    } 
  }) 
});
app.get('/api/images/:id', (req, res) => {
  res = setCorsHeaders(res);
  imageId = req.params.id;
  console.log("images-id#" + imageId + " end point hit by get request");
  res.set('Content-Type', 'text/html');
  //res.send(urlString);
  async function postImageUrl() {
    try {
      res.send(await storMgr.getFileUrl(imageId));
      // res.send(JSON.stringify(result[0]));
    }
    catch (err) {
      res.send(err);
    }
  }
  postImageUrl();
});

app.get('/api/images-data', (req, res, next) => {
  res = setCorsHeaders(res);
  async function postImageRecords() {
    console.log("images-data end point hit by get request");
    try {
      result = await dbMgr.getRecords(imageTable);
      // res.set('Content-Type', 'text/html');
      // res.send(JSON.stringify(result[0]));
      res.set('Content-Type', 'application/json');
      res.send(result[0]);
    }
    catch (err) {
      res.send(err);
    }
  }
  postImageRecords();
});

// POST route from contact form
app.post('/contact', function (req, res) {
  //Should try to migrate smtp routines to dedicated smtp manager script
  if (!req.body.name || !req.body.email || !req.body.message){
    res.send("Error: Blank form Fields");
    return false;
  }
  else if (!validator.isEmail(req.body.email)) {
    res.send("Error: Not a Valid Email");
    return false;
  }
  //else if (emailExistence.check('',function(error, response){}==="250")){}
  // The above would be async and wait upon a callback function.
  var smtpTrans = nodemailer.createTransport({
    service: "Outlook365", // no need to set host or port etc.
    auth: {
      user: process.env.OUTLOOK_USER,
      pass: process.env.OUTLOOK_PASS
    }
  });
  var requestText = req.body.name + " at " + req.body.email + " says:\n" + req.body.message;
  var mailOpts = {
    from: 'info@commongroundband.ca',
    to: 'info@commongroundband.ca',
    subject: 'New message from contact form at commongroundband.ca',
    text: requestText//`${req.body.name} (${req.body.email}) says:\n ${req.body.message}}`
  }
  smtpTrans.sendMail(mailOpts, function (error, response) {
    if (error) {
      res.sendFile(path.resolve(temperror));
    }
    else {
      res.sendFile(path.resolve(tempsuccess));
    }
  });
});

//RETRIEVE AND SAVE SONG LIST
function minToMs(minutes) {
  return minutes * 1000 * 60;
};

function updateSongsList() {
  console.log('Updating Songs List to Server');
  fetch(songsUrl, showFetchSettings)
    .then(res => res.json())
    .then((json) => {
      let songData = JSON.stringify(json);
      fs.writeFileSync('public/objects/songsList.json', songData);
    });
};

function updateShowsList() {
  console.log('Updating Shows List to Server');
  fetch(showsUrl, showFetchSettings)
    .then(res => res.json())
    .then((json) => {
      fs.writeFileSync('public/objects/showsListRaw.json', JSON.stringify(json))
      let showsData = JSON.stringify(json);
      fs.writeFileSync('public/objects/showsList.json', showsData);
    });
};

// function createCuratedShowsList(){
// }

// function appendCuratedAddresses(addressesObject) {
//   for (i = 0; i < addressesObject.length; i++){
//     let address = addressesObject[i];
//     console.log("Address object: " + JSON.stringify(address))
//   }
 // Object.assign(addressesObject)
// }

updateSongsList(); 
updateShowsList();
setInterval(updateSongsList, minToMs(1)); //And once every X milliseconds
setInterval(updateShowsList, minToMs(1)); //And once every X milliseconds
setInterval(geocoder.updateAddresses, minToMs(1)); //And once every X milliseconds
// let a = fs.readFileSync(addressList)
// let b = JSON.parse(a)
// appendCuratedAddresses(b);

// 404
app.use(function (req, res, next) {
  return res.status(404).send({ message: 'Route ' + req.url + ' Not found.' });
});

// 500 - Any server error
app.use(function (err, req, res, next) {
  return res.status(500).send({ error: err });
});

app.listen(httpPort);
//api.listen(apiHttpPort);

// api.listen(apiHttpPort, function () {
//   console.log('CORS-enabled web server listening on port ' + apiHttpPort)
// })





