
let computerSelection;

let userScore = 0;
let computerScore = 0;

const user = document.querySelector(".user > .score");
const uScore = document.createElement("p");

const computer = document.querySelector(".computer > .score");
const cScore = document.createElement("p");

const board = document.querySelector(".buttons")

function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let choiceNumber = Math.floor(Math.random() *3 );
    computerSelection = choices[choiceNumber];
    return computerSelection;
}


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

    
}

//Play a game until one player reach a score of 5
function playGame() {
    let maxScore = false;
    
    const buttons = document.querySelectorAll(".userChoice");
    buttons.forEach((btn) =>{
    btn.addEventListener("click", () => {
        userSelection = btn.textContent;
        playRound();
        scoreCheck();
        })
    })
    

//show results
function showResults () {
    if (userScore > computerScore) {
        console.log("congratulations, you won!");
    }
    else if (userScore < computerScore) {
        console.log("shame on you! you lost against a stupid computer!");
}
}

 
function gameOver() {
    const results = document.querySelector(".results");
        const gameOver = document.createElement("h2");
        gameOver.textContent = "Game over!"
        results.appendChild(gameOver);
        board.classList.toggle("inactive")
        showResults()

}

function scoreCheck() {
    let maxScore = false;
    user.appendChild(uScore);
    uScore.textContent = userScore; 
    computer.appendChild(cScore);
    cScore.textContent = computerScore;
    if (userScore === 5 || computerScore === 5) {
        gameOver();
    }
}


