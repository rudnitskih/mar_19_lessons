function getWords(text) {
  return [].concat.apply([], text.split("\n").map((row) => row.split(" "))).map((word) => {
    return word.replace(/,\?/g, '');
  });
}

function getAmount(array) {
  const counts = {};
  array.forEach(function(x) {
    counts[x] = (counts[x] || 0) + 1;
  });

  return counts;
}

module.exports = {
  getWords,
  getAmount
};
