const scissors = document.querySelector(".scissors");
const paper = document.querySelector(".paper");
const rock = document.querySelector(".rock");

const computerScissors = document.querySelector(".computerscissors");
const computerPaper = document.querySelector(".computerpaper");
const computerRock = document.querySelector(".computerrock");

const reset = document.querySelector(".reset");
const choice = document.querySelector(".choice");
const message = document.querySelector(".message");
const playerWon = "Wygrywa gracz!";
const computerWon = "Wygrywa komputer!";
const draw = "Remis!";
const playerCounter = document.querySelector(".count_1");
playerCount = 0;
const computerCounter = document.querySelector(".count_2");
computerCount = 0;
function counter() {
	playerCounter.innerHTML = playerCount;
	computerCounter.innerHTML = computerCount;
}

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
	reset.style.display = "none";
	choice.style.display = "block";
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
    setTimeout(()=>{
	reset.style.display = "block";
	choice.style.display = "none";
},1500);}
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
		computerCount += 1;
		scissors.classList.add("fade-out");
		// Ustaw obrazek na nowy po zakończeniu animacji (po 1 sekundzie)
		setTimeout(() => {
			scissors.setAttribute("src", "img/scissors2.jpg");
			// Usuń klasę fade-out, aby przywrócić obrazek do widoczności
			scissors.classList.remove("fade-out");
		}, 1000);
	} else if (userChoice === "nożyce" && computerChoice === "papier") {
		result = playerWin;
		playerCount += 1;
		computerPaper.classList.add("fade-out");
		setTimeout(() => {
			computerPaper.setAttribute("src", "img/paper2.jpg");

			computerPaper.classList.remove("fade-out");
		}, 1000);
	} else if (userChoice === "kamień" && computerChoice === "nożyce") {
		result = playerWin;
		playerCount += 1;
		computerScissors.classList.add("fade-out");
		setTimeout(() => {
			computerScissors.setAttribute("src", "img/scissors2.jpg");

			computerScissors.classList.remove("fade-out");
		}, 1000);
	} else if (userChoice === "kamień" && computerChoice === "papier") {
		result = computerWin;
		computerCount += 1;
		rock.classList.add("fade-out");
		setTimeout(() => {
			rock.setAttribute("src", "img/rock2.jpg");

			rock.classList.remove("fade-out");
		}, 1000);
	} else if (userChoice === "kamień" && computerChoice === "kamień") {
		result = draw;
	} else if (userChoice === "papier" && computerChoice === "nożyce") {
		result = computerWin;
		computerCount += 1;
		paper.classList.add("fade-out");
		setTimeout(() => {
			paper.setAttribute("src", "img/paper2.jpg");

			paper.classList.remove("fade-out");
		}, 1000);
	} else if (userChoice === "papier" && computerChoice === "kamień") {
		result = playerWin;
		playerCount += 1;
		computerRock.classList.add("fade-out");
		setTimeout(() => {
			computerRock.setAttribute("src", "img/rock2.jpg");

			computerRock.classList.remove("fade-out");
		}, 1000);
	} else if (userChoice === "papier" && computerChoice === "papier") {
		result = draw;
	}
	function bgcHandler() {
		if (result === computerWin) {
			message.style.backgroundColor = "red";
		} else if (result === draw) {
			message.style.backgroundColor = "orange";
		} else {
			message.style.backgroundColor = "rgb(26, 233, 7)";
		}
	}
	function resultDisplay() {
		setTimeout(() => {
			message.style.opacity = "1";
			bgcHandler();
			message.innerHTML = ` ${result}`;
			setTimeout(() => {
				message.style.opacity = "0";
			}, 1500);
		}, 800);
	}
	hiderp();
	hidesp();
	hiders();
	compHiderp();
	compHidesp();
	compHiders();
	replaceButton();
	resultDisplay();
	counter();
	console.log(
		`Komputer wybral ${computerChoice} a gracz ${userChoice}. A więc ${result} `
	);
}
