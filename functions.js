//! Two letter maker function
function twoLetterMaker(str) {
  if (str.length % 2 !== 0) {
    str += "_";
  }
  const result = [];
  for (let i = 0; i < str.length; i += 2) {
    result.push(str.slice(i, i + 2));
  }
  return result;
}

// console.log(twoLetterMaker("abs"));

//! Define If armstrong number or not
function narcissistic(value) {
  const nums = value.toString().split("").map(Number);
  const power = nums.length;

  //? reduce (сокрашать) кал бэк функция accumulator(предыдущий) и digit(кал бэк функция)
  //? Math.pow(num, degree(степень)) возвышает в степень
  const sum = nums.reduce((acc, digit) => {
    return acc + Math.pow(digit, power);
  }, 0);

  //? +value с помошью '+' мы перевели строку в число
  return +value === sum;
}
//! Define If armstrong number or not
function isNarcissistic(value) {
  //* Convert value to array of digits
  //? Array.from(iterable, mapFn, thisArg) iterable(итерируемый, обязательный)-инструмент из которого будет создан массив, mapFn(кал бэк функция, опциональный), thisArg(можно указать обьект где хранится кал-бэк функция, опциональный)
  const digits = Array.from(String(value), Number);

  //* Calculate the power (length of digits array)
  const power = digits.length;

  //* Calculate the sum of each digit raised to the power of the length
  //? reduce (сокрашать) кал бэк функция accumulator(предыдущий) и digit(кал бэк функция)
  const sum = digits.reduce((acc, digit) => acc + Math.pow(digit, power), 0);

  //* Check if the original value is equal to the sum
  return value === sum;
}
//! The algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
function moveZeros(arr) {
  const nuls = arr.filter((item) => item === 0);
  const others = arr.filter((item) => item !== 0);
  //? concat() используется для обьединения двух или более массивов
  return others.concat(nuls);
}

//! The algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
//? This version of the algorithm avoids using additional arrays and the filter() method, instead opting for a more efficient in-place approach. It iterates through the array once, moving non-zero elements to the front, and then fills the remaining elements with zeros. This approach has a time complexity of O(n) and does not require creating new arrays, making it more efficient in terms of memory usage and runtime performance.
function moveZeroSecond(arr) {
  let nonZeroIndex = 0;

  //* Iterate through the array, moving non-zero elements to the front
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[nonZeroIndex++] = arr[i];
    }
  }

  //* Fill the remaining elements with zeros
  for (let i = nonZeroIndex; i < arr.length; i++) {
    arr[i] = 0;
  }

  return arr;
}
// console.log(moveZeroSecond([false, 1, 0, 1, 2, 0, 1, 3, "a"]));

//! The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.
//! What if the string is empty? Then the result should be empty object literal, {}.
function count(str) {
  const charCount = {};

  //? Iterate through each character in the string
  for (let char of str) {
    //? Increment the count for the current character
    charCount[char] = (charCount[char] || 0) + 1;
  }

  return charCount;
}
//! Here the same function using reduce array method.
function countSecond(str) {
  return str.split("").reduce((charCount, char) => {
    charCount[char] = (charCount[char] || 0) + 1;
    return charCount;
  }, {});
}

// Test cases
// console.log(countSecond("ababdasds")); // Output: { 'a': 2, 'b': 1 }
// console.log(count("")); // Output: {}

//! A function taking a positive integer between 1 and 3999 (both included) as its parameter and returning a string containing the Roman Numeral representation of that integer.
const num = 1002;

//* Simple example
function RomNum(number) {
  const romNum = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  let roman = "";
  // Iterate through the Roman numeral mappings
  for (let key in romNum) {
    // Determine how many times the current Roman numeral should be used
    while (number >= romNum[key]) {
      roman += key; // Append the Roman numeral to the result
      number -= romNum[key]; // Subtract the corresponding value from the number
    }
  }
  return roman;
}

