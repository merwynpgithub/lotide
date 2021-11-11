const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      const letter = sentence[i];
      let letterPositions = [];
      // results[letter] = letterPositions.push(i);
      if (!results[letter]) {
        letterPositions.push(i);
        results[letter] = letterPositions;
      } else {
        results[letter].push(i);
      }
    }
  }
  return results;
};
module.exports = letterPositions;

const result1 = letterPositions("lighthouse in the house");
const result2 = result1["e"];
console.log(assertArraysEqual(result2, [9,16, 22]));