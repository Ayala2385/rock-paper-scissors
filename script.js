function getComputerChoice() {

    return choice;
}

let choice = Math.floor(Math.random() * 3);

if (choice <= 1) {
    choice = "rock";
} else if (choice <= 2) {
    choice = "paper";
} else {
    choice = "scissors";
}


function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "scissors") {
        return "computer you lose";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return "human you suck"
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "you lose computer"
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "you lose human"
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "computer defeated"
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "human defeated"
    } else if (playerSelection === "rock" && computerSelection === "rock") {
        return "It's a tie!"
    } else if (playerSelection === "paper" && computerSelection === "paper") {
        return "It's a tie!"
    } else if (playerSelection === "scissors" && computerSelection === "scissors") {
        return "it's a tie!"
    }
}
    

const playerSelection = prompt("choose between rock, paper, or scissors", );
const computerSelection = getComputerChoice();


console.log(playRound(playerSelection, computerSelection));