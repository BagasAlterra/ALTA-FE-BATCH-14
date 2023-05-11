// --- DIVIDE AND CONQUER ALGORITHM ---
// -- bekerja dengan memecah masalah besar menjadi sub-masalah yang lebih kecil, kemudian diselesaikan secara rekursif
// -- lalu, menggabungkan solusi sub-masalah untuk memperoleh solusi masalah besar

// --- CONTOH 1 : Merge Sort ---

function merge(left: number[], right: number[]): number[] {
  const merged: number[] = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      merged.push(left[i]);
      console.log("masuk ke kiri : ", merged);
      i++;
    } else {
      merged.push(right[j]);
      console.log("masuk ke kanan : ", merged);
      j++;
    }
  }
  console.log(
    "setelah digabungkan : ",
    merged.concat(left.slice(i), right.slice(j))
  );
  return merged.concat(left.slice(i), right.slice(j));
}

function mergeSort(array: number[]): number[] {
  if (array.length <= 1) {
    return array;
  }

  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);

  console.log("nilai tengah : ", middle);
  console.log("array kiri : ", left);
  console.log("array kanan : ", right);

  return merge(mergeSort(left), mergeSort(right));
}

// const unsortedArray = [20, 5, 8, 1, 3, 11, 19, 35, 15];
// console.log(mergeSort(unsortedArray));

// --- CONTOH 2 : Quick Sort ---

function quickSort(array: Array<number>): Array<number> {
  if (array.length <= 1) {
    return array;
  }

  const pivot: number = array[0];
  const left: number[] = [];
  const right: number[] = [];

  console.log("cek pivot : ", pivot);

  for (let i = 1; i < array.length; i++) {
    console.log("looping : ", i);
    if (array[i] < pivot) {
      left.push(array[i]);
      console.log("jika index dari array kurang dari pivot : ", left);
    } else {
      right.push(array[i]);
      console.log("jika index dari array lebih dari pivot : ", right);
    }
  }
  return quickSort(left).concat(pivot, quickSort(right));
}

// const unsortedArray = [20, 5, 8, 1, 3, 11, 19, 35, 15];
// console.log(quickSort(unsortedArray));

// --- CONTOH 3 : Binary Search ---

function binarySearch(array: Array<number>, target: number): number {
  let left = 0;
  let right = array.length - 1;

  console.log("kanan : ", right);

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    console.log("nilai tengah : ", middle);
    if (array[middle] === target) {
      console.log("jika nilai tengah === target, maka : ", middle);
      return middle;
    } else if (array[middle] < target) {
      left = middle + 1;
      console.log("jika nilai tengah kurang dari nilai target : ", left);
    } else {
      right = middle - 1;
      console.log("jika nilai tengah lebih besar dari nilai target : ", right);
    }
  }
  return -1;
}

// const sortedArray = [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
// console.log(binarySearch(sortedArray, 24));
// console.log(binarySearch(sortedArray, 15));
// console.log(binarySearch(sortedArray, 36));
