let readline = require('readline-sync');

const CARD_SUITS = ['♧', '♢', '♡', '♤'];
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
const DEALER_THRESHOLD = 17;
const MAX_INITIAL_CARDS = 2;
const MAX_WINS = 5;
const MOVE_DECISION_VALID_ANSWERS = ['h', 's', 'hit', 'stay'];
const PLAY_AGAIN_VALID_ANSWERS = ['y', 'n', 'yes', 'no'];
let deck = [];
let playerCards = [];
let playerCardsValue = [];
let dealerCards = [];
let dealerCardsValue = [];
let playerTotal = 0;
let dealerTotal = 0;
let anotherMatch;
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
    CARD_SUITS.forEach(suit => {
      deck.push([card, suit]);
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
    if (Object.keys(CARD_VALUES).includes(card[0])) {
      return CARD_VALUES[card[0]];
    }

    return CARD_VALUES[card[0]];
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

let displayHand = (playerCards, player) => {
  player = player.charAt(0).toUpperCase() + player.slice(1);
  let valueAndSuitJoined = playerCards.map(card => card.join(' '));
  if (player === 'Dealer') {
    console.log(`${player}'s cards: ${valueAndSuitJoined[0]} , ?`);
    dealerCardsValue = cardsValues(playerCards);
    dealerTotal = calculateAcesAndTotal(dealerCardsValue);
  } else {
    console.log(`${player}'s cards: ${valueAndSuitJoined.join(' , ')}`);
    playerCardsValue = cardsValues(playerCards);
    playerTotal = calculateAcesAndTotal(playerCardsValue);
    console.log(`TOTAL: ${playerTotal}`);
  }
  console.log(' ');
};

let displayAllDealersCards = () => {
  let valueAndSuitJoined = dealerCards.map(card => card.join(' '));
  console.log(`Dealer's cards: ${valueAndSuitJoined.join(' , ')}`);
  console.log(`TOTAL: ${dealerTotal}`);
  console.log(' ');
};

let busted = (total) => {
  return total > WINNING_SCORE;
};

let resetTotals = () => {
  playerCards = [];
  dealerCards = [];
};

let detectWinner = (winner) => {
  if (playerTotal === dealerTotal) {
    prompt('IT\'S A TIE');
  } else if ((playerTotal < dealerTotal || dealerTotal === WINNING_SCORE)) {
    prompt('DEALER WON');
    winner = 'DEALER';
  } else if ((playerTotal === WINNING_SCORE || playerTotal > dealerTotal)) {
    prompt('PLAYER WON');
    winner = 'PLAYER';
  }
  return winner;
};

let displayTable = () => {
  displayHand(playerCards, 'player');
  displayHand(dealerCards, 'dealer');
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

let anotherRound = () => {
  prompt("Press 'Enter' to play another round");
  readline.question().toLowerCase();
  console.clear();
};

let displayCurrentScore = (playerWins, dealerWins) => {
  console.log('-------- CURRENT SCORE -------');
  console.log(`Player wins: ${playerWins}`);
  console.log(`Dealer wins: ${dealerWins}`);
  console.log(' ');
};

let displayGrandWinner = (dealerWins, playerWins) => {
  if (dealerWins === MAX_WINS) {
    prompt('DEALER IS THE GRAND WINNER!');
  } else if (playerWins === MAX_WINS) {
    prompt('YOU ARE THE GRAND WINNER!');
  }
};

let askNewMatch = () => {
  prompt('Would you like to play a new match? (y/n)');
  anotherMatch = readline.question().toLowerCase();

  while (!PLAY_AGAIN_VALID_ANSWERS.includes(anotherMatch)) {
    prompt("Please choose 'y' or 'n'");
    anotherMatch = readline.question().toLowerCase();
  }
  console.clear();
};


initializeDeck();

while (true) {
  console.clear();
  console.log('*** WELCOME TO TWENTY ONE GAME ***');
  console.log('Wins who first scores 5 points. Good luck!');
  console.log(' ');
  let playerWins = 0;
  let dealerWins = 0;

  while (playerWins !== MAX_WINS || dealerWins !== MAX_WINS) {
    shuffle(deck);
    displayCurrentScore(playerWins, dealerWins);

    dealFirstCards(deck, playerCards);
    dealFirstCards(deck, dealerCards);
    displayTable();
    askToHitOrStay();

    while (moveDecision[0] === 'h') {
      console.log('YOU CHOSE TO HIT');
      console.log(' ');
      dealAnotherCard(deck, playerCards);
      displayTable();

      if (busted(playerTotal)) {
        console.clear();
        console.log('YOU CHOSE TO HIT');
        console.log(' ');
        displayHand(playerCards, 'player');
        displayAllDealersCards();
        prompt('You busted. Dealer won.');
        dealerWins += 1;
        break;
      }

      moveDecision = '';
      askToHitOrStay();
    }

    if (moveDecision[0] === 's') {
      console.log('YOU CHOSE TO STAY');
      console.log('Dealer\'s turn...');
      console.log(' ');
      displayHand(playerCards, 'player');

      while (dealerTotal < DEALER_THRESHOLD) {
        dealAnotherCard(deck, dealerCards);
        dealerCardsValue = cardsValues(dealerCards);
        dealerTotal += dealerCardsValue[dealerCardsValue.length - 1];
        dealerTotal = calculateAcesAndTotal(dealerCardsValue);
      }

      if (busted(dealerTotal)) {
        displayAllDealersCards();
        prompt('Dealer busted. You won!');
        playerWins += 1;
      }
    }

    if (!busted(dealerTotal) && !busted(playerTotal)) {
      displayAllDealersCards();
      let winner = detectWinner();

      switch (winner) {
        case 'DEALER':
          dealerWins += 1;
          break;
        case 'PLAYER':
          playerWins += 1;
          break;
      }
    }

    displayGrandWinner(dealerWins, playerWins);

    resetTotals();

    if (playerWins === MAX_WINS || dealerWins === MAX_WINS) break;
    anotherRound();
  }

  askNewMatch();

  if (anotherMatch[0] === 'n') break;
}

console.log('Thanks for playing Twenty One.');