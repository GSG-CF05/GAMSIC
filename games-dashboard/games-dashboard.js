/* ACCESSING ALL HTML ELEMENTS*/
let searchInput = document.querySelector(`#search`);
let searchBtn = document.querySelector(`.ri-search-line`);
let index = ``;
let i = 0;
let container = document.querySelector(".container");
let listAll = document.querySelector(".all");
let listStrategies = document.querySelector(".strategies");
let listShooter = document.querySelector(".shooter");

/*BUILD ARRAYS FOR CATEGORIES*/
let strategiesArray = [];
let shooterArray = [];

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
          let createImg = document.createElement("img");
          createImg.src = data[i].thumbnail;

          let addCard = document.createElement("div");
          addCard.setAttribute("class", "card");
          addCard.appendChild(createImg);
          container.appendChild(addCard);
        }
      }
    }
    /* GET RANDOM CARD FROM API START */
    for (let i = 0; i < 10; i++) {
      let randomAll = Math.floor(Math.random() * data.length);
      let createCard = document.createElement("div");
      createCard.setAttribute("class", "card");
      let createImg = document.createElement("img");
      createImg.src = data[randomAll].thumbnail;
      createImg.alt = data[randomAll].title;
      let createBtn = document.createElement("button");
      createBtn.setAttribute("data-id", randomAll);
      createBtn.classList = `btn`;
      createBtn.textContent = "More";
      createCard.appendChild(createImg);
      createCard.appendChild(createBtn);
      container.appendChild(createCard);
    }
    /* GET RANDOM CARD FROM API END */

    /* GET ALL RANDOM FUNCTION START */

    listAll.addEventListener("click", getAllRandom);

    function getAllRandom() {
      for (let i = 0; i < 10; i++) {
        let randomAll = Math.floor(Math.random() * data.length);
        let createCard = document.createElement("div");
        createCard.setAttribute("class", "card");
        let createImg = document.createElement("img");
        createImg.src = data[randomAll].thumbnail;
        createImg.alt = data[randomAll].title;
        let createBtn = document.createElement("button");
        createBtn.setAttribute("index", randomAll);
        createBtn.textContent = "More";
        createBtn.classList = `btn`;
        createBtn.setAttribute("data-id", randomAll);
        createCard.appendChild(createImg);
        createCard.appendChild(createBtn);
        container.replaceChild(createCard, container.childNodes[i]);
      }
    }

    /* GET ALLRANDOM FUNCTION END */

    /*PUSH STRATEGIES FUNCTION START*/
    function pushStrategies() {
      for (let i = 0; i < data.length; i++) {
        if (data[i].genre === "Strategy") {
          strategiesArray.push(data[i]);
        }
      }
    }
    pushStrategies(); //CALLING FUNCTION
    /*PUSH STRATEGIES FUNCTION END*/

    /* GET STRATEGIES FUNCTION START */
    listStrategies.addEventListener("click", getStrategies);

    function getStrategies() {
      for (let i = 0; i < 10; i++) {
        let randomStrategies = Math.floor(
          Math.random() * strategiesArray.length
        );
        let createCard = document.createElement("div");
        createCard.setAttribute("class", "card");
        let createImg = document.createElement("img");
        createImg.src = strategiesArray[randomStrategies].thumbnail;
        createImg.alt = strategiesArray[randomStrategies].title;
        let createBtn = document.createElement("button");
        createBtn.setAttribute("index", randomStrategies);
        createBtn.textContent = "More";
        createBtn.classList = `btn`;
        createBtn.setAttribute("data-id", randomStrategies);
        createCard.appendChild(createImg);
        createCard.appendChild(createBtn);
        container.replaceChild(createCard, container.childNodes[i]);
      }
    }
    /*GET STRATEGIES FUNCTION END*/

    /* PUSH SHOOTER FUNCTION START */
    function pushShooter() {
      for (let i = 0; i < data.length; i++) {
        if (data[i].genre === "Shooter") {
          shooterArray.push(data[i]);
        }
      }
    }
    pushShooter(); //CALLING FUNCTION
    /* PUSH SHOOTER FUNCTION END */

    /* GET SHOOTER FUNCTION START */
    listShooter.addEventListener("click", getShooter);
    function getShooter() {
      for (let i = 0; i < 10; i++) {
        let randomShooter = Math.floor(Math.random() * shooterArray.length);
        let createCard = document.createElement("div");
        createCard.setAttribute("class", "card");
        let createImg = document.createElement("img");
        createImg.src = shooterArray[randomShooter].thumbnail;
        createImg.alt = shooterArray[randomShooter].title;
        let createBtn = document.createElement("button");
        createBtn.setAttribute("index", randomShooter);
        createBtn.textContent = "More";
        createBtn.classList = `btn`;
        createBtn.setAttribute("data-id", randomShooter);
        createCard.appendChild(createImg);
        createCard.appendChild(createBtn);
        container.replaceChild(createCard, container.childNodes[i]);
      }
    }

    /* GET SHOOTER FUNCTION START */
  })
  .catch(Error);
/*SEARCHTITLE FUNCTION END*/
