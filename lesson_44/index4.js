function delay(duration) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve();
    }, duration);
  });
}

async function getJSON(url) {
  const response = await fetch(url);
  return await response.json();
}




function loadAndShowPlanets() {
  getJSON("https://swapi.co/api/planets/")
    .then((planets) => {
      console.log(planets)
    });
}





async function loadData() {
  const [planets] = await Promise.all([
    getJSON("https://swapi.co/api/planets/"),
    getJSON("https://swapi.co/api/vehicles/"),
  ]);

  console.log();
}

loadData();















(async function() {
  console.log('before');

  var planets;

  try {
    planets = await getJSON("https://swapi.co/api/plane");
    console.log(planets);
  } catch (error) {
    console.log(error)
  }

  console.log('after');
})();
