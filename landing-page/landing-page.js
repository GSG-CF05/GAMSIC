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

/*LIGHT AND DARK MODE START*/
//? accessing the elements
let toggleBtn = document.querySelector(".ri-sun-fill");
let main = document.querySelector("main");
let changeTitle = document.querySelector("h1");
// console.log(main);

//? toggling the class
function setLightTheme() {
  main.classList.toggle("light");
}

//? add event listener to the btn
toggleBtn.addEventListener("click", changeTheme);

function changeTheme() {
  let lightMode = localStorage.getItem("light");
  if (lightMode !== "on") {
    setLightTheme();
    lightMode = localStorage.setItem("light", "on");
  } else {
    setLightTheme();
    lightMode = localStorage.setItem("light", "off");
  }
}

//? reload the page
let lightMode = localStorage.getItem("light");

if (lightMode === "on") {
  setLightTheme();
}
/*LIGHT AND DARK MODE END*/

