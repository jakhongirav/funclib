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
