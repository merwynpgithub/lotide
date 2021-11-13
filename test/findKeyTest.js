const assert = require('chai').assert;
const _ = require('../index');

describe('#findKey', () => {
  it('should return an object key value  for callback function', () => {
    const result1 = _.findKey({
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    }, x => x.stars === 2); // => "noma"
    assert.equal(result1, "noma");
  });
});