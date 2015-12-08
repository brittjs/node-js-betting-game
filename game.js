var prompt = require('sync-prompt').prompt;
var colors = require('colors');

var playGuessingGame = function() {
  console.log("Welcome to the number guessing game! You're starting with a bank roll of $100.".blue);
  var bankroll = 100;
  while (bankroll > 0) {
    var num = Math.floor((Math.random() * 10) + 1);
    num;
    console.log("I've chosen a number between 1 and 10.".blue);
    var bet = prompt("To take a guess, first place a bet between 5 and 10, or enter q to quit ".blue);
      if (bet === "q") {
        break;
      }
    bet = parseInt(bet);
    var guess = prompt("Take a guess! Pick a number from 1 to 10 ".blue);
    guess = parseInt(guess);
    if (guess === num) {
      bankroll += bet * 2;
      console.log(("Correct! You have " + bankroll + " dollars.").green);
    } else if (guess === num + 1) {
      console.log(("Incorrect, but you were close, so you don't lose any money. You have " + bankroll + " dollars.").yellow);
    } else if (guess === num - 1) {
      console.log(("Incorrect, but you were close, so you don't lose any money. You have " + bankroll + " dollars.").yellow);
    } else { 
      bankroll -= bet;
      console.log(("Incorrect. You now have " + bankroll + " dollars.").red);
    }
  } 
};

playGuessingGame();