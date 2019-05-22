function showInfo(currentDate, someNumber) {
  console.log('TODAY:', currentDate, someNumber);
  console.log(`${this.name}; Age: ${this.age}`);
  console.log('============');
}

const dmytro = {
  name: 'Dmytro',
  age: 24
};

showInfo.call(dmytro, '22/05/2019', '42');
showInfo.apply(dmytro, ['22/05/2019', '42']);
const bindedShowInfo = showInfo.bind(dmytro, '22/05/2019', '42');
bindedShowInfo();
