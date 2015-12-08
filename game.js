var prompt = require('sync-prompt').prompt;

var playGuessingGame = function() {
  console.log("Welcome to the number guessing game! You're starting with a bank roll of $100.")
  var bankroll = 100;
  while (bankroll > 0) {
    var num = Math.floor((Math.random() * 10) + 1);
    num;
    console.log("I've chosen a number between 1 and 10.");
    var bet = prompt("To take a guess, first place a bet between 5 and 10, or enter q to quit ");
      if (bet === "q") {
        break;
      }
    bet = parseInt(bet);
    var guess = prompt("Take a guess! Pick a number from 1 to 10 ");
    guess = parseInt(guess);
    if (guess === num) {
      bankroll += bet * 2;
      console.log("Correct! You have " + bankroll + " dollars.");
    } else if (guess === num + 1) {
      console.log("Incorrect, but you were close, so you don't lose any money. You have " + bankroll + " dollars.");
    } else if (guess === num - 1) {
      console.log("Incorrect, but you were close, so you don't lose any money. You have " + bankroll + " dollars.");
    } else { 
      bankroll -= bet;
      console.log("Incorrect. You now have " + bankroll + " dollars.");
    }
  } 
};

playGuessingGame();