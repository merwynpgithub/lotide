const assert = require('chai').assert;
const _ = require('../index');

describe('#without', () => {
  it('should return ["world", "lighthouse"] for ["hello"]', () => {
    const results1 = _.without(["hello", "world", "lighthouse"], ["hello"]);
    assert.deepEqual(results1, ["world", "lighthouse"]);
  });
  it('should return ["1", "2"] for ["1", "2", "3"]', () => {
    const results1 = _.without(["1", "2", "3"], [1, 2, "3"]);
    assert.deepEqual(results1, ["1", "2"]);
  });
  it('should return ["2"] for ["1", "1", "1", "2", "3", "1" , "1"]', () => {
    const results1 = _.without(["1", "1", "1", "2", "3", "1" , "1"], ["1", 2, "3"]);
    assert.deepEqual(results1, ["2"]);
  });
});