//* The way that as fast as possible.
function RomNum2(number) {
  if (number <= 0 || number >= 4000) {
    throw new Error("Number out of range for Roman numeral conversion.");
  }
  const romanNumerals = [
    { value: 1000, symbol: "M" },
    { value: 900, symbol: "CM" },
    { value: 500, symbol: "D" },
    { value: 400, symbol: "CD" },
    { value: 100, symbol: "C" },
    { value: 90, symbol: "XC" },
    { value: 50, symbol: "L" },
    { value: 40, symbol: "XL" },
    { value: 10, symbol: "X" },
    { value: 9, symbol: "IX" },
    { value: 5, symbol: "V" },
    { value: 4, symbol: "IV" },
    { value: 1, symbol: "I" },
  ];
  let roman = "";
  for (const { value, symbol } of romanNumerals) {
    while (number >= value) {
      roman += symbol;
      number -= value;
    }
  }
  return roman;
}

// console.log(RomNum(num));

// const arr = [1, 2, 3];

function duplicateFinder(arr) {
  const seen = new Set();

  for (let num of arr) {
    if (seen.has(num)) {
      return true;
    }
    seen.add(num);
  }

  return false;
}

// console.log(duplicateFinder(arr));

// const nums = [1,2,3,1];

function checkNeighborhoodDuplicates(nums, k) {
  // Create a map to store the last index of each post
  const indexMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if (indexMap.has(num)) {
      // Check if the previous occurrence is within distance k
      const previousIndex = indexMap.get(num);
      if (i - previousIndex <= k) {
        return true;
      }
    }

    // Update the map with the current index
    indexMap.set(num, i);
  }

  return false;
}

// console.log(checkNeighborhoodDuplicates(nums, 1));

//! Shuffle array function
function shuffleArray(array) {
  // Loop over the array from the last element to the first
  for (let i = array.length - 1; i > 0; i--) {
    // Generate a random index between 0 and the current index
    const j = Math.floor(Math.random() * (i + 1));

    // Swap the current element with the element at the random index
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}

// Example array
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Shuffle the array
const shuffledArr = shuffleArray(arr);

// console.log(shuffledArr);
// Outputs the array in a random order, e.g., [7, 1, 4, 10, 2, 8, 5, 6, 9, 3]

//! Generate password function
//? This function will allow you to specify the length of the password, and whether to include lowercase letters, uppercase letters, numbers, and special characters.
function generatePassword(options) {
  const {
    length = 12,
    useLowercase = true,
    useUppercase = true,
    useNumbers = true,
    useSpecialChars = true,
  } = options;

  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberChars = "0123456789";
  const specialChars = "!@#$%^&*()_+[]{}|;:,.<>?";

  let allChars = "";
  let password = "";

  if (useLowercase) allChars += lowercaseChars;
  if (useUppercase) allChars += uppercaseChars;
  if (useNumbers) allChars += numberChars;
  if (useSpecialChars) allChars += specialChars;

  if (allChars.length === 0) {
    throw new Error("At least one character type must be selected.");
  }

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars[randomIndex];
  }

  return password;
}

// Example 1: Generate a password with all character types
const options1 = {
  length: 16,
  useLowercase: true,
  useUppercase: true,
  useNumbers: true,
  useSpecialChars: true,
};
const password1 = generatePassword(options1);
// console.log(password1);
// Outputs a 16-character password like "aB3$dF7&Gh9@K2lM"

// Example 2: Generate a password with only lowercase and numbers
const options2 = {
  length: 12,
  useLowercase: true,
  useUppercase: false,
  useNumbers: true,
  useSpecialChars: false,
};
const password2 = generatePassword(options2);
// console.log(password2);
// Outputs a 12-character password like "a4g7k9j2m1n0"

// Example 3: Generate a password with only special characters
const options3 = {
  length: 8,
  useLowercase: false,
  useUppercase: false,
  useNumbers: false,
  useSpecialChars: true,
};
const password3 = generatePassword(options3);
// console.log(password3);
// Outputs an 8-character password like "@$&*#^!%"

