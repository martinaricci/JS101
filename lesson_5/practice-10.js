// Perform the same transformation of sorting the subarrays we did in the previous exercise with one difference; sort the elements in descending order.

let arr = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']];

console.log(arr.map(nestedArr => {
    let copiedNestedArr = nestedArr.slice();
    copiedNestedArr.forEach(element => {
        if (typeof element === 'string') {
            return copiedNestedArr.sort().reverse();
        } else {
            return copiedNestedArr.sort(function(a, b) {
                return b - a;
            });
        }
    });
    return copiedNestedArr;
}));

console.log(arr); // original array didn't change