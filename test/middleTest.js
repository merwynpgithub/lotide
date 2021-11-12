const assert = require('chai').assert;
const _ = require("../index");
// const middle = require("../middle");

describe('#middle', () => {
  it('should return [] for [1]', () => {
    assert.deepEqual(_.middle([1]), []);
  });
  it('should return [] for [1, 2]', () => {
    assert.deepEqual(_.middle([1, 2]), []);
  });
  it('should return [2] for [1, 2, 3]', () => {
    assert.deepEqual(_.middle([1, 2, 3]), [2]);
  });
  it('should return [2, 3] for [1, 2, 3, 4]', () => {
    assert.deepEqual(_.middle([1, 2, 3, 4]), [2, 3]);
  });
});