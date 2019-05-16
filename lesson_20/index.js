const dmytro = {
  name: 'Dmytro',
  age: 24,
  married: true,
};

const vlad = {
  name: 'Vlad',
  age: 2,
};

const igor = {
  name: 'Igor',
  age: 3,
  married: false,
  brother: vlad
};

const {age, name} = dmytro;

console.log('Age=', age);
console.log('Name=', name);

const persons = [
  dmytro,
  vlad,
  igor,
];

const [someDima, someVlad] = persons;

// let sum = 0;
//
persons
  .forEach((person) => {
    console.log(person.name);
  });

console.log('Names=', age);


const names = [];

for (let i = 0; i < persons.length; i++) {
  if (persons[i].name.length < 5) {
    names.push(persons[i].name.toUpperCase());
  }
}


const dmytro = {
  name: 'Dmytro',
  age: 24,
  greeting: function () {
    console.log('I am Dmytro');
  }
};


dmytro.greeting();




const greeting2 = (name) => {
  return `Hello ${name}`;
};

greeting(getRandomName);
greeting(getRandomName);
greeting(() => {
  return 'Dmytro';
});

function getRandomName() {
  const names = [
    'Dmytro',
    'Vlad',
    'Igor',
  ];

  const randomIndex = getRandomInt(0, names.length - 1);

  return names[randomIndex];
}

function greeting(getter) {
  console.log(`Hello ${getter()}`);
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function sum(a) {
  return function (b) {
    return a + b;
  };
}

const halfSum = sum(2);

halfSum(3);
