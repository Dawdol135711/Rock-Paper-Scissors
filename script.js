const scissors = document.querySelector(".scissors");
const paper = document.querySelector(".paper");
const rock = document.querySelector(".rock");

const computerScissors = document.querySelector(".computerscissors");
const computerPaper = document.querySelector(".computerpaper");
const computerRock = document.querySelector(".computerrock");

const reset = document.querySelector(".reset");
const choice = document.querySelector(".choice");
// Assigned user choice by click on img
reset.addEventListener("click", resetHiding);
function resetHiding() {
	const images = document.querySelectorAll("img");
	images.forEach((img) => {
		img.style.display = "inline-block";
		scissors.setAttribute("src", "img/scissors1.jpg");
		paper.setAttribute("src", "img/paper1.jpg");
		rock.setAttribute("src", "img/rock1.jpg");
		computerScissors.setAttribute("src", "img/scissors1.jpg");
		computerPaper.setAttribute("src", "img/paper1.jpg");
		computerRock.setAttribute("src", "img/rock1.jpg");
	});
}
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
function replaceButton() {
	reset.style.display = "block";
	choice.style.display = "none";
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
			paper.style.display = "none";
		}
	}
	function hiders() {
		if (userChoice === "papier") {
			rock.style.display = "none";
			scissors.style.display = "none";
		}
	}
	function hidesp() {
		if (userChoice === "kamień") {
			scissors.style.display = "none";
			paper.style.display = "none";
		}
	}
	// Computer choice hiding
	function compHiderp() {
		if (computerChoice === "nożyce") {
			computerRock.style.display = "none";
			computerPaper.style.display = "none";
		}
	}
	function compHiders() {
		if (computerChoice === "papier") {
			computerRock.style.display = "none";
			computerScissors.style.display = "none";
		}
	}
	function compHidesp() {
		if (computerChoice === "kamień") {
			computerScissors.style.display = "none";
			computerPaper.style.display = "none";
		}
	}
	if (userChoice === "nożyce" && computerChoice === "nożyce") {
		result = draw;
	} else if (userChoice === "nożyce" && computerChoice === "kamień") {
		result = computerWin;
		scissors.setAttribute("src", "img/scissors2.jpg");
	} else if (userChoice === "nożyce" && computerChoice === "papier") {
		result = playerWin;
		computerPaper.setAttribute("src", "img/paper2.jpg");
	} else if (userChoice === "kamień" && computerChoice === "nożyce") {
		result = playerWin;
		computerScissors.setAttribute("src", "img/scissors2.jpg");
	} else if (userChoice === "kamień" && computerChoice === "papier") {
		result = computerWin;
		rock.setAttribute("src", "img/rock2.jpg");
	} else if (userChoice === "kamień" && computerChoice === "kamień") {
		result = draw;
	} else if (userChoice === "papier" && computerChoice === "nożyce") {
		result = computerWin;
		paper.setAttribute("src", "img/paper2.jpg");
	} else if (userChoice === "papier" && computerChoice === "kamień") {
		result = playerWin;
		computerRock.setAttribute("src", "img/rock2.jpg");
	} else if (userChoice === "papier" && computerChoice === "papier") {
		result = draw;
	}
	hiderp();
	hidesp();
	hiders();
	compHiderp();
	compHidesp();
	compHiders();
	replaceButton();
	console.log(
		`Komputer wybral ${computerChoice} a gracz ${userChoice}. A więc ${result} `
	);
}
