const assertArraysEqual = require("../assertArraysEqual");
const middle = require("../middle");

console.log(assertArraysEqual(middle([1]), [1]));
console.log(assertArraysEqual(middle([1, 2]), [1]));
console.log(assertArraysEqual(middle([1, 2, 3]), [2]));
console.log(assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]));