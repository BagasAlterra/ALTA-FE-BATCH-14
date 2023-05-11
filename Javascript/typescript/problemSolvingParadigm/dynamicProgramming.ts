// --- FIBO DP ---

function fiboDpMantap(num: number): number {
  if (num <= 1) {
    return num;
  }

  let fiboIMinSatu = 1;
  let fiboIMinDua = 0;
  let fiboI = -1;

  for (let i = 2; i <= num; i++) {
    console.log("looping : ", i);
    fiboI = fiboIMinSatu + fiboIMinDua;
    console.log("fibo I : ", fiboI);
    fiboIMinDua = fiboIMinSatu;
    console.log("fibo I Min Dua : ", fiboIMinDua);
    fiboIMinSatu = fiboI;
    console.log("fibo I Min Satu : ", fiboIMinSatu);
  }

  return fiboI;
}

// 0 1 1 2 3 5 8 13
// console.log(fiboDpMantap(7));

// --- FIBO BOTTOM UP ---
function fiboBottomUp(num: number): number {
  let memo: Array<number> = [];

  for (let i = 0; i <= num; i++) {
    console.log("looping : ", i);
    if (i <= 1) {
      memo[i] = i;
      console.log("jika i kurang dari atau sama dengan 1 : ", memo[i]);
    } else {
      memo[i] = memo[i - 1] + memo[i - 2];
      console.log("jika i lebih dari atau sama dengan 1 : ", memo[i]);
    }
  }
  return memo[num];
}

// 0 1 1 2 3 5 8 13
// console.log(fiboBottomUp(7));

// --- FIBO TOP DOWN ---
function fiboTopDown(num: number): number {
  let count: number = 0;
  let memo: Array<number> = [];

  count++;
  console.log("hitung : ", count);
  if (memo[num]) {
    console.log("jika memo adalah index dari num : ", memo[num]);
    return memo[num];
  }
  if (num <= 1) {
    memo[num] = num;
    console.log("jika num kurang dari 1 : ", memo[num]);
  } else {
    memo[num] = fiboTopDown(num - 1) + fiboTopDown(num - 2);
    console.log("jika num lebih dari atau sama dengan 1 : ", memo[num]);
  }
  return memo[num];
}

console.log(fiboTopDown(5));
