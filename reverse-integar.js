/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (int) {
  const intRev = int.toString().split('').reverse().join('');
  return parseInt(intRev) * Math.sign(int);
};

console.log(reverse(123));
