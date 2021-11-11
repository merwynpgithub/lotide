const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');


const words = ["ground", "control", "to", "major", "tom"];
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};
module.exports = map;
const results1 = map(words, word => word[0]);
console.log("The return value of our defined map function is:", results1);
assertArraysEqual(results1, ["a", "b", "c"]);
assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);
assertArraysEqual(results1, ['g', 'c', 't', 'n', 't']);