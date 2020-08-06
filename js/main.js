$(document).ready(function(){


function computerPlay () {
 let options = ["rock", "paper", "scissors"];
 let choice = Math.floor(Math.random() * options.length);
 return options[choice];
}

function playRound (playerSelection, computerSelection) {

  playerSelection = playerSelection.toLowerCase();

  if (playerSelection == computerSelection) {
    return "It's a tie!";
  }
  else if (playerSelection == "rock" && computerSelection == "paper") {
    return "Computer wins";
  }
  else if (playerSelection == "paper" && computerSelection == "scissors") {
    return "Computer wins";
  }
  else if (playerSelection == "scissors" && computerSelection == "rock") {
    return "Computer wins";
  }
  else if (playerSelection == "rock" && computerSelection == "scissors") {
    return "You win!";
  }
  else if (playerSelection == "paper" && computerSelection == "rock") {
    return "You win!";
  }
  else if (playerSelection == "scissors" && computerSelection == "paper") {
    return "You win!";
  }
  else {
    return "No matches?!?!?!?"
  }

}

function choice() {
  // let playerSelection = document.getElementById(form);
  var playerSelection = prompt("Rock, paper, or scissors?", "rock");
  return playerSelection;
}



function game() {

  // choose a new player selection and a new computer selection
  // then call the playRound function to figure out who won this round
  // TODO need to change the playRound function to return the player that won
  // or if it was a tie instead of the long string

  let numCompWon = 0;
  let numPlayerWon = 0;
  let computerSelection = computerPlay();
  let playerSelection = choice();//prompt("rock, paper, or scissors?");


  let winner1 = playRound(playerSelection, computerSelection);
  // repeat those same steps 4 more times, and store the winner of each round
  if (winner1 == "You win!") {
    numPlayerWon = numPlayerWon + 1;
  }
  else if (winner1 == "Computer wins") {
    numCompWon = numCompWon + 1;
  }

  computerSelection = computerPlay();
  playerSelection = choice();


  let winner2 = playRound(playerSelection, computerSelection);

  if (winner2 == "You win!") {
    numPlayerWon = numPlayerWon + 1;
  }
  else if (winner2 == "Computer wins") {
    numCompWon = numCompWon + 1;
  }

  computerSelection = computerPlay();
  playerSelection = choice();

  let winner3 = playRound(playerSelection, computerSelection);

  if (winner3 == "You win!") {
    numPlayerWon = numPlayerWon + 1;
  }
  else if (winner3 == "Computer wins") {
    numCompWon = numCompWon + 1;
  }

  computerSelection = computerPlay();
  playerSelection = choice();

  let winner4 = playRound(playerSelection, computerSelection);

  if (winner4 == "You win!") {
    numPlayerWon = numPlayerWon + 1;
  }
  else if (winner4 == "Computer wins") {
    numCompWon = numCompWon + 1;
  }

  computerSelection = computerPlay();
  playerSelection = choice();

  let winner5 = playRound(playerSelection, computerSelection);

  if (winner5 == "You win!") {
    numPlayerWon = numPlayerWon + 1;
  }
  else if (winner5 == "Computer wins") {
    numCompWon = numCompWon + 1;
  }

console.log("Player Won " + numPlayerWon + ", Computer Won " + numCompWon);

  // now figure out who the real winner is, and return the player that won.
  if (numPlayerWon > numCompWon) {
    return "You are the grand winner!";
  }

  else if (numCompWon > numPlayerWon) {
    return "The computer is the grand winner!";
  }
  else {
    return "It's a tie!";
  }
}


// $("#RPS").click(function () {
//   prompt ("enterYourChoice!");
// });

let grandWinner = game();
console.log(grandWinner);
// winners = game();
// console.log(winner1);
// console.log(winner2);
// console.log(winner3);
// console.log(winner4);
// console.log(winner5);


});
