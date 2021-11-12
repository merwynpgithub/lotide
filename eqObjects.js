// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function (object1, object2) {
  const keyArr1 = Object.keys(object1);
  const keyArr2 = Object.keys(object2);
  const valArr1 = Object.values(object1);
  const valArr2 = Object.values(object2);

  //1.check if object 1 & 2 have equal no of key/value pairs
  if (keyArr1.length !== keyArr2.length) return false;

  //2.compare keyArrays and valArrays
  //keyArrays elements are string but valArray elements can be arrays/objects.

  //2.a.convert valArray elements to string
  for (let val = 0; val < valArr1.length; val++) {
    if (typeof valArr1[val] === "object") {
      valArr1[val] = JSON.stringify(valArr1[val]);
    }
  }
  for (let val = 0; val < valArr2.length; val++) {
    if (typeof valArr2[val] === "object") {
      valArr2[val] = JSON.stringify(valArr2[val]);
    }
  }

  //2.b. compare keyArrays and valArrays
  for (let i = 0; i < keyArr1.length; i++) {
    const check1 = keyArr1.indexOf(keyArr2[i]);
    const check2 = valArr1.indexOf(valArr2[i]);
    if (check1 === -1 || check2 === -1) return false;
    if (check1 !== check2) return false;
  }
  return true;
};
module.exports = eqObjects;

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// eqObjects(ab, ba); // => true

// const abc = { a: "1", b: "2", c: "3" };
// eqObjects(ab, abc); // => false

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// eqObjects(cd, dc); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// eqObjects(cd, cd2); // => false