const middle = function(arr) {
  let result = [];
  if (arr.length > 2) {
    const middle = Math.floor(arr.length / 2);
    arr.length % 2 !== 0 ? result.push(arr[middle]) : result.push(arr[middle - 1], arr[middle]);
  }
  return result;
};

module.exports = middle;