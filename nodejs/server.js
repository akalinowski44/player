const http = require('http');

const server = http.createServer(function(request, response){
    response.end('Hello');
});

server.listen(8080);