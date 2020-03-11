// console.log("Up and running!");
// let cardOne = "queen";
// let cardTwo = "queen";
// let cardThree ="king";
// let cardFour ="king";
 console.log("User flipped queen" );
 console.log("User flipped king" );


var cards = ["Queen", "Queen", "King", "King"];

var cardsInPlay = [];



var cardOne = cards[0];
var cardTwo = cards[2];
var cardThree = [];
var cardFour = [];


cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);

 if (cardsInPlay.length === 2)
  { alert("Sorry, try again");
   if (cardsInPlay[0] === cardsInPlay[1])
    alert("You found a match!"); 
else alert("Sorry, try again"); } 

