var fs = require('fs');
var path = require('path');

fs.readFile(path.join(__dirname, 'dictionary.txt'), 'utf8', (err, data) => {
  var words = data.split('\n').slice(0, -1);
  console.log(words);
});
