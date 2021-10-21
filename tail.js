const assertEqual = function(actual, expected) {
  let result;
  //using emoji
  let right = String.fromCodePoint(0x2713);
  let wrong = String.fromCodePoint(0x2717);
  //convert different data like arrays type to JSON string to compare
  let actualJson = JSON.stringify(actual);
  let expectedJson = JSON.stringify(expected);
  actualJson !== expectedJson ? result = `${wrong} Assertion Failed: ${actual} !== ${expected}` : result = `${right} Assertion Passed: ${actual} === ${expected}`;
  console.log(result);
};

const tail = function(arr) {
  return arr.slice(1);
};

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]);