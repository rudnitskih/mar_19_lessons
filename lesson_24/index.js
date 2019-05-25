

function pow(a, b) {
  let result = a;

  for (let i = 1; i < b; i++) {
    result = result * a;
  }

  return result;
}


function MyNumber(someNumber) {
  this.value = someNumber;

  this.pow = (b) => {
    return b.value ** this.value;
  };
}

const firstNumber = new MyNumber(2);
const secondNumber = new MyNumber(3);
firstNumber.pow('43');

console.log(pow(2, 3));
