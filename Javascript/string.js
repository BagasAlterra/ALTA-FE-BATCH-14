// ---- STRING ----

let strVar = "lorem ipsum dolor sit amet";
let time = 14.0;
let accessFirst = strVar[0]; // mengakses index ke 0 dari sebuah string
let accessSecond = strVar[6]; // mengakses index ke 6 dari sebuah string

// console.log("word of : ", accessFirst);
// console.log("word of : ", accessSecond);

// mengakses number/int ke dalam sebuah string menggunakan Template Literal
// console.log(`sekarang pukul ${time}`);

let firstThree = strVar.substring(0, 3);
// menghilangkan tiga karakter dari depan
let restOfString1 = strVar.substring(3);
// lorem ipsum dolor sit amet -> yang dipptong kata "lor"
let restOfString2 = strVar.substring(3, 9);
// lorem ipsum dolor sit amet -> yang dipotong kata "lor" dan "um"
let restOfString3 = strVar.substring(3, strVar.length);
// lorem ipsum dolor sit amet -> yang dipotong kata "lor" aja, karena posisi end nya ada di 25

// console.log("first three characters : ", firstThree);
// console.log("restOfString1 : ", restOfString1);
// console.log("restOfString2 : ", restOfString2);
// console.log("restOfString3 : ", restOfString3);

// --- PARSE TO NUMBER
let title = "JamesBond007";
let lastThree = title.substring(9, 12);

let parsedNumber = parseInt(lastThree);

// console.log("data type before parsed : ", typeof lastThree);
// console.log("data type after parsed : ", typeof parsedNumber);

let numVar = 5.47;

// parseInt untuk menghilangkan koma dan membulatkan ke decimal terendah
// parseFloat untuk mempertahankan koma di dalam sebuah number

// console.log(parseInt(numVar));
// console.log(parseFloat(numVar));

// --- PARSE TO STRING
let randomNum = 975990;
let convertToString = randomNum.toString();

console.log("data type before parsed : ", typeof randomNum);
console.log("data type after parsed : ", typeof convertToString);
