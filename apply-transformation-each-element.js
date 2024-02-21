/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, fn) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    res.push(fn(arr[i], i));
  }
  return res;
};

console.log(
  map([1, 2, 3], function plusone(n) {
    return n + 1;
  })
);
