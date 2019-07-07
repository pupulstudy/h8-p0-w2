const xo = (foo) => {
	let xFoo = 0;
	let oFoo = 0;
	for(let j = 0; j < foo.length; j++) {
		foo.charAt(j) === 'x' ? xFoo++ : oFoo++;
	}
	return (xFoo === oFoo ? true : false);
};

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true
