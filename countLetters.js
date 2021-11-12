// FUNCTION IMPLEMENTATION
const assertEqual = require('./assertEqual');
const countLetters = function(str) {
  const answer = {};
  for (let i = 0; i < str.length; i++) {
    const letter = str[i];
    if (!answer[letter]) answer[letter] = 1;
    else answer[letter]++;
  }
  return answer;
};

module.exports = countLetters;

// console.log(countLetters('LHL'));
// console.log(countLetters('lighthouse in the house'));