const head = require('./head');
const tail = require('./tail');
const middle = require('./middle');
const flatten = require('./flatten');
const assertArraysEqual = require('./assertArraysEqual');
const assertEqual = require('./assertEqual');
const map = require('./map');
const letterPositions = require('./letterPositions');
const assertObjectsEqual = require('./assertObjectsEqual');
const countLetters = require('./countLetters');
const countOnly = require('./countOnly');
const { eqArrays, eqArraysRecursion } = require('./eqArrays');
const eqObjects = require('./eqObjects');
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');
const takeUntil = require('./takeUntil');
const without = require('./without');

module.exports = {
  head,
  tail,
  middle,
  flatten,
  assertArraysEqual,
  assertEqual,
  map,
  letterPositions,
  assertObjectsEqual,
  countLetters,
  countOnly,
  eqArrays,
  eqArraysRecursion,
  eqObjects,
  findKey,
  findKeyByValue,
  takeUntil,
  without,
};