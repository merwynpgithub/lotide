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
  * `_.flatten([1, [2, 3]]) // [1, 2, 3]` <br />
  Returns the flattened array.
  * [middle.js](/middle.js)<br />
  Implementing lodash middle function.
  * `_.middle([1, 2, 3]) // [2]` <br />
  Returns an array containing center element/s. If the array length is less than 3, it returns an empty array.
  * [countOnly.js](/countOnly.js) <br />
  * `_.countOnly(["a", "a", "b"]) // {a: 2, b: 1}` <br />
  This function takes in an array of items and return counts for a specific subset of those items.
  * [countLetters.js](/countLetters.js) <br />
  `_.countLetters("LHL") // {L : 2, H: 1}` <br />
  This function is similar to [countOnly.js](/countOnly.js).
  * [letterPositions.js](/letterPositions.js) <br />
  `_.letterPositions("LHL") // {L : 2, H: 1}` <br />
  This function takes an input string and returns an object with the positions of letters in the string. The positions are zero based and are in an array.
  * [findKeyByValue.js](/findKeyByValue.js) <br />
  `_.findKeyByValue({sci_fi: "The Expanse", drama:  "The Wire"}, "The Wire") // "drama"`
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
  * Testing using mocha chai. Please run npm install after cloning the repo.
