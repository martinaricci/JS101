const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

function prompt(message) {
  console.log(`=> ${message}`);
}

let answer = '';
let yourWins = 0;
let computerWins = 0;

let displayResults = (yourWins, computerWins) => {
  if (yourWins === 5) {
    console.log('You are the grand winner');
    // return true;
  } else if (computerWins === 5) {
    console.log("The computer is the grand winner");
    // return true;
  }
};

while (!((yourWins === 5) || (computerWins === 5))) {
  prompt(`Choose one: 'r' for ${VALID_CHOICES[0]}, 'p' for ${VALID_CHOICES[1]}, 'sc' for ${VALID_CHOICES[2]}, 'l' for ${VALID_CHOICES[3]}, 's' for ${VALID_CHOICES[4]}`);
  let choice = readline.question();

  let initialOfChoicesInArr = [];

  for (let idx = 0; idx < VALID_CHOICES.length; idx++) {
    if (VALID_CHOICES[idx] === 'scissors') {
      initialOfChoicesInArr.push(VALID_CHOICES[idx].charAt(0) + VALID_CHOICES[idx].charAt(1));
    } else {
      initialOfChoicesInArr.push(VALID_CHOICES[idx].charAt(0));
    }
  }

  while (!initialOfChoicesInArr.includes(choice)) {
    prompt("That's not a valid choice");
    choice = readline.question("Please re-enter your choice: ");
  }

  switch (choice) {
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
      (choice === 'lizard' && computerChoice === 'spock') ||
      (choice === 'paper' && computerChoice === 'spock') ||
      (choice === 'scissors' && computerChoice === 'lizard') ||
      (choice === 'lizard' && computerChoice === 'paper')) {
    prompt('---- You win! -----');
    yourWins += 1;
  } else if ((choice === 'rock' && computerChoice === 'paper') ||
  (choice === 'paper' && computerChoice === 'scissors') ||
  (choice === 'scissors' && computerChoice === 'rock') ||
  (choice === 'scissors' && computerChoice === 'spock') ||
  (choice === 'spock' && computerChoice === 'lizard')) {
    prompt('----- Computer wins! ------');
    computerWins += 1;
  } else {
    prompt("------ It's a tie -----");
  }

  console.log(`Your wins: ${yourWins}`);
  console.log(`Computer wins: ${computerWins}`);
  displayResults(yourWins, computerWins);
  // console.log(yourWins);
  // console.log(computerWins);

  if (!((yourWins === 5) || (computerWins === 5))) {
    
    prompt('Do you want to play again (y/n)?');
    answer = readline.question().toLowerCase();
    while (answer[0] !== 'n' && answer[0] !== 'y') {
      prompt('Please enter "y" or "n".');
      answer = readline.question().toLowerCase();
    }
    if (answer==='n') { 
      break; 
    }
  }
}