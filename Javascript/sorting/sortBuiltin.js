function sortBuiltin(array) {
  const result = array.sort((a, b) => {
    // a : index awal
    // b : index terakhir
    // return a - b; // mengurutkan dari terkecil ke terbesar
    // return b - a; // mengurutkan dari terbesar ke terkeci;
  });
  return result;
}

const randomNumber = [22, 11, 56, 10, 23, 4, 2.75, 90, 51, 88, 44, 28, 56];
console.log(sortBuiltin(randomNumber));
