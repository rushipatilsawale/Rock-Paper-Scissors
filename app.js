let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".btn");
let message = document.querySelector(".msg");

let UserScoreDiv = document.querySelector("#user-score");
let CompScoreDiv = document.querySelector("#comp-score");

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        message.style.fontSize = "1rem";
        message.innerText = `Congratulations! You Win. Your ${userChoice} beats ${compChoice}`;
        userScore++;
        UserScoreDiv.innerText = userScore;
        message.style.backgroundColor = "green";
    } else {
        message.innerText = `You Lost. ${compChoice} beats ${userChoice}`;
        compScore++;
        CompScoreDiv.innerText = compScore;
        message.style.backgroundColor = "red";
    }
};

const drawGame = () => {
    message.innerText = "Game is Draw! Play Again..."
    message.style.backgroundColor = "#081b31";
};

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const option = Math.floor(Math.random() * 3);
    return options[option];
};

const playGame = (userChoice) => {
    const compChoice = genCompChoice();

    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;

        if (userChoice === "rock") {
            userWin = (compChoice === "paper") ? false : true;
        } else if (userChoice === "paper") {
            userWin = (compChoice === "scissors") ? false : true;
        } else {
            userWin = (compChoice === "rock") ? false : true;
        }

        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});