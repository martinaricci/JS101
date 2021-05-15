// Searching 101

let readlineSync = require('readline-sync');

let number = 0;
let numberChosen;
let numberSuffix = '';
let numbersChosen = [];

while (number < 6 ) {
    number += 1;

    switch (number) {
        case '1':
            numberSuffix = 'st';
            break;
        case '2':
            numberSuffix = 'nd';
            break;
        case '3':
            numberSuffix = 'rd';
            break;
        default:
            numberSuffix = 'th';
    }
    
    numberChosen = readlineSync.question(`Enter the ${number}${numberSuffix} number: `);
    console.log(numberChosen);
    numbersChosen.push(Number(numberChosen));
}

let lastNumber = numbersChosen[numbersChosen.length - 1];
numbersChosen.pop();

if (numbersChosen.includes(lastNumber)) {
    console.log(`The number ${lastNumber} appears in ${numbersChosen.join(', ')}`);
} else {
    console.log(`The number ${lastNumber} does not appear in ${numbersChosen.join(', ')}`);
}