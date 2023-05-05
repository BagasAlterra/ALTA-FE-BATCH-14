// -- penamaan function harus menggunakan camel case

// --- FUNCTION

function sumNumber() {
  const numberA = 10;
  const numberB = 20;
  const sum = numberA + numberB;
  console.log(sum);
}

// --- cara memanggil dengan -> sumNumber();
// --- jumlah parameter tidak ada batasnya, tapi lebih baik hanya 2 sampe 3
// --- penulisan parameter di dalam function wajib berurutan
// --- misalkan namaFunction(a,b,c), maka dari itu pemanggilnya harus menyertakan parameter dengan urutan yang sesuai
// --- berarti pemanggilnya harus namaFunction(1,2,3), tidak boleh cuma namaFunction(1,2)

function sumNumberWithParams(numberA, numberB) {
  const sum = numberA + numberB;
  //   console.log(sum); // --> hanya mencetak angka saja
  return sum; // --> mengembalikan sekaligus mencetak nilai
}

// console.log(sumNumberWithParams(10, 10));

// --- IF

function checkTemperature(temp) {
  if (temp >= 37) {
    console.log("kamu sedang demam");
  }
  if (temp >= 30) {
    console.log("kamu masih normal");
  }
  if (temp <= 29) {
    console.log("kamu hipotermia");
  }
}

// checkTemperature(34);
// checkTemperature(29);

// --- IF ELSE
// --- jika persyaratan if pertama tidak dipenuhi, maka akan langsung terlempar ke block else

function checkNumber(number) {
  if (number % 2 === 0) {
    return "bilangan genap";
  } else {
    return "bilangan ganjil";
  }
}

// console.log(checkNumber(10));

// --- ELSE IF
// --- jika persyaratan if pertama tidak dipenuhi, maka akan langsung dilempar ke block else-if
// --- jika persyaratan else-if tidak dipenuhi, maka akan langsung dilempar ke block else

function checkHour(hour) {
  if (hour < 12) {
    return "Halo, Selamat Pagi!";
  } else if (hour < 18) {
    return "Halo, Selamat Sore!";
  } else {
    return "Halo, Selamat Malam!";
  }
}

// console.log(checkHour(17));
// console.log(checkHour(20));

// --- NESTED IF
// --- jika persyaratan if pertama tidak dipenuhi, maka akan langsung terlempar ke block else

let v1 = 400;
let v2 = 700;

function checkVNumber(numberA, numberB) {
  if (numberA === v1) {
    if (numberB === v2) {
      return "Value of v1 is 400 and v2 is 700";
    } else {
      return "Value numberB invalid";
    }
  } else {
    return "Value numberA invalid";
  }
}

// console.log(checkVNumber(300, v2));

// --- TERNARY OPERATOR
// --- tanda "?" itu berarti mewakilkan "if"
// --- tanda ":" itu berarti mewakilkan "else"

function ternaryCheckAge(age) {
  const canDrive = age > 17 ? "boleh menyetir" : "tidak boleh menyetir";
  return canDrive;
}

// console.log(ternaryCheckAge(17));
// console.log(ternaryCheckAge(22));

// --- TERNARY OPERATOR WITH ELSE IF

function ternaryCheckTemperature(temp) {
  const result =
    temp > 36
      ? "kamu masih demam"
      : `${temp > 32 && temp <= 36 ? "kamu normal" : "kamu hipotermia"}`;
  return result;
}

// console.log(ternaryCheckTemperature(30));

// --- SWITCH CASE

function checkTrafficLight(signal) {
  switch (signal) {
    case "red":
      console.log("berhenti");
      break;
    case "orange":
      console.log("bersiap-siap");
      break;
    case "green":
      console.log("silahkan jalan");
      break;
    default:
      console.log("signal tidak diketahui");
      break;
  }
}

function checkPlacement(number) {
  switch (number) {
    case 1:
      console.log("Selamat, kamu jadi juara pertama!");
      break;
    case 2:
      console.log("Selamat, kamu masih bisa menang!");
      break;
    case 3:
      console.log("Lumayan");
      break;
    default:
      console.log("Coba lagi ya");
      break;
  }
}

// checkTrafficLight("blue");
// checkTrafficLight("red");
// checkPlacement(4);
// checkPlacement(2);
