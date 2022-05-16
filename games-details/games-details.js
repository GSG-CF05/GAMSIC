
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
    if (data[i].id == indexStorage) {
			gameImg.src = data[i].thumbnail;
			titleHeader.textContent = data[i].title;
			description.textContent = data[i].short_description;
			platform.textContent = data[i].platform;
			developer.textContent = data[i].developer;
			releaseDate.textContent = data[i].release_date;
			site.href = data[i].game_url;
			body.style = `background-image: url("${data[i].thumbnail}")`;
			backgroundImg.style = `background-image: url("${data[i].thumbnail}")`;
			let header = document.querySelector(`.column-one h1`);
			let anchor = document.querySelector(`.site a`);
			let image = document.querySelector(`#game-img`);
			if (data[i].genre === 'Shooter') {

				header.style.color = `#ce6d6d`;
				anchor.style.background = `#ce6d6d`;
				image.style.border = `10px solid #ce6d6d`;

			} else if (data[i].genre === 'Strategy') {

				header.style.color = `#6d8ece`;
				anchor.style.background = `#6d8ece`;
				image.style.border = `10px solid #6d8ece`;

			} else if (data[i].genre === 'MMORPG') {

				header.style.color = `#cc6dce`;
				anchor.style.background = `#cc6dce`;
				image.style.border = `10px solid #cc6dce`;

			} else {

				header.style.color = `#6fce6d`;
				anchor.style.background = `#6fce6d`;
				image.style.border = `10px solid #6fce6d`;

			}
    }
  }
})
.catch(Error);