/* ACCESSING ALL HTML ELEMENTS*/
let searchInput = document.querySelector(`#search`);
let searchBtn = document.querySelector(`.ri-search-line`);
let index = ``;
let i = 0;
let getBackground = document.querySelector(".container");

/*FETCH API LINK START*/
fetch(
  "https://free-to-play-games-database.p.rapidapi.com/api/games?platform=pc",
  {
    method: "GET",
    headers: {
      "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      "x-rapidapi-key": "93b272acdamsh10e28390fcb3114p1a8d21jsn6bd1fef7e35a",
    },
  }
)
  .then((response) => response.json())
  .then((data) => {
    /*SEARCHTITLE FUNCTION START*/
    searchBtn.addEventListener(`click`, searchTitle);
    function searchTitle() {
      for (; i < data.length; i++) {
        if (searchInput.value === data[i].title) {
          console.log(data[i].id);
          index = i;
          console.log(i);
          let createImg = document.createElement("img");
          createImg.src = data[i].thumbnail;

          let addCard = document.createElement("div");
          addCard.setAttribute("class", "card");
          addCard.appendChild(createImg);
          getBackground.appendChild(addCard);
        }
      }
    }
  })
  .catch(Error);
/*SEARCHTITLE FUNCTION START*/
