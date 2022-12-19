//create a function that make a random computer selection
let computerSelection;

function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let choiceNumber = Math.floor(Math.random() *3 );
    computerSelection = choices[choiceNumber];
}
//create a function that asks for a user selection and checks if the selection is valid
let userSelection;
function getUserSelection() {
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
                console.log(validSelection);
                return userSelection;          
            break;
            default:
                alert("seriously?");
                console.log(validSelection);
        }
    } 
    while (validSelection === false) ;

}


getUserSelection();
console.log(userSelection);
// play 1 round
//repeat 5 rounds
//show results

    

   




