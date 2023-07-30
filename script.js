const scissors = document.querySelector(".scissors");
const paper = document.querySelector(".paper");
const rock = document.querySelector(".rock");

// Assigned user choice by click on img
let userChoice;
scissors.addEventListener("click", function () {
	userChoice = "nożyce";
	getResult();
});
paper.addEventListener("click", function () {
	userChoice = "papier";
	getResult();
});
rock.addEventListener("click", function () {
	userChoice = "kamień";
	getResult();
});

// Generating random computer choice

function getRandomChoice() {
	const choiceArray = ["nożyce", "papier", "kamień"];
	const randomIndex = Math.floor(Math.random() * choiceArray.length);
	return choiceArray[randomIndex];
}

function getResult() {
	let computerWin = "wygrywa komputer!";
	let draw = "mamy remis!";
	let playerWin = "wygrywa gracz";
	let result;
	const computerChoice = getRandomChoice();
	function hiderp() {
		if (userChoice === "nożyce") {
			rock.style.display = "none";
		}
	}

	if (userChoice === "nożyce" && computerChoice === "nożyce") {
		result = draw;
	} else if (userChoice === "nożyce" && computerChoice === "kamień") {
		result = computerWin;
	} else if (userChoice === "nożyce" && computerChoice === "papier") {
		result = playerWin;
	} else if (userChoice === "kamień" && computerChoice === "nożyce") {
		result = playerWin;
	} else if (userChoice === "kamień" && computerChoice === "papier") {
		result = computerWin;
	} else if (userChoice === "kamień" && computerChoice === "kamień") {
		result = draw;
	} else if (userChoice === "papier" && computerChoice === "nożyce") {
		result = computerWin;
	} else if (userChoice === "papier" && computerChoice === "kamień") {
		result = playerWin;
	} else if (userChoice === "papier" && computerChoice === "papier") {
		result = draw;
	}
	hiderp();
	console.log(
		`Komputer wybral ${computerChoice} a gracz ${userChoice}. A więc ${result} `
	);
}
