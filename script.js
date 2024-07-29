// Select DOM elements
const cells = document.querySelectorAll(".cell");
const resetButton = document.querySelector("#reset");
const winnerMessage = document.querySelector("#message");

// Game state variables
let currentPlayer = "X";
let moveHistory = [];
let winnerFound = false;

// Define winning combinations
const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8], // Rows
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8], // Columns
  [0, 4, 8],
  [2, 4, 6], // Diagonals
];

// Initialize game
function initGame() {
  winnerMessage.style.display = "none";
  resetButton.style.display = "none";
  cells.forEach((cell) => cell.addEventListener("click", handleCellClick));
}

function handleCellClick(event) {
  const cell = event.target;
  if (winnerFound || cell.textContent) return;

  cell.textContent = currentPlayer;
  cell.style.color = currentPlayer === "X" ? "red" : "blue";
  moveHistory.push(parseInt(cell.id.slice(5)));

  updateBoard();
  checkWinner();
  currentPlayer = currentPlayer === "X" ? "O" : "X";
}

function updateBoard() {
  const turn = moveHistory.length;

  // Handle cell disappearance and blurring
  if (turn > 6) {
    const disappearingCellIndex = moveHistory.shift();
    const disappearingCell = document.getElementById(
      `cell-${disappearingCellIndex}`
    );
    disappearingCell.textContent = "";
    disappearingCell.style.color = ""; // Reset color

    const blurCellIndex = moveHistory[0];
    const blurCell = document.getElementById(`cell-${blurCellIndex}`);
    blurCell.style.color = "rgba(0, 0, 0, 0.5)";
  } else if (turn === 6) {
    const blurCellIndex = moveHistory[0];
    const blurCell = document.getElementById(`cell-${blurCellIndex}`);
    blurCell.style.color = "rgba(0, 0, 0, 0.5)";
  }
}

function checkWinner() {
  for (const [a, b, c] of winningCombinations) {
    if (
      cells[a].textContent &&
      cells[a].textContent === cells[b].textContent &&
      cells[a].textContent === cells[c].textContent
    ) {
      winnerFound = true;
      winnerMessage.textContent = `Winner is ${cells[a].textContent}`;
      winnerMessage.style.color = "green";
      winnerMessage.style.display = "block";
      resetButton.style.display = "block";
      cells.forEach((cell) =>
        cell.removeEventListener("click", handleCellClick)
      );
      break;
    }
  }
}

function resetGame() {
  cells.forEach((cell) => {
    cell.textContent = "";
    cell.style.color = "";
  });
  currentPlayer = "X";
  moveHistory = [];
  winnerFound = false;
  initGame();
}

// Event listeners
resetButton.addEventListener("click", resetGame);
initGame();
