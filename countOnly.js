const assertEqual = require('./assertEqual');
// FUNCTION IMPLEMENTATION
// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  const answer = {};
  for (let name in itemsToCount) {
    if (itemsToCount[name]) {
      answer[name] = 0;
      for (let i = 0; i < allItems.length; i++) {
        if (allItems[i] === name) {
          answer[name]++;
        }
      }
      if (!answer[name]) {
        delete answer[name];
      }
    }
  }

  return answer;
};

module.exports = countOnly;

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);