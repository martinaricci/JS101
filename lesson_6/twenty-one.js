// 1. Initialize deck
// 2. Deal cards to player and dealer
// 3. Player turn: hit or stay -
//     repeat until bust or stay
// 4. If player bust, dealer wins.
// 5. Dealer turn: hit or stay -
//     repeat until total >= 17
// 6. If dealer busts, player wins.
// 7. Compare cards and declare winner.

const CARD_TYPES = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
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
const DECK = [];

let calculateAces = (cardsInHand) => {
  let cardsInHandValues = cardsInHand.map(card => {
    if (Object.keys(CARDS_VALUE).includes(card)) {
      return CARDS_VALUE[card];
    }
  })
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  let aceValue = CARDS_VALUE.A;
  let cardsInHandTotal = cardsInHandValues.reduce(reducer);
  if (cardsInHandTotal > WINNING_SCORE) {
    let cardsSorted = cardsInHandValues.sort((a, b) => a - b);
    aceValue = cardsSorted[cardsSorted.length - 1] = 1;
    return aceValue;
  } else {
    return aceValue;
  }
};

console.log(calculateAces(['2', '3', 'A']));
console.log(calculateAces(['8', '10', 'A']));