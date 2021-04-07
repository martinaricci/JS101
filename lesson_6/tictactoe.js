let readline = require('readline-sync');

let prompt = message => {
  console.log(`=> ${message}`);
};

const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = '0';
const WINNING_SCORE = 5;
let score;

let displayBoard = (board) => {
  console.clear();
  console.log(`You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}`);
  console.log('----- CURRENT SCORES -----')
  prompt(`You: ${score['player']}`);
  prompt(`Computer: ${score['computer']}`);
  
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

let computerChoosesSquare = board => {
  let randomIndex = Math.floor(Math.random() * emptySquares(board).length);

  let square = emptySquares(board)[randomIndex];
  board[square] = COMPUTER_MARKER;
};

let boardFull = board => {
  return emptySquares(board).length === 0;
};

let initializeScore = () => {
  score = {
    player: 0,
    computer: 0
  };

  return score;
};

let detectWinner = board => {
  let winningLines = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
  ];

  for (let line = 0; line < winningLines.length; line++) {
    let [sq1, sq2, sq3] = winningLines[line];

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
  score['player'] = 0;
  score['computer'] = 0;
};

let isGrandWinner = (score) => {
  if (score['player'] === WINNING_SCORE) {
    prompt('YOU ARE THE GRAND WINNER');
  } else if (score['computer'] === WINNING_SCORE) {
    prompt('COMPUTER IS THE GRAND WINNER');
  }
};

// ----------------------
let anotherGame = 'y';

while (anotherGame === 'y') {
  score = initializeScore();

  while ((score['player'] < 5) && (score['computer'] < 5) && anotherGame === 'y') {
    let board = initializeBoard();

    while (true) {
      displayBoard(board);
      playerChoosesSquare(board);
      if (someoneWon(board) || boardFull(board)) break;
      computerChoosesSquare(board);
      if (someoneWon(board) || boardFull(board)) break;
    }

    
    if (someoneWon(board)) {
      if (detectWinner(board) === 'You') {
        score['player'] += 1;
      } else {
        score['computer'] += 1;
      }
      displayBoard(board);
      prompt(`${detectWinner(board)} won this match.`);
    } else {
      displayBoard(board);
      prompt('It\'s a tie');
    }

    isGrandWinner(score);

    if ((score['player'] < 5) && (score['computer'] < 5)) {
      prompt('Play again? (y or n)');
      anotherGame = readline.question().toLowerCase()[0];
    }
  }
  if (anotherGame !== 'y') break;
  resetScores(score);
  prompt('Another round? (y or n)');
  anotherGame = readline.question().toLowerCase()[0];
}

prompt('Thanks for playing Tic Tac Toe!');