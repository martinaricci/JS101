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

const CARDS = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
const CARDS_VALUE = {
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
let playersCards = [];
let playersCardsValue = [];
let dealersCards = [];
let dealersCardsValues = [];
const WINNING_SCORE = 21;
const MAX_INITIAL_CARDS = 2;
let playersTotal = 0;
let dealersTotal = 0;
// const PLAYERS = ['player', 'dealer'];
let playAgain;
let moveDecision;

let prompt = message => {
  console.log(`=> ${message}`);
};

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
    if (Object.keys(CARDS_VALUE).includes(card)) {
      return CARDS_VALUE[card];
    }

    return CARDS_VALUE[card];
  });
};

let cardsInHandTotal = (cardsValues) => {
  const reducer = (cardValue, currentCardValue) => cardValue + currentCardValue;
  return cardsValues.reduce(reducer);
};

let calculateAcesAndTotal = cardsInHand => {
  let total = cardsInHandTotal(cardsInHand);
  if (total > WINNING_SCORE) {
    let aceValue = cardsInHand.map(value => {
      if (value === 11) value = 1;
      return value;
    });
    total = cardsInHandTotal(aceValue);
    return total;
  } else {
    return total;
  }
};

let displayPlayerCards = (playerCards, player) => {
  player = player.charAt(0).toUpperCase() + player.slice(1);
  if (player === 'Dealer') {
    console.log(`${player}'s cards: ${playerCards[0]}, unknown card`);
    dealersCardsValue = cardsValues(playerCards);
    dealersTotal = calculateAcesAndTotal(dealersCardsValue);
  } else {
    console.log(`${player}'s cards: ${playerCards.join(', ')}`);
    playersCardsValue = cardsValues(playerCards);
    playersTotal = calculateAcesAndTotal(playersCardsValue);
    console.log(`TOTAL: ${playersTotal}`);
  }
  console.log(' ');
};

let displayAllDealersCards = (playerCards) => {
  console.log(`Dealer's cards: ${playerCards.join(', ')}`);
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
  } else if ((playersTotal < dealersTotal || dealersTotal === WINNING_SCORE) && !busted(dealersTotal)) {
    prompt('Dealer won');
  } else if ((playersTotal === WINNING_SCORE || playersTotal > dealersTotal) && !busted(playersTotal)) {
    prompt('Player won');
  }
};

while (true) {
  console.clear();
  console.log('*** Welcome to Tewnty-One Game ***');
  console.log(' ');

  dealFirstCards(CARDS, playersCards);
  displayPlayerCards(playersCards, 'player');

  dealFirstCards(CARDS, dealersCards);
  displayPlayerCards(dealersCards, 'dealer');

  // console.log(dealersCards);
  // console.log(dealersTotal);
  prompt("Hit or Stay? ('h' or 's')");
  moveDecision = readline.question();

  while (moveDecision === 'h') {
    console.clear();
    dealAnotherCard(CARDS, playersCards);
    displayPlayerCards(playersCards, 'player');
    displayPlayerCards(dealersCards, 'dealer');
    // console.log(dealersCards);
    // console.log(dealersTotal);
    if (busted(playersTotal)) {
      prompt('Player busted. Dealer won.');
      // console.log(dealersCards);
      break;
    }
    prompt("Hit or Stay? ('h' or 's')");
    moveDecision = readline.question();
  }

  if (moveDecision === 's') {
    console.clear();
    displayPlayerCards(playersCards, 'player');

    while (dealersTotal < 17) {
      dealAnotherCard(CARDS, dealersCards);
      dealersCardsValues = cardsValues(dealersCards);
      dealersTotal += dealersCardsValues[dealersCardsValues.length - 1];

      if (busted(dealersTotal)) {
        displayAllDealersCards(dealersCards);
        prompt('Dealer busted. You won.');
        break;
      }
    }
    // console.log(dealersCards);
    // console.log(dealersTotal);
  }

  if (!busted(dealersTotal) && !busted(playersTotal)) {
    displayAllDealersCards(dealersCards);
  }

  someoneWon();
  resetTotals();
  prompt('Would you like to play a new match? (yes or no)');
  playAgain = readline.question();

  if (playAgain === 'n' || playAgain === 'no') break;
}