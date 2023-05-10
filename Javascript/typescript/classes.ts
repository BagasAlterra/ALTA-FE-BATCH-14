// ---- CLASSES ----

class Motorbike {
  // -- Field
  engine: string;
  color: string;
  year: number;

  // -- Constructor
  constructor(engine: string, color: string, year: number) {
    this.engine = engine;
    this.color = color;
    this.year = year;
  }

  // -- Function
  display(): string {
    return "Engine is : " + this.engine;
  }
}

let scooter = new Motorbike("XXSY1", "red", 2021);
let motocross = new Motorbike("MCS22", "black", 2022);

// console.log(scooter);
// console.log(motocross);
// console.log(scooter.display());
// console.log(motocross.display());

// ---- INHERITANCE ----

class Vegetable {
  color: string;
  shape: string;
  isOrganic: boolean;
  constructor(color: string, shape: string, isOrganic: boolean) {
    this.color = color;
    this.shape = shape;
    this.isOrganic = isOrganic;
  }
}

class Tomato extends Vegetable {
  price: number;
  constructor(color: string, shape: string, isOrganic: boolean, price: number) {
    super(color, shape, isOrganic); // super untuk memberitahu jika ada sifat pewarisan dari class lain
    this.color = color;
    this.shape = shape;
    this.isOrganic = isOrganic;
    this.price = price;
  }
}

// let tomato = new Tomato("red", "rounded", true, 14000);
// console.log(tomato);

// PARENT
class Car {
  year: number;
  color: string;
  type: string;
  constructor(year: number, color: string, type: string) {
    this.year = year;
    this.color = color;
    this.type = type;
  }
}

// CHILDREN
class Sedan extends Car {
  name: string;
  constructor(year: number, color: string, type: string, name: string) {
    super(year, color, type);
    this.year = year;
    this.color = color;
    this.type = type;
    this.name = name;
  }
}

// GRAND CHILDREN
class Honda extends Sedan {
  policeNumber: number | string;
  constructor(
    year: number,
    color: string,
    type: string,
    name: string,
    policeNumber: number | string
  ) {
    super(year, color, type, name);
    this.year = year;
    this.color = color;
    this.type = type;
    this.name = name;
    this.policeNumber = policeNumber;
  }
}

// let sedan = new Sedan(2020, "black", "Honda", "Civic");
// let honda = new Honda(2019, "blue", "mpv", "br-v", `B ${12345} ZF`);
// console.log(sedan);
// console.log(honda);

// ---- INTERFACE ----

interface Fruit {
  name: string;
  price: number;
  isOrganic?: boolean;
}

const fruit: Fruit = {
  name: "Apple",
  price: 14000,
  isOrganic: true,
};

// console.log("access name of fruit : ", fruit.name);
// console.log("access price of fruit : ", fruit.price);
// console.log("is that organic or not ? ", fruit.isOrganic);

interface Person {
  name: string;
  age: number;
  dob: number | string;
  hobbies?: string[];
}

const person: Person = {
  name: "John Doe",
  age: 40,
  dob: `${22} September`,
  //   hobbies: ["Programming", "Cooking"],
};

// console.log("name of person is : ", person.name);
// console.log("age of person is : ", person.age);
// console.log("date of birthday is : ", person.dob);
// console.log("hobbies of person is : ", person.hobbies);
