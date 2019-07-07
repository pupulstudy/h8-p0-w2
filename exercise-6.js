// ======== No.1

let foo = 0;

console.log(`LOOPING PERTAMA`);
while (foo < 19) {
  foo += 2;
  console.log(`${foo} - I love coding`);
};

console.log(`LOOPING KEDUA`);
while (foo > 0) {
  console.log(`${foo} - I will become fullstack developer`);
  foo -= 2;
};

// ======== No.2
console.log(`LOOPING PERTAMA`);
for (let foo = 0; foo <= 20; foo++) {
  console.log(`${foo} - I love coding`);
};

console.log(`LOOPING KEDUA`);
for (let foo = 20; foo > 0; foo--) {
  console.log(`${foo} - I will become fullstack developer`);
};

// ======== No.3
console.log(`Angka Ganjil dan Genap`);

for (let foo = 1; foo <= 100; foo++) {
  if (foo % 2 !== 0) {
    console.log(`GANJIL`);
  } else {
    console.log(`GENAP`); 
  }
};

for (let foo = 1; foo <= 100; foo += 2) {
  if (foo % 3 === 0) {
    console.log(`${foo} KELIPATAN 3`);
  }
};

for (let foo = 1; foo <= 100; foo += 5) {
  if (foo % 6 === 0) {
    console.log(`${foo} KELIPATAN 6`);
  }
};

for (let foo = 1; foo <= 100; foo += 9) {
  if (foo % 10 === 0) {
    console.log(`${foo} KELIPATAN 10`);
  }
};
