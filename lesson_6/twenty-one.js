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
let dealersCards = [];
const WINNING_SCORE = 21;
const MAX_INITIAL_CARDS = 2;
let playAgain;

let prompt = message => {
  console.log(`=> ${message}`);
};

let dealCards = (cards) => {
  return cards[Math.floor(Math.random() * cards.length)];
};

let dealFirstCards = (cards, playerCards) => {
  while (playerCards.length < MAX_INITIAL_CARDS) {
    let newCard = dealCards(cards);
    playerCards.push(newCard);
  }
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

let calculateAces = cardsInHand => {
  let total = cardsInHandTotal(cardsInHand);
  if (total > WINNING_SCORE) {
    let cardsInHandWithAce = cardsInHand.map(value => {
      if (value === 11) value = 1;
      return value;
    });
    total = cardsInHandTotal(cardsInHandWithAce)
    return total;
  } else {
    return total;
  }
};

let displayCardsInHand = (playerCards) => {
  console.log(`Player's cards: ${playerCards.join(', ')}`);
  let playersCardsValue = cardsValues(playerCards);
  console.log(`TOTAL: ${calculateAces(playersCardsValue)}`);
};

while (true) {
  console.log('*** Welcome to Tewnty-One Game ***');

  dealFirstCards(CARDS, playersCards);
  displayCardsInHand(playersCards);

  dealFirstCards(CARDS, dealersCards);
  displayCardsInHand(dealersCards);

  prompt('Would you like to play a new match? (yes or no)');
  playAgain = readline.question();

  if (playAgain === 'n' || playAgain === 'no') break;
}