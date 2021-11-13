const assert = require('chai').assert;
const _ = require('../index');

describe('#without', () => {
  it('should return ["world", "lighthouse"] for ["hello"]', () => {
    const results1 = _.without(["hello", "world", "lighthouse"], ["hello"]);
    assert.deepEqual(results1, ["world", "lighthouse"]);
  });
});