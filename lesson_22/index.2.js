function makeCounter() {
  let counter = 0;

  const api = {
    count: function () {
      counter++;
      console.log(counter);

      return api;
    },

    reset: function () {
      counter = 0;
      console.log(counter);

      return api;
    }
  };

  return api;
}

const counter = makeCounter();


['JS', 'HTMl']
  .map((el) => el.toLowerCase())
  .join(', ')

counter
  .count()
  .count()
  .count()
  .count()
  .count()
  .reset()
  .count()
