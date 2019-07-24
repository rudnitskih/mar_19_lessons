function getJson(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onload = function(e) {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          resolve(JSON.parse(xhr.responseText));
        } else {
          reject(xhr.statusText);
        }
      }
    };
    xhr.onerror = function(e) {
      reject(xhr.statusText);
    };
    xhr.send(null);
  });
}

function getBestRestaurant(data) {
  return data.reduce((acc, b) => {
    return acc.rawRatingStats.storeRatingScore - b.rawRatingStats.storeRatingScore > 0
      ? acc
      : b;
  });
}

function getMostExpensiveDish(data) {
  return data.sort((acc, b) => b.price - acc.price)[0];
}

getJson("https://uber-eats-mates.herokuapp.com/api/v1/restaurants")
  .then((data) => {
    return getBestRestaurant(data);
  })
  .then(({uuid}) => {
    return getJson(`https://uber-eats-mates.herokuapp.com/api/v1/restaurants/${uuid}`);
  })
  .then((data) => {
    const mostExpensiveDish = getMostExpensiveDish(Object.values(data.items));

    console.log(mostExpensiveDish);
  })
  .catch((e) => {
    console.log('Could not process data', e);
  });

