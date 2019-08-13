import { Unit } from "./Unit.js";

export class Knight extends Unit {
  health = 12;
  minPower = 5;
  maxDistance = 2;

  constructor(x, y) {
    super(x, y);

    if (Math.random() > 0.5) {
      this.maxPower = 10;
    } else {
      this.maxPower = 8;
    }
  }
}
