// Given the following data structure, sort the array so that the sub-arrays are ordered based on the sum of the odd numbers that they contain.

let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

console.log(arr.sort((a, b) => {
    let oddSumA = a.filter(num => num % 2 === 1)
        .reduce((sum, next) => sum + next);
    let oddSumB = b.filter(num => num % 2 === 1)
        .reduce((sum, next) => sum + next);

    return oddSumA - oddSumB;
}));


// 1. loop through the array
// 2. loop through the inner arrays
// 3. find odd numbers
// 4. add the odd numbers together
// 5. sort the arr in ascending order based on the sum of the odd numbers 