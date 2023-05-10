// ---- Example of Synchronous Javascript
// -- biasa disebut sebagai blocking

console.log("Hello guys");
console.log("Mari kita belajar Typescript");
console.log("Belajar Typescript itu mudah dan menyenangkan");

// ---- Example of Asynchronous Javascript
// -- biasa disebut sebagai non-blocking

console.log("Hello guys");
setTimeout(() => {
  console.log("Mari kita belajar Typescript");
}, 3000);
console.log("Belajar Typescript itu mudah dan menyenangkan");
