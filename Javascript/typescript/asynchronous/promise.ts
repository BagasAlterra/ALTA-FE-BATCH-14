// ---- PROMISE ----
// -- sebuah object yang merepresentasikan sebuah kejadian/event yang bisa terpenuhi (fulfill)
// -- atau gagal (reject) yang berdasarkan pada operasi async dan bisa menghasilkan sebuah output

// -- Contoh 1

function promise() {
  return new Promise((resolve, reject) => {
    let condition = true;
    // jika condiiton diberi true, maka akan masuk resolve dan ditangkap then
    // jika condition diberi false, maka akan masuk reject dan ditangkap error
    // finally akan tetap dikerjakan
    setTimeout(() => {
      if (condition === true) {
        resolve("Task completed successfully");
      } else {
        reject("Task not completely yet!");
      }
    }, 3000);
  });
}

// promise()
//   .then((response) => {
//     console.log("if success, will response : ", response);
//   })
//   .catch((error) => {
//     console.log("if failure, will rejected by : ", error);
//   })
//   .finally(() => {
//     console.log("Proccess Done");
//   });

// -- Contoh 2

interface promiseType {
  data: string | null;
  message: string;
}

function bentengTakeshi() {
  return new Promise<promiseType>((resolve, reject) => {
    console.log("--- BENTENG TAKESHI DIMULAI ! ---");
    console.log("Doakan aku ya, manis!");
    let score = Math.floor(Math.random() * 50);
    console.log("Kamu dapat skor : ", score);
    console.log("Perlombaan dimulai ....");
    setTimeout(() => {
      if (score > 35) {
        if (score > 40) {
          resolve({
            data: "Selamat",
            message: "Hoki banget sih, kamu!",
          });
        } else {
          resolve({
            data: "Selamat",
            message: "Kamu berhasil menaklukkan benteng takeshi",
          });
        }
      } else {
        reject({
          data: "Wah, Sayang sekali!",
          message: "Kamu belum berhasil, jangan menyerah",
        });
      }
    }, 3000);
  });
}

// bentengTakeshi()
//   .then((response) => {
//     console.log("Hasil jika berhasil : ", response);
//   })
//   .catch((error) => {
//     console.log("Hasil jika gagal : ", error);
//   })
//   .finally(() => {
//     console.log("Permainan sudah selesai!");
//   });
