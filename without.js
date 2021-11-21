const without = function (source, itemsToRemove) {
  if (!itemsToRemove.length) {
    return source;
  }
  const ansArray = [];
  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
      ansArray.push(source[i]);
    }
  }
  return ansArray;
};

module.exports = without;