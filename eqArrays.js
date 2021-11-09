const eqArrays = function(actual, expected) {
  return actual === expected || JSON.stringify(actual) === JSON.stringify(expected);
};

module.exports = eqArrays;