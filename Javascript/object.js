// ---- OBJECT ----

// --- MENGAKSES SEBUAH KEY DI DALAM OBJECT
let car = {
  type: "sedan", // "type" adalah sebuah key yang menyimpan value "sedan"
  color: "blue", // "color" adalah sebuah key yang menyimpan value "blue"
  year: 2023, // "year" adalah sebuah key yang menyimpan value 2023
};

// console.log("type of car is : ", car.type);
// console.log("color of car is : ", car.color);
// console.log("year of car is : ", car.year);

// --- MENAMBAHKAN SEBUAH KEY DI DALAM OBJECT
let user = {
  name: "John Doe",
  favoriteProgramming: "Javascript",
  workingExperience: 4,
};

// console.log("person before added ", user);
user["address"] = "Orchard Road"; // menambahkan key beserta value di dalam object user
// console.log("person after added ", user);

// --- UPDATE VALUE DI DALAM OBJECT
let device = {
  type: "tablet",
  name: "iPad Air",
  year: 2020,
};

// console.log("device before updated ", device);
device["name"] = "iPad Pro"; // memperbarui value di dalam object device
// console.log("device after updated ", device);

// --- HAPUS VALUE DI DALAM OBJECT
let fruit = {
  name: "banana",
  color: "yellow",
  price: 10000,
};

// console.log("fruit before deleted ", fruit);
delete fruit.price; // menghapus value di dalam object fruit
// console.log("fruit after deleted ", fruit);

// --- PERIKSA APAKAH SUATU KEY ADA DI DALAM OBJECT ATAU TIDAK
let champions = {
  platinum: 1,
  gold: 2,
  silver: 3,
};

let propertyNotPresent = champions["emerald"]; // memeriksa apakah sebuah key ada di dalam object champions
// console.log("property not present is : ", propertyNotPresent);

// --- PERIKSA TIPE DATA
let motorcycle = {
  type: "scooter",
  brand: "Honda",
  name: "PCX",
  year: 2021,
};

let checkYearData = typeof motorcycle.year; // memeriksa tipe data year
let checkBrandData = typeof motorcycle.brand; // memeriksa tipe data brand
// console.log("data type of year is : ", checkYearData);
// console.log("data type of brand is : ", checkBrandData);

// --- NESTED OBJECT
let person = {
  name: "John Doe",
  title: "Teacher",
  address: {
    street: "Orchard Road, Singapore",
    city: "Singapore",
    zip: 18909,
  },
  hobbies: ["Playing a basketball", "Reading a book", "Feeding pet"],
};

// --- Mengakses Nested Object

let accessCity = person.address.city; // mengakses value object di dalam nested object
let accessHobby = person.hobbies[2]; // mengakses value array di dalam nested object
// console.log("result of city is : ", accessCity);
// console.log("result of hobby is : ", accessHobby);

// --- Menambahkan Nested Object

// console.log("before added language : ", person);
person.address["language"] = "EN"; // menambahkan value "EN" di dalam key "language" pada address
// console.log("after added langauge : ", person);

// console.log("before added Fishing : ", person);
person.hobbies.push("Fishing"); // menambahkan value "Fishing" dari belakang
// console.log("after added Fishing : ", person);

// console.log("before added Programming : ", person);
person.hobbies.unshift("Programming"); // menambahkan value "Programming" dari depan
// console.log("after added Programming : ", person);

// --- Mengupdate Nested Object

person.address["zip"] = 1237; // mengupdate value zip di dalam nested object
person.hobbies[0] = "Networking"; // menambahkan value array di dalam nested object
// console.log("after updated zip : ", person);
// console.log("after updated hobbies : ", person);

// --- Menghapus Nested Object

delete person.address.zip; // menghapus zip
delete person.hobbies[0]; // menghapus hobby index ke 0
// console.log("after deleted person : ", person);

// ---- LOOPING OBJECT ----
let animal = {
  name: "crocodile",
  color: "green",
  age: 3,
};

// for (let key in animal) {
//   console.log("name of key : ", key);
//   console.log("name of value : ", animal[key]);
// }

// ---- CLONING OBJECT ----
let laptop = {
  merk: "Apple",
  name: "Macbook Pro",
  year: 2019,
};

let dupe1 = Object.assign({}, laptop); // copy menggunakan object assign
let dupe2 = { ...laptop }; // copy menggunakan spread operator
let dupe3 = JSON.parse(JSON.stringify(laptop)); // copy menggunakan JSON method (efektif untuk melakukan deep copy sekaligus convert to string)

// console.log("dupe 1 ", dupe1);
// console.log("dupe 2 ", dupe2);
// console.log("dupe 3 ", dupe3);

// CASE : membuktikan bahwa clone object tidak mempengaruhi object aslinya

let originObject = laptop;
let dupeObject = { ...originObject };

originObject["color"] = "silver";
dupeObject["color"] = "silver";

// console.log(originObject);
// console.log(dupeObject);
