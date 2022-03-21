let rightArrow = document.querySelector(`.right-arrow`);
let leftArrow = document.querySelector(`.left-arrow`);

console.log(rightArrow);

rightArrow.addEventListener(`click`, goToMusicPage);

leftArrow.addEventListener(`click`, goToGamePage);

function goToMusicPage () {
  location.href = './home-music/home-music.html';
}

function goToGamePage () {
  location.href = './home-game/home-game.html';
}