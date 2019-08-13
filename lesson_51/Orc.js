import { Unit } from "./Unit.js";

export class Orc extends Unit {
  health = 10;
  minPower = 2;
  maxPower = 4;
  maxDistance = 1;

  attack(target) {
    if (Math.abs(target.x - this.x) < this.maxDistance) {
      super.attack(target);
    } else {
      this.move(this.x + 1, this.y + 1);
    }
  }
}
