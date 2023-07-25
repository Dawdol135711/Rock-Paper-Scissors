const scissors = document.querySelector(".scissors");
const paper = document.querySelector(".paper");
const rock = document.querySelector(".rock");

// Assigned user choice by click on img
let userChoice;
scissors.addEventListener("click", function () {
	userChoice = "scissors";
    console.log(userChoice);
});
paper.addEventListener("click", function () {
	userChoice = "paper";
    console.log(userChoice);
});
rock.addEventListener("click", function () {
	userChoice = "rock";
    console.log(userChoice);
});

// Generating random computer choice

