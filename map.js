const eqArrays = function(actual, expected) {
  return actual === expected || JSON.stringify(actual) === JSON.stringify(expected);
};

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

const words = ["ground", "control", "to", "major", "tom"];
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};
const results1 = map(words, word => word[0]);
console.log("The return value of our defined map function is:", results1);
assertArraysEqual(results1, ["a", "b", "c"]);
assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);
assertArraysEqual(results1, ['g', 'c', 't', 'n', 't']);