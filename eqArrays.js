//Method 1: using JSON.stringify
const eqArrays = function(actual, expected) {
  return actual === expected || JSON.stringify(actual) === JSON.stringify(expected);
};

//Method 2: using recursion:
const eqArraysRecursion = function(actual, expected) {
  if (actual.length !== expected.length) return false;
  for (let i = 0; i < expected.length; i++) {
    if (Array.isArray(actual[i]) && Array.isArray(expected[i])) {
      let answer = eqArraysRecursion(actual[i], expected[i]);
      if (!answer) return false;
    } else {
      if (actual[i] !== expected[i]) return false;
    }
  }
  return true;
};
module.exports = { eqArrays, eqArraysRecursion };