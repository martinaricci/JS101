const readline = require('readline-sync');
const CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
const VALID_CHOICES = ['r', 'p', 'sc', 'l', 's'];

function prompt(message) {
  console.log(`=> ${message}`);
}

let answer = '';
let yourWins = 0;
let computerWins = 0;

let displayResults = (yourWins, computerWins) => {
  if (yourWins === 5) {
    console.log('You are the grand winner');
  } else if (computerWins === 5) {
    console.log("The computer is the grand winner");
  }
};

let displayWinners = (choice, computerChoice) => {
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
};

while (!((yourWins === 5) || (computerWins === 5))) {
  prompt(`Choose one: '${VALID_CHOICES[0]}' for ${CHOICES[0]}, '${VALID_CHOICES[1]}' for ${CHOICES[1]}, '${VALID_CHOICES[2]}' for ${CHOICES[2]}, '${VALID_CHOICES[3]}' for ${CHOICES[3]}, '${VALID_CHOICES[4]}' for ${CHOICES[4]}`);
  let choice = readline.question();

  while (!VALID_CHOICES.includes(choice)) {
    prompt("That's not a valid choice");
    choice = readline.question("Please re-enter your choice: ");
  }

  if (VALID_CHOICES.includes(choice)) {
    let index = VALID_CHOICES.indexOf(choice);
    choice = CHOICES[index];
    console.log(choice);
  }

  let randomIndex = Math.floor(Math.random() * CHOICES.length);
  let computerChoice = CHOICES[randomIndex];

  prompt(`You chose ${choice}, computer chose ${computerChoice}`);
  displayWinners(choice, computerChoice);

  if (!((yourWins === 5) || (computerWins === 5))) {

    prompt('Do you want to play again (y/n)?');
    answer = readline.question().toLowerCase();
    while (answer[0] !== 'n' && answer[0] !== 'y') {
      prompt('Please enter "y" or "n".');
      answer = readline.question().toLowerCase();
    }
    if (answer === 'n') {
      break;
    }
  }
}