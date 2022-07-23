const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const results = document.querySelector('#roundResult');
const score = document.querySelector('#score');
let playerScore = 0;
let computerScore = 0;

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
    const w = true;
    const l = false;
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

function playRound(e) {
    const playerSelection = e.target.textContent;
    const computerSelection = getComputerChoice();
    const result = checkResult(playerSelection, computerSelection);
    let resultMessage;
    if (result) {
        resultMessage = `You Win! ${playerSelection} beats ${computerSelection}`;
        ++playerScore;
    }
    else {
        resultMessage = `You Lose! ${ playerSelection } loses to ${ computerSelection }`;
        ++computerScore;
    }
    results.textContent = resultMessage;
    score.textContent = `[Player] ${playerScore} : ${computerScore} [Computer]`;
    if (playerScore == 5 || computerScore == 5) {
        deactivateButtons();
        alert(`${playerScore == 5 ? "You" : "The computer"} won!`);
    }
}

function activateButtons() {
    rock.addEventListener('click', playRound)
    paper.addEventListener('click', playRound)
    scissors.addEventListener('click', playRound)
}

function deactivateButtons() {
    rock.removeEventListener('click', playRound)
    paper.removeEventListener('click', playRound)
    scissors.removeEventListener('click', playRound)
}

activateButtons();




