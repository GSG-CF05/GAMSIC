/*LIGHT AND DARK MODE START*/
//? accessing the elements
let toggleBtn = document.querySelector(".ri-sun-fill");
let main = document.querySelector("main");
let header = document.querySelector("header");
let changeTitle = document.querySelector("h1");

//? toggling the class
function setLightTheme() {
  main.classList.toggle("light");
  header.classList.toggle("light");
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