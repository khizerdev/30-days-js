/**
 * @return {Generator<number>}
 */
var fibGenerator = function* () {
  var secondLast = 0;
  var last = 1;
  while (true) {
    yield secondLast;
    var next = secondLast + last;
    secondLast = last;
    last = next;
  }
};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */
