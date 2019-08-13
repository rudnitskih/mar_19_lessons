export class Unit {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  move(newX, newY) {
    if (newX - this.x > this.maxDistance
      && newY - this.y > this.maxDistance) {
      throw "Big distance";
    } else {
      this.x = newX;
      this.y = newY;
    }
  }

  attack(target) {
    const power = this.getPower();

    target.health -= power;
  }

  isAlive() {
    return this.health > 0;
  }

  getPower() {
    return Math.floor(Math.random() * (this.maxPower - this.minPower + 1)) + this.minPower;
  }
}
