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

const result1 = letterPositions("lighthouse in the house");
const result2 = result1["e"];
console.log(assertArraysEqual(result2, [9,16, 22]));