function getJSON(url) {
  return fetch(url)
    .then((response) => {
      return response.json();
    })
}


getJSON('https://swapi.co/api/planets/')
  .then((planets) => {
    return console.log(planets);
  });
