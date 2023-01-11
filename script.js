//create a function that make a random computer selection
let computerSelection;

function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let choiceNumber = Math.floor(Math.random() *3 );
    computerSelection = choices[choiceNumber];
    return computerSelection;
}
//create a function that asks for a user selection and checks if the selection is valid
let userSelection;
/*function getUserChoice() {
    const buttons = document.querySelectorAll(".userChoice");
    buttons.forEach((btn) =>{
    btn.addEventListener("click", () => {
        userSelection = btn.textContent;
        playRound();
        })
    })
}*/
// play 1 round
let userScore = 0;
let computerScore = 0;
function playRound() {
        getComputerChoice();
        /*getUserChoice();*/
        switch (userSelection) {
            case null :
                computerScore += 1;
                console.log("you loose this round");
                break;
            case "rock":
                if (computerSelection === "rock") {
                    console.log("Draw");
                }
                else if (computerSelection === "paper") {
                    computerScore += 1;
                    console.log("Paper beats rock, you loose this round!");
                }
                else {
                    userScore += 1;
                    console.log("rock beats scissors, you win this round!")
                }
                break;
            case "paper":
                if (computerSelection === "paper") {
                     console.log("Draw");
                 }
                 else if (computerSelection === "scissors") {
                     computerScore += 1;
                     console.log("scissors beat paper, you loose this round!");
                  }
                else {
                    userScore += 1;
                    console.log("paper beats rock, you win this round!")
                   }
                break;
            case "scissors":
                 if (computerSelection === "scissors") {
                      console.log("Draw");
                }
                 else if (computerSelection === "rock") {
                        computerScore += 1;
                        console.log("rock beats scissors, you loose this round!");
                    }
                else {
                    userScore += 1;
                    console.log("scissors beats paper, you win this round!")
                   }
                break;         
        }
        user.appendChild(uScore);
        uScore.textContent = userScore; 
        computer.appendChild(cScore);
        cScore.textContent = computerScore;     
    
}

//Play a game until one player reach a score of 5
function playGame() {
    const buttons = document.querySelectorAll(".userChoice");
    buttons.forEach((btn) =>{
    btn.addEventListener("click", () => {
        userSelection = btn.textContent;
        playRound();
        })
    })
    if (userScore === 5 || computerScore ===5 ) {
        gameOver();
        return;
    }

//show results

if (userScore > computerScore) {
    console.log("congratulations, you won!");
}
else if (userScore < computerScore) {
    console.log("shame on you! you lost against a stupid computer!");
}
else {
    console.log("draw, you both rock!");
}
}
const user = document.querySelector(".user > .score");
const uScore = document.createElement("p");
user.appendChild(uScore);
uScore.textContent = userScore; 


const computer = document.querySelector(".computer > .score");
const cScore = document.createElement("p");
computer.appendChild(cScore);
cScore.textContent = computerScore; 

function gameOver() {
    const results = document.querySelector(".results");
        const gameOver = document.createElement("h2");
        gameOver.textContent = "Game over!"
        results.appendChild(gameOver);

}


