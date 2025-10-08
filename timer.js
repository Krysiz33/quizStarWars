let timerInterval;

export function startTimer(timerElement, onTimeUp) {
  let timer = 45;
  timerElement.textContent = timer;

  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    if (timer > 0) {
      timer--;
      timerElement.textContent = timer;
    } else {
      clearInterval(timerInterval);
      alert("Czas minął!");
      onTimeUp();
    }
  }, 1000);
}
