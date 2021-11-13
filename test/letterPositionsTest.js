const assert = require('chai').assert;
const _ = require('../index');

describe('#letterPositions', () => {
  const result1 = _.letterPositions("lighthouse in the house");

  const result2 = result1["e"];
  it('should return [9,16, 22] for e in lighthouse in the house', () => {
    assert.deepEqual(result2, [9,16, 22]);
  });

  const result3 = result1["i"];
  it('should return [1, 11] for i in lighthouse in the house', () => {
    assert.deepEqual(result3, [1, 11]);
  });
});