// Write a program that asks the user to enter an integer greater than 0, then asks whether the user wants to determine the sum or the product of all numbers between 1 and the entered integer, inclusive.

var readlineSync = require('readline-sync');

let num = Number(readlineSync.question('Enter a number greater than 0: '));
let operation = readlineSync.question('Enter "s" to compute the sum, or "p" to compute the product: ');

let allNumbers = [];

for (let i = num; i >= 1; i--) {
    allNumbers.push(i);
}

console.log(allNumbers);

if (operation === 's') {    
    let sum = allNumbers.reduce((accumulator, currentValue) => accumulator + currentValue);
    console.log(sum);

} else if (operation === 'p') {
    let product = allNumbers.reduce((accumulator, currentValue) => accumulator * currentValue);
    console.log(product);
} else {
    console.log('Not a valid entry.')
}

