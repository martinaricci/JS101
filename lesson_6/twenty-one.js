// 1. Initialize deck
// 2. Deal cards to player and dealer
// 3. Player turn: hit or stay -
//     repeat until bust or stay
// 4. If player bust, dealer wins.
// 5. Dealer turn: hit or stay -
//     repeat until total >= 17
// 6. If dealer busts, player wins.
// 7. Compare cards and declare winner.

let readline = require('readline-sync');

// const CARD_SUITS = ['c', 'd', 'h', 's'];
const CARDS = ['2', '3', 'K', 'A'];
const CARD_VALUES = {
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  10: 10,
  J: 10,
  Q: 10,
  K: 10,
  A: 11
};
// let deck = [];
let playersCards = [];
let playersCardsValue = [];
let dealersCards = [];
let dealersCardsValues = [];
const WINNING_SCORE = 21;
const MAX_INITIAL_CARDS = 2;
let playersTotal = 0;
let dealersTotal = 0;
let playAgain;
let moveDecision;
const MOVE_DECISION_VALID_ANSWERS = ['h', 's'];
const PLAY_AGAIN_VALID_ANSWERS = ['y', 'n'];

let prompt = message => {
  console.log(`=> ${message}`);
};

// let initializeDeck = () => {

// };

let dealCards = (cards) => {
  return cards[Math.floor(Math.random() * cards.length)];
};

let dealFirstCards = (cards, playerCards) => {
  while (playerCards.length < MAX_INITIAL_CARDS) {
    playerCards.push(dealCards(cards));
  }
};

let dealAnotherCard = (cards, playerCards) => {
  playerCards.push(dealCards(cards));
};

let cardsValues = cardsInHand => {
  return cardsInHand.map(card => {
    if (Object.keys(CARD_VALUES).includes(card)) {
      return CARD_VALUES[card];
    }

    return CARD_VALUES[card];
  });
};

let cardsInHandTotal = (cardsValues) => {
  const reducer = (cardValue, currentCardValue) => cardValue + currentCardValue;
  return cardsValues.reduce(reducer);
};

let calculateAcesAndTotal = cardsInHand => {
  let total = cardsInHandTotal(cardsInHand);
  let sorted = cardsInHand.sort((a, b) => a - b);
  while (total > WINNING_SCORE && sorted[sorted.length - 1] === 11) {
    sorted[sorted.length - 1] = 1;
    sorted.sort((a, b) => a - b);
    total = cardsInHandTotal(sorted);
  }
  return total;
};

let displayPlayerCards = (playerCards, player) => {
  player = player.charAt(0).toUpperCase() + player.slice(1);
  if (player === 'Dealer') {
    console.log(`${player}'s cards: ${playerCards[0]}, unknown card`);
    dealersCardsValues = cardsValues(playerCards);
    dealersTotal = calculateAcesAndTotal(dealersCardsValues);
  } else {
    console.log(`${player}'s cards: ${playerCards.join(', ')}`);
    playersCardsValue = cardsValues(playerCards);
    playersTotal = calculateAcesAndTotal(playersCardsValue);
    console.log(`TOTAL: ${playersTotal}`);
  }
  console.log(' ');
};

let displayAllDealersCards = () => {
  console.log(`Dealer's cards: ${dealersCards.join(', ')}`);
  console.log(cardsValues(dealersCards));
  console.log(`TOTAL: ${dealersTotal}`);
  console.log(' ');
};

let busted = (total) => {
  return total > WINNING_SCORE;
};

let resetTotals = () => {
  playersCards = [];
  dealersCards = [];
};

let someoneWon = () => {
  if (playersTotal === dealersTotal) {
    prompt('It\'s a tie');
  } else if ((playersTotal < dealersTotal || dealersTotal === WINNING_SCORE)) {
    prompt('Dealer won');
  } else if ((playersTotal === WINNING_SCORE || playersTotal > dealersTotal)) {
    prompt('Player won');
  }
};

let displayTable = () => {
  displayPlayerCards(playersCards, 'player');
  displayPlayerCards(dealersCards, 'dealer');
};

let askToHitOrStay = () => {
  prompt("Hit or Stay? ('h' or 's')");
  moveDecision = readline.question().toLowerCase()[0];

  while (!MOVE_DECISION_VALID_ANSWERS.includes(moveDecision)) {
    prompt("Please choose 'h' or 's'");
    moveDecision = readline.question().toLowerCase()[0];
  }
  console.clear();
};

let askNewMatch = () => {
  prompt('Would you like to play a new match? (y/n)');
  playAgain = readline.question().toLowerCase()[0];

  while (!PLAY_AGAIN_VALID_ANSWERS.includes(playAgain)) {
    prompt("Please choose 'y' or 'n'");
    playAgain = readline.question().toLowerCase()[0];
  }
  console.clear();
};

// ---------------------------------------------------
while (true) {
  console.clear();
  console.log('*** Welcome to Tewnty-One Game ***');
  console.log(' ');

  dealFirstCards(CARDS, playersCards);
  dealFirstCards(CARDS, dealersCards);
  displayTable();
  askToHitOrStay();

  while (moveDecision === 'h') {
    dealAnotherCard(CARDS, playersCards);
    displayTable();

    if (busted(playersTotal)) {
      prompt('Player busted. Dealer won.');
      break;
    }

    moveDecision = '';
    askToHitOrStay();
  }

  if (moveDecision === 's') {
    displayPlayerCards(playersCards, 'player');

    while (dealersTotal < 17) {
      dealAnotherCard(CARDS, dealersCards);
      dealersCardsValues = cardsValues(dealersCards);
      dealersTotal += dealersCardsValues[dealersCardsValues.length - 1];

      if (busted(dealersTotal)) {
        displayAllDealersCards();
        prompt('Dealer busted. You won.');
        break;
      }
    }
  }

  if (!busted(dealersTotal) && !busted(playersTotal)) {
    displayAllDealersCards();
    someoneWon();
  }

  resetTotals();
  askNewMatch();

  if (playAgain === 'n') break;
}