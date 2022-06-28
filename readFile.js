
var fs = require('fs');
var http = require('http');
http.createServer((req, res) => {
    fs.readFile('index.html', (err, result) => {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(result);
        return res.end();
    });
}).listen(8000);