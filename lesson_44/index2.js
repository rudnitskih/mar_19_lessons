function getJson(url, callback) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.onload = function(e) {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        callback(JSON.parse(xhr.responseText));
      } else {
        console.error(xhr.statusText);
      }
    }
  };
  xhr.onerror = function(e) {
    console.error(xhr.statusText);
  };
  xhr.send(null);
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

getJson(
  "https://uber-eats-mates.herokuapp.com/api/v1/restaurants",
  (data) => {
    const bestRestaurant = getBestRestaurant(data);

    getJson(
      `https://uber-eats-mates.herokuapp.com/api/v1/restaurants/${bestRestaurant.uuid}`,
      (data) => {
        const mostExpensiveDish = getMostExpensiveDish(Object.values(data.items));

        console.log(mostExpensiveDish);
      });
  });

