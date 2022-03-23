const songsBox = document.querySelector(".songs-boxes");
const artistImage = document.getElementsByClassName("artist-image")[0];
const songName = document.getElementsByClassName("song-name")[0];
const progressCont = document.getElementsByClassName("progress-cont")[0];
const progressBar = document.getElementsByClassName("progress-bar")[0];
const pauseIcon = document.getElementsByClassName("pause-play")[0];
const backArrowsCont = document.getElementsByClassName("back-arrows")[0];
const arrowBackOne = document.getElementsByClassName("arrow-back-one")[0];
const arrowBackTwo = document.getElementsByClassName("arrow-back-two")[0];
const forwardArrowsCont = document.getElementsByClassName("forward-arrows")[0];
const arrowForwardOne = document.getElementsByClassName("arrow-forward-one")[0];
const arrowForwardTwo = document.getElementsByClassName("arrow-forward-two")[0];
const musicAudio = document.getElementById("music");
const musicCont = document.querySelector(".music-cont");

window.addEventListener("load", () => {
  fetch("../api/api.json")
    .then((data) => data.json())
    .then((songs) => {
      console.log(songs);
      songs.forEach((song) => {
        let songSec = document.createElement("section");
        songSec.classList.add("song");
        songSec.setAttribute("data-id", song.id);
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
        if (song.name.split("").length > 12) {
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

songsBox.addEventListener("click", (e) => {
  if (e.target.classList.contains("play")) {
    let selectedId =
      e.target.parentElement.parentElement.getAttribute("data-id");
    fetch("../api/api.json")
      .then((data) => data.json())
      .then((songs) => {
        songs.forEach((song) => {
          if (selectedId == song.id) {
            artistImage.src = song.image;
            if (selectedId < 4) {
              musicAudio.src = `../api/music-api/${song.audio}.mp3`;
            } else {
              musicAudio.src = `../api/music-api/${songs[2].audio}.mp3`;
            }
            songName.textContent = song.name;
            let section = document.querySelector("section");
            songsBox.classList.add("paused");
            musicCont.classList.add("paused");
            musicCont.setAttribute("song-id", song.id);
            pauseIcon.className = "ri-pause-circle-line pause-play";
            musicAudio.play();
            musicAudio.addEventListener("timeupdate", (e) => {
              let duration = document.querySelector(".duration");
              let currentTime = document.querySelector(".current");
              let audioCurrentTime = e.target.currentTime;
              let audioDuration = e.target.duration;
              let progressWidth = (audioCurrentTime / audioDuration) * 100;
              progressBar.style.width = `${progressWidth}%`;
              let minutes = Math.floor(audioDuration / 60);
              let seconds = Math.floor(audioDuration % 60);
              if (seconds < 10) {
                seconds = `0${seconds}`;
              }
              duration.textContent = `${minutes}:${seconds}`;

              let currMinutes = Math.floor(audioCurrentTime / 60);
              let currSeconds = Math.floor(audioCurrentTime % 60);
              if (currMinutes < 10) {
                currMinutes = `0${currMinutes}`;
              }
              if (currSeconds < 10) {
                currSeconds = `0${currSeconds}`;
              }
              currentTime.textContent = `${currMinutes}:${currSeconds}`;
            });
          }
        });
      });
  }
});

pauseIcon.addEventListener("click", (e) => {
  if (
    e.target.parentElement.parentElement.parentElement.classList.contains(
      "paused"
    )
  ) {
    musicAudio.pause();
    musicCont.classList.remove("paused");
    musicCont.classList.add("played");
    pauseIcon.className = "ri-play-circle-line pause-play";
  }
});

pauseIcon.addEventListener("dblclick", (e) => {
  if (
    e.target.parentElement.parentElement.parentElement.classList.contains(
      "played"
    )
  ) {
    musicAudio.play();
    musicCont.classList.remove("played");
    musicCont.classList.add("paused");
    pauseIcon.className = "ri-pause-circle-line pause-play";
  }
});

function nextSong() {
  let songId = musicCont.getAttribute("song-id");
  fetch("../api/api.json")
    .then((data) => data.json())
    .then((songs) => {
      songs.forEach((song) => {
        if (song.id == +songId + 1) {
          artistImage.src = song.image;
          musicCont.setAttribute("song-id", song.id);
          if (+songId + 1 < 4) {
            musicAudio.src = `../api/music-api/${song.audio}.mp3`;
          } else {
            musicAudio.src = `../api/music-api/${songs[2].audio}.mp3`;
          }
          songName.textContent = song.name;
          musicAudio.play();
        }
      });
    });
}

arrowForwardOne.addEventListener("click", () => {
  nextSong();
});

arrowForwardTwo.addEventListener("click", () => {
  nextSong();
});

function previousSong() {
  let songId = musicCont.getAttribute("song-id");
  fetch("../api/api.json")
    .then((data) => data.json())
    .then((songs) => {
      songs.forEach((song) => {
        if (song.id == +songId - 1 && song.id > 1) {
          artistImage.src = song.image;
          musicCont.setAttribute("song-id", song.id);
          if (+songId - 1 < 4) {
            musicAudio.src = `../api/music-api/${song.audio}.mp3`;
          } else {
            musicAudio.src = `../api/music-api/${songs[2].audio}.mp3`;
          }
          songName.textContent = song.name;
          musicAudio.play();
        }
      });
    });
}

arrowBackOne.addEventListener("click", () => {
  previousSong();
});

arrowBackTwo.addEventListener("click", () => {
  previousSong();
});
