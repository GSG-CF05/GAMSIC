let rightArrow = document.querySelector(`.right-arrow`);
let leftArrow = document.querySelector(`.left-arrow`);

console.log(rightArrow);

rightArrow.addEventListener(`click`, goToMusicPage);

leftArrow.addEventListener(`click`, goToGamePage);

function goToMusicPage () {
  window.open(`index.html`, `_self`);
}

function goToGamePage () {
  window.open(`index.html`, `_self`);
}