//! Checks for validity of the password, returns a detailed report
function validatePassword(password) {
  const minLength = 8;
  const maxLength = 20;
  const lowercaseRegex = /[a-z]/;
  const uppercaseRegex = /[A-Z]/;
  const numberRegex = /\d/;
  const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
  const commonPatterns = ["123456", "password", "qwerty", "abc123"];

  let report = {
    isValid: true,
    errors: [],
    strengths: [],
  };

  // Check length
  if (password.length < minLength) {
    report.isValid = false;
    report.errors.push(
      `Password is too short. Minimum length is ${minLength} characters.`
    );
  } else if (password.length > maxLength) {
    report.isValid = false;
    report.errors.push(
      `Password is too long. Maximum length is ${maxLength} characters.`
    );
  } else {
    report.strengths.push(`Password length is within the recommended range.`);
  }

  // Check for lowercase letters
  if (!lowercaseRegex.test(password)) {
    report.isValid = false;
    report.errors.push("Password must contain at least one lowercase letter.");
  } else {
    report.strengths.push("Password contains lowercase letters.");
  }

  // Check for uppercase letters
  if (!uppercaseRegex.test(password)) {
    report.isValid = false;
    report.errors.push("Password must contain at least one uppercase letter.");
  } else {
    report.strengths.push("Password contains uppercase letters.");
  }

  // Check for numbers
  if (!numberRegex.test(password)) {
    report.isValid = false;
    report.errors.push("Password must contain at least one number.");
  } else {
    report.strengths.push("Password contains numbers.");
  }

  // Check for special characters
  if (!specialCharRegex.test(password)) {
    report.isValid = false;
    report.errors.push("Password must contain at least one special character.");
  } else {
    report.strengths.push("Password contains special characters.");
  }

  // Check for common patterns
  for (const pattern of commonPatterns) {
    if (password.includes(pattern)) {
      report.isValid = false;
      report.errors.push(`Password contains a common pattern: "${pattern}".`);
      break;
    }
  }

  // Check for sequences (e.g., "abc", "123")
  const sequenceRegex =
    /(012|123|234|345|456|567|678|789|890|abc|bcd|cde|def|efg|fgh|ghi|hij|ijk|jkl|klm|lmn|mno|nop|opq|pqr|qrs|rst|stu|tuv|uvw|vwx|wxy|xyz)/i;
  if (sequenceRegex.test(password)) {
    report.isValid = false;
    report.errors.push("Password contains a simple sequence of characters.");
  }

  return report;
}

// Example 1: Validate a strong password
// const password1 = "Str0ng@2024!";
// const result1 = validatePassword(password1);
// console.log(result1);
/*
{
    isValid: true,
    errors: [],
    strengths: [
        "Password length is within the recommended range.",
        "Password contains lowercase letters.",
        "Password contains uppercase letters.",
        "Password contains numbers.",
        "Password contains special characters."
    ]
}
*/

// Example 2: Validate a weak password
// const password2 = "123456";
// const result2 = validatePassword(password2);
// console.log(result2);
/*
{
    isValid: false,
    errors: [
        "Password is too short. Minimum length is 8 characters.",
        "Password must contain at least one lowercase letter.",
        "Password must contain at least one uppercase letter.",
        "Password must contain at least one special character.",
        "Password contains a common pattern: \"123456\"."
    ],
    strengths: []
}
*/

//! JavaScript function that performs deep cloning of an object. This function will handle complex objects, including nested objects, arrays, and even objects with circular references. Deep cloning is an essential technique when you need to create a true copy of an object without referencing the original.
function deepClone(obj, hash = new WeakMap()) {
  // Handle null or undefined
  if (obj === null || obj === undefined) return obj;

  // Handle primitive data types (string, number, boolean, etc.)
  if (typeof obj !== "object") return obj;

  // Handle Date objects
  if (obj instanceof Date) return new Date(obj);

  // Handle Array objects
  if (Array.isArray(obj)) {
    const arrCopy = [];
    obj.forEach((item, index) => {
      arrCopy[index] = deepClone(item, hash);
    });
    return arrCopy;
  }

  // Handle RegExp objects
  if (obj instanceof RegExp) return new RegExp(obj);

  // Handle circular references by using WeakMap
  if (hash.has(obj)) return hash.get(obj);

  // Handle all other objects
  const clonedObj = Object.create(Object.getPrototypeOf(obj));
  hash.set(obj, clonedObj);

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      clonedObj[key] = deepClone(obj[key], hash);
    }
  }

  return clonedObj;
}

// Example 1: Deep cloning a simple object
const originalObj = {
  name: "Alice",
  age: 30,
  hobbies: ["reading", "cycling"],
  details: {
    married: true,
    children: 2,
  },
};

const clonedObj = deepClone(originalObj);
// console.log(clonedObj);
//? Deep clone of originalObj
// console.log(clonedObj === originalObj);
//? false (different references)
// console.log(clonedObj.details === originalObj.details);
//? false (different references)

