//! Given a positive integer num, split it into two non-negative integers num1 and num2 such that:
//* The concatenation of num1 and num2 is a permutation of num.
//* In other words, the sum of the number of occurrences of each digit in num1 and num2 is equal to the number of occurrences of that digit in num.
//* num1 and num2 can contain leading zeros.
//* Return the minimum possible sum of num1 and num2.

//? It is guaranteed that num does not contain any leading zeros
//? The order of occurrence of the digits in num1 and num2 may differ from the order of occurrence of num
function minimumSum2(num: number): number {
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
