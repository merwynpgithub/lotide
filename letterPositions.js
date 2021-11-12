const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      const letter = sentence[i];
      let letterPositions = [];
      // results[letter] = letterPositions.push(i);
      if (!results[letter]) {
        letterPositions.push(i);
        results[letter] = letterPositions;
      } else {
        results[letter].push(i);
      }
    }
  }
  return results;
};
module.exports = letterPositions;