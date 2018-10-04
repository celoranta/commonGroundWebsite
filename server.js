/*server.js*/

//As per https://codeburst.io/getting-started-with-node-js-a-beginners-guide-b03e25bca71b


const http = require('http');
var port = process.env.PORT;

var hostname = "127.0.0.0";
const wwwHostname = "https://common-ground-website.herokuapp.com/";

const server = http.createServer(function(req, res) 
{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n');
});

server.listen(port, hostname, function() {
    if (port == null || port == "") {
        port = 8000;
        hostname = wwwHostname;
    }
    console.log('Server running at http://'+ hostname + ':' + port + '/');
});
