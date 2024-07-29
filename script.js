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

// ... (previous code remains the same) ...

// Get the modal
const modal = document.getElementById("modal");

// Get the button that opens the modal
const howToPlayBtn = document.getElementById("howToPlay");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
howToPlayBtn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// ... (rest of the code remains the same) ...
