const cell_selector = document.querySelectorAll(".cell");
const reset_button = document.querySelector("#reset");
const winner_message = document.querySelector("#message");
let currentPlayer = "X";

let currentTurn = 0;
let moveHistory = [];

const result = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

cell_selector.forEach((cell) => {
  cell.addEventListener("click", function (event) {
    if (!event.target.textContent.trim()) {
      const elementId = event.target.id;
      const number = elementId.slice(5);
      moveHistory.push(number);
      event.target.textContent = currentPlayer;
      currentPlayer = currentPlayer === "X" ? "O" : "X";

      let winnerFound = false;
      currentTurn++;
      console.log(moveHistory);

      if (currentTurn >= 7) {
        const cellToDisappear = moveHistory.shift();
        const disappearingCell = document.getElementById(
          "cell-" + cellToDisappear
        );
        disappearingCell.textContent = "";
      }

      for (let i = 0; i < result.length; i++) {
        let [a, b, c] = result[i];
        if (
          cell_selector[a].textContent &&
          cell_selector[a].textContent === cell_selector[b].textContent &&
          cell_selector[a].textContent === cell_selector[c].textContent
        ) {
          alert("Winner is " + cell_selector[a].textContent);
          winnerFound = true;
          break;
        }
      }

      if (winnerFound) {
        resetGame();
      }
    }
  });
});

function resetGame() {
  cell_selector.forEach((cell) => {
    cell.textContent = "";
    currentPlayer = "X";
    winner_message.textContent = "";
  });
}

reset_button.addEventListener("click", function () {
  resetGame();
});
