const numbers = new Array(1, 2, 3);

Array.prototype.plusValues = function () {
  let result = 0;

  for (let i = 0; i < this.length; i++) {
    result += Number(this[i]);
  }

  return result;
};

console.log(numbers.plusValues());
