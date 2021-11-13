// const { eqArrays, eqArraysRecursion } = require('../eqArrays');
const assert = require('chai').assert;
const _ = require('../index');

describe('#eqArrays', () => {
  it('should return true/false for comparing 2 deeply nested arrays using recursion', () => {
    assert.deepEqual(_.eqArraysRecursion([1, [2, [5, 6]], 3], [1, [2, [5, 6]], 3]), true);
  });

  it('should return a boolean for comparing 2 arrays', () => {
    assert.deepEqual(_.eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
  });
});