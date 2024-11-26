"use strict";
// score text elements
let playerOneScoreElement = document.getElementById("p1-score");
let playerTwoScoreElement = document.getElementById("p2-score");
// button elements
let playerOnePointAdder = document.getElementById("player-1");
let playerTwoPointAdder = document.getElementById("player-2");
let reset = document.getElementById("reset-scores-btn");
// select element
let rounds = document.querySelector("select");
let winningColor = "rgb(0, 102, 34)";
let losingColor = "rgb(185, 0, 0)";
// enables/disables buttons, except reset
function pointAdd(e) {
  if (e.target.textContent === "+1 Player One") {
    playerOneScoreElement.textContent = parseInt(++playerOneScoreElement.textContent);
  } else if (e.target.textContent === "+1 Player Two") {
      playerTwoScoreElement.textContent = parseInt(
          ++playerTwoScoreElement.textContent
      );
  }
}
function declareWinner() {
  if (parseInt(playerOneScoreElement.textContent) === parseInt(rounds.value)) {
    playerOneScoreElement.style.color = winningColor;
    playerTwoScoreElement.style.color = losingColor;
    playerOnePointAdder.disabled = true;
    playerTwoPointAdder.disabled = true;
  } else if (parseInt(playerTwoScoreElement.textContent) === parseInt(rounds.value)) {
        playerOneScoreElement.style.color = losingColor;
        playerTwoScoreElement.style.color = winningColor;
        playerOnePointAdder.disabled = true;
        playerTwoPointAdder.disabled = true;
  }
}
playerOnePointAdder.addEventListener("click", (e) => {
  rounds.disabled = true;
  pointAdd(e);
  declareWinner();
});
playerTwoPointAdder.addEventListener("click", (e) => {
  rounds.disabled = true;
  pointAdd(e);
  declareWinner();
});
reset.addEventListener("click", () => {
  rounds.disabled = false;
  playerOnePointAdder.disabled = false;
  playerTwoPointAdder.disabled = false;
  playerOneScoreElement.textContent = "0";
  playerTwoScoreElement.textContent = "0";
  playerOneScoreElement.style.color = "black";
  playerTwoScoreElement.style.color = "black";
});