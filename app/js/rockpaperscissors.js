////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    if (move){
    return move;
    }else {
    return getInput();
    };
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
     if (move){
    return move;
    }else {
    return randomPlay();
    };
}
    
  function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    // YOUR CODE HERE /
    
  if (playerMove === computerMove) {
        winner = 'tie';
    } else if (playerMove === 'rock') {
        if (computerMove === 'paper') {
            winner = 'computer';  //paper covers rock
        } else {
            winner = 'player';   //rock smashes scissors 
        }
    } else if (playerMove === 'paper') {
        if (computerMove === 'scissors') {
            winner = 'computer';  //scissors cut paper
        } else {
            winner = 'player';   //paper covers rock
        }
        } else if (playerMove === 'scissors') {
        if (computerMove === 'rock') {
            winner = 'computer';  //rock smashes scissors
        } else {
            winner = 'player';   //scissors cut paper
        }
    }
    return winner;
}


function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */

    var playerMove;
    var computerMove;
    var gambler;

    while (playerWins < 5 && computerWins < 5) {
        playerMove = getPlayerMove(null);
        computerMove = getComputerMove(null);
        gambler = getWinner (playerMove, computerMove);
        if (gambler == "player") {
            playerWins++;
        }
        if (gambler == "computer") {
            computerWins++;
        }
        if (gambler == "tie") {}
     return [playerWins, computerWins];
     }
}