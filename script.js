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


// * Problem 4: Find the Maximum Number

function findMax(arr) {
  return Math.max(...arr);
}

console.log(findMax([5, 1, 9, 3])); 


// * Problem 5: Remove Duplicates from an Array

function removeDuplicates(arr) {
  return [...new Set(arr)];
}

console.log(removeDuplicates([1, 1, 2, 2, 3, 3, 4, 4])); 



// * 
// * 
// * 
// * 
// * 