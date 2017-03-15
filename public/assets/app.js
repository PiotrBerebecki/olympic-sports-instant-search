console.log('in app js');

var searchDOM = document.querySelector('.search');
searchDOM.addEventListener('keyup', handleSearch);


function handleSearch(e) {
  var searchQuery = e.target.value;
  if (searchQuery.length > 0) {
    // make a call to api
    fetch('GET', `?search=${encodeURIComponent(e.target.value)}`, renderResponse);
  }
}

function fetch(method, query, cb) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, 'http://localhost:3000/' + query);
  console.log('http://localhost:3000/' + query);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      cb(JSON.parse(xhr.responseText));
    }
  };

  xhr.send();
}

function renderResponse(words) {
  var resultsDOM = document.querySelector('.results');
  resultsDOM.innerHTML = '';
  words.forEach(word => {
    let itemDOM = document.createElement('li');
    itemDOM.textContent = word;
    resultsDOM.appendChild(itemDOM);
  });
}
