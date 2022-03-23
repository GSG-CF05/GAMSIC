const bodyElement = document.getElementsByTagName("body")[0];
const themeSwitcher = document.querySelector(".sun-moon");

// * Adding the event listener to the theme switcher icon.
themeSwitcher.addEventListener("click", themeSwitch);

// * The function responsible for toggling the light class in and from the body element.
function setDarkTheme() {
  bodyElement.classList.toggle("light");
}

let isThemeDark = localStorage.getItem("isThemeDark");

if (localStorage.getItem("isThemeDark") == "true") setDarkTheme();

// * The function that responsible for switching the theme and adding it to local storage.
function themeSwitch() {
  let isDarkTheme = window.localStorage.getItem("isThemeDark");
  if (isDarkTheme == "true") {
    setDarkTheme();
    localStorage.setItem("isThemeDark", "false");
  } else {
    setDarkTheme();
    localStorage.setItem("isThemeDark", "true");
  }
}
