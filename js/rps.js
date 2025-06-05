// console.log("hello world");

// /* 
// getComputerChoice function
// random number between 1 and 3
// 1 = rock
// 2 = paper
// 3 = scissors
// */ 

// function getComputerChoice () {
//     let x = Math.floor(Math.random() * 3) + 1;
//     if (x === 1){
//         return "rock";
//     }
//     else if (x === 2){
//         return "paper";
//     }
//     else{
//         return "scissors";
//     }
//     }

// /*
// getHumanChoice function
// use scanner to log human choice
// make it lower case
// */

// function getHumanChoice () {
//     let choice = prompt("Enter rock, paper, or scissors");
//     choice = choice.toLowerCase();
//     console.log("You choose:" + choice);
//     return choice;
// }

// // initialize variables for computer and human scores to 0

// let humanScore = 0;
// let computerScore = 0;

// /*
// playround function (humanChoice, computerChoice)
// humanChoice = getHumanChoice();
// computerChoice = getComputerChoice
// if humanChoice.equal computerChoice
//     returm "tie"
// else if (computerChoice.equal rock && humanChoice.equal scissors) || (computerChoice.equal paper && humanChoice.equal rock) || (computerChoice.equal scissors && humanChoice.equal paper)
//     computerScore + 1
//     return "you lost :("
// else
//     humanScore + 1
//     return "you won!"
// */

// function playRound (humanChoice, computerChoice){
// // humanChoice = getHumanChoice();
// // computerChoice = getComputerChoice();
// if (humanChoice === computerChoice) {
//     return "tie";
// }
// else if ((computerChoice === "rock" && humanChoice === "scissors") 
//     || (computerChoice === "paper" && humanChoice === "rock") 
//     || (computerChoice === "scissors" && humanChoice === "paper")){
//     computerScore ++;
//     return "you lost :("
// }
// else{
//     humanScore ++;
//     return "you won!"
// }
// }

// /*
// playGame function
// for 0 to 5 

// */

// function playGame() {
//     for (let x = 1; x < 6; x++){
//         let humanChoice = getHumanChoice();
//         let computerChoice = getComputerChoice();
//         let result = playRound(humanChoice, computerChoice);
//         console.log("Round " + x + ":" + result);
//         console.log("Score /n You: " + humanScore + "       Machine:" + computerScore);
//     }

//     console.log("Final /n You: " + humanScore + "       Machine:" + computerScore);

//     if(humanScore > computerScore){
//         console.log("You've won the game!");
//     } else if(humanScore < computerScore){
//         console.log("Sigh...");
//     } else {
//         console.log("tie...try again");
//     }

//     playGame();
// }


