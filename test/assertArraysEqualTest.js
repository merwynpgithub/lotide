const assert = require('chai').assert;

describe('#assertArraysEqual', () => {
  it('should return true/false for comparing 2 arrays using deepEqual', () => {
    assert.deepEqual(["1", "2", "3"], ["1", "2", "3"]);
  });
});