/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function (fn) {
  let hasBeenCalled = false;
  let result;

  return function (...args) {
    if (!hasBeenCalled) {
      result = fn.apply(this, args);
      hasBeenCalled = true;
      return result;
    } else {
      return undefined;
    }
  };
};

let fn = (a, b, c) => a + b + c;
let onceFn = once(fn);

console.log(onceFn(1, 2, 3));
console.log(onceFn(1, 2, 3));
