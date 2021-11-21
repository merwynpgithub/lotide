// FUNCTION IMPLEMENTATION
// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  const answer = {};
  
  for (let name of allItems) {
    if (itemsToCount[name]) {
      answer[name] === undefined ? answer[name] = 1 : answer[name] += 1;
    }
  }
  return answer;
};

module.exports = countOnly;
