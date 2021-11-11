const assertArraysEqual = require('./assertArraysEqual');

const takeUntil = function(array, callback) {
  // ...
  const answer = [];
  for (let item of array) {
    //take until means array elements should be pushed till callback function returns false.
    if (!callback(item)) answer.push(item);
    else break;
  }
  return answer;
};
module.exports = takeUntil;

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
assertArraysEqual(results1, [ 1, 2, 4, 7, 2 ]);