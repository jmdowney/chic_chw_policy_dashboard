var http = require('http');
var fs = require('fs');

const PORT = 8080;

http.createServer(function (request, response) {
    fs.readFile('./index4.html', function (err, html) {
        if (err) throw err;
        response.writeHeader(200, { "Content-Type": "text/html" });
        response.write(html);
        response.end();
    });
    }).listen(PORT);