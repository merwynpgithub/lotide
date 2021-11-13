const assert = require('chai').assert;
const _ = require('../index');

describe('#findKeyByValue', () => {
  const bestTVShowsByGenre = {
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  };
  it('should return drama if "The Wire" is passed', () => {
    assert.equal(_.findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });

  it('should return undefined if "That 70s Show" is passed', () => {
    assert.equal(_.findKeyByValue(bestTVShowsByGenre, "That 70s Show"), undefined);
  });
});