const assert = require('chai').assert;
const _ = require('../index');

describe('#head', () => {
  it('should return 5 for [5, 6, 7]', () => {
    assert.strictEqual(_.head([5, 6, 7]), 5)
  });

  it('should return "5" for ["5"]', () => {
    assert.strictEqual(_.head(["5"]), "5");
  });
});