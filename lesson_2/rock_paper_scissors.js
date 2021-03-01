const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

function prompt(message) {
  console.log(`=> ${message}`);
}

let answer = '';

do {
  prompt(`Choose one: 'r' for ${VALID_CHOICES[0]}, 'p' for ${VALID_CHOICES[1]}, 'sc' for ${VALID_CHOICES[2]}, 'l' for ${VALID_CHOICES[3]}, 's' for ${VALID_CHOICES[4]}`);
  let choice = readline.question();
  
  let initialOfChoicesInArr = [];
  
  for (let i = 0; i < VALID_CHOICES.length; i++) { 
    if (VALID_CHOICES[i] === 'scissors') {
      initialOfChoicesInArr.push(VALID_CHOICES[i].charAt(0) + VALID_CHOICES[i].charAt(1));
    } else {
      initialOfChoicesInArr.push(VALID_CHOICES[i].charAt(0));
    }
    console.log(initialOfChoicesInArr);
  }

  
  while (!initialOfChoicesInArr.includes(choice)) {
      prompt("That's not a valid choice");
      choice = readline.question();
  };
  
  switch(choice) {
    case 'r':
      choice = 'rock';
      break;
    case 'p':
      choice = 'paper';
      break;
    case 'sc':
      choice = 'scissors';
      break;
    case 'l':
      choice = 'lizard';
      break;
    case 's':
      choice = 'spock';
      break;
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];
  
  prompt(`You chose ${choice}, computer chose ${computerChoice}`);
  
  if ((choice === 'rock' && computerChoice === 'scissors') ||
      (choice === 'paper' && computerChoice === 'rock') ||
      (choice === 'scissors' && computerChoice === 'paper') ||
      (choice === 'rock' && computerChoice === 'lizard') ||
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
