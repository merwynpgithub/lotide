const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

describe('#letterPositions', () => {
  const result1 = letterPositions("lighthouse in the house");

  const result2 = result1["e"];
  it('should return [9,16, 22] for result2', () => {
    assert.deepEqual(result2, [9,16, 22]);
  });

  const result3 = result1["i"];
  it('should return [1, 11] for result2', () => {
    assert.deepEqual(result3, [1, 11]);
  });
});