let P1Display = document.querySelector(".P1Display");
let P2Display = document.querySelector(".P2Display");
let Player1 = document.querySelector(".Player1score");
let Player2 = document.querySelector(".Player2score");
let Reset = document.querySelector(".Reset");
let winscore = document.querySelector("#winningScore");

let score1 = 0;
let score2 = 0;
let winningScore = 5;
let isGameOver = false;

Player1.addEventListener("click", () => {
  if (!isGameOver) {
    score1 += 1;
    P1Display.textContent = score1;
    if (score1 === winningScore) {
      isGameOver = true;
      P1Display.classList.add("has-text-success");
      P2Display.classList.add("has-text-danger");
    }
  }
});

Player2.addEventListener("click", () => {
  if (!isGameOver) {
    score2 += 1;
    P2Display.textContent = score2;
    if (score2 === winningScore) {
      isGameOver = true;
      P1Display.classList.add("has-text-danger");
      P2Display.classList.add("has-text-success");
    }
  }
});

function reset() {
  score1 = 0;
  score2 = 0;
  P1Display.innerText = score1;
  P2Display.innerText = score2;
  if (isGameOver === true) {
    isGameOver = false;
    P1Display.classList.remove("has-text-success", "has-text-danger");
    P2Display.classList.remove("has-text-success", "has-text-danger");
  }
}

Reset.addEventListener("click", reset);

winscore.addEventListener("change", () => {
  winningScore = parseInt(winscore.value);
  reset();
});
