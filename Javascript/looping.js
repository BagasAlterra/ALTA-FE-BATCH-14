// --- Jenis jenis looping di javascript :
// 1. for loop
// 2. while loop
// 3. for in
// 4. for of
// 5. forEach
// 6. map -> akan sering digunakan di FE

// For Loop : digunakan ketika kondisi awal, iterasi sudah jelas -> looping berdasarkan kondisi awal, iterasi, dan increment/decrement
// While Loop : digunakan ketika kondisi awal, iterasi belum jelas -> looping berdasarkan kondisi saja

// ------- FOR LOOP -------

// -- Kerangka For Loop
// for( init; condition; post){

// }

// --- SINGLE LOOP
function forLoopIncrement(number) {
  for (let i = 0; i <= number; i++) {
    // console.log("result of increment : ", i);
  }
}

function forLoopDecrement(number) {
  for (let i = 0; i >= number; i--) {
    console.log("result of decrement : ", i);
  }
}

function checkGanjilGenap(number) {
  for (let i = 0; i <= number; i++) {
    if (i % 2 === 0) {
      console.log(i + " adalah Bilangan Genap");
    } else {
      console.log(i + " adalah Bilangan Ganjil");
    }
  }
}

// forLoopIncrement(10);
// forLoopDecrement(-5);
// checkGanjilGenap(10);
// checkGanjilGenap(30);

// --- NESTED FOR LOOP
// --- cara kerja nested for loop berurutan
// --- mulai dari for ke 1, for ke 2, dst.
// --- for ke 2 dipengaruhi dari for sebelumnya, for ke 3 dipengaruhi dari for ke 2, dst.

function nestedForLoop(number) {
  for (let i = 0; i < number; i++) {
    console.log("Main looping : ", i);
    for (let j = 0; j < number; j++) {
      console.log("Sub looping : ", j);
    }
  }
}

// nestedForLoop(5);

// ------- WHILE LOOP -------
// --- cara kerja while loop itu berdasarkan kondisinya

function whileLoop(end, start) {
  while (start <= end) {
    console.log("start", start);
    start++;
  }
}

// whileLoop(20, 5);

// --- NESTED WHILE LOOP

function nestedWhileLoop(number) {
  let i = 0;
  while (i < number) {
    console.log("Main Looping : ", i);
    let j = 0;
    while (j < number) {
      console.log("Sub Looping : ", j);
      j++;
    }
    i++;
  }
}

// nestedWhileLoop(5);

// ------- DO WHILE LOOP -------

function doWhileLoop(number) {
  let i = 0;
  do {
    console.log(`cetak urutan nomor ke ${i}`);
    i++;
  } while (i < number);
}

// doWhileLoop(10);

// --- NESTED DO WHILE
// --- cara kerja nested do while loop berurutan
// --- mulai dari do ke 1, do ke 2, dst.
// --- do ke 2, dipengaruhi dari do sebelumnya, do ke 3 dipengaruhi dari do sebelumnya, dst.

function nestedDoWhileLoop(number) {
  let i = 0;
  do {
    console.log("Main Looping : ", i);
    let j = 0;
    do {
      console.log("Sub Looping : ", j);
      j++;
    } while (j < number);
    i++;
  } while (i < number);
}

// nestedDoWhileLoop(5);

// ------- CONTINUE & BREAK -------
function forContinueBreak(number) {
  for (let i = 0; i < number; i++) {
    if (i == 1) {
      continue; // -- minta tolong program untuk melanjutkan iterasi/perulangan berikutnya tanpa perlu memproses perintah/code selanjutnya
    }
    if (i > 5) {
      break; // -- minta tolong program untuk menghentikan proses iterasi/perulangan, fungsi ini mirip sama return
    }
    console.log(i);
  }
  console.log("stop looping");
}

// forContinueBreak(10);

function whileContinueBreak(start, end) {
  while (start < end) {
    start++;
    if (start == 2) {
      continue;
    }
    if (start > 7) {
      break;
    }
    console.log("start ", start);
  }
  console.log("stop looping");
}

whileContinueBreak(0, 25);
