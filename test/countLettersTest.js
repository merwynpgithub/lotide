const assert = require('chai').assert;
const _ = require('../index');

describe('#countLetters', () => {
  it('should return an object for "LHL"', () => {
    const results1 = _.countLetters("LHL");
    assert.deepEqual(results1, {L : 2, H: 1});
  });
});