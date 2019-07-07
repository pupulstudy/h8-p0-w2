// ======== No.1
( _ => {
  console.log(`Halo Function!`);
})();

// ======== No.2
const num1 = 5;
const num2 = 6;

const calculateMultiply = (num1, num2) => num1 * num2;
console.log(calculateMultiply(num1, num2));

// ======== No.3
const name = `Agus`;
const age = 30;
const address = `Jln. Malioboro, Yogyakarta`;
const hobby = `gaming`;

const processSentence = (name, age, address, hobby) => `Nama saya ${name}, umur saya ${age} tahun, alamat saya di ${address}, saya punya hobby yaitu ${hobby}!`;
console.log(processSentence(name,age,address,hobby));
