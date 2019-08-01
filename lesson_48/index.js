const fs = require('fs');
const http = require('http');
const {getWords, getAmount} = require('./data/utils');

function getTop10Words(occurrences) {
  const pairs = Object.entries(occurrences);
  pairs.sort((a, b) => b[1] - a[1]);

  return pairs.slice(0, 10);
}



// HTTP SERVER \\


http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/plain'
  });

  fs.readFile('./data/song.txt', function (err, song) {
    if (err) throw err;
    const words = getWords(song.toString());
    const occurrences = getAmount(words);

    const top10Words = getTop10Words(occurrences);

    res.end(JSON.stringify(top10Words));
  });
}).listen(8080);

console.log('Server running on port 8080.');


// HTTP Server end \\
