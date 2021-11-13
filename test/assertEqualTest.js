// TEST CODE
const assert = require('chai').assert;
const assertEqual = require('../assertEqual');

describe('#assertEqualTest', () => {

  it('should return false for comparing 2 strings: Lighthouse Labs", "Bootcamp', () => {
    assertEqual("Lighthouse Labs", "Bootcamp");
  });
});