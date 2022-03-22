const songsBox = document.querySelector(".songs-boxes");

window.addEventListener("load", () => {
  fetch("../api/api.json")
    .then((data) => data.json())
    .then((songs) => {
      console.log(songs);
      songs.forEach((song) => {
        let songSec = document.createElement("section");
        songSec.classList.add("song");
        songsBox.appendChild(songSec);

        let albumImg = document.createElement("img");
        albumImg.src = song.image;
        albumImg.alt = song.name;
        songSec.appendChild(albumImg);

        let textDiv = document.createElement("div");
        textDiv.className = "text";
        songSec.appendChild(textDiv);

        let songName = document.createElement("h2");
        songName.className = "song-name";
        songName.textContent = song.name;
        textDiv.appendChild(songName);
        if (song.name.split(" ").length > 2) {
          songName.style.fontSize = "1.5rem";
        }

        let artistName = document.createElement("h4");
        artistName.className = "artist";
        artistName.textContent = song.artist;
        textDiv.appendChild(artistName);

        let icon = document.createElement("i");
        icon.className = "ri-play-fill";
        icon.classList.add("play");
        textDiv.appendChild(icon);
      });
    });
});
