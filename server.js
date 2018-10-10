
const fs = require('fs');
const http = require('http');
const url = require('url');
var port = process.env.PORT || 8000;
var hostname = "localhost";

// const express = require('express');
// const path = require('path')


const server = http.createServer(function(req, res) 
{
    var q = url.parse(req.url, true);
    var filename = "." + q.pathname;

    fs.readFile(filename, function(err, data) {
        if (err) {
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end("404 Not Found");
          } 
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
      });

});

server.listen(port, hostname, function() {
    if (port == null || port == "") {
        port = 8000;
    }
    console.log('Server running at http://'+ hostname + ':' + port + '/');
});