//? Example 2: Deep cloning an object with circular references
const circularObj = {};
circularObj.self = circularObj;

const clonedCircularObj = deepClone(circularObj);
// console.log(clonedCircularObj);
//? Should show an object with a self-reference
// console.log(clonedCircularObj.self === clonedCircularObj);
//? true (the clone maintains the circular reference)

//! JavaScript function that flattens a deeply nested array. This function will take an array that may contain nested arrays at various levels and return a new array with all elements flattened into a single level. Additionally, the function will allow you to specify the depth of flattening.
function flattenArray(arr, depth = Infinity) {
  const result = [];

  // Helper function to recursively flatten the array
  function flatten(currentArr, currentDepth) {
    for (let i = 0; i < currentArr.length; i++) {
      const item = currentArr[i];

      // If the item is an array and the current depth is less than the specified depth
      if (Array.isArray(item) && currentDepth < depth) {
        flatten(item, currentDepth + 1); // Recursively flatten the nested array
      } else {
        result.push(item); // Push non-array elements or when depth limit is reached
      }
    }
  }

  flatten(arr, 0); // Start flattening from depth 0
  return result;
}

// Example 1: Completely flattening a deeply nested array
const nestedArray1 = [1, [2, [3, [4, [5]]]], 6];
const flattened1 = flattenArray(nestedArray1);
// console.log(flattened1);
//? Output: [1, 2, 3, 4, 5, 6]

// Example 2: Flattening to a specified depth
const nestedArray2 = [1, [2, [3, [4, [5]]]], 6];
const flattened2 = flattenArray(nestedArray2, 2);
// console.log(flattened2);
//? Output: [1, 2, 3, [4, [5]], 6]

// Example 3: Flattening a simple array with no nested arrays
const simpleArray = [1, 2, 3, 4, 5];
const flattened3 = flattenArray(simpleArray);
// console.log(flattened3);
//? Output: [1, 2, 3, 4, 5]

// Example 4: Flattening an array with mixed data types
const mixedArray = [1, ["a", [true, [null]], {}], 42];
const flattened4 = flattenArray(mixedArray);
// console.log(flattened4);
//? Output: [1, 'a', true, null, {}, 42]

//! The Levenshtein distance is a measure of the difference between two sequences, defined as the minimum number of single-character edits (insertions, deletions, or substitutions) required to change one word into the other. This function is useful in applications like spell checkers, DNA sequence analysis, or any scenario where you need to compare the similarity between two strings.
function levenshteinDistance(str1, str2) {
  const len1 = str1.length;
  const len2 = str2.length;

  // Create a 2D array to hold the distances
  const dp = Array.from({ length: len1 + 1 }, () => Array(len2 + 1).fill(0));

  // Initialize the base cases
  for (let i = 0; i <= len1; i++) dp[i][0] = i;
  for (let j = 0; j <= len2; j++) dp[0][j] = j;

  // Fill the DP table
  for (let i = 1; i <= len1; i++) {
    for (let j = 1; j <= len2; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1]; // Characters match, no edit needed
      } else {
        dp[i][j] = Math.min(
          dp[i - 1][j] + 1, // Deletion
          dp[i][j - 1] + 1, // Insertion
          dp[i - 1][j - 1] + 1 // Substitution
        );
      }
    }
  }

  // Return the Levenshtein distance
  return dp[len1][len2];
}

// Example 1: Comparing similar strings
const str1 = "kitten";
const str2 = "sitting";
const distance1 = levenshteinDistance(str1, str2);
// console.log(distance1);
//? Output: 3

// Example 2: Comparing identical strings
const str3 = "flaw";
const str4 = "flaw";
const distance2 = levenshteinDistance(str3, str4);
// console.log(distance2);
//? Output: 0

// Example 3: Comparing completely different strings
const str5 = "book";
const str6 = "back";
const distance3 = levenshteinDistance(str5, str6);
// console.log(distance3);
//? Output: 2

// Example 4: Comparing an empty string with a non-empty string
const str7 = "";
const str8 = "openai";
const distance4 = levenshteinDistance(str7, str8);
// console.log(distance4);
//? Output: 6

