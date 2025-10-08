import { getProlog } from "./prolog.js";
import { startTimer } from "./timer.js";
import { createEpisodeButtons, showFeedback } from "./ui.js";

const timerElement = document.getElementById("timer");
const prologElement = document.getElementById("prolog");
const footerElement = document.getElementById("footer");
const startContainer = document.getElementById("start-container");
const startButton = document.getElementById("start-button");
const prologContainer = document.getElementById("prolog-container");

let correctAnswer;
const episodes = [
  "Epizod I",
  "Epizod II",
  "Epizod III",
  "Epizod IV",
  "Epizod V",
  "Epizod VI",
  "Epizod VII",
  "Epizod VIII",
  "Epizod IX",
];

function checkAnswer(selected) {
  if (selected === correctAnswer) {
    showFeedback("Dobra odpowiedź!");
  } else {
    showFeedback(
      `Zła odpowiedź! Poprawna odpowiedź to: ${episodes[correctAnswer - 1]}`
    );
  }
  resetGame();
}

function resetGame() {
  getProlog(prologElement).then((episodeNum) => {
    correctAnswer = episodeNum;
    startTimer(timerElement, resetGame);
  });
}

function startGame() {
  startContainer.style.display = "none";
  prologContainer.style.display = "flex";
  footerElement.style.display = "flex";
  createEpisodeButtons(footerElement, episodes, checkAnswer);
  resetGame();
}

startButton.addEventListener("click", startGame);
