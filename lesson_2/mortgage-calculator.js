const readline = require('readline-sync');

function isInvalidNumber(number) {
  return number.toString().trim() === '' ||
         Number(number) < 0   ||
         Number.isNaN(Number(number));
}

while (true) {
  let loanAmount = Number(readline.question('How much do you want to borrow?: '));
  console.log(loanAmount);
  
  while (isInvalidNumber(loanAmount)) {
    console.log('Must be a valid positive number');
    loanAmount = Number(readline.question('How much do you want to borrow?: '));
  }
  
  let APR = Number(readline.question('What is the Annual Percentage Rate? \nFor example: choose 5 for 5%: '));
  let APRInFranctional = APR / 100
  console.log(APRInFranctional);
  
  while (isInvalidNumber(APR)) {
    console.log('Must be a valid positive number');
    APR = Number(readline.question('What is the Annual Percentage Rate? \nFor example: choose 5 for 5%: '));
  }
  
  let years = Number(readline.question('What is the loan duration in years?: '));
  console.log(years);
  
  while (isInvalidNumber(years)) {
    console.log('Must be a valid positive number');
    years = Number(readline.question('What is the loan duration in years?: '));
  }
  
  let months = years * 12;
  let monthlyInterestRate = APRInFranctional / 12;
  
  let monthlyPayment = loanAmount * (monthlyInterestRate / (1 - Math.pow((1 + monthlyInterestRate), (-months))));
  
  console.log(`Your monthly payment will be: ${Number(monthlyPayment.toFixed(2))}`);
  
  let askAnotherCalc = readline.question("Would you like to do another calculation? \nType 'y' for yes, 'n' for no: ");

  if (askAnotherCalc === 'n') break;
}