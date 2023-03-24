var http = require('http');
fs = require('fs');

http.createServer(function(req, res){
    if (req.url == '/index.html') {
        fs.readFile('./index.html', function(err, html){
            res.write(html);
            res.end();
        });
    }
    if (req.url == '/formulario.html') {
        fs.readFile('./formulario.html', function(err, html){
            res.write(html);
            res.end();
        });
    }
}).listen(8080);