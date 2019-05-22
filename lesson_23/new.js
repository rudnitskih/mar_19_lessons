function Person(age, name) {

  this.hobbies = ['JS', 'HTML', 'CSS'];

  this.showInfo = function () {
    console.log(`Hello, ${name}, ${age}`);
  };

  this.printHobbies = () => {
    console.log(this);
    console.log('Hobbies', this.hobbies);
  }
}

const dmytro = new Person(24, 'Dmytro');

dmytro.printHobbies();

setTimeout(dmytro.printHobbies, 1000);
