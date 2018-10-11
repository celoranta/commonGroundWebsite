
const fs = require('fs');
const url = require('url');
const express = require('express');
//const mysql = require('mysql');
// const path = require('path')

var port = process.env.PORT || 8000;
var hostname = "localhost";
var app = express();

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));

app.get('/', (request, response) => {
        var q = url.parse(request.url, true);
        var filename = "." + q.pathname;
        fs.readFile(filename, function(err, data) {
            if (err) {
                response.writeHead(404, {'Content-Type': 'text/html'});
                return res.end("404 Not Found");
              } 
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(data);
            response.write(q.pathname);
            response.end();
          });

});

app.listen(port);




