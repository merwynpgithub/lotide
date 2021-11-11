const assertArraysEqual = require('./assertArraysEqual');

const without = function(source, itemsToRemove) {
  assertArraysEqual(source, itemsToRemove);
  let ansArray = [];
  if (!itemsToRemove.length) {
    ansArray = source;
  } else {
    let minLength = Math.min(source.length, itemsToRemove.length);
    for (let i = 0; i < minLength; i++) {
      if (source[i] !== itemsToRemove[i]) {
        ansArray.push(source);
      }
    }
    if (minLength < source.length) {
      for (let j = source.length - minLength - 1; j < source.length; j++) {
        ansArray.push(source[j]);
      }
    }
  }
  return ansArray;
};

module.exports = without;

// console.log(assertArraysEqual(["hello", "world", "lighthouse"], ["hello", "world", "lighthouse"]));
console.log(without(["hello", "world", "lighthouse"], ["hello"]));