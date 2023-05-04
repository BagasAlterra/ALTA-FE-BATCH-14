let a, b, add, sub, mul, div, mod;

a = 10;
b = 20;

add = a + b;
sub = a - b;
mul = a * b;
div = a / b;
mod = a % b;

// console.log("hasil penjumlahan a + b adalah ", add);
// console.log("hasil pengurangan a - b adalah ", sub);
// console.log("hasil perkalian a * b adalah ", mul);
// console.log("hasil pembagian a / b adalah ", div);
// console.log("hasil sisa bagi a % b adalah ", mod);

// --- INCREMENT & DECREMENT
let numberA = 10;
let numberB = 10;

// console.log(++numberA);
// ++ numberA = 10 + 1
// console.log(--numberB);
// -- numberB = 10 - 1

// --- REASSIGNMENT, ==, ===

// = -> reassignment (mendeklarasikan nilai pada suatu variabel)
// == -> membandingkan antara kedua value nya saja
// === -> membandingkan antara kedua value sekaligus tipe datanya

const temp = 20;
const conditionOne = temp == "20";
const conditionTwo = temp === "20";
const conditionThree = temp != "20";
const conditionFour = temp !== "20";

// GERBANG LOGIKA AND (&&)

// false + false = false
// false + true = false
// true + false = false
// true + true = true

// GERBANG LOGIKA OR (||)

// false + false = false
// false + true = true
// true + false = true
// true + true = true

// console.log(conditionOne && conditionTwo); // false
// console.log(conditionTwo && conditionThree); // false
// console.log(conditionOne && conditionFour); // true

// console.log(conditionOne || conditionTwo); // true
// console.log(conditionTwo || conditionThree); // false
// console.log(conditionOne || conditionFour); // true

// SHORTHAND ARITHMETIC
let numberVar = 10;

numberVar += 10; // numberVar = numberVar + 10
numberVar -= 10; // numberVar = numberVar - 10
numberVar *= 10; // numberVar = numberVar * 10
numberVar /= 10; // numberVar = numberVar / 10
numberVar %= 10; // numberVar = numberVar % 10
