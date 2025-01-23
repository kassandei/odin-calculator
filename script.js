let humanScore = 0;
let computerScore = 0;


let result = document.createElement("div");
result.classList.add("result");
document.body.appendChild(result);
let buttons = document.querySelectorAll(".humanChoice button");
buttons.forEach(button => 
    button.addEventListener("click", () => {
        playRound(button.textContent, getComputerChoice());
    })
)


function getComputerChoice() {
    let choice = ["Rock", "Paper", "Scissors"];
    return choice[Math.floor(Math.random() * 3)];
}

function playRound(human, computer) {
    switch (true) {
        case human === "Rock" && computer === "Scissors":
        case human === "Paper" && computer === "Rock":
        case human === "Scissors" && computer === "Paper":
            humanScore++;
            console.log(`Human wins this round! ${human} beats ${computer}`);
            break;
        case human === computer:
            console.log("It's a tie!");
            break;
        default:
            computerScore++;
            console.log(`Computer wins this round! ${computer} beats ${human}`);
            break;
    }
    result.textContent = `RESULT: Human ${humanScore} - Computer ${computerScore}`;

    console.log(`Human Score: ${humanScore}`);
    console.log(`Computer Score: ${computerScore}`);

    if(humanScore === 5) {
        result.textContent = `The human win the game!`;
        buttons.forEach(button => button.style.display = 'none');
    }
}


