const assert = require('chai').assert;
const _ = require('../index');

describe('#takeUntil', () => {
  it('should return [1, 2, 5, 7, 2] for [1, 2, 5, 7, 2, -1, 2, 4, 5]', () => {
    const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
    const results1 = _.takeUntil(data1, x => x < 0);
    assert.deepEqual(results1, [1, 2, 5, 7, 2]);
  });

  it('should return array slice till , for array of strings', () => {
    const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
    const results2 = _.takeUntil(data2, x => x === ',');
    assert.deepEqual(results2, ["I've", "been", "to", "Hollywood"]);
  });
});