//! JavaScript function that generates all possible permutations of a given string. This function will return an array containing every possible rearrangement of the string's characters. This type of function is useful in scenarios like generating anagrams, solving combinatorial problems, or exploring all possible outcomes in a string-based puzzle.
function generatePermutations(str) {
  const results = [];

  // Base case: if the string is empty or contains a single character, return it as the only permutation
  if (str.length <= 1) {
    return [str];
  }

  // Recursive case: iterate through each character in the string
  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    // Avoid generating duplicate permutations
    if (str.indexOf(char) !== i) {
      continue;
    }

    // Generate permutations of the remaining characters
    const remainingChars = str.slice(0, i) + str.slice(i + 1);
    const remainingPermutations = generatePermutations(remainingChars);

    // Prepend the current character to each permutation of the remaining characters
    for (let permutation of remainingPermutations) {
      results.push(char + permutation);
    }
  }

  return results;
}

// Example 1: Generate permutations of a 3-character string
const example1 = "abc";
const permutations1 = generatePermutations(example1);
// console.log(permutations1);
//? Output: ["abc", "acb", "bac", "bca", "cab", "cba"]

// Example 2: Generate permutations of a string with repeating characters
const example2 = "aab";
const permutations2 = generatePermutations(example2);
// console.log(permutations2);
//? Output: ["aab", "aba", "baa"]

// Example 3: Generate permutations of a single-character string
const example3 = "x";
const permutations3 = generatePermutations(example3);
// console.log(permutations3);
//? Output: ["x"]

// Example 4: Generate permutations of an empty string
const example4 = "";
const permutations4 = generatePermutations(example4);
// console.log(permutations4);
//? Output: [""]

//! Create Hello world function - Higher Order Function

function createHelloWorld() {
  return function (message) {
    console.log(message);
  };
}

const f = createHelloWorld();
// f('Hello World')

//! JavaScript function that deep clones an object. This function will handle nested objects, arrays, and even special data types like Date and RegExp. Deep cloning is essential when you want to create a completely independent copy of an object, ensuring that changes to the cloned object do not affect the original.

function deepClone(obj, hash = new WeakMap()) {
  // Handle null, undefined, or non-object values (primitives)
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  // Handle circular references
  if (hash.has(obj)) {
    return hash.get(obj);
  }

  // Handle Date
  if (obj instanceof Date) {
    return new Date(obj);
  }

  // Handle RegExp
  if (obj instanceof RegExp) {
    return new RegExp(obj);
  }

  // Handle Arrays
  if (Array.isArray(obj)) {
    const arrCopy = [];
    hash.set(obj, arrCopy);
    for (let i = 0; i < obj.length; i++) {
      arrCopy[i] = deepClone(obj[i], hash);
    }
    return arrCopy;
  }

  // Handle Objects
  const objCopy = {};
  hash.set(obj, objCopy);
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      objCopy[key] = deepClone(obj[key], hash);
    }
  }
  return objCopy;
}

// Example 1: Deep clone a simple object
const original1 = {
  name: "Alice",
  age: 25,
  address: { city: "Wonderland", zip: "12345" },
};
const clone1 = deepClone(original1);
clone1.address.city = "New Wonderland";
// console.log(original1.address.city);
//? Output: "Wonderland"
// console.log(clone1.address.city);
//? Output: "New Wonderland"

// Example 2: Deep clone an array with nested objects
const original2 = [
  { id: 1, value: "a" },
  { id: 2, value: "b" },
  [3, 4, { id: 5, value: "c" }],
];
const clone2 = deepClone(original2);
clone2[2][2].value = "new value";
// console.log(original2[2][2].value);
//? Output: "c"
// console.log(clone2[2][2].value);
//? Output: "new value"

// Example 3: Deep clone an object with circular references
const original3 = { name: "Bob" };
original3.self = original3; // Circular reference
const clone3 = deepClone(original3);
// console.log(clone3.self === clone3);
//? Output: true
// console.log(clone3.self === original3);
//? Output: false

// Example 4: Deep clone an object with Date and RegExp
const original4 = {
  date: new Date(),
  regex: /abc/gi,
};
const clone4 = deepClone(original4);
// console.log(clone4.date === original4.date);
//? Output: false (different Date objects)
// console.log(clone4.regex === original4.regex);
//? Output: false (different RegExp objects)

