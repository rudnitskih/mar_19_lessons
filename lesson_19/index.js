const dmytro = {
  name: 'Dmytro',
  age: 24,
  married: true,
};

const vlad = {
  name: 'Vlad',
  age: 30,
};

const hobbies = ['JS', 'CSS','HTML', 'BEM'];
let longestHobbie = '';

for (let index = 0; index < hobbies.length; index++) {
  if (hobbies[index].length > longestHobbie.length) {
    longestHobbie = hobbies[index];
  }
}

const igor = {
  name: 'Igor',
  age: 26,
  married: false,
  brother: vlad
};

for (let property in igor) {
  console.log(property + ' === ' + igor[property]);
  console.log(`${property} === ${igor[property]}`);
}


const myName = 'Dmytro';

const myNameObj = {
  valueOf: 'Dmytro',
  length: 5,
  toUpperCase: function () {

  }
};
