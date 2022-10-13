console.clear()
const assert = require('assert');

let x = 5;
let y = 5;

try {

	// Checking condition
	assert(x == y);
    console.log("equal")
}
catch {

	// Error output
	console.log(
		`${x} is not equal to ${y}`);
}
