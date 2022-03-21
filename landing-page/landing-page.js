let rightArrow = document.querySelector(`.right-arrow`);
let leftArrow = document.querySelector(`.left-arrow`);

console.log(rightArrow);

rightArrow.addEventListener(`click`, goToMusicPage);

leftArrow.addEventListener(`click`, goToGamePage);

function goToMusicPage () {
  window.open(`./home-music/home-music.html`, `_self`);
}

function goToGamePage () {
  window.open(`./home-game/home-game.html`, `_self`);
}