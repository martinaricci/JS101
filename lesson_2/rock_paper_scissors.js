const readline = require('readline-sync');
const CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
const VALID_CHOICES = ['r', 'p', 'sc', 'l', 's'];
const WINNING_COMBOS = {
  rock:     ['scissors', 'lizard'],
  paper:    ['rock',     'spock'],
  scissors: ['paper',    'lizard'],
  lizard:   ['paper',    'spock'],
  spock:    ['rock',     'scissors'],
};

function prompt(message) {
  console.log(`=> ${message}`);
}

let answer = 'y';
let yourWins = 0;
let computerWins = 0;

let displayResults = (yourWins, computerWins) => {
  if (yourWins === 5) {
    console.log('You are the grand winner');
  } else if (computerWins === 5) {
    console.log("The computer is the grand winner");
  }
};

let playerWins = (choice, computerChoice) => {
  return WINNING_COMBOS[choice].includes(computerChoice);
};

let displayWinners = (choice, computerChoice) => {
  if (playerWins(choice, computerChoice)) {
    prompt('---- You win! -----');
    yourWins += 1;
  } else if (choice === computerChoice) {
    prompt('----- It\'s a tie ------');
  } else {
    prompt("------ Computer wins! -----");
    computerWins += 1;
  }

  console.log(`Your wins: ${yourWins}`);
  console.log(`Computer wins: ${computerWins}`);
  displayResults(yourWins, computerWins);
};

let anotherGame = () => {
  if (!((yourWins === 5) || (computerWins === 5))) {
    while (answer !== 'n' && answer !== 'y') {
      answer = readline.question("Would you like to do another calculation? \nType 'y' for yes, 'n' for no: ");
      if (answer !== 'n' && answer !== 'y') {
        console.log('Please give a valid answer.');
      }
    }
  }
  return answer === 'y';
};

do {
  prompt(`Choose one: '${VALID_CHOICES[0]}' for ${CHOICES[0]}, '${VALID_CHOICES[1]}' for ${CHOICES[1]}, '${VALID_CHOICES[2]}' for ${CHOICES[2]}, '${VALID_CHOICES[3]}' for ${CHOICES[3]}, '${VALID_CHOICES[4]}' for ${CHOICES[4]}`);
  let choice = readline.question();

  while (!VALID_CHOICES.includes(choice)) {
    prompt("That's not a valid choice");
    choice = readline.question('Please re-enter your choice: ');
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

  answer = '';
  anotherGame();
} while (anotherGame());