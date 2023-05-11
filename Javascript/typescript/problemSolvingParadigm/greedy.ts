// ---- GREEDY ALGORITHM ----
// -- greedy bekerja dengan cara membuat segala kemungkinan, dan memilih kemungkinan yang paling optimal untuk menyelesaikan suatu problem

function findMinimumCoins(coins: number[], targetValue: number): number[] {
  const sortedCoins = coins.sort((a, b) => b - a);
  const result: number[] = [];
  let remainingValue = targetValue;

  for (let coin of sortedCoins) {
    console.log("coin yang sudah disortir : ", sortedCoins);
    console.log("jumlah coin : ", coin);
    while (remainingValue >= coin) {
      result.push(coin);
      remainingValue = remainingValue - coin;
      console.log("hasil kemungkinan : ", result);
      console.log("nilai sekarang : ", remainingValue);
    }
  }
  return result;
}

const coins = [1, 10, 15, 25];
const targetValue = 67;

// console.log(findMinimumCoins(coins, targetValue));
