const cell_selector = document.querySelectorAll(".cell");
const reset_button = document.querySelector("#reset");
const winner_message = document.querySelector("#message");

let currentPlayer = "X";
let currentTurn = 0;
let moveHistory = [];
let winnerFound = false;

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function handleCellClick(event) {
  if (!event.target.textContent.trim()) {
    const cellIndex = extractCellIndexFromId(event.target.id);
    moveHistory.push(cellIndex);
    event.target.textContent = currentPlayer;
    currentPlayer = currentPlayer === "X" ? "O" : "X";

    checkWinnerAndDisappearCell();

    if (isGameOver()) {
      resetGame();
    }
  }
}

function extractCellIndexFromId(elementId) {
  return parseInt(elementId.slice(5));
}

function checkWinnerAndDisappearCell() {
  winnerFound = false;
  currentTurn++;

  if (currentTurn >= 7) {
    const cellToDisappear = moveHistory.shift();
    const disappearingCell = document.getElementById(`cell-${cellToDisappear}`);
    disappearingCell.textContent = "";
  }

  for (let i = 0; i < winningCombinations.length; i++) {
    const [a, b, c] = winningCombinations[i];
    if (isWinningCombination(a, b, c)) {
      alert("Winner is " + cell_selector[a].textContent);
      winnerFound = true;
      break;
    }
  }

  if (winnerFound) {
    resetGame();
  }
}

function isWinningCombination(cell1, cell2, cell3) {
  return (
    cell_selector[cell1].textContent &&
    cell_selector[cell1].textContent === cell_selector[cell2].textContent &&
    cell_selector[cell1].textContent === cell_selector[cell3].textContent
  );
}

function isGameOver() {
  return winnerFound;
}

function resetGame() {
  cell_selector.forEach((cell) => {
    cell.textContent = "";
  });
  currentPlayer = "X";
  currentTurn = 0;
  moveHistory = [];
  winner_message.textContent = "";
}

cell_selector.forEach((cell) => {
  cell.addEventListener("click", handleCellClick);
});

reset_button.addEventListener("click", function () {
  resetGame();
});
