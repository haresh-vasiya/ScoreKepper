let Reset = document.querySelector(".Reset");
let winscore = document.querySelector("#winningScore");

const p1 = {
  display: document.querySelector(".P1Display"),
  button: document.querySelector(".Player1score"),
  score: 0,
};

const p2 = {
  display: document.querySelector(".P2Display"),
  button: document.querySelector(".Player2score"),
  score: 0,
};

function ScoreKeeper(player, opponent) {
  if (!isGameOver) {
    player.score += 1;
    player.display.textContent = player.score;
    if (player.score === winningScore) {
      isGameOver = true;
      player.display.classList.add("has-text-success");
      opponent.display.classList.add("has-text-danger");
      player.button.disabled = true;
      opponent.button.disabled = true;
    }
  }
}

let winningScore = 5;
let isGameOver = false;

p1.button.addEventListener("click", () => {
  ScoreKeeper(p1, p2);
});

p2.button.addEventListener("click", () => {
  ScoreKeeper(p2, p1);
});

function reset() {
  for (let p of [p1, p2]) {
    p.score = 0;
    p.display.innerText = p.score;
    isGameOver = false;
    p.display.classList.remove("has-text-success", "has-text-danger");
    p.button.disabled = false;
  }
}

Reset.addEventListener("click", reset);

winscore.addEventListener("change", () => {
  winningScore = parseInt(winscore.value);
  reset();
});
