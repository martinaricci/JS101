// Given the following data structure, return a new array with the same structure, but with the subarrays ordered -- alphabetically or numerically as appropriate -- in ascending order.
let arr = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']]; 

console.log(arr.map(nestedArr => {
    let copiedNestedArr = nestedArr.slice();
    copiedNestedArr.forEach(element => {
        if (typeof element === 'string') {
            return copiedNestedArr.sort();
        } else {
            return copiedNestedArr.sort(function(a, b) {
                return a - b;
            });
        }
    });
    return copiedNestedArr;
}));

console.log(arr); // original array didn't change
