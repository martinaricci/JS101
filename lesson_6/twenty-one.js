let readline = require('readline-sync');

const CARD_SUITS = ['c', 'd', 'h', 's'];
const CARDS = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
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
const WINNING_SCORE = 21;
const MAX_INITIAL_CARDS = 2;
const MOVE_DECISION_VALID_ANSWERS = ['h', 's', 'hit', 'stay'];
const PLAY_AGAIN_VALID_ANSWERS = ['y', 'n', 'yes', 'no'];
let deck = [];
let playersCards = [];
let playersCardsValue = [];
let dealersCards = [];
let dealersCardsValues = [];
let playersTotal = 0;
let dealersTotal = 0;
let playAgain;
let moveDecision;

let prompt = message => {
  console.log(`=> ${message}`);
};

let shuffle = (array) => {
  for (let index = array.length - 1; index > 0; index--) {
    let otherIndex = Math.floor(Math.random() * (index + 1)); // 0 to index
    [array[index], array[otherIndex]] = [array[otherIndex], array[index]]; // swap elements
  }
};

let initializeDeck = () => {
  CARDS.forEach(card => {
    CARD_SUITS.forEach(_ => {
      deck.push(card);
    });
  });

  return deck;
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
  let cardsSorted = cardsInHand.sort((a, b) => a - b);
  while (total > WINNING_SCORE && cardsSorted[cardsSorted.length - 1] === 11) {
    cardsSorted[cardsSorted.length - 1] = 1;
    cardsSorted.sort((a, b) => a - b);
    total = cardsInHandTotal(cardsSorted);
  }
  return total;
};

let displayPlayerCards = (playerCards, player) => {
  player = player.charAt(0).toUpperCase() + player.slice(1);
  if (player === 'Dealer') {
    console.log(`${player}'s cards: ${playerCards[0]}, ?`);
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
    prompt('IT\'S A TIE');
  } else if ((playersTotal < dealersTotal || dealersTotal === WINNING_SCORE)) {
    prompt('DEALER WON');
  } else if ((playersTotal === WINNING_SCORE || playersTotal > dealersTotal)) {
    prompt('PLAYER WON');
  }
};

let displayTable = () => {
  displayPlayerCards(playersCards, 'player');
  displayPlayerCards(dealersCards, 'dealer');
};

let askToHitOrStay = () => {
  prompt("Hit or Stay? ('h' or 's')");
  moveDecision = readline.question().toLowerCase();

  while (!MOVE_DECISION_VALID_ANSWERS.includes(moveDecision)) {
    prompt("Please choose 'h' or 's'");
    moveDecision = readline.question().toLowerCase();
  }
  console.clear();
};

let askNewMatch = () => {
  prompt('Would you like to play a new match? (y/n)');
  playAgain = readline.question().toLowerCase();

  while (!PLAY_AGAIN_VALID_ANSWERS.includes(playAgain)) {
    prompt("Please choose 'y' or 'n'");
    playAgain = readline.question().toLowerCase();
  }
  console.clear();
};

initializeDeck();

while (true) {
  console.clear();
  console.log('*** Welcome to Tewnty-One Game ***');
  console.log(' ');
  shuffle(deck);

  dealFirstCards(deck, playersCards);
  dealFirstCards(deck, dealersCards);
  displayTable();
  askToHitOrStay();

  while (moveDecision[0] === 'h') {
    console.log('YOU CHOSE TO HIT');
    console.log(' ');
    dealAnotherCard(deck, playersCards);
    displayTable();

    if (busted(playersTotal)) {
      prompt('Player busted. Dealer won.');
      break;
    }

    moveDecision = '';
    askToHitOrStay();
  }

  if (moveDecision[0] === 's') {
    console.log('YOU CHOSE TO STAY');
    console.log('Dealer\'s turn...');
    console.log(' ');
    displayPlayerCards(playersCards, 'player');

    while (dealersTotal < 17) {
      dealAnotherCard(deck, dealersCards);
      dealersCardsValues = cardsValues(dealersCards);
      dealersTotal += dealersCardsValues[dealersCardsValues.length - 1];

      if (busted(dealersTotal)) {
        displayAllDealersCards();
        prompt('Dealer busted. You won!');
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

  if (playAgain[0] === 'n') break;
}

console.log('Thanks for playing Twenty One.');