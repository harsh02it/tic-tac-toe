const cell_selector = document.querySelectorAll(".cell");
const reset_button = document.querySelector("#reset");
const winner_message = document.querySelector("#message");
let currentPlayer = "X";
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
      event.target.textContent = currentPlayer;
      console.log(event.target.id, currentPlayer);
      currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
    for (let i = 0; i < result.length; i++) {
      let [a, b, c] = result[i];
      if (
        cell_selector[a].textContent &&
        cell_selector[a].textContent === cell_selector[b].textContent &&
        cell_selector[a].textContent === cell_selector[c].textContent
      ) {
        winner_message.textContent =
          "Winner is " + cell_selector[a].textContent;
        return;
      }
    }
  });
});

reset_button.addEventListener("click", function () {
  cell_selector.forEach((cell) => {
    cell.textContent = "";
    currentPlayer = "X";
  });
});
