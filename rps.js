console.log("hello world");

/* 
getComputerChoice function
random number between 1 and 3
1 = rock
2 = paper
3 = scissors
*/ 

function getComputerChoice () {
    let x = (Math.random() * 3) + 1;
    if (x == 1){
        return "rock";
    }
    else if (x == 2){
        return "paper";
    }
    else{
        return "scissors";
    }
    }

/*
getHumanChoice function
use scanner to log human choice
make it lower case
*/

function getHumanChoice () {
    let choice = prompt("Enter rock, paper, or scissors");
    choice.toLowerCase();
    console.log(choice);
}

