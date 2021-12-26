import { deleteDuplicateElements } from "./deleteDuplicateNumbers.js";

/**
 * * Write a Java program to find all pairs of elements in an array whose sum is equal to a specified number.
 * ?
 */
const number = 18;
const sumNum = [1, 20, 28, 19, 12, 3, 10, 8, 9, 9, 0, 0, 31, 11, 7, 6];


const deleteBiggerNumbers = (num, arr) => {
    return arr.filter((element) => {
        if (element <= num) {
            return element;
        }
    })
};

const sumTwoNumbersEqualToOther = (num, arr) => {
    // DELETE DUPLICATE NUMBERS
    const filterArr = deleteDuplicateElements(arr)
    // DELETE BIGGER NUMBERS OF THE NUMBER WE WANT
    let possibleCombinations = deleteBiggerNumbers(num, filterArr);
    const sumNumbers = [];

    while (possibleCombinations.length > 0) {
        for (let j = 0; j < possibleCombinations.length; j++) {
            if (possibleCombinations[0] + possibleCombinations[j] === num) {
                sumNumbers.push({
                    num1: possibleCombinations[0],
                    num2: possibleCombinations[j],
                });
            }
        }
        // DELETE THE FIRST NUMBER IN THE ARRAY
        possibleCombinations = possibleCombinations.splice(1, possibleCombinations.length)
    }

    return sumNumbers;
};

console.log(sumTwoNumbersEqualToOther(number, sumNum))
