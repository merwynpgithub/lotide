const assert = require('chai').assert;
const _ = require('../index');

describe('#assertObjectsEqual', () => {
  it('should return true/false for comparing 2 objects using deepEqual', () => {
    const ab = { a: "1", b: "2" };
    const ba = { b: "2", a: "1" };
    _.assertObjectsEqual(ab, ba);
    assert.deepEqual(ab, ba);
  });
});