const assert = require('chai').assert;
const tail = require('../tail');

describe('#tail', () => {
  it('should return ["Lighthouse", "Labs"] for ["Hello", "Lighthouse", "Labs"]', () => {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.deepEqual(result, ["Lighthouse", "Labs"]);
  });
});
