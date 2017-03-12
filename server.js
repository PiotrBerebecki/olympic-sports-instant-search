var fs = require('fs');
var http = require('http');
var path = require('path');

var html = fs.readFileSync(path.join(__dirname, 'index.html'));
var app = fs.readFileSync(path.join(__dirname, 'app.js'));

var dictionary = fs.readFileSync(path.join(__dirname, 'dictionary.txt'));
var dictionaryArr = dictionary.toString().split('\n').slice(0,-1);

function getMatches(searchTerm) {
  return dictionaryArr.filter(word => word.toLowerCase().includes(searchTerm));
}


var port = process.env.port || 3000;

var server = http.createServer(function handler(request, response) {
  var fileType;
  var data;

  var extension = (request.url.match(/\...{0,}$/, 'g') || [])[0] ;

  if (request.url.length === 1) {
    fileType = "text/html";
    data = html;
  } else if (extension === '.js') {
    fileType = "text/javascript";
    data = app;
  } else {
    fileType = 'application/json',
    data = JSON.stringify(getMatches(request.url.slice(1)));
  }

  response.writeHead(200, {"Content-Type": fileType});
  response.end(data);

}).listen(port);

console.log('listening on http://localhost:' + port);
