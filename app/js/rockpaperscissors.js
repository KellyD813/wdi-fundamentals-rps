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

function getPlayerMove(move) {
    return move || getInput();
}

function getComputerMove(move) {
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    if (playerMove === 'rock' && computerMove == 'scissors') {
        winner = playerMove;
    }
    else if (playerMove === 'rock' && computerMove == 'paper') {
        winner = computerMove;
    }
    else if (playerMove === 'rock' && computerMove == 'rock') {
        winner = 'tie';
    } 
    else if (playerMove === 'scissors' && computerMove == 'paper') {
        winner = playerMove;
    } 
    else if (playerMove ==='scissors' && computerMove == 'rock') {
        winner = computerMove;
    }
    else if (playerMove === 'scissors' && computerMove == 'scissors') {
        winner = 'tie';
    } 
    else if (playerMove === 'paper' && computerMove == 'scissors') {
        winner = computerMove;
    } 
    else if (playerMove ==='paper' && computerMove == 'rock') {
        winner = playerMove;
    }
    else if (playerMove === 'paper' && computerMove == 'paper') {
        winner = 'tie';
    } 
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");

    var playerWins = 0;
    var computerWins = 0;

    while (playerWins < 5 && computerWins < 5) {
        var playerMove = getPlayerMove();
        var computerMove = getComputerMove();
        var winner = getWinner(playerMove, computerMove);
        if (winner === playerMove) {
            playerWins++;
            console.log("Player wins! Player: " + playerWins, "Computer: " + computerWins);
        }
        else if (winner === computerMove) {
            computerWins++;
             console.log("Computer wins! Player: " + playerWins, "Computer: " + computerWins);
        }
        else if (winner === 'tie') {
            console.log("It's a tie! Player: " + playerWins, "Computer: " +                    computerWins);
        }
    }
    return [playerWins, computerWins];

}
playToFive();



