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
function getUserChoice() {
    let validSelection = false; 
    do {
        userSelection = prompt("please enter your selection","");
        if (userSelection === null) {
            console.log("cancelled!");
            return userSelection;
        }
        userSelection = userSelection.toLowerCase();
        //check if selection is valid
        switch (userSelection) {
            case "rock" :
            case "paper" :
            case "scissors" :
                validSelection = true;
                return userSelection;          
            break;
            default:
                alert("seriously?");
        }
    } 
    while (validSelection === false) ;

}
// play 1 round
let userScore = 0;
let computerScore = 0;
function playRound() {
        getComputerChoice();
        getUserChoice();
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

//repeat 5 rounds
for (i = 0; i < 5; i++) {
    console.log("round: " + (i + 1));
    playRound();
    console.log("your score is: " + userScore);
    console.log("computer score is: " + computerScore);
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



