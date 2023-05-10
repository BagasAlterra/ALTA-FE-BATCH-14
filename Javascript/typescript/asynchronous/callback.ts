// ---- CALLBACK ----
// -- sebuah function yang dipanggil setelah melakukan sebuah proses
// -- dalam kata lain, dipanggil setelah sebuah proses berjalan

// -- Contoh 1

function buyer(message: string, price: number): void {
  console.log("Pesan martabak dong? " + message + " : " + price);
}

function seller(callback: any): void {
  console.log("Pesan martabak lagi dong? ... (wait sedang dimasak ya!");
  setTimeout(() => {
    callback("Ok, martabak sudah selesai kaka, harganya segini ya", 25000);
    // buyer(message, price)
  }, 3000);
}

// seller(buyer);

// 1. seller itu dikerjakan, seller punya parameter buyer
// 2. buyer itu punya parameter message dan price
// 3. selama seller mengerjakan timeout, itu berarti buyer dipanggil

// -- Contoh 2

function doTask(callback: () => void) {
  console.log("Apakah tugasmu sudah selesai ?");
  callback();
  console.log("Apakah sudah beres?");
}

function notify() {
  setTimeout(() => {
    console.log("Kerjaan saya sudah selesai");
  }, 3000);
}

// doTask(notify);

// -- Contoh 3

function driver(callback: (message: string) => void): void {
  console.log("Titik sudah sesuai maps, ya kak?");
  console.log("Pesananan sudah sesuai aplikasi, ya kak");
  callback("Pesanan sudah sesuai aplikasi, ya kak?");
}

function user(message: string): void {
  if (message === "Pesanan sudah sesuai aplikasi, ya kak?") {
    console.log("Pesanan sudah sesuai, kak");
  }
  setTimeout(() => {
    console.log("Sudah, pak. Terima kasih ya");
  }, 3000);
}

// driver(user);
