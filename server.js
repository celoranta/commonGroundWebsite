/*server.js*/

//As per https://codeburst.io/getting-started-with-node-js-a-beginners-guide-b03e25bca71b


const http = require('http');
var port = process.env.PORT || 8000;
// const express = require('express');
// const path = require('path')

var hostname = "localhost";

const server = http.createServer(function(req, res) 
{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Common Ground\n');
    res.end('Classic Rock | Motown | Alternative | Country\n');
});

server.listen(port, hostname, function() {
    if (port == null || port == "") {
        port = 8000;
    }
    console.log('Server running at http://'+ hostname + ':' + port + '/');
});






