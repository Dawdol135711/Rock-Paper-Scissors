const scissors = document.querySelector(".scissors");
const paper = document.querySelector(".paper");
const rock = document.querySelector(".rock");

// Assigned user choice by click on img
let userChoice;
scissors.addEventListener("click", function () {
	userChoice = "scissors";
    getResult();
});
paper.addEventListener("click", function () {
	userChoice = "paper";
    getResult();
});
rock.addEventListener("click", function () {
	userChoice = "rock";
	getResult();
});

// Generating random computer choice

function getRandomChoice() {
	const choiceArray = ["scissors", "paper", "rock"];
	const randomIndex = Math.floor(Math.random() * choiceArray.length);
	return choiceArray[randomIndex];
}



function getResult(){

    const computerChoice = getRandomChoice();
    
    if((userChoice==="scissors") && (computerChoice==="scissors")){
        console.log('Remis!')
    }
    else if((userChoice==="scissors") && (computerChoice==="rock")){
        console.log('Wygrywa komputer!')
    }
    else if((userChoice==="scissors") && (computerChoice==="paper")){
        console.log('Wygrywa gracz!')
    }
    else if((userChoice==="rock") && (computerChoice==="scissors")){
        console.log('Wygrywa gracz!')
    }
    else if((userChoice==="rock") && (computerChoice==="paper")){
        console.log('Wygrywa komputer!')
    }
    else if((userChoice==="rock") && (computerChoice==="rock")){
        console.log('Remis!')
    }
    else if((userChoice==="paper") && (computerChoice==="scissors")){
        console.log('Wygrywa komputer!')
    }
    else if((userChoice==="paper") && (computerChoice==="rock")){
        console.log('Wygrywa gracz!')
    }
    else if((userChoice==="paper") && (computerChoice==="paper")){
        console.log('Remis!')
    }
    
    
    
}
