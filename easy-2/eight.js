// Write a function that returns an Array that contains every other element of an Array that is passed in as an argument. The values in the returned list should be those values that are in the 1st, 3rd, 5th, and so on elements of the argument Array.

oddities = arr => {
    let res = []
    for (let i = 0; i < arr.length; i += 2) {
        res.push(arr[i]);
    }
    return res;
}

console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []


// Write a companion function that returns the 2nd, 4th, 6th, and so on elements of an array.

// Try to solve this exercise in a different way.

evenIndex = arr => {
    let evens = arr.filter(index => !arr[index] % 2 == 0);
    return evens;
}

console.log(evenIndex([2, 3, 4, 5, 6])); // logs [3, 5]
console.log(evenIndex([1, 2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(evenIndex(["abc", "def"])); // logs ['def']
console.log(evenIndex([123]));
console.log(evenIndex([]));
