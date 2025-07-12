let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const prob = Math.random();
    if (prob < 0.33) {
        return 'rock';
    } else if (prob < 0.66) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function getHumanChoice() {
    const choice = prompt("Hi! Please enter you choice: 'rock', 'paper' or 'scissors'");
    return choice;
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase()
    if (humanChoice == computerChoice) {
        humanScore ++;
        computerScore ++;
        return 'Tie!'
    } else if (
        (humanChoice == 'rock' && computerChoice == 'scissors') ||
        (humanChoice == 'paper' && computerChoice == 'rock') ||
        (humanChoice == 'scissors' && computerChoice == 'paper')
    ) {
        humanScore ++;
        return 'You win! ' + humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1) + ' beats ' + computerChoice
    } else {
        computerScore ++;
        return 'You lose! ' + computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1) + ' beats ' + humanChoice
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(playRound(humanSelection, computerSelection));

// console.log(getComputerChoice());
// console.log(getHumanChoice());