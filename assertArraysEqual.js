const eqArrays = require('./eqArrays');

const assertArraysEqual = function(arr1, arr2) {
  const result = eqArrays(arr1, arr2);
  //using emoji
  let right = String.fromCodePoint(0x2713);
  let wrong = String.fromCodePoint(0x2717);

  let answer1, answer2;
  // result === true ? answer = `${right} Assertion Passed: ` : answer = `${wrong} Assertion Failed: `;
  if (result) {
    answer1 = `${right} Assertion Passed: `;
    answer2 = `===`;
  } else {
    answer1 = `${wrong} Assertion Failed: `;
    answer2 = `!==`;
  }
  console.log(answer1, arr1, answer2, arr2);
  // return null;
};

module.exports = assertArraysEqual;