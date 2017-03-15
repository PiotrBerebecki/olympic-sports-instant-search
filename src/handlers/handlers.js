var path = require('path');
var fs = require('fs');


var handlers = {};


handlers.serveLanding = function(req, res) {
  fs.readFile(path.join(__dirname, '..', '..', 'public', 'index.html'), function(err, file) {
    if (err) {
      return console.log(err);
    }
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(file);
  });
};


handlers.serveAssets = function(req, res) {
  var extension = path.extname(req.url);

  var extensionType = {
    '.js':'application/javascript',
    '.css':'text/css',
    '.jpg': 'image/jpeg',
    '.png': 'image/png',
    '.ico': 'image/x-icon'
  };

  fs.readFile(path.join(__dirname, '..', '..', 'public', req.url), function(err, file) {
    if (err) {
      return console.log(err);
    }
    res.writeHead(200, { 'Content-Type': extensionType[extension] });
    res.end(file);
  });
};


module.exports = handlers;
