const boardEl = document.getElementById("board");
const statusMessage = document.getElementById("status");
const resetBtn = document.getElementById("resetBtn");
let gameActive = true;
let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
const winningCombinations = [
  //horizontal
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  //vertical
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  //diagonal
  [0, 4, 8],
  [6, 4, 2],
];

function setMessage(message) {
  statusMessage.textContent = message;
}

boardEl.addEventListener("click", (event) => {
  handleEvent(event);
});

resetBtn.addEventListener("click", () => {
  resetGame();
});

function handleEvent(event) {
  const clickedCell = event.target;
  const cellIndex = parseInt(clickedCell.getAttribute("data-index"));

  if (!gameActive || board[cellIndex] !== "") return;

  console.log(clickedCell);
  console.log(cellIndex);
  board[cellIndex] = currentPlayer;
  console.log(board);
  clickedCell.textContent = currentPlayer;
  checkresult();
}

function checkresult() {
  let roundWon = false;
  for (let i = 0; i < winningCombinations.length; i++) {
    const [a, b, c] = winningCombinations[i];
    if (board[a] !== "" && board[a] === board[b] && board[b] === board[c]) {
      roundWon = true;
      break;
    }
  }

  if (roundWon) {
    setMessage(`Chúc mừng! Người chơi ${currentPlayer} đã thắng!`);
    gameActive = false;
    return;
  }

  let roundDraw = !board.includes("");
  if (roundDraw) {
    setMessage("Hòa! Không còn ô nào trống.");
    gameActive = false;
    return;
  }
  currentPlayer = currentPlayer === "X" ? "O" : "X";
  setMessage(`Lượt chơi của ${currentPlayer}`);
}

function resetGame() {
  gameActive = true;
  board = ["", "", "", "", "", "", "", "", ""];
  boardEl.innerHTML = `
    <div class="cell" data-index="0"></div>
    <div class="cell" data-index="1"></div>
    <div class="cell" data-index="2"></div>
    <div class="cell" data-index="3"></div>
    <div class="cell" data-index="4"></div>
    <div class="cell" data-index="5"></div>
    <div class="cell" data-index="6"></div>
    <div class="cell" data-index="7"></div>
    <div class="cell" data-index="8"></div>
    `;
  currentPlayer = "X";
  setMessage(`Lượt chơi của ${currentPlayer}`);
}
