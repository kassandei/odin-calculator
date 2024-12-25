const round = 5;
let humanScore = 0;
let computerScore = 0;

function getHumanChoice() {
    return prompt("Rock, Paper or Scissors?").toLocaleLowerCase();
}

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    switch(choice) {
        case 0: 
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
    }
}

function playRound(human, computer) {
    if(human === "rock" && computer === "Scissors")
        humanScore++;
    else if(human === "paper" && computer === "rock")
        humanScore++;
    else if(human === "scissors" && computer === "paper")
        humanScore++;
    else if(human === computer.toLowerCase())
        console.log("tie");
    else
        computerScore++;
}
function playGame() {
    for(let i = 0; i < round; i++) 
        playRound(getHumanChoice(), getComputerChoice());
}

playGame();
console.log(humanScore);
console.log(computerScore);
