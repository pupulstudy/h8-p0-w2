// ======== no.1

const word = 'JavaScript ';
const second = 'is ';
const third = 'awesome ';
const fourth = 'and ';
const fifth = 'I ';
const sixth = 'love ';
const seventh = 'it! ';

console.log(word+second+third+fourth+fifth+sixth+seventh);

// ======== no.2

const word2 = 'wow JavaScript is so cool';
const exampleFirstWord2 = word2[0] + word2[1] + word2[2];
const secondWord2 = word2[4] + word2[5] + word2[6] + word2[7] + word2[8] + word2[9] + word2[10] + word2[11] + word2[12] + word2[13];
const thirdWord2 = word2[15] + word2[16];
const fourthWord2 = word2[18] + word2[19];
const fifthWord2 = word2[21] + word2[22] + word2[23] + word2[24];

console.log('First Word: ' + exampleFirstWord2);
console.log('Second Word: ' + secondWord2);
console.log('Third Word: ' + thirdWord2);
console.log('Fourth Word: ' + fourthWord2);
console.log('Fifth Word: ' + fifthWord2);

// ======== no.3

const word3 = 'wow Javascript is so cool';
const exampleFirstWord3 = word3.substring(0,3);
const secondWord3 = word3.substring(4, 14);
const thirdWord3 = word3.substring(15, 17);
const fourthWord3 = word3.substring(18,20);
const fifthWord3 = word3.substring(21, 25);

console.log('First Word : ' + exampleFirstWord3);
console.log('Second Word : ' + secondWord3);
console.log('Third Word : ' + thirdWord3);
console.log('Fourth Word : ' + fourthWord3);
console.log('Fifth Word : ' + fifthWord3);

// ======== no.4

const word4 = 'wow Javascript is so cool';
const exampleFirstWord4 = word4.substring(0,3);
const secondWord4 = word4.substring(4,14);
const thirdWord4 = word4.substring(15,17);
const fourthWord4 = word4.substring(18,20);
const fifthWord4 = word4.substring(21,25);

const firstWordLength = exampleFirstWord4.length;
const secondWordLength = secondWord4.length;
const thirdWordLength = thirdWord4.length;
const fourthWordLength = fourthWord4.length;
const fifthWordLength = fifthWord4.length;

console.log('First Word : ' + exampleFirstWord4 + ', with length : ' + firstWordLength);
console.log('Second Word : ' + secondWord4 + ', with length : ' + secondWordLength);
console.log('Third Word : ' + thirdWord4 + ', with length : ' + thirdWordLength);
console.log('Fourth Word : ' + fourthWord4 + ', with length : ' + fourthWordLength);
console.log('Fifth Word : ' + fifthWord4 + ', with length : ' + fifthWordLength);
