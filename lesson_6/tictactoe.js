let readline = require('readline-sync');

let prompt = message => {
  console.log(`=> ${message}`);
};

const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = '0';
const WINNING_SCORE = 5;
const PLAYERS = ['player', 'computer'];
const PLAY_AGAIN_VALID_ANSWERS = ['yes', 'y', 'no', 'n'];
const WINNING_LINES = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7]
];
let playAgain;

let displayBoard = (board) => {
  console.clear();
  console.log(`You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}`);

  console.log('');
  console.log('     |     |');
  console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}`);
  console.log('     |     |');
  console.log('');
};

let greetAndChoosePlayer = () => {
  console.log('** Welcome to Tic Tac Toe! :) **');
  console.log('Wins who first scores 5 points. Good luck!');
  console.log(`Who should start first: ${PLAYERS[0]} or ${PLAYERS[1]}?`);
  return readline.question();
};

let initializeBoard = () => {
  let board = {};

  for (let square = 1; square <= 9; square++) {
    board[String(square)] = INITIAL_MARKER;
  }

  return board;
};

let emptySquares = board => {
  return Object.keys(board).filter(key => board[key] === INITIAL_MARKER);
};

let joinOr = (arr, delimiter, joinWord) => {
  if (arr.length === 0) {
    return '';
  } else if (arr.length === 1) {
    return arr.join();
  } else if (arr.length === 2) {
    return arr.join(` ${joinWord} `);
  } else {
    return arr.slice(0, -1).join(delimiter) + ' ' + joinWord + ' ' + arr.slice(-1);
  }
};

let playerChoosesSquare = board => {
  let square;

  while (true) {
    prompt(`Choose a square ${joinOr(emptySquares(board), ', ', 'or')}:`);
    square = readline.question().trim();

    if (emptySquares(board).includes(square)) break;
    prompt("Sorry, that's not a valid choice.");
  }

  board[square] = HUMAN_MARKER;
};

let findSquareAtRisk = (board, marker) => {
  let unoccupiedSquare;
  for (let index = 0; index < WINNING_LINES.length; index++) {
    let line = WINNING_LINES[index];
    if (line.filter(square => board[square] === marker).length === 2) {
      unoccupiedSquare = line.find(square => board[square] === ' ');
      if (unoccupiedSquare !== undefined) {
        return unoccupiedSquare;
      }
    }
  }

  return null;
};

let findSquareFive = board => {
  let squareFive;
  for (let index = 0; index < WINNING_LINES.length; index++) {
    let line = WINNING_LINES[index];
    squareFive = line.find(square => square === 5);
    if (board[squareFive] === INITIAL_MARKER) {
      return squareFive;
    }
  }

  return null;
};

let computerChoosesSquare = board => {
  let square;
  let squareAtRiskForHuman = findSquareAtRisk(board, HUMAN_MARKER);
  let squareToAttackHuman = findSquareAtRisk(board, COMPUTER_MARKER);
  let emptySquareFive = findSquareFive(board);
  square = squareToAttackHuman || squareAtRiskForHuman || emptySquareFive;
  // console.log(square)

  if (square === null) {
    let randomIndex = Math.floor(Math.random() * emptySquares(board).length);

    square = emptySquares(board)[randomIndex];
  }

  board[square] = COMPUTER_MARKER;
};

let boardFull = board => {
  return emptySquares(board).length === 0;
};

let initializeScore = () => {
  let score = {
    player: 0,
    computer: 0
  };

  return score;
};

let detectWinner = board => {
  for (let line = 0; line < WINNING_LINES.length; line++) {
    let [sq1, sq2, sq3] = WINNING_LINES[line];

    if (
      board[sq1] === HUMAN_MARKER &&
      board[sq2] === HUMAN_MARKER &&
      board[sq3] === HUMAN_MARKER
    ) {
      return 'You';
    } else if (
      board[sq1] === COMPUTER_MARKER &&
      board[sq2] === COMPUTER_MARKER &&
      board[sq3] === COMPUTER_MARKER
    ) {
      return 'Computer';
    }
  }
  return false;
};

let someoneWon = board => {
  return detectWinner(board);
};

let resetScores = (score) => {
  score[PLAYERS[0]] = 0;
  score[PLAYERS[1]] = 0;
};

let isGrandWinner = (score) => {
  if (score[PLAYERS[0]] === WINNING_SCORE) {
    prompt('YOU ARE THE GRAND WINNER');
  } else if (score[PLAYERS[1]] === WINNING_SCORE) {
    prompt('COMPUTER IS THE GRAND WINNER');
  }
};

let isValidAnswer = (arr) => {
  return arr.includes(playAgain.toLowerCase() || playAgain.toLowerCase()[0]);
};

let chooseSquare = (board, currentPlayer) => {
  if (currentPlayer === PLAYERS[0]) {
    playerChoosesSquare(board);
  } else if (currentPlayer === PLAYERS[1]) {
    computerChoosesSquare(board);
  }
};

let alternatePlayer = currentPlayer => {
  if (currentPlayer === PLAYERS[0]) {
    currentPlayer = PLAYERS[1];
  } else if (currentPlayer === PLAYERS[1]) {
    currentPlayer = PLAYERS[0];
  }
  return currentPlayer;
};

// ----------------------
while (true) {
  console.clear();
  let currentPlayer;
  currentPlayer = greetAndChoosePlayer();
  console.log(currentPlayer);

  while (currentPlayer !== PLAYERS[0] && currentPlayer !== PLAYERS[1]) {
    console.log(`Please choose between ${PLAYERS[0]} and ${PLAYERS[1]}`);
    currentPlayer = readline.question();
  }

  let score = initializeScore();

  while ((score[PLAYERS[0]] < 5) && (score[PLAYERS[1]] < 5)) {
    let board = initializeBoard();
    let turn = currentPlayer;

    while (true) {
      displayBoard(board);
      chooseSquare(board, turn);
      turn = alternatePlayer(turn);
      console.log(turn);
      if (someoneWon(board) || boardFull(board)) break;
    }

    if (someoneWon(board)) {
      if (detectWinner(board) === 'You') {
        score[PLAYERS[0]] += 1;
      } else {
        score[PLAYERS[1]] += 1;
      }
      displayBoard(board);
      prompt(`${detectWinner(board)} won this round.`);
    } else {
      displayBoard(board);
      prompt('It\'s a tie');
    }

    console.log('----- CURRENT SCORE -----');
    prompt(`You: ${score[PLAYERS[0]]}`);
    prompt(`Computer: ${score[PLAYERS[1]]}`);
    isGrandWinner(score);

    if ((score[PLAYERS[0]] < 5) && (score[PLAYERS[1]] < 5)) {
      prompt("Press 'Enter' to play again");
      readline.question();
    }
  }

  resetScores(score);
  prompt('Would you like to play a new match? (yes or no)');
  playAgain = readline.question();

  while (!isValidAnswer(PLAY_AGAIN_VALID_ANSWERS)) {
    prompt('Please respond with yes or no (or y/n)');
    playAgain = readline.question();
  }
  if (playAgain === 'n' || playAgain === 'no') break;
}

console.clear();
prompt('Thanks for playing Tic Tac Toe!');