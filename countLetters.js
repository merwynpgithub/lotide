// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  let result;
  //using emoji
  let right = String.fromCodePoint(0x2713);
  let wrong = String.fromCodePoint(0x2717);
  actual !== expected ? result = `${wrong} Assertion Failed: ${actual} !== ${expected}` : result = `${right} Assertion Passed: ${actual} === ${expected}`;
  console.log(result);
};

const countLetters = function(str) {
  const answer = {};
  for (let i = 0; i < str.length; i++) {
    const letter = str[i];
    if (!answer[letter]) answer[letter] = 1;
    else answer[letter]++;
  }
  return answer;
};

console.log(countLetters('LHL'));
console.log(countLetters('lighthouse in the house'));