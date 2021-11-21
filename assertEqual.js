// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
  let result;
  //using emoji
  let right = String.fromCodePoint(0x2713);
  let wrong = String.fromCodePoint(0x2717);
//testing strings and numbers only
  actual !== expected ? result = `${wrong} Assertion Failed: ${actual} !== ${expected}` : result = `${right} Assertion Passed: ${actual} === ${expected}`;

  //convert different data like arrays type to JSON string to compare
  //JSON.stringify is not advisable for compaaring objects
  // let actualJson = JSON.stringify(actual);
  // let expectedJson = JSON.stringify(expected);
  // actualJson !== expectedJson ? result = `${wrong} Assertion Failed: ${actual} !== ${expected}` : result = `${right} Assertion Passed: ${actual} === ${expected}`;

  console.log(result);
};

module.exports = assertEqual;

