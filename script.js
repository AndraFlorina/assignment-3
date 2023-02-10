const selectionButtons = document.querySelectorAll('[data-selection]');
const computerScoreSpan = document.querySelector('[data-computer-score]');
const yourScoreSpan = document.querySelector('[data-your-score]');
const finalScoreSpan = document.querySelector('[data-final-score]');
const reloadBtn = document.querySelector('.reload');
const computerSelectionSpan = document.querySelector('[computer-selection]');
const playerSelectionSpan = document.querySelector('[player-selection]');


let playerScore = 0;
let computerScore = 0;

const SELECTIONS = [
  {
    name: 'rock',
    id: 1,
  },
  {
    name: 'paper',
    id: 2,
  },
  {
    name: 'scissors',
    id: 3,
  },
];

initGame();

function initGame() {
  playerMove();
  resetGame();
}

function playerMove() {
  selectionButtons.forEach((selectionButton) => {
    selectionButton.addEventListener('click', (e) => {
      if (playerScore === 5) {
        compareScore();
      }
      if (playerScore === 5) {
        return;
      }
      const computerSelection = randomSelection();
      const playerSelection = selectionButton.dataset.selection;
      verifyWinner(computerSelection, playerSelection);
    });
  });
}

function randomSelection() {
  const randomIndex = Math.floor(Math.random() * SELECTIONS.length);
  const selection = SELECTIONS[randomIndex];
  return selection.name;
}

function verifyWinner(computerSelection, playerSelection) {
  if (playerSelection === 'rock' && computerSelection === 'scissors') {
    playerScore++;
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    playerScore++;
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    playerScore++;
  } else {
    computerScore++;
  }
  displayScore();
  diplayGame(computerSelection, playerSelection);
}

function compareScore() {
  if (computerScore < playerScore) {
    finalScoreSpan.innerHTML = 'The player is the winner 🏆 ';
  } else if (computerScore === playerScore) {
    finalScoreSpan.innerHTML = 'Tie';
  } else {
    finalScoreSpan.innerHTML = 'The computer is the winner 🏆 ';
  }
}

function resetGame() {
  reloadBtn.addEventListener('click', () => {
    playerScore = 0;
    computerScore = 0;
    finalScoreSpan.innerHTML = ' ';
    displayScore();
    playerSelectionSpan.innerHTML =' ';
    computerSelectionSpan.innerHTML=' ';
  });
}

function displayScore() {
  computerScoreSpan.innerHTML = computerScore;
  yourScoreSpan.innerHTML = playerScore;
}

function diplayGame(computerSelection, playerSelection) {
    playerSelectionSpan.innerHTML = 'You played ' + playerSelection;
    computerSelectionSpan.innerHTML = 'Computer played ' + computerSelection;
}