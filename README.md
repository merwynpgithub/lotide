# Lotide Repo Description
## Summary 

## Table of Contents
* Week 1
  * [AssertEqual.js](/assertEqual.js) <br />
  Implementing console.assert function.
  * [head.js](/head.js)<br />
  Implementing lodash head function.
  * [tail.js](/tail.js)<br />
  Implementing lodash tail function.
  * [eqArrays.js](/eqArrays.js)<br />
  Implementing function to test if 2 passed arrays are equal.
  * [assertArraysEqual.js](/assertArraysEqual.js)
  Use eqArrays function to test equality of 2 arrays.
  * [without.js](/without.js)<br />
  Implementing lodash without function.
  * [flatten.js](/flatten.js)<br />
  Implenting lodash flatten function.
  * [middle.js](/middle.js)<br />
  Implenting lodash middle function.
* Week 2
  * [countOnly.js](/countOnly.js) <br />
  This function takes 2 arguments an array of strings and an object specifying what to count. <br />
  It returns an object containing how many instances of each string were found in the allItems array of strings.
  * [countLetters.js](/countLetters.js) <br />
  This function takes an input string and returns an object with the count of letters in the string
  * [letterPositions.js](/letterPositions.js) <br />
  This function takes an input string and returns an object with the positions of letters in the string. The positions are zero based and are in an array.
  * [findKeyByValue.js](/findKeyByValue.js) <br />
  This function takes an object and a value as arguments and searches if the object has the key, value pair and returns the corresponding key.
  * [eqObjects.js](/eqObjects.js) <br />
  This function takes 2 objects as arguments and returns a boolean value if the key/value pairs are similar.
  * [assertObjectsEqual.js](/assertObjectsEqual.js) <br />
  This function leverages on eqObjects and writes a test to show if the assertion passes or fails. There is a mention to use utils.inspect() which converts objects to strings (similar to JSON.stringify()) but I did not use string interpolation and hence avoided using utils.inspect().
  * [map.js](/map.js) <br />
  This function is our own implementation of Array.map() method which takes a callback function and returns an array subject to the function called on every element of the input array.
  * [takeUntil.js](/takeUntil.js) <br />
  This is similar to lowdash takeWhile. TakeUntil function takes an array and callback function and slices the array uptil the callback function condition is evaluated to be false.
  * [findKey.js](/findKey.js) <br />
  This function is similar to [findKeyByValue.js](/findKeyByValue.js) but it utlizes a callback function for more flexibility.
* Week 3
  * Refactoring code
  * Using modules to export code
  * Separated tests [tests](/test) in a separate folder with tests in it.
  * Installing mocha chai and testing using it.
  