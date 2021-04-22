// Write a program that prompts the user for two positive integers, and then prints the results of the following operations on those two numbers: addition, subtraction, product, quotient, remainder, and power. Do not worry about validating the input.

let readlineSync = require('readline-sync');

let firstNum = Number(readlineSync.question('Enter the first number: '));
let secondNum = Number(readlineSync.question('Enter the second number: '));

printResult = () => {
    console.log(firstNum + secondNum);
    console.log(firstNum - secondNum);
    console.log(firstNum * secondNum);
    console.log(firstNum / secondNum);
    console.log(firstNum % secondNum);
    console.log(firstNum ** secondNum);
}

printResult();