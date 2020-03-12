// console.log("Up and running!");
// let cardOne = "queen";
// let cardTwo = "queen";
// let cardThree ="king";
// let cardFour ="king";
 // console.log("User flipped queen" );
 // console.log("User flipped king" );


// var cards = ["Queen", "Queen", "King", "King"];

// var cardsInPlay = [];
// var flipCard = function(cardId){
// 	console.log("User flipped"+ cards[cardId]);
// }
// flipCard();


// var cardOne = cards[0];
// var cardTwo = cards[2];
// var cardThree = [];
// var cardFour = [];


 // cardsInPlay.push(cardOne);
 // cardsInPlay.push(cardTwo);
// var checkForMatch 
// if (cardsInPlay[0] === cardsInPlay[1]) {
//   console.log("You found a match!");
// } else {
//   console.log("Sorry, try again.");
// }

 var cards = [
  {
    rank: "Queen",
    suit: "Hearts",
    cardImage: "images/queen-of-hearts.png",
    id: 0,
  },
  {
    rank: "Queen",
    suit: "Diamonds",
    cardImage: "images/queen-of-diamonds.png",
    id: 1,
  },
  {
    rank: "King",
    suit: "Hearts",
    cardImage: "images/king-of-hearts.png",
    id: 2,
  },
  {
    rank: "King",
    suit: "Diamonds",
    cardImage: "images/king-of-diamonds.png",
    id: 3
  }
];
var cardsInPlay = [];

var checkForMatch = function() {
    if (cardsInPlay[0] === cardsInPlay[1]) {
        console.log('Sorry, try again.');
    } else {
        console.log('You found a match!');
    }   
}
var flipCard = function(cardId) {
  console.log("User flipped King " + cards[cardId]);
  cardsInPlay.push(cards[0]);
  if (cardsInPlay.length === 2) {
    checkForMatch();
  }
}

flipCard(0);
flipCard(2);






