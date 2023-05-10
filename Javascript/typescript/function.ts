function checkAge(age: number): string {
  if (age < 17) {
    return "You're too young";
  } else if (age <= 17 && age >= 21) {
    return "Middle age";
  } else {
    return "Unknown";
  }
}

// console.log(checkAge(18));

// name, age -> argumen yang wajib diisi ketika function dipanggil
// address? -> argumen yang opsional diisi (tidak mempengaruhi pemanggilan function)
function greetingSelf(name: string, age: number, address?: string): string {
  if (address != null) {
    return `My name is ${name}, I'm ${age} years old and address ${address}`;
  } else {
    return `My name is ${name}, I'm ${age} years old`;
  }
}

// console.log(greetingSelf("John Doe", 30));
// console.log(greetingSelf("John Doe", 30, "Jakarta"));

// --- LAMBDA FUNCTION ---

const sumOfNumber = (x: number, y: number) => {
  return x + y;
};

// console.log(sumOfNumber(10, 5));
// console.log(sumOfNumber(7, 8));

// --- VOID ---
function warnUser(): string | void {
  console.log("This is my warning message");
  return "This is my warning message";
}

function gachaNumber(input: number): string | void {
  if (input > 5) {
    return "number more than 5";
  } else {
    return warnUser();
  }
}

console.log(gachaNumber(7));
// console.log(gachaNumber(4));

// --- ANONYMOUS FUNCTION ---
const message = function (): string {
  return "lorem ipsum, dolor sit amet";
};

// bentuk lain dari lambda function
// const message = (paramsA: tipe data, paramsB: tipe data) => {}

// console.log(message());
