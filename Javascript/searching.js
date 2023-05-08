// --- BINARY SEARCH ---

// -- menggunakan array yang sudah tersortir secara ascending (dari element terkecil ke besar)
// -- pencarian dimulai dari nilai tengah
// -- jika, element tengah itu lebih kecil dari target, maka geser ke kanan
// -- jika, element tengah itu lebih besar dari target, maka geser ke kiri
// -- return index/posisi dari target ketika ditemukan
// -- return -1 jika target tidak ditemukan

function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);
    if (arr[middle] === target) {
      console.log("middle : ", middle);
      return middle; // return jika nilai tengah yang ditemukan adalah target
    } else if (arr[middle] < target) {
      start = middle + 1; // lanjutkan pencarian dan geser element tengah ke kanan
      console.log("start : ", start);
    } else {
      end = middle - 1; // lanjutkan pencarian dan geser element tengah ke kiri
      console.log("end : ", end);
    }
  }
  return -1;
}

// const arr = [8, 10, 14, 22, 30, 45, 50];
// console.log("target was founded on index : ", binarySearch(arr, 14));

// --- LINEAR SEARCH ---

// --- menggunakan konsep looping atau perulangan yang mana mencari mulai dari element pertama sampai target ditemukan atau sampai element terakhir
// --- return index/posisinya jika target ditemukan
// --- return -1 jika target tidak ditemukan

function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      console.log("found target on index : ", i);
      return i;
    }
  }
  return -1;
}

// const randomArr = [9, 3, 11, 30, 24, 28];
// console.log(linearSearch(randomArr, 23));

// --- BUILT IN SEARCH ---
function builtInSearch(arr, target) {
  const result = arr.indexOf(target);
  return result;
}

const randomNumber = [11, 45, 80, 10, 22, 47, 65];
console.log(builtInSearch(randomNumber, 45));
