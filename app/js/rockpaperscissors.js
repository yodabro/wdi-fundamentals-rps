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


function playToFive(x) {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */

    var playerMove;
    var computerMove;
    var winner;

    while (playerWins < x+1 || computerWins < x+1) {
        playerMove = getPlayerMove();
        computerMove = getComputerMove();
        winner = getWinner (playerMove, computerMove);
        console.log("Player's move is " + playerMove + "\nComputer's move is " + computerMove);
        console.log("The winner this round is " + winner);
        
        if (winner == "player") {
            playerWins +=1;
            console.log("The score is Player: " + playerWins + " to " + computerWins + " :Computer");
            if (playerWins == x) {
                    console.log("Congratulations! You Win!");
                    break;
                }
        }else if (winner == "computer") {
            computerWins +=1;
            console.log("The score is Player: " + playerWins + " to " + computerWins + " :Computer");

            if (computerWins == x) {
                console.log("Oh No! The Computer Won!");
                break;
            };

        }else if(winner == "tie"){
            console.log("The score is Player: " + playerWins + " to " + computerWins + " :Computer");
        }
     }

     console.log("The final score is: ");  
     return [playerWins, computerWins];
}
