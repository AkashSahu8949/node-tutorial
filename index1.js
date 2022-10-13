// Requiring the module
const assert = require('assert').strict;

// Function call
try {
	assert.doesNotThrow(
		() => {
		throw new TypeError('Wrong value');
		},
	);
} catch(error) {
	console.log("Error:", error)
}
