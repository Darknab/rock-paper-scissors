let computerSelection;
let userSelection;
let userScore = 0;
let computerScore = 0;
let round = 0;

const user = document.querySelector(".user > .score");
const uScore = document.createElement("p");
const computer = document.querySelector(".computer > .score");
const cScore = document.createElement("p");
const scoreText = document.querySelector(".round");
const roundNum = document.createElement("p");
const roundResult = document.createElement("p");
const winner = document.querySelector(".winner")
const board = document.querySelector(".buttons");
const startText = document.querySelector(".start > h3");
const scores = document.querySelector(".scores");
const results = document.querySelector(".results");

const startBtn = document.querySelector(".startbtn");
startBtn.addEventListener("click", () => {
    setNewGame();
    showScore();
    playGame();
});

function setNewGame() {
    computerScore = 0;
    userScore = 0;
    round = 0;
    roundNum.innerHTML = "";
    roundResult.innerHTML = "";
    board.classList.remove("inactive");
    startBtn.classList.add("inactive");
    startText.classList.add("inactive");
    scores.classList.remove("inactive");
    results.classList.add("inactive");
}

function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let choiceNumber = Math.floor(Math.random() *3 );
    computerSelection = choices[choiceNumber];
    return computerSelection;
}

function playRound() {
        getComputerChoice();
        switch (userSelection) {
            case "rock":
                if (computerSelection === "rock") {
                    roundResult.innerHTML = `Draw!`
                }
                else if (computerSelection === "paper") {
                    computerScore += 1;
                    roundResult.innerHTML = `${computerSelection} beats ${userSelection}, you loose this round!`
                }
                else {
                    userScore += 1;
                    roundResult.innerHTML = `${userSelection} beats ${computerSelection}, you win this round!`
                }
                break;
            case "paper":
                if (computerSelection === "paper") {
                     roundResult.innerHTML = `Draw!`
                    }
                 else if (computerSelection === "scissors") {
                     computerScore += 1;
                     roundResult.innerHTML = `${computerSelection} beats ${userSelection}, you loose this round!`
                  }
                else {
                    userScore += 1;
                    roundResult.innerHTML = `${userSelection} beats ${computerSelection}, you win this round!`
                   }
                break;
            case "scissors":
                 if (computerSelection === "scissors") {
                      roundResult.innerHTML = `Draw!`
                    }
                 else if (computerSelection === "rock") {
                    computerScore += 1;
                    roundResult.innerHTML = `${computerSelection} beats ${userSelection}, you loose this round!`
                    }
                else {
                    userScore += 1;
                    roundResult.innerHTML = `${userSelection} beats ${computerSelection}, you win this round!`
                   }
                break;         
        } 
        roundNum.textContent = `Round ${round}`;    
        scoreText.appendChild(roundNum)
        scoreText.appendChild(roundResult)
        showScore();
        userSelection = undefined;
}

//Play a game until one player reach a score of 5
function playGame() {
        const buttons = document.querySelectorAll(".userChoice");
        buttons.forEach((btn) =>{
        btn.addEventListener("click", () => {
            let scoreLimit = (userScore === 5 || computerScore ===5 );
            if (scoreLimit == false) {
                userSelection = btn.textContent;
                round ++;
                playRound();
            }
            else gameOver();

            })
        })    
}  

function showScore() {
    user.appendChild(uScore);
    uScore.textContent = userScore; 
    computer.appendChild(cScore);
    cScore.textContent = computerScore;
}

//show results
function showResults () {
    if (userScore > computerScore) {
        winner.textContent = "Congratulations, you won!";
    }
    else if (userScore < computerScore) {
        winner.textContent = "Shame on you! you have lost against a stupid computer!";
    }
}

function gameOver() {
        results.classList.toggle("inactive");
        board.classList.toggle("inactive");
        scores.classList.toggle("inactive");
        startBtn.classList.toggle("inactive");
        showResults();

}