// ---- FACTORIAL RECURSIVE ----

function searchFactorial(number) {
  if (number == 1) {
    return number;
  } else {
    return number * searchFactorial(number - 1);
  }
}

// !6 = 6 * 5 * 4 * 3 * 2 * 1
// console.log(searchFactorial(6));
// !4 = 4 * 3 * 2 * 1
// console.log(searchFactorial(4));

function searchExponent(base, expo) {
  if (expo == 0) {
    return 1;
  } else {
    return base * searchExponent(base, expo - 1);
  }
}

// 3^3 = (3*3)+(3*3)+(3*3)
// console.log(searchExponent(3, 3));
// 8^2 = (8*8)
// console.log(searchExponent(8, 2));
