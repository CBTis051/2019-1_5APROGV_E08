var http = require('http');
http.createServer(funcion (req, res) {

    res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
   
    var objeto = {
        mensaje : 'Hola mundo Node JS Repo GIT - Cruz Garcia Ghimel\n'};

    var json = JSON.stringify(objeto);

    res.end(json);

    }).listen(8081);
    console.log('Server running on port 8081');    