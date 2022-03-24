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

// * Adding event listener to fetch the data when the page is loaded and put the data inside the page through dom manipulation.
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
        // ! At the page there was some songs' titles that large for the styles,
        // ! so I filtered the titles depending on the number of letters and edited the font-size property.
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

// * Adding the click event listener to the song box to target the play icon to play the selected song in the player box

songsBox.addEventListener("click", (e) => {
  if (e.target.classList.contains("play")) {
    // ! Getting the selected song id to compare it to the data api to fetch the right object.
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
            // ! Add event listener to the music audio element to get the data of the selected song in the src attr.
            musicAudio.addEventListener("timeupdate", (e) => {
              let duration = document.querySelector(".duration");
              let currentTime = document.querySelector(".current");
              let audioCurrentTime = e.target.currentTime;
              let audioDuration = e.target.duration;
              let progressWidth = (audioCurrentTime / audioDuration) * 100;
              progressBar.style.width = `${progressWidth}%`;
              let minutes = Math.floor(audioDuration / 60); // ! Minutes duration.
              let seconds = Math.floor(audioDuration % 60); // ! Seconds duration.
              if (seconds < 10) {
                seconds = `0${seconds}`;
              }
              duration.textContent = `${minutes}:${seconds}`;

              let currMinutes = Math.floor(audioCurrentTime / 60); // ! Minutes current counter.
              let currSeconds = Math.floor(audioCurrentTime % 60); // ! Seconds current counter.
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

// * Adding the event listener to the pause icon to pause the music currently played.

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

// * Adding the event listener to the play icon to play the music currently paused.

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

// * Creating the function that responsible for moving to the next song in the box player.

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

// * Adding the event listener to the first and second forward arrows.

arrowForwardOne.addEventListener("click", () => {
  nextSong();
});

arrowForwardTwo.addEventListener("click", () => {
  nextSong();
});

// * Creating the function that responsible for moving to the previous song if the id wasn't 1 or less.

function previousSong() {
  let songId = musicCont.getAttribute("song-id");
  fetch("../api/api.json")
    .then((data) => data.json())
    .then((songs) => {
      songs.forEach((song) => {
        if (song.id == +songId - 1) {
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

// * Adding the event listener to the first and second backward arrows.

arrowBackOne.addEventListener("click", () => {
  previousSong();
});

arrowBackTwo.addEventListener("click", () => {
  previousSong();
});

// * The theme switcher function.

const bodyElement = document.querySelector("body");
const themeSwitcher = document.querySelector(".sun");

// * Adding the event listener to the theme switcher icon.
themeSwitcher.addEventListener("click", themeSwitch);

// * The function responsible for toggling the light class in and from the body element.
function setDarkTheme() {
  bodyElement.classList.toggle("light");
}

let isThemeDark = localStorage.getItem("isThemeDark");

if (isThemeDark == "true") setDarkTheme();

// * The function that responsible for switching the theme and adding it to local storage.
let backArrow = document.querySelector(".arrow");
function themeSwitch() {
  let isDarkTheme = window.localStorage.getItem("isThemeDark");
  if (isDarkTheme == "true") {
    backArrow.style.color = "#ffffff";
    setDarkTheme();
    localStorage.setItem("isThemeDark", "false");
  } else {
    backArrow.style.color = "#000000";
    setDarkTheme();
    localStorage.setItem("isThemeDark", "true");
  }
}
