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

const nums = [1,2,3,1];

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


console.log(checkNeighborhoodDuplicates(nums, 1));