//!  A function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.
const expect = function (val) {
  return {
    toBe: function (secVal) {
      if (val === secVal) {
        return true;
      } else {
        throw new Error("Not Equal");
      }
    },
    notToBe: function (thirdVal) {
      if (val !== thirdVal) {
        return true;
      } else {
        throw new Error("Equal");
      }
    },
  };
};

//? Example usage
//* Case 1: Expect the value to be equal
try {
  // console.log(expect(5).toBe(5));
  //? Output: true
} catch (e) {
  // console.log(e.message);
  //? Won't run because values are equal
}

//* Case 2: Expect the value to not be equal
try {
  // console.log(expect(5).notToBe(3));
  //? Output: true
} catch (e) {
  // console.log(e.message);
  //? Won't run because values are not equal
}

//* Case 3: Expect the value to be equal, but it's not
try {
  // console.log(expect(5).toBe(3));
  //? Throws an error: "Not Equal"
} catch (e) {
  // console.log(e.message);
  //? Output: "Not Equal"
}

//* Case 4: Expect the value to not be equal, but it is
try {
  // console.log(expect(5).notToBe(5));
  //? Throws an error: "Equal"
} catch (e) {
  // console.log(e.message);
  //? Output: "Equal"
}

//! Counter function
var createCounter = function (init) {
  let current = init; // Store the current value of the counter

  return {
    increment: function () {
      return ++current; // Increment by 1 and return the new value
    },
    decrement: function () {
      return --current; // Decrement by 1 and return the new value
    },
    reset: function () {
      current = init; // Reset the counter to its initial value
      return current;
    },
  };
};

//! Usage
const counter = createCounter(10);

// console.log(counter.increment());
// Output: 11
// console.log(counter.increment());
// Output: 12
// console.log(counter.decrement());
// Output: 11
// console.log(counter.reset());
// Output: 10
// console.log(counter.decrement());
// Output: 9

//! This function, map, creates a new array by applying a given function fn to each element of an input array arr. It iterates over the array, applies the function to each element along with its index, and stores the result in a new array. Finally, it returns the new array with the transformed elements.

function map(arr, fn) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(fn(arr[i], i));
  }
  return result;
}

// Примеры использования:

// Пример 1:
const arr1 = [1, 2, 3];
const plusone = function (n) {
  return n + 1;
};
// console.log(map(arr1, plusone));
//? [2, 3, 4]

//? Пример 2:
const arr2 = [1, 2, 3];
const plusI = function (n, i) {
  return n + i;
};
// console.log(map(arr2, plusI));
//? [1, 3, 5]

// Пример 3:
const arr3 = [10, 20, 30];
const constant = function () {
  return 42;
};
// console.log(map(arr3, constant));
//? [42, 42, 42]

//! The filter function creates a new array by including only the elements from the input array arr that satisfy a condition defined by the function fn. It iterates over each element in arr, applies fn to it, and if fn returns true, that element is added to the filteredArr. The function then returns filteredArr.
var filter = function (arr, fn) {
  let filteredArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      filteredArr.push(arr[i]);
    }
  }
  return filteredArr;
};

//! Usage
var arrr = [1, 2, 3, 4, 5];
var isEven = function (n) {
  return n % 2 === 0;
};

var result = filter(arrr, isEven);
// console.log(result);
//? [2, 4]

//! Reduce function using no built in functions
//? it used 64ms of runtime
const reduce = function (nums, fn, init) {
  let val = init;
  nums.forEach((el, index) => {
    val = fn(val, el);
  });
  return val;
};

//? Usage example
let givenArr = [];
let fn = function sum(accum, curr) {
  return 0;
};
let init = 25;

// console.log(reduce(givenArr, fn, init));

//! This function, compose, takes an array of functions and returns a new function. When the returned function is called with an argument x, it applies the functions in the array from right to left, passing the result of each function as the input to the next.
var compose = (functions) => (x) => {
  //* reduceRight: It processes the functions array starting from the last function, applying each one to the result of the previous function, with the initial value being x.
  return functions.reduceRight((result, func) => func(result), x);
};

//? Example usage
// Define some simple functions
const add1 = (x) => x + 1;
const square = (x) => x * x;
const double = (x) => 2 * x;

// Compose the functions
const composedFunction = compose([add1, square, double]);

