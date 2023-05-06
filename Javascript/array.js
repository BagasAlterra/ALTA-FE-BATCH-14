// ---- ARRAY ----

// bentuk array -> [ ]

// --- CARA MENGAKSES ARRAY
let deviceType = ["Laptop", "Handphone", "Headset", "Tablet"];
let yearProduction = [2019, 2022, 2021, 2023];

// console.log(deviceType[0]);
// console.log(deviceType[3]);
// console.log(yearProduction[1]);
// console.log(yearProduction[0]);

// --- MENGGANTIKAN ELEMENT
deviceType[0] = "Drone"; // menggantikan "Laptop" jadi "Drone"
yearProduction[1] = 2020; // menggantikan "2022" jadi "2020"

// console.log(deviceType);
// console.log(yearProduction);

// --- MENAMBAHKAN ELEMENT DARI BELAKANG ARRAY
let fruits = ["Mango", "Banana", "Pineapple", "Apple"];

// console.log("before added with push : ", fruits);
fruits.push("Blueberry");
// console.log("after added with push : ", fruits);

// --- MENGHAPUS ELEMET DARI BELAKANG ARRAY

// console.log("before deleted with pop : ", fruits);
fruits.pop();
// console.log("after deleted with pop : ", fruits);

// --- MENAMBAHKAN ELEMENT DARI DEPAN ARRAY

// console.log("before added with unshift : ", fruits);
fruits.unshift("Strawberry");
// console.log("after added with unshift : ", fruits);

// --- MENGHAPUS ELEMENT DARI DEPAN ARRAY

// console.log("before deleted with shift : ", fruits);
fruits.shift();
// console.log("after deleted with shift : ", fruits);

// --- CLONE ARRAY
let foods = ["Bakso", "Soto", "Sate", "Seblak", "Rawon"];
let copyOfFoods = foods.slice(); // copy menggunakan method slice
let spreadOfFoods = [...foods]; // copy menggunakan spread operator

let sliceOfFoods = foods.slice(0, 3);

// console.log(copyOfFoods);
// console.log(spreadOfFoods);
// console.log(sliceOfFoods);

// --- LOOPING ARRAY
let gardens = ["Flowers", "Vegetables", "Decoration Plant", "Fruits"];

for (let i = 0; i < gardens.length; i++) {
  //   console.log(gardens[i]);
}

for (let key of gardens) {
  //   console.log(key);
}

for (let key in gardens) {
  //   console.log(gardens[key]);
}

// --- looping with map method
let members = [
  {
    id: 1,
    name: "John Doe",
    age: 20,
  },
  {
    id: 2,
    name: "Anne Sullivan",
    age: 21,
  },
  {
    id: 3,
    name: "Thomas Muller",
    age: 22,
  },
];

members.map((item, index) => {
  //   console.log(item.name);
  //   console.log(item.id);
  //   console.log(item.age);
  console.log(index);
});
