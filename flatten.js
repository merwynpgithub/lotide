const flatten = function(arr) {
  let result = [];
  if (!Array.isArray(arr)) return "Not an array";
  for (let i = 0; i <  arr.length; i++) {
    if (!Array.isArray(arr[i])) {
      result.push(arr[i]);
    } else {
      for (let j = 0; j < arr[i].length; j++) {
        result.push(arr[i][j]);
      }
    }
  }
  return result;
};

module.exports = flatten;
console.log(flatten([1, 2, [3, 4], 5, [6]]));