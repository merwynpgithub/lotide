// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  let result;
  //using emoji
  let right = String.fromCodePoint(0x2713);
  let wrong = String.fromCodePoint(0x2717);
  actual !== expected ? result = `${wrong} Assertion Failed: ${actual} !== ${expected}` : result = `${right} Assertion Passed: ${actual} === ${expected}`;
  console.log(result);
};

module.exports = assertEqual;

