let readline = require('readline-sync');

let prompt = message => {
    console.log(`=> ${message}`);
} 

// THE BOARD
let displayBoard = (board) => {
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
}

function initializeBoard() {
    let board = {};

    for (let square = 1; square <= 9; square++) {
        board[String(square)] = ' ';
    }

    return board;
}

let board = initializeBoard();
console.log(board);
console.log(displayBoard(board));

function playerChoosesSquare(board) {
    let square;
    let emptySquares = Object.keys(board).filter(key => board[key] === ' ');

    while (true) {
        prompt(`Choose a square ${emptySquares.join(', ')}:`);
        square = readline.question().trim();

        if (emptySquares.includes(square)) break;
            prompt("Sorry, that's not a valid choice.");
    }

    board[square] = 'X';
}

console.log(playerChoosesSquare(board));
console.log(displayBoard(board));