// Apply the composed function to a value
// const result = composedFunction(4);
// First: double(4) => 8, square(8) => 64, add1(64) => 65

// console.log(result);
//? Output: 65

//! This function `once(fn)` ensures that a given function `fn` is called only once. On the first invocation, it executes `fn` with the provided arguments and returns the result. Any subsequent calls return `undefined` without invoking `fn` again. This is useful for scenarios where an operation should only happen a single time.
var once = function (fn) {
  let called = false,
    result;
  return function (...args) {
    return called ? undefined : ((called = true), (result = fn(...args)));
  };
};

let lolo = once((a, b, c) => a + b + c);
const calls = [
  [5, 7, 4],
  [2, 3, 6],
  [4, 6, 8],
];
// console.log(lolo(...calls));

//! This memoize function optimizes another function by caching its results to avoid repeated calculations with the same arguments. It works by storing previous results in a Map, using a stringified version of the arguments as the key. If the function is called again with the same arguments, the cached result is returned instead of recalculating. The getCallCount function tracks how many times the original function has been called (i.e., when the result wasn't in the cache).
function memoize(fn) {
  let cache = new Map(); // Используем Map для быстрого доступа к кэшированным данным
  let callCount = 0; // Счетчик вызовов оригинальной функции

  return {
    memoizedFn: function (...args) {
      // Генерируем ключ для кэша
      const key = args.join(",");

      // Если результат уже есть в кэше, возвращаем его
      if (cache.has(key)) {
        return cache.get(key);
      }

      // Если результат отсутствует, вызываем функцию
      const result = fn(...args);
      cache.set(key, result); // Сохраняем результат в кэше
      callCount++; // Увеличиваем счетчик вызовов
      return result;
    },
    getCallCount: function () {
      return callCount; // Возвращаем количество реальных вызовов функции
    },
  };
}

//? Example usage
const sum = (a, b) => a + b;
const memoizedSum = memoize(sum);

// console.log(memoizedSum.memoizedFn(2, 2));
// 4
// console.log(memoizedSum.memoizedFn(2, 2));
// 4 (из кэша)
// console.log(memoizedSum.getCallCount());
// 1

// console.log(memoizedSum.memoizedFn(1, 2));
// 3
// console.log(memoizedSum.getCallCount());
// 2

//! Add two promises func
var addTwoPromises = async function (promise1, promise2) {
  const fir = await promise1;
  const sec = await promise2;
  return fir + sec;
};

const promise1 = new Promise((resolve) => setTimeout(() => resolve(2), 20));
const promise2 = new Promise((resolve) => setTimeout(() => resolve(5), 60));
// console.log(addTwoPromises(promise1, promise2));

function yandexFormers(N, staff, K) {
  // Ваш код
  // return mapped array
  // return sum of k elemenets
  const filtered = staff.sort((a, b) => b - a);
  const res = filtered.slice(0, K);
  const x = res.reduce((a, c) => a + c);
  return x;
  // x - максимальный уровень Яндексформера
}

// const workers = [15, 4, 0, 8, 7];
// yandexFormers(workers.length, workers, 4);

var cancellable = function (fn, args, t) {
  // Устанавливаем таймер на вызов функции fn через t миллисекунд
  const timeoutId = setTimeout(() => {
    fn(...args); // Вызываем fn с аргументами после задержки
  }, t);

  // Возвращаем функцию отмены, которая может быть вызвана позже
  return function cancelFn() {
    clearTimeout(timeoutId); // Отменяем выполнение fn, если эта функция вызвана
  };
};

// console.log(cancellable((x) => x*2, [2], 30))

//! Function using setInterval and clearInterval
var cancellable = function (fn, args, t) {
  // Сразу вызываем функцию fn с аргументами
  fn(...args);

  // Устанавливаем интервал для вызова функции каждые t миллисекунд
  let intervalId = setInterval(() => {
    fn(...args);
  }, t);

  // Возвращаем функцию cancelFn, которая будет вызываться через cancelTimeMs миллисекунд
  return function cancelFn() {
    clearInterval(intervalId);
  };
};

// Пример использования
const cancelFn = cancellable((x) => console.log(x * 2), [4], 35);
setTimeout(cancelFn, 190); // Отменяем через 190 миллисекунд

