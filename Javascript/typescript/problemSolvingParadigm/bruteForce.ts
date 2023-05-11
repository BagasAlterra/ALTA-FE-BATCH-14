// --- BRUTE FORCE ---
// -- algoritma yang bekerja dengan mencoba berbagai macam kemungkinan/probabilitas dalam menyelesaikan suatu problem

// -- CONTOH 1 --

function isPrime(num: number): boolean {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function bruteForcePrimes(max: number): Array<number> {
  const primes: Array<number> = [];
  for (let i = 2; i <= max; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }
  return primes;
}

// console.log(bruteForcePrimes(20));

// -- CONTOH 2 --

function bruteForceDuplicates(arr: Array<string>): Array<string> {
  const duplicates: Array<string> = [];

  for (let i = 0; i < arr.length; i++) {
    console.log("Looping pertama : ", i);
    for (let j = i + 1; j < arr.length; j++) {
      console.log("Looping kedua : ", j);
      if (arr[i] === arr[j] && !duplicates.includes(arr[i])) {
        duplicates.push(arr[i]);
        console.log(
          "Hasil penemuan duplikasi element pada array : ",
          duplicates
        );
      }
    }
  }
  return duplicates;
}

const randomFruits = [
  "apple",
  "apple",
  "mango",
  "pineapple",
  "durian",
  "orange",
  "orange",
  "strawberry",
];
console.log(bruteForceDuplicates(randomFruits));
