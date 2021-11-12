const assertEqual = require('../assertEqual');
const { eqArrays, eqArraysRecursion } = require('../eqArrays');

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
assertEqual(eqArraysRecursion([1, [2, [5, 6]], 3], [1, [2, [5, 6]], 3]), false);