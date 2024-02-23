/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
  let value = init;
  function increment() {
    value++;
    return value;
  }
  function decrement() {
    value--;
    return value;
  }
  function reset() {
    value = init;
    return value;
  }
  return {
    reset,
    increment,
    decrement,
  };
};

const counter = createCounter(5);
console.log(counter.increment()); // 6
console.log(counter.reset()); // 5
console.log(counter.decrement()); // 4
