/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let word = s.split(' ');
  let updatedArray = [];

  for (let i = 0; i < word.length; i++) {
    if (word[i] != '') {
      updatedArray.push(word[i]);
    }
  }
  return updatedArray[updatedArray.length - 1].length;
};

console.log(lengthOfLastWord('Hello World'));
