
//Include frameworks
const fs = require('fs');
const url = require('url');
const express = require('express');
const path = require('path')
//const mysql = require('mysql');

//Instantiate managers
var app = express();

//Assign variables
var httpPort = process.env.PORT || 8000;
var hostname = "localhost";

//Create filepaths
var homePage = path.join(__dirname + '/views/main.html');
var backPage = path.join(__dirname + '/views/backend-main.html')
var publicFolder = path.join(__dirname + '/public');

//Static Routes
app.use(express.static(publicFolder));

//Standard Routes
app.get('/', (req, res) => {
  res.sendFile(homePage);
});

app.get('/backend', (req, res) => {
  res.sendFile(backPage);
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




