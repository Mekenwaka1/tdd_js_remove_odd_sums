function removeOddSum(listOfObjects, str1, str2) {
  const result = listOfObjects.filter(obj => (obj["a"] + obj["b"]) % 2 === 0);
  return result;
}

removeOddSum(
  [{a: 5, b: 5}, {a: 3, b: 4}, {a: 2, b: 0}, {a: 2, b: 1}],
  "a",
  "b"
);
module.exports = removeOddSum;
