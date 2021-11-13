const assert = require('chai').assert;
const _ = require('../index');

describe('#assertArraysEqual', () => {
  it('should return true/false for comparing 2 arrays using deepEqual', () => {
    _.assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
    assert.deepEqual(["1", "2", "3"], ["1", "2", "3"]);
  });
});