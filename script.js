const playGameButton = document.querySelector('#playGame');
const playRoundButton = document.querySelector('#playRound');
const quitGameButton = document.querySelector('#quitGame');

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function getComputerChoice() {
    const randomNumber = getRandomNumber(0, 3);
    switch (randomNumber) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
    }
}

function checkResult(playerSelection, computerSelection) {
    const w = `You Win! ${playerSelection} beats ${computerSelection}`;
    const l = `You Lose! ${computerSelection} beats ${playerSelection}`;
    if (playerSelection === computerSelection)
        return `It's a draw! You both played ${playerSelection}`;
    switch (playerSelection) {
        case "Rock":
            switch (computerSelection) {
                case "Paper":
                    return l;
                case "Scissors":
                    return w;
            }
        case "Paper":
            switch (computerSelection) {
                case "Rock":
                    return w;
                case "Scissors":
                    return l;
            }
        case "Scissors":
            switch (computerSelection) {
                case "Rock":
                    return l;
                case "Paper":
                    return w;
            }
    }
}

function playRound() {
    const playerSelection = prompt("Choose one of Rock, Paper, Scissors: ");
    const computerSelection = getComputerChoice();
    const result = checkResult(playerSelection, computerSelection);
    console.log(result);
}

function resetGame() {
    playGameButton.hidden = false;
    playRoundButton.hidden = true;
    quitGameButton.hidden = true;
}

async function game() {
    const rounds = Number(prompt("Enter number of rounds: "));
    playGameButton.hidden = true;
    playRoundButton.hidden = false;
    quitGameButton.hidden = false;

    for (let i = 0; i < rounds; ++i) {
        const startNextRound = new Promise((resolve, reject) => {
            playRoundButton.addEventListener('click', resolve);
            quitGameButton.addEventListener('click', reject);
        })
        await startNextRound
            .then(() => playRound())
            .catch(() => { i = rounds });
    }

    resetGame();
}

resetGame();
playGameButton.addEventListener('click', game);


