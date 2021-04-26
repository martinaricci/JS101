// Double Doubles
// --------------------

// input: number
// output: number
// make the number into strings of digits
// find the middle index of the array and check the numbers before and after that middle index
// if the numbers before it are equal to the numbers after it, return the same number
// else multiply the number by 2

let twice = num => {
    let numToStrings = num.toString().split('');
    let firstHalf = '';
    let secondHalf = '';
    let middleIdx = numToStrings.length / 2;
    for (let idx = 0; idx < numToStrings.length; idx++) {
        firstHalf.length !== middleIdx ? firstHalf += numToStrings[idx] : secondHalf += numToStrings[idx];
    }
    firstHalf === secondHalf ? console.log(num) : console.log(num * 2);
}

twice(37);          // 74
twice(44);          // 44
twice(334433);      // 668866
twice(444);         // 888
twice(107);         // 214
twice(103103);      // 103103
twice(3333);        // 3333
twice(7676);        // 7676