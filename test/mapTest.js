const assert = require('chai').assert;
const _ = require('../index');

describe('', () => {
  const words = ["ground", "control", "to", "major", "tom"];

  const result = _.map(words, word => word[0]);
  it('should return the first letter of every word in the array', () => {
    assert.deepEqual(result, ['g', 'c', 't', 'm', 't']);
  });
});