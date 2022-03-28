
let gameImg = document.getElementById(`game-img`);
let titleHeader = document.querySelector(`.column-one h1`);
let description = document.querySelector(`#desc p`);
let platform = document.querySelector(`#plat p`);
let developer = document.querySelector(`#deve p`);
let releaseDate = document.querySelector(`#release p`);
let site = document.querySelector(`.site a`);
let body = document.querySelector(`body`);
let backgroundImg = document.querySelector(`main .backgroung-img`);

let indexStorage = [];
indexStorage = JSON.parse(localStorage.getItem('index'));
fetch("https://free-to-play-games-database.p.rapidapi.com/api/games?platform=pc",
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

	console.log(data[0].thumbnail)
	for (let i = 0; i < data.length; i++) {
    if (i === indexStorage) {
			gameImg.src = data[i].thumbnail;
			titleHeader.textContent = data[i].title;
			description.textContent = data[i].short_description;
			platform.textContent = data[i].platform;
			developer.textContent = data[i].developer;
			releaseDate.textContent = data[i].release_date;
			site.href = data[i].game_url;
			body.style = `background-image: url("${data[i].thumbnail}")`;
			backgroundImg.style = `background-image: url("${data[i].thumbnail}")`;
    }
  }
})
.catch(Error);