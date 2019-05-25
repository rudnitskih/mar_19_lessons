class Person {
  constructor(name) {
    this.name = name;
  }

  getInfo() {
    console.log('My name is ' + this.name);
  }

  greeting() {
    console.log('Hello world');
  };
}

console.log(typeof Person);


// function Person(name) {
// }
//
// Person.prototype.getInfo = () => {
//   console.log('My name is ' + name);
// };
//
// Person.prototype.greeting = () => {
//   console.log('Hello world');
// };


const dmytro = new Person('Dmytro');
// dmytro.getInfo();
//
// console.log(dmytro);
