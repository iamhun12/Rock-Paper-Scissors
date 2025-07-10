let humanScore = 0;
let computerScore = 0;
function getComputerChoice() {
  const number = Math.random(3);
  if (number === 1) {
    return "rock";
  } else if (number === 2) {
    return "paper";
  } else {
    return "scissors";
  }
}
function getHumanChoice() {
  const choice = prompt("Choose a hand ");
  return choice;
}

function playRound(humanChoice, computerChoice) {
  computerChoice = computerChoice.toLowerCase();
  humanChoice = humanChoice.toLowerCase();
  if (computerChoice === humanChoice) {
    return `Draw! ${humanChoice} equals ${computerChoice}`;
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock")
  ) {
    humanScore++;
    return "You Win! Paper beats Rock";
  } else {
    computerScore++;
    return "You lose! Paper beats Rock";
  }
}

function playGame(rounds) {
  for (let i = 0; i < rounds; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
  }
}

playGame(5);
console.log("Human score: " + humanScore);
console.log("Computer score: " + computerScore);
