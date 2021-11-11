const assertEqual = require('./assertEqual');

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

const findKeyByValue = function(obj, val) {
  for (let key in obj) {
    if (obj[key] === val) {
      return key;
    }
  }
  return undefined;
};
module.exports = findKeyByValue;

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);