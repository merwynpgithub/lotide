const { eqArrays, eqArraysRecursion } = require('../eqArrays');
const assert = require('chai').assert;

describe('#eqArrays', () => {
  it('should return true/false for comparing 2 deeply nested arrays using recursions', () => {
    assert.deepEqual(eqArraysRecursion([1, [2, [5, 6]], 3], [1, [2, [5, 6]], 3]), true);
  });

  it('should return a boolean for comparing 2 arrays', () => {
    assert.deepEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
  });
});