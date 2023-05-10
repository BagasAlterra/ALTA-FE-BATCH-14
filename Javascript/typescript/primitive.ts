// ---- REDECLARE ----

// var strA: string = "Hello World";
// var strA: string = "Typescript";
// console.log(strA);

// let strA: string = "Hello, I'm Javascript";
// let strA: string = "Hello, I'm Typescript";
// console.log(strA);
// Error : Cannot redeclare block-scoped variable 'strA'

// const strA: string = "Hello, I'm Dynamically Language";
// const strA: string = "Hello, I'm Statically Language";
// console.log(strA);
// Error : Cannot redeclare block-scoped variable 'strA'

// ---- HOISTING ----

// numberA = 20;
// var numberA: number;
// console.log(numberA);

// numberA = 20;
// let numberA: number;
// console.log(numberA);
// Error : Block-scoped variable 'numberA' used before its declaration.

// numberA = 20
// const numberA: number
// console.log(numberA)
// Error : Block-scoped variable 'numberA' used before its declaration.
// Error : Cannot assign to 'numberA' because it is a constant.

// ---- BLOCK SCOPE ----

// var numberA: number = 15;
// if (true) {
//   var numberA: number = 20;
// }
// console.log(numberA);

// let numberB: number = 30;
// if (true) {
//   let numberB: number = 40;
// }
// console.log(numberB);

// const numberC: number = 45;
// if (true) {
//   const numberC: number = 50;
// }
// console.log(numberC);

// ---- BOOLEAN TYPE DATA ----
const boolA: boolean = true;
const boolB: boolean = false;

// -- untuk mencetak sebagai nilai string
// console.log(boolA.toString());
// console.log(typeof boolA.toString());
// console.log(boolB.toString());
// console.log(typeof boolB.toString());

// -- untuk mencetak sebagai nilai boolean
// console.log(boolA.valueOf());
// console.log(typeof boolA.valueOf());
// console.log(boolB.valueOf());
// console.log(typeof boolB.valueOf());

// ---- NUMBER TYPE DATA ----

// let numberX: number = 10;
// let numberY: number = 15;
// let sum = numberX + numberY;
// console.log(sum);

// let decimalX: number = 0.5;
// let decimalY: number = 0.7;
// let sum = decimalX + decimalY;
// console.log(sum);

// ---- ANY TYPE DATA ----
// --- any merupakan tipe data yang bisa diisi oleh berbagai macam tipe data lainnya (soundness)
// --- namun, jangan sering menggunakan tipe data ini karena membuat penggunaan typescript jadi tidak maksimal
// --- karena any mem-bypass atau menskip peraturan tipe data

// let randomVal : number
// randomVal = "alterra academy" // Error : Type 'string' is not assignable to type 'number'

// let randomVal: any;
// randomVal = "alterra academy";
// console.log(randomVal);

// randomVal = 2023;
// console.log(randomVal);

// randomVal = true;
// console.log(randomVal);

// randomVal = {
//   name: "John Doe",
//   age: 45,
// };
// console.log(randomVal);

// randomVal = [2, 3, 4, 5, 6, 7, 8, 9];
// console.log(randomVal);

// ---- NULL & UNDEFINED ----

// let randomValA;
// let randomValB = null;

// console.log(randomValA);
// console.log(randomValB);

// let conditionOne: boolean = randomValA == randomValB;
// let conditionTwo: boolean = randomValA === randomValB;
// let conditionThree: boolean = randomValA != randomValB;
// let conditionFour: boolean = randomValA !== randomValB;

// console.log(conditionOne);
// console.log(conditionTwo);
// console.log(conditionThree && conditionOne);
// console.log(conditionFour || conditionTwo);

// ---- ENUM DATA TYPE ----
// -- jika salah satu data di dalam enum nomornya diganti, maka nomor belakang akan menyesuaikan (auto generated)

enum WeekDay {
  monday,
  tuesday,
  wednesday,
  thursday,
  friday,
  saturday,
  sunday,
}

let dayX: WeekDay = WeekDay.monday; // untuk mendapatkan index dari enum
let dayY: string = WeekDay[0]; // untuk mendapatkan value dari enum

// console.log(dayX);
// console.log(dayY);

enum Color {
  red = 1,
  green,
  blue = 7,
  orange,
}

let colorX: Color = Color.blue;

// console.log(colorX);
// console.log(typeof Color);

enum Random {
  a = -1,
  b,
  c,
  d,
}

let randX: Random = Random.c;
let randY: string = Random[2];

// console.log(randX);
// console.log(randY);
