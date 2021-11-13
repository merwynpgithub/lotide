const findKey = function(obj, cb) {
  for (let key in obj) {
    if (cb(obj[key])) {
      return key;
    }
  }
};
module.exports = findKey;