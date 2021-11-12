const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

describe('#findKeyByValue', () => {
  const bestTVShowsByGenre = {
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  };
  it('should return drama if "The Wire" is passed', () => {
    assert.equal(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });

  it('should return undefined if "That 70s Show" is passed', () => {
    assert.equal(findKeyByValue(bestTVShowsByGenre, "That 70s Show"), undefined);
  });
});