const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(obj1, obj2) {
  const result = eqObjects(obj1, obj2);
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
  console.log(answer1, obj1, answer2, obj2);
  // return null;
};
module.exports = assertObjectsEqual;

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(assertObjectsEqual(ab, ba));