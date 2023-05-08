// ---- MERGE SORT ----

// -- bekerja dengan membagi array menjadi 2 (kiri dan kanan), lalu membandingkan nilai tiap index pada pecahan array, manakah yang lebih kecil
// -- sehingga terjadi perpindahan nilai diantara kedua bagian tersebut
// -- setelah dibandingkan, pecahan rray ini akan digabung/merge kembali menjadi sebuah array yang utuh

function divide(array) {
  if (array.length < 2) {
    return array;
  }
  let mid = Math.floor(array.length / 2); // mencari nilai tengah
  console.log("mid : ", mid);
  let one = array.slice(0, mid); // menduplikasi array dari index 0 sampai nilai tengah
  console.log("one : ", one);
  let two = array.slice(mid); // menduplikasi array dari tengah hingga ke akhir
  console.log("two : ", two);
  return sort(divide(one), divide(two));
}

function sort(one, two) {
  const sorted = []; // deklarasikan variabel penampung
  // lakukan perulangan ketika panjang variabel one dan two itu sama
  while (one.length && two.length) {
    // jika nilai one[0] lebih rendah atau sama dengan nilai two[0]
    if (one[0] <= two[0]) {
      // maka push variabel one yang sudah dihapus element pertamanya ke sorted
      sorted.push(one.shift());
      console.log("sorted ketika one[0] <= two[0] : ", sorted);
    } else {
      // maka push variabel two yang sudah dihapus element pertamanya ke sorted
      sorted.push(two.shift());
      console.log("sorted ketika one[0] >= two[0] : ", sorted);
    }
  }
  const result = [...sorted, ...one, ...two];
  return result;
}

const randomNumber = [22, 11, 56, 10, 23, 4, 2.75, 90, 51, 88, 44, 28, 56];
console.log(divide(randomNumber));

const arrayA = [7, 9, 10, 11, 12, 13];
const arrayB = [14, 18, 21];
const mergeArray = [...arrayA, ...arrayB];

console.log(mergeArray);
