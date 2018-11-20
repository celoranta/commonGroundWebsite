
//Include frameworks
const fs = require('fs');
const url = require('url');
const express = require('express');
const path = require('path');
const bodyparser = require('body-parser');
const nodemailer = require('nodemailer');
database = require('dotenv').config();

//Include custom frameworks
var dbMgr = require('./database-manager.js');
var storMgr = require('./storage-manager.js');

//Assign constants
const hostname = "localhost";

//Instantiate managers
var app = express();
var httpPort = process.env.PORT || 8000;

//Create filepaths
var publicFolder = path.join(__dirname + '/public');
var homePage = path.join(__dirname + '/views/main.html');
var backPage = path.join(__dirname + '/views/backend-main.html');
var temperror = path.join(__dirname + '/views/temp-error.html');
var tempsuccess = path.join(__dirname + '/views/temp-success.html');
var slideshowBackend = path.join(__dirname + '/views/slideshow-backend.html');

//Static Routes
app.use(express.static(publicFolder));

//Tell express to use body parser and not parse extended bodies directly
app.use(bodyparser.urlencoded({ extended: true }))

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
// app.get('/imagesData', (req, res) => {
//   let returnDbResponse = async function() {
//     dbMgr.getImagesData()
//     .then(function(value) {
//       console.log(value);
//       res.send(value);
//     });
//   }
//   returnDbResponse();
//   });

//Just an example

// async function getNumber() { // Async function statment
//   return 42;
// }
// let logNumber = async function() { // Async function expression
//   getNumber() // returns a promise
//     .then(function(value) {
//       console.log(value);
//     });
// }
// logNumber(); 


// POST route from contact form
app.post('', function (req, res) {
//ToDo: This routine does not validate email addresses yet.
//Should try to migrate smtp routines to dedicated smtp manager script
  var smtpTrans = nodemailer.createTransport({
    service: "Outlook365", // no need to set host or port etc.
    auth: {
        user: process.env.OUTLOOK_USER,
        pass: process.env.OUTLOOK_PASS
    }
  });
  console.log('nodemailer creation routine ended');
  var requestText =  req.body.name + " at " + req.body.email + " says:\n" + req.body.message;
  var requestEmail = req.body.email;
  var mailOpts = {
    from: 'info@commongroundband.ca', 
    to: 'info@commongroundband.ca',
    subject: 'New message from contact form at commongroundband.ca',
    text: requestText
  };
  console.log('mailopts creation routine ended');

  smtpTrans.sendMail(mailOpts, function (error, response) {
    if (error) {
      res.sendFile(path.resolve(temperror));
    }
    else {
      res.sendFile(path.resolve(tempsuccess));
    }
  });
});

// 404
app.use(function(req, res, next) {
  return res.status(404).send({ message: 'Route '+req.url+' Not found.' });
});

// 500 - Any server error
app.use(function(err, req, res, next) {
  return res.status(500).send({ error: err });
});

app.listen(httpPort);





