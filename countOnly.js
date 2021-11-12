// FUNCTION IMPLEMENTATION
// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  const answer = {};
  for (let name in itemsToCount) {
    if (itemsToCount[name]) {
      answer[name] = 0;
      for (let i = 0; i < allItems.length; i++) {
        if (allItems[i] === name) {
          answer[name]++;
        }
      }
      if (!answer[name]) {
        delete answer[name];
      }
    }
  }

  return answer;
};

module.exports = countOnly;
