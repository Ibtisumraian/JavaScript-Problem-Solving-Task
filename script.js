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



// * Problem 6: Sum of All Numbers in an Array
function sumArray(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}

console.log(sumArray([1, 2, 3, 4, 5])); 



// *Problem 7: Find Even Numbers in an Array
function findEvens(arr) {
  return arr.filter(num => num % 2 === 0);
}

console.log(findEvens([1, 2, 3, 4, 5, 6])); 



// * Problem 8: Capitalize First Letter of Each Word
function capitalizeWords(str) {
  return str
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

console.log(capitalizeWords("hello world"));



// * Problem 9: Find the Factorial of a Number
function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

console.log(factorial(5));

// * 