import { Orc } from "./Orc.js";
import { Knight } from "./Knight.js";


const orc1 = new Orc(0, 1);
const orc2 = new Orc(1, 1);
const knight = new Knight(2, 2);

console.log('!!! Fight started !!!');

while (
  (orc1.isAlive() || orc2.isAlive())
  && knight.isAlive()
  ) {

  knight.attack(orc1.isAlive() ? orc1 : orc2);

  orc2.isAlive() && orc2.attack(knight);
  orc1.isAlive() && orc1.attack(knight);
}


console.log("Orc1", orc1);
console.log("Orc2", orc2);
console.log("Knight", knight);

console.log('!!! Fight ended !!!');