//! The goal of this function is to create a time-limited version of an asynchronous function. If the original function (fn) completes within a specified time limit (t milliseconds), it returns the result as normal. However, if the function takes too long (exceeds t milliseconds), it rejects with the error "Time Limit Exceeded".
const timeLimit =
  (fn, t) =>
  (...args) =>
    Promise.race([
      fn(...args), // Основная функция
      new Promise(
        (_, reject) => setTimeout(() => reject("Time Limit Exceeded"), t) // Таймер
      ),
    ]);

//? Example usage
const limitedFn = timeLimit(async (n) => {
  await new Promise((res) => setTimeout(res, 100));
  // Simulates a delay of 100ms
  return n * n;
  // Returns the square of the input number
}, 50);
// The time limit is 50 milliseconds

//? limitedFn(5)
// .then((result) => console.log(result))
// This won't be called, since the function takes longer than 50ms
// .catch((error) => console.error(error));
// Expected output: "Time Limit Exceeded"

//! Cache With Time Limit function - a class that allows getting and setting key-value pairs, however a time until expiration is associated with each key.
var TimeLimitedCache = function () {
  this.cache = new Map(); // создаем карту для хранения ключей и значений с временем истечения
};

/**
 * @param {number} key
 * @param {number} value
 * @param {number} duration время до истечения в миллисекундах
 * @return {boolean} если существует не истекший ключ
 */
TimeLimitedCache.prototype.set = function (key, value, duration) {
  const currentTime = Date.now(); // текущее время
  const isExisting = this.cache.has(key); // проверяем, есть ли уже ключ в кэше

  if (isExisting) {
    const entry = this.cache.get(key);
    // Проверяем, не истек ли срок действия ключа
    if (entry.expirationTime > currentTime) {
      // Ключ еще действителен
      clearTimeout(entry.timeoutId); // отменяем старый таймер
    }
  }

  // Устанавливаем новый таймер и обновляем кэш с новым значением и временем истечения
  const timeoutId = setTimeout(() => {
    this.cache.delete(key); // удаляем ключ, когда истекает время
  }, duration);

  // Обновляем или создаем запись
  this.cache.set(key, {
    value: value,
    expirationTime: currentTime + duration,
    timeoutId: timeoutId,
  });

  // Возвращаем true, если ключ существовал и был действителен, иначе false
  return isExisting && this.cache.get(key).expirationTime > currentTime;
};

/**
 * @param {number} key
 * @return {number} значение, связанное с ключом или -1, если ключ не найден или истек
 */
TimeLimitedCache.prototype.get = function (key) {
  const currentTime = Date.now();

  if (this.cache.has(key)) {
    const entry = this.cache.get(key);
    if (entry.expirationTime > currentTime) {
      return entry.value; // возвращаем значение ключа
    }
  }

  return -1; // если ключ не найден или его срок действия истек
};

/**
 * @return {number} количество не истекших ключей
 */
TimeLimitedCache.prototype.count = function () {
  const currentTime = Date.now();
  let count = 0;

  // Проходим по каждому элементу и считаем только те, у которых время не истекло
  this.cache.forEach((entry) => {
    if (entry.expirationTime > currentTime) {
      count++;
    }
  });

  return count;
};

//? Usage
/**
 * Пример использования:
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */

//! Given a positive integer num, split it into two non-negative integers num1 and num2 such that:
//* The concatenation of num1 and num2 is a permutation of num.
//* In other words, the sum of the number of occurrences of each digit in num1 and num2 is equal to the number of occurrences of that digit in num.
//* num1 and num2 can contain leading zeros.
//* Return the minimum possible sum of num1 and num2.

//? It is guaranteed that num does not contain any leading zeros
//? The order of occurrence of the digits in num1 and num2 may differ from the order of occurrence of num
function minimumSum(num) {
  // Convert the number to an array of sorted digits
  const digits = String(num)
    .split("")
    .map(Number)
    .sort((a, b) => a - b);

  // Form two numbers by alternating digits
  let num1 = 0,
    num2 = 0;
  digits.forEach((digit, index) => {
    if (index % 2 === 0) {
      num1 = num1 * 10 + digit;
    } else {
      num2 = num2 * 10 + digit;
    }
  });

  return num1 + num2;
}

//? Example usage
// console.log(minimumSum(4325)); // Output: 59
// console.log(minimumSum(687)); // Output: 75
