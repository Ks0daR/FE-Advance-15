class Car {
  constructor({ maxSpeed = 0 }) {
    this.speed = 0;
    this.maxSpeed = maxSpeed;
    this.running = false;
    this.distance = 0;
    this._price = 2000;
  }

  static getSpecs(car) {
    console.log(car);
  }

  set price(value) {
    this._price = value;
  }

  get price() {
    return this._price;
  }

  turnOn() {
    this.running = true;
  }

  turnOff() {
    this.running = false;
    this.speed = 0; // По условию задачи при выключенном зажигании скорость равна 0
  }

  accelerate(value) {
    if (value <= this.maxSpeed) {
      this.speed += value;
    }
  }

  decelerate(value) {
    if (this.speed - value > 0) {
      this.speed -= value;
    }
  }

  drive(hours) {
    if (this.running) {
      this.distance += this.speed * hours;
    }
  }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 30, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000
