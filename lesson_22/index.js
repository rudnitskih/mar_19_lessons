let dmytro = {
  name: 'Dmytro',
  age: 24
};

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getAge(age) {
  return getRandomInt(0, 30);
}

function changeName(user) {
  return {
    ...user,
    name: 'Igor'
  }
}

console.log('Dmytro=', dmytro);
dmytro = changeName(dmytro);
console.log('Dmytro=', dmytro);
