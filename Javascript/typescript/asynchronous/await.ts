// ---- AWAIT ----
// -- proses yang dijalankan untuk menunda jalannya asynchronous hingga proses dari await tersebut bisa dieksekusi

interface promiseType {
  data: string | null;
  message: string;
}

function undianBerhadiah() {
  return new Promise<promiseType>((resolve, reject) => {
    console.log(" ---- UNDIAN DIMULAI ---- ");
    console.log("* mengambil nomor undian *");
    let number = Math.floor(Math.random() * 30);
    console.log("wah, aku dapat nomor ", number);
    setTimeout(() => {
      if (number >= 25) {
        resolve({
          data: "Selamat",
          message: "Kamu berhasil mendapatkan grand prize!",
        });
      } else if (number >= 10 && number <= 24) {
        resolve({
          data: "Selamat",
          message: "Kamu mendapatkan hadiah hiburan",
        });
      } else {
        reject({
          data: "Sayang, sekali",
          message: "Coba lagi dilain waktu ya!",
        });
      }
    }, 3000);
  });
}

async function playingUndianBerhadiah() {
  await undianBerhadiah()
    .then((response) => {
      const message = response.message;
      console.log(message);
    })
    .catch((error) => {
      const message = error.message;
      console.log(message);
    })
    .finally(() => {
      console.log("Undian Berhadiah sudah Selesai!");
    });
}

playingUndianBerhadiah();
