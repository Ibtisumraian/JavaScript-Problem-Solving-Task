// * Problem 1: Reverse a String

function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("hello"));


// * Problem 2: Count Vowels in a String

function countVowels(str) {
  const vowels = "aeiouAEIOU";
  let count = 0;
  for (let word of str) {
    if (vowels.includes(word)) count++;
  }
  return count;
}

console.log('Vowels Count =>', countVowels("programming"));


// * Problem 3: Check for Palindrome

function isPalindrome(str) {
  const reversed = str.split("").reverse().join("");
  return str === reversed;
}

console.log(isPalindrome("madam"));
console.log(isPalindrome("hello")); 
