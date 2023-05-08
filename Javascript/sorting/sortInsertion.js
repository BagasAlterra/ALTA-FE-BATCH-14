// ---- INSERTION SORT ----

// --- bekerja dengan konsep pensortiran pada saat memainkan sebuah kartu
// --- array akan dibagi menjadi 2, yang tersortir dan belum tersortir

function sortInsertion(arr) {
  let len = arr.length;

  for (let i = 0; i < len; i++) {
    let min = i; // mendeklarasikan variabel yang akan digunakan untuk menampung nilai paling kecil
    console.log("nilai min : ", i);
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[min]) {
        // jika nilai array[j] lebih kecil dari array[min]
        min = j; // maka, ubah nilai min dengan nilai j
        console.log(
          "nilai min setelah pengecekan jika arr[j] < arr[min] : ",
          min
        );
      }
    }
    let temp = arr[i]; // untuk menampung nilai array[i]
    console.log("temp : ", temp);
    arr[i] = arr[min]; // tukar nilai array[i] dengan nilai yang ada di array[min]
    console.log("arr[i] : ", arr[i]);
    arr[min] = temp; // tukar nilai array[min] dengan nilai yang ada di temp
    console.log("arr[min] : ", arr[min]);
  }
  return arr;
}

const randomNumber = [22, 11, 56, 10, 23, 4, 2.75, 90, 51, 88, 44, 28, 56];
console.log(sortInsertion(randomNumber));
