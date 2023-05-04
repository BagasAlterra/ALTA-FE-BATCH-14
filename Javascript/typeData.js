// console.log("Hello World");

// CAMEL CASE : fullName, secondName --> penamaan variabel
// PASCAL CASE : FullName, SecondName --> penamaan fungsi

// ---- COMPARE VAR, LET, & CONST ----

// -------------------- Var

// Problem #1 : Reassign
// var alphabet = "abcd";
// var alphabet = "efgh";
// // console.log(alphabet);

// // Problem #2 : Hoisting
// number = 10;
// var number;
// // console.log(number);

// // Problem #3 : Scope
// var x = 2;
// if (true) {
//   var x = 3;
// }
// console.log(x);

// ------------------- Let

// Problem #1 : Reassign
// let fruit = "durian";
// let fruit = "stroberi";
// console.log(fruit); // --> Error : Identifier 'fruit' has already been declared

// Problem #2 : Hoisting
// y = 10;
// let y;
// console.log(y); // --> Error :  Cannot access 'y' before initialization

// Problem #3 : Scope
// let a = 2;
// if (true) {
//   let a = 3;
// }
// console.log(a);

// ------------------- Const

// Problem #1 : Reassign
// const key = 123;
// key = 456;
// console.log(key); // --> Error : Assignment to constant variable.

// Problem #2 : Hoisting
//  numVar = 789
//  const numVar
//  console.log(numVar) // --> Error : Missing initializer in const declaration

// ---- TIPE DATA PRIMITVE ----
let strVar = "Hello World"; // string
let intVar = 12345678; // number, int
let undefined; // undefined
let boolVar = false; // boolean
let nullVar = null; // null

// -- STRING
let firstName = "John";
let secondName = "Doe";
let idCard = "987654";

// penggabungan dua string berbeda
let fullName = firstName + secondName;
let fullNameWithSpace = firstName + " " + secondName;
// console.log("full name without space : ", fullName);
// console.log("full name with space : ", fullNameWithSpace);

// menghitung panjang sebuah kalimat
let nameGenerator = "lorem ipsum";
// console.log("length of nameGenerator version 1 : ", nameGenerator.length);
// console.log("length of nameGenerator version 2 : ", "lorem ipsum".length);

// memeriksa tipe data pada sebuah variabel
// console.log("type data of firstName is ", typeof firstName);
// console.log("type data of secondName is ", typeof secondName);
// console.log("type data of idCard is ", typeof idCard);

// -- NUMBER
let sum = 6 + 5;
let difference = 10 - 4;
let multiple = 2 * 8;
let divide = 10 / 2;
let modulo = 8 % 2;

// console.log("total of sum : ", sum);
// console.log("total of difference : ", difference);
// console.log("total of multiple : ", multiple);
// console.log("total of divide : ", divide);
// console.log("total of modulo : ", modulo);

// memeriksa tipe data pada sebuah variabel

// console.log("type data of sum is ", typeof sum);
// console.log("type data of difference is ", typeof difference);
// console.log("type data of multiple is ", typeof multiple);

// -- BOOLEAN
let condition_1 = true;
let condition_2 = false;
// console.log("kondisi 1 : ", condition_1);
// console.log("kondisi 2 : ", condition_2);

// let compare = 5 > 3;
// let compare = 10 < 20;
// let compare = 30 < 24;
// console.log("result : ", compare);

// -- NULL / UNDEFINED
let undefinedVar;
let nullNum = null;
// console.log("result of undefinedVar : ", undefinedVar);
// console.log("result of nullVar : ", nullNum);

// Perbedaan Null dan Undefined
// Undefined : kondisi yang terjadi secara tidak sengaja yang menyebabkan kosongnya sebuah variabel
// Null : kondisi yang terjadi secara sengaja / sudah dideklarasikan dari awal yang memang nilai dari variabel tersebut adalah kosong atau null
