
//  make 2 variable to store user selection and computer selection
let userSelection;
let computerSelection;

// make 2 variable to store user and computer score
let userScore = 0;
let computerScore = 0;
let validChoice = false;


// randomise computer selection
function getComputerChoice(computerSelection) {
    // make an array  containing our 3 values
    const choices = ["rock", "paper", "scissors"];
    // generate a random number from 0 to 2
    let choiceNumber = Math.floor(Math.random() * 3);
    // extract the result from the array and apply it to computerSelection
    computerSelection = choices[choiceNumber];
    return computerSelection;
}

// ask for user selection
function getUserChoice() {
    userSelection = prompt("Please enter your selection","");
    userSelection = userSelection.toLowerCase();
    //console.log(userSelection);

        switch (userSelection) {
            case "rock":
            case "paper":
            case "scissors":
                validChoice = true;
                //console.log("correct!");
                break;
            default:
                validChoice = false;
                console.log("seriously?");
                
        }
        //console.log(userSelection);
        return userSelection;
}
//  Play 1 round
function playRound(userSelection,computerSelection) { 
    // get user choice! 
         while (validChoice === false) {
        getUserChoice();
       // console.log(userSelection);
    }
    // get computer choice!
        getComputerChoice(computerSelection);
    // compare user and computer choices
        switch (userSelection) {

            case "rock" :
                if (computerSelection === "rock") { 
                    console.log("draw! you both rock :)");
                }
                    else if (computerSelection ==="scissors") {
                        console.log("You win! rock beat scissors!");
                        userScore += 1;
                    }
                        else {
                            console.log("You lose! paper beats rock!");
                            computerScore +=1;
                        }

            break;

            case "scissors" :
                if (computerSelection === "scissors") { 
                    console.log("draw! you both rock :)");
                }
                    else if (computerSelection ==="paper") {
                        console.log("You win! scissors beat paper!");
                        userScore += 1;
                    }
                        else {
                            console.log("You lose! rock beats scissors!");
                            computerScore += 1;
                        }

            break;
            
            case "paper" :
                if (computerSelection === "paper") { 
                    console.log("draw! you both rock :)");
                }
                    else if (computerSelection ==="rock") {
                        console.log("You win! paper beats rock!");
                        userScore += 1;
                    }
                        else {
                            console.log("You lose! scissors beat paper!");
                            computerScore += 1;
                        }
                
            break;     
        }
}
// make a function that repeats playrond() 5 times
for (let i = 0; i < 5; i++) {
    console.log("round: " + (i+1));
    playRound(userSelection,computerSelection);
    console.log("your score is: " + userScore);
    console.log("computer score is: " + computerScore);
    validChoice = false;

}
// alert the result
if (userScore > computerScore) {
    alert("You win!");
}
else if (userScore < computerScore) {
    alert("You lose!");
}
else {
    alert("draw!");
}



    

   




