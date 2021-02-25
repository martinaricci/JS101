const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

function prompt(message) {
  console.log(`=> ${message}`);
}

let answer = '';

do {
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  let choice = readline.question();
  
  while (!VALID_CHOICES.includes(choice)) {
      prompt("That's not a valid chioce");
      choice = readline.question();
  };
  
  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];
  
  prompt(`You chose ${choice}, computer chose ${computerChoice}`);
  
  if ((choice === 'rock' && computerChoice === 'scissors') ||
      (choice === 'paper' && computerChoice === 'rock') ||
      (choice === 'scissors' && computerChoice === 'paper') ||(choice === 'rock' && computerChoice === 'lizard') ||
      (choice === 'lizard' && computerChoice === 'spock')) {
    prompt('You win!');
  } else if ((choice === 'rock' && computerChoice === 'paper') ||
             (choice === 'paper' && computerChoice === 'scissors') ||
             (choice === 'scissors' && computerChoice === 'rock') ||
             (choice === 'scissors' && computerChoice === 'spock') ||
             (choice === 'spock' && computerChoice === 'lizard')) {
    prompt('Computer wins!');
  } else {
    prompt("It's a tie");
  }
  
  prompt('Do you want to play again (y/n)?');
  answer = readline.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }

} while (answer[0] == 'y');
