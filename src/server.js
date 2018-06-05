import http from 'http';

const server = new http.createServer();
server.on('request', (request, response) => {
    response.write('<html><body><h1>Hello</h1></body></html>');
    response.end();
}).listen(8080);
console.log('Skeletor lives!');
