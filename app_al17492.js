var http = require('http');
http.createServer(funcion (req, res) {
    res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});

    res.end('Hola mundo Node JS Repo Git - Cruz Garcia Ghimel\n');
}).listen(8081);
console.log('Server running on port 8081');