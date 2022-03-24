let app = document.querySelector('#main');

let container = document.createElement('div')
container.setAttribute('class' , 'container')
app.appendChild(container)

let title = document.createElement('h6')
container.setAttribute('class' , 'container')
app.appendChild(container)

let pargraph = document.createElement('p')
pargraph.setAttribute('class' , 'pargraph')
title.appendChild(pargra)

let indexStorage = [];
indexStorage = JSON.parse(localStorage.getItem('index'));
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
        for (let i = 0; i < data.length; i++) {
            if (i === indexStorage) {
            }
        }



        // console.log(data)
        data.forEach(games => {
            // let card = document.createElement('div')
            card.setAttribute('class', 'card')
            container.appendChild(card)

            let description = document.createElement('h6')
            description.textContent = games.short_description
            card.appendChild(description)

            let platform = document.createElement('h6')
            platform.textContent = games.platform
            card.appendChild(platform)

            let developer = document.createElement('h6')
            developer.textContent = games.developer
            card.appendChild(developer)

            let release_date = document.createElement('h6')
            release_date.textContent = games.release_date
            card.appendChild(release_date)

            let freetogame_profile_url = document.createElement('h6')
            freetogame_profile_url.textContent = games.freetogame_profile_url
            card.appendChild(freetogame_profile_url)


        })
    })


.catch(Error)