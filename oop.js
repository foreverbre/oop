class Vehicle {
  constructor(make, model, year) {
    this.a = make;
    this.b = model;
    this.c = year;
  }
  honk() {
    return "Beep";
  }
  toString() {
    return "The vehicle is a ${this.a} ${this.b} from ${this.c}.";
  }
}

class Car extends Vehicle {
  constructor(make, model, year) {
    super(make, model, year);
    this.numWheels = 4;
  }
}

class Motorcycle extends Vehicle {
  constructor(make, model, year) {
    super(make, model, year);
    this.numWheels = 2;
  }
  revEngine() {
    return "VROOM!!!";
  }
}

class Garage {
  vehicles = [];
  constructor(vehicles, capacity) {
    this.a = capacity;
  }
  add(newVehicle) {
    if (!(newVehicle instanceof Vehicle)) {
      return "Only vehicles are allowed in here!";
    }
    if (this.vehicles.length >= this.a) {
      return "Sorry, we're full.";
    }
    this.vehicles.push(newVehicle);
    return "Vehicle added!";
  }
}
