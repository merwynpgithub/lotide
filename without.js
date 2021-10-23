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

// console.log(assertArraysEqual(["hello", "world", "lighthouse"], ["hello", "world", "lighthouse"]));
console.log(without(["hello", "world", "lighthouse"], ["hello"]));