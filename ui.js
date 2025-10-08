export function createEpisodeButtons(container, episodes, onClick) {
  container.innerHTML = "";
  episodes.forEach((title, index) => {
    const button = document.createElement("button");
    button.textContent = title;
    button.onclick = () => onClick(index + 1);
    container.appendChild(button);
  });
}

export function showFeedback(message) {
  alert(message);
}
