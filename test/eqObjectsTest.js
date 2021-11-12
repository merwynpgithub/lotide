const assert = require('chai').assert;
const _ = require('../index');

describe('#eqObjects', () => {
  it('should compare 2 objects and return a boolean', () => {
    const ab = { a: "1", b: "2" };
    const ba = { b: "2", a: "1" };
    assert.deepEqual(ab, ba);
  });

  it('should compare 2 objects and return a boolean', () => {
    const ab = { c: "1", d: ["2", 3] };
    const ba = { d: ["2", 3], c: "1" };
    assert.deepEqual(ab, ba);
  });

  it('should compare 2 objects and return a boolean', () => {
    const ab = { c: "1", d: ["2", 3] };
    const ba = { c: "1", d: ["2", 3, 4] };
    assert.deepEqual(ab, ba);
  });
});