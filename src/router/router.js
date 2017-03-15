var handlers = require('./../handlers/handlers');

function router(req, res) {
  var endpoint = req.url;

  if (endpoint === '/') {
    handlers.serveLanding(req, res);
  } else if (endpoint.slice(0, '/assets'.length) === '/assets') {
    // console.log('router assets');
    handlers.serveAssets(req, res);
  }

}

module.exports = router;
