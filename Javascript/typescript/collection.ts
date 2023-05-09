// ---- ARRAY ----

let listRandom: number[] = [6, 7, 8, 9, 10]; // -> untuk data bertipe number
let listRandomStr: (number | string)[] = [6, 7, "alterra academy"]; // -> untuk data campuran (seperti number dan string)
let listRandomGeneric: Array<number> = [6, 7, 8, 9, 10]; // -> untuk data dengan menggunakan simbol generic
let listRandomGenericStr: Array<number | string> = [6, 7, "alterra academy"]; // -> untuk data campuran (seperti number dan string) menggunakan simbol generic

// console.log(listRandom);
// console.log(listRandomStr);
// console.log(listRandomGeneric);
// console.log(listRandomGenericStr);

// ---- TUPLE ----
// -- dapat memodifikasi tipe data di dalam array

let combinate: [number, string];
combinate = [7, "James Bond"];

// console.log(combinate[1].toUpperCase()); // method untuk auto capitalize pada sebuah string
// console.log(combinate[0]);

// ---- OBJECT ----
let personal = {
  firstName: "John",
  lastName: "Doe",
  id: 10,
  fullName() {
    return (
      this.firstName.toLowerCase() +
      " " +
      this.lastName.toLowerCase() +
      " " +
      this.id
    );
  },
};

// console.log(personal.fullName());

// ---- OBJECT as TYPE ----

class Fish {
  type = "shark";
  sound = "no";
}

class Reptil {
  type = "crocodile";
  sound = "no";
}

class Aves {
  type = "eagle";
  sound = "yes";
  swim() {
    console.log("cannot swim");
  }
}

let fish: Fish = new Fish(); // substitutes
let reptil: Reptil = new Reptil(); // substitutes
let aves: Aves = new Aves(); // substitutes

// console.log("type of fish : ", fish.type);
// console.log("type of reptil : ", reptil.type);
// console.log("type of aves : ", aves.type);

type behaviorType = {
  type: string;
};

type addressType = {
  city: string;
  country: string;
};

interface objType {
  name: string;
  age: number;
  job: string;
  isMarried: boolean;
  address: addressType;
  hobbies: string[];
}

const person_1: objType = {
  name: "John Doe",
  age: 40,
  job: "Senior Front-End Engineer",
  isMarried: true,
  address: {
    city: "Los Angeles",
    country: "California, US",
  },
  hobbies: ["Coding", "Reading a Book"],
};

interface personalTypes extends addressType {
  name: string;
}

const person_2: personalTypes[] = [
  {
    name: "John Doe",
    city: "Los Angeles",
    country: "US",
  },
  {
    name: "Budi",
    city: "Jakarta",
    country: "Indonesia",
  },
  {
    name: "Vijay",
    city: "New Delhi",
    country: "India",
  },
];

function collectPeople(peoples: Array<personalTypes>) {
  let result = peoples.forEach((peoples: personalTypes, index: number) => {
    console.log(peoples.city);
    console.log(index);
  });
  return result;
}

collectPeople(person_2);
