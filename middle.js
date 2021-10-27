const assertEqual = function(actual, expected) {
  let result;
  //using emoji
  let right = String.fromCodePoint(0x2713);
  let wrong = String.fromCodePoint(0x2717);
  actual !== expected ? result = `${wrong} Assertion Failed: ${actual} !== ${expected}` : result = `${right} Assertion Passed: ${actual} === ${expected}`;
  console.log(result);
};

const eqArrays = function(actual, expected) {
  return actual === expected || JSON.stringify(actual) === JSON.stringify(expected);
};

const middle = function(arr) {
  let result = [];
  if (arr.length > 2) {
    const middle = Math.floor(arr.length / 2);
    arr.length % 2 !== 0 ? result.push(arr[middle]) : result.push(arr[middle - 1], arr[middle]);
  }
  return result;
};
console.log(middle([1]));
console.log(middle([1, 2]));
console.log(middle([1, 2, 3]));
console.log(middle([1, 2, 3, 4]));