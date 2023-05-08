// ---- BUBBLE SORT ----

// --- menggunakan nested loop untuk membandingkan element pertama dan selanjutnya
// --- ketika element pertama lebih besar daripada element selanjutnya, maka akan dilakukan pertukaran nilai
// --- ketika element pertama lebih kecil daripada element selanjutnya, maka dilakukan pertukaran posisi element pertama
// --- kekurangan : algoritma ini tidak cocok untuk data yang relatif besar, dikarenakan processing time yang lama dan memaksa kita untuk cek satu per satu element yang ada

function sortBubble(arr) {
  let len = arr.length;
  let dupe = [...arr]; // bikin duplikasi array agar tidak memutasi/mempengaruhi array aslinya, bisa pakai slice() atau ...

  for (let i = 0; i < len; i++) {
    console.log("hasil i : ", i);
    for (let j = 0; j < len; j++) {
      console.log("hasil j : ", j);
      if (dupe[j] > dupe[j + 1]) {
        // ketika element pertama lebih besar dari element selanjutnya, maka dilakukan pertukaran nilai
        let varDupe = dupe[j]; // untuk menampung sementara hasil dari nilai dupe[j]
        dupe[j] = dupe[j + 1]; // tukar nilai dupe[j] dengan nilai setelah dupe[j]
        dupe[j + 1] = varDupe; // tukar nilai setelah dupe[j] dengan nilai yang sudah ditampung di varDupe
        console.log("hasil varDupe : ", varDupe);
      }
    }
  }
  return dupe;
}

const randomNumber = [22, 11, 56, 10, 23, 4, 90, 51, 88, 44, 28, 56];
console.log(sortBubble(randomNumber));
// [22, 11, 56, 10, 23, 4, 90, 51, 88, 44, 28, 56] --> 22 dicek, apakah lebih besar dari 11? jika iya, maka tukar
// [11, 22, 56, 10, 23, 4, 90, 51, 88, 44, 28, 56]; --> 22 dicek apakah lebih besar dari 56? jika tidak, maka pindahkan posisi element pertamanya
//  [11, 22, 56, 10, 23, 4, 90, 51, 88, 44, 28, 56] --> 56 dicek apakah lebih besar dari 10? jika iya, maka tukar
//  [11, 22, 10, 56, 23, 4, 90, 51, 88, 44, 28, 56] --> 56 dicek apakah lebih besar dari 23? jika iya, maka tukar
//  [11, 22, 10, 23, 56, 4, 90, 51, 88, 44, 28, 56] --> 56 dicek apakah lebih besar dari 4? jika iya, maka tukar
//  [11, 22, 10, 23, 4, 56, 90, 51, 88, 44, 28, 56] --> 56 dicek apakah lebih besar dari 90? jika tidak, maka pindahkan posisi element pertamanya
//  dan seterusnya ...
