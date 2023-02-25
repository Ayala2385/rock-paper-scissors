


function game() {

    
    for (let i = 1; i <= 5; i++) {

        let number = Math.random();
        let numberR = Math.floor(number * 4);


        console.log(number, numberR);
        

        let computerS = '';

        if (numberR <= 1) {
            computerS = "rock";
        } else if (numberR <= 2) {
            computerS = "paper";
        } else if (numberR <= 3) {
            computerS = "scissors";
        }

        let player1 = prompt("choose between rock, paper, or scissors");

        console.log(player1, computerS);

        console.log( playRound(player1, computerS) );

        let result = playRound(player1, computerS);

        
        

        if (result === "You win!") {
            playerScore++;
        } else if (result === "You lose!") {
            computerScore++;
        } else if (result === "it's a tie!") {
            
        }

        console.log(playerScore, computerScore);
    }

    if (playerScore === 3) {
        console.log("player wins");
    } else if (computerScore === 3) {
        console.log("computer wins");
    }
    
}


function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You win!";
        } else if (playerSelection === "rock" && computerSelection === "paper") {
        return "You lose!";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You win!";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "you lose!";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You win!";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You lose!";
    } else if (playerSelection === "rock" && computerSelection === "rock") {
        return "It's a tie!";
    } else if (playerSelection === "paper" && computerSelection === "paper") {
        return "It's a tie!";
    } else if (playerSelection === "scissors" && computerSelection === "scissors") {
        return "it's a tie!";
    }
}


let playerScore = 0;
let computerScore = 0;




game();
