/*server.js*/

//As per https://codeburst.io/getting-started-with-node-js-a-beginners-guide-b03e25bca71b


const http = require('http');
var port = process.env.PORT || 8000;
// const express = require('express');
// const path = require('path')

var hostname = "localhost";
//const wwwHostname = "https://common-ground-website.herokuapp.com/";

const server = http.createServer(function(req, res) 
{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n');
});

server.listen(port, hostname, function() {
    if (port == null || port == "") {
        port = 8000;
        //hostname = wwwHostname;
    }
    console.log('Server running at http://'+ hostname + ':' + port + '/');
});


// express()
//   .use(express.static(path.join(__dirname, 'public')))
//   .set('views', path.join(__dirname, 'views'))
//   .set('view engine', 'ejs')
//   .get('/', (req, res) => res.render('pages/index'))
//   .listen(PORT, () => console.log(`Listening on ${ port }`))







