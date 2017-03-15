var http = require('http');

var router = require('./router/router');

var port = process.env.PORT || 3000;

var server = http.createServer(router);

server.listen(port, function() {
  console.log('listening on port:', port);
});
