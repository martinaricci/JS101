// Create a simple tip calculator. The program should prompt for a bill amount and a tip rate. The program must compute the tip, and then log both the tip and the total amount of the bill to the console. You can ignore input validation and assume that the user will enter numbers.

var readlineSync = require('readline-sync');

let billAmount = readlineSync.question('What is the bill amount? ');
let tipRate = readlineSync.question('What is the tip rate? ');

let tip = billAmount * (tipRate / 100);
let total = (parseFloat(billAmount) + parseFloat(tip));

console.log(`The tip is $${tip}`);
console.log(`The total is $${total}`);