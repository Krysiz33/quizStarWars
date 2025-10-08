export async function getProlog(prologElement) {
  const episodeNumber = Math.floor(Math.random() * 9) + 1;
  const response = await fetch(`https://swapi.dev/api/films/${episodeNumber}/`);
  const data = await response.json();

  prologElement.textContent = data.opening_crawl;

  prologElement.style.animation = "none";
  prologElement.offsetHeight;
  prologElement.style.animation = "scroll-text 40s linear forwards";

  return episodeNumber;
}
