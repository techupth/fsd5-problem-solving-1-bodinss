//Exercise 2: Valid Palindrome

const isPalindrome = function (word) {
  let wordToArray = word.split("");
  let reversedArray = wordToArray.reverse();
  let reversedWord = reversedArray.join("");
  if (reversedWord === word) {
    return true;
  } else {
    return false;
  }
};

const result1 = isPalindrome("bab");
const result2 = isPalindrome("101");
const result3 = isPalindrome("bob");

console.log(result1); // true
console.log(result2); // false
console.log(result3); // true
