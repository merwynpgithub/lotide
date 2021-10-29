// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  const keyArr1 = Object.keys(object1);
  const keyArr2 = Object.keys(object2);
  const valArr1 = Object.values(object1);
  const valArr2 = Object.values(object2);
  
  //check if object 1 & 2 have equal no of key/value pairs
  if (keyArr1.length !== keyArr2.length) return false;

  //compare keyArrays and valArrays
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false