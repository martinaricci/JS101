const readline = require('readline-sync');

function isInvalidNumber(number) {
  return number.toString().trim() === '' ||
         Number(number) < 0   ||
         Number.isNaN(Number(number));
}

function isNotPositiveInteger(number) {
  return !Number.isInteger(number);
}

let answer = 'y';

while (answer === 'y') {
  let loanAmount = readline.question('How much do you want to borrow?: ');
  // if the user types $ sign in front of the amount remove it from the string 
  if (loanAmount[0] === '$') {
    loanAmount = loanAmount.substring(1);
  }
  //  convert the string into a number
  loanAmount = Number(loanAmount);
  console.log(`$${loanAmount}`);

  while (isInvalidNumber(loanAmount)) {
    console.log('Must be a valid positive number');
    loanAmount = Number(readline.question('How much do you want to borrow?: '));
  }

  let APR = readline.question('What is the Annual Percentage Rate?: ');
  // if the user types $ sign in front of the amount remove it from the string
  if (APR[APR.length - 1] === '%') {
    APR = APR.slice(0, -1);
  }
  //  convert the string into a number
  APR = Number(APR);
  console.log(`${APR}%`);
  let APRInFranctional = APR / 100;
  console.log(APRInFranctional);

  while (isInvalidNumber(APR)) {
    console.log('Must be a valid positive number');
    APR = Number(readline.question('What is the Annual Percentage Rate?: '));
  }

  let years = Number(readline.question('What is the loan duration in years?: '));
  console.log(years);

  while (isInvalidNumber(years)) {
    console.log('Must be a valid positive number');
    years = Number(readline.question('What is the loan duration in years?: '));
  }

  while (isNotPositiveInteger(years)) {
    console.log('The loan duration must be at least one year.');
    years = Number(readline.question('What is the loan duration in years?: '));
    console.log(years)
  }

  let months = years * 12;
  let monthlyInterestRate = APRInFranctional / 12;
  let monthlyPayment = loanAmount * (monthlyInterestRate / (1 - Math.pow((1 + monthlyInterestRate), (-months))));
  if (APR === 0) {
    monthlyPayment = loanAmount / months;
  }

  console.log(`Your monthly payment will be: $${Number(monthlyPayment.toFixed(2))}`);

  answer = readline.question("Would you like to do another calculation? \nType 'y' for yes, 'n' for no: ");
  
  if (answer === 'n') {
    break;
  } else if (answer !== 'y') {
    console.log('Please give a valid answer');
    answer = readline.question("Would you like to do another calculation? \nType 'y' for yes, 'n' for no: ");
  }
}