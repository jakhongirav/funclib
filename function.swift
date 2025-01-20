//! Given a positive integer num, split it into two non-negative integers num1 and num2 such that:
//* The concatenation of num1 and num2 is a permutation of num.
//* In other words, the sum of the number of occurrences of each digit in num1 and num2 is equal to the number of occurrences of that digit in num.
//* num1 and num2 can contain leading zeros.
//* Return the minimum possible sum of num1 and num2.

//? It is guaranteed that num does not contain any leading zeros
//? The order of occurrence of the digits in num1 and num2 may differ from the order of occurrence of num
import Foundation

func minimumSum(_ num: Int) -> Int {
    // Convert the number to an array of sorted digits
    let digits = Array(String(num)).compactMap { $0.wholeNumberValue }.sorted()

    // Form two numbers by alternating digits
    let (num1, num2) = digits.enumerated().reduce((0, 0)) { partialResult, element in
        let (index, digit) = element
        if index % 2 == 0 {
            return (partialResult.0 * 10 + digit, partialResult.1)
        } else {
            return (partialResult.0, partialResult.1 * 10 + digit)
        }
    }

    return num1 + num2
}

//? Example usage
// print(minimumSum(4325))  // Output: 59
// print(minimumSum(687))  // Output: 75
