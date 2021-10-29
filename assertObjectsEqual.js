const eqObjects = function(object1, object2) {
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

const assertObjectsEqual = function(obj1, obj2) {
  const result = eqObjects(obj1, obj2);
  //using emoji
  let right = String.fromCodePoint(0x2713);
  let wrong = String.fromCodePoint(0x2717);

  let answer1, answer2;
  // result === true ? answer = `${right} Assertion Passed: ` : answer = `${wrong} Assertion Failed: `;
  if (result) {
    answer1 = `${right} Assertion Passed: `;
    answer2 = `===`;
  } else {
    answer1 = `${wrong} Assertion Failed: `;
    answer2 = `!==`;
  }
  console.log(answer1, obj1, answer2, obj2);
  // return null;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(assertObjectsEqual(ab, ba));