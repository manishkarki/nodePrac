const http = require('http');

http.createServer(function(req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n')
}).listen(process.env.PORT, process.env.IP);

console.log("server is up and running now!!");
