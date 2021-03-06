const assert = require('chai').assert;
const _ = require('../index');

describe('#flatten', () => {
  it('should return a [1, 2, 3] for [1, [2, 3]]', () => {
    assert.deepEqual(_.flatten([1, [2, 3]]), [1, 2, 3]);
  });

  it('should return a [1, 2, 4, 3] for [1, [2, [4], 3]]', () => {
    //deeplyEqual returns one level of nested arrays
    assert.deepEqual(_.flatten([1, [2, [4], 3]]), [1, 2, [4], 3]);
  });

  it('should return a [1, 2, 3, 4, 5, 6] for [1, 2, [3, 4], 5, [6]]', () => {
    //deeplyEqual returns one level of nested arrays
    assert.deepEqual(_.flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });
});