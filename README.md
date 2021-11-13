# Lotide Description
* A mini clone of the [Lodash](https://lodash.com) library

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

* This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @username/lotide`

**Require it:**

`const _ = require('@username/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

* The following functions are currently implemented:

* Functions in lotide
  * [AssertEqual.js](/assertEqual.js) <br />
  Implementing console.assert function. <br />
  * `_.assertEqual("Lighthouse Labs", "Bootcamp") // => ✗ Assertion Failed: Lighthouse Labs !== Bootcamp` <br />
  Logs whether Assertion passed or failed by comparing the 2 arguments.
  * [head.js](/head.js)<br />
  Implementing lodash head function.
  * `_.head([5, 6, 7]) // 5` <br />
  Returns the first element of an array or undefined if array is empty.
  * [tail.js](/tail.js)<br />
  Implementing lodash tail function.
  * `_.tail(["Hello", "Lighthouse", "Labs"]) // ["Lighthouse", "Labs"]` <br />
  Returns the array exluding the first element.
  * [eqArrays.js](/eqArrays.js)<br />
  Implementing function to test if 2 passed arrays are equal. Can compare 2 deeply nested arrays using recursion.
  * `_.eqArrays(["1", "2", "3"], ["1", "2", 3]) // false` <br />
  Returns a boolean by comparing 2 arrays.
  * [assertArraysEqual.js](/assertArraysEqual.js) <br />
  Use eqArrays function to test equality of 2 arrays using 2 methods: JSON.stringify() or comapring each element of the 2 arrays and using recursion.
   * `_.assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]) // => ✓ Assertion Passed:  [ '1', '2', '3' ] === [ '1', '2', '3' ]` <br />
  Logs whether Assertion passed or failed by comparing the 2 arrays.
  * [without.js](/without.js)<br />
  Implementing lodash without function.
  * `_.without(["hello", "world", "lighthouse"], ["hello"]) // ["world", "lighthouse"]` <br />
  Returns the filtered array by removing the arguments passed.
  * [flatten.js](/flatten.js)<br />
  Implementing lodash flatten function.
  * [middle.js](/middle.js)<br />
  Implementing lodash middle function.
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
  * [Tests](/test) in a separate folder for more details.
  * Installing mocha chai and testing using it.
