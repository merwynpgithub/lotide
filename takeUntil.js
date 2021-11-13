const takeUntil = function(array, callback) {
  // ...
  const answer = [];
  for (let item of array) {
    //take until means array elements should be pushed till callback function returns false.
    if (!callback(item)) answer.push(item);
    else break;
  }
  return answer;
};
module.exports = takeUntil;