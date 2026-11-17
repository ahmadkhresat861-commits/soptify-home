// =====================================
// MUSIC PLAYER: Play, Pause, Next, Previous
// =====================================

const audio = new Audio();   // the object that plays the sound
let currentIndex = -1;       // which song is selected (-1 = no song yet)

// ---------- Get the elements ----------
const playerThumb = document.getElementById("playerThumb");
const playerTitle = document.getElementById("playerTitle");
const playerArtist = document.getElementById("playerArtist");
const playerHeart = document.getElementById("playerHeart");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const progressBar = document.getElementById("progressBar");
const volumeBar = document.getElementById("volumeBar");
const currentTimeText = document.getElementById("currentTimeText");
const totalTimeText = document.getElementById("totalTimeText");

// All the buttons that play/pause (the player button and the big green one)
const playButtons = document.querySelectorAll(".js-play-toggle");

audio.volume = 0.7;


// ---------- Helper: turn seconds into 2:05 ----------
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);

  if (secs < 10) {
    return minutes + ":0" + secs;
  }
  return minutes + ":" + secs;
}


// ---------- Mark the playing song in the table (playlist page only) ----------
function highlightRow() {
  const rows = document.querySelectorAll(".song-row");

  rows.forEach(function (row) {
    if (Number(row.dataset.index) === currentIndex) {
      row.classList.add("playing");
    } else {
      row.classList.remove("playing");
    }
  });
}


// ---------- Load a song into the player (without playing it) ----------
function loadSong(index) {
  currentIndex = index;
  const song = songs[index];

  audio.src = song.audio;
  playerTitle.textContent = song.title;
  playerArtist.textContent = song.artist;
  playerThumb.style.backgroundColor = song.color;

  // The heart of the player likes the current song
  playerHeart.dataset.id = "track-" + song.id;
  refreshHearts();

  progressBar.value = 0;
  currentTimeText.textContent = "0:00";

  highlightRow();
}


// ---------- Load a song and play it ----------
function playSongAt(index) {
  loadSong(index);

  audio.play().catch(function (error) {
    console.log("Could not play the song:", error);
  });
}


// ---------- Play / Pause ----------
function togglePlay() {
  // No song selected yet -> play the first one
  if (currentIndex === -1) {
    playSongAt(0);
    return;
  }

  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}


// ---------- Next / Previous ----------
function nextSong() {
  let newIndex = currentIndex + 1;

  if (newIndex >= songs.length) {
    newIndex = 0; // after the last song, go back to the first
  }

  playSongAt(newIndex);
}

function prevSong() {
  // If the song played more than 3 seconds, restart it
  if (currentIndex !== -1 && audio.currentTime > 3) {
    audio.currentTime = 0;
    return;
  }

  let newIndex = currentIndex - 1;

  if (newIndex < 0) {
    newIndex = songs.length - 1; // before the first song, go to the last
  }

  playSongAt(newIndex);
}


// ---------- Buttons ----------
playButtons.forEach(function (button) {
  button.addEventListener("click", togglePlay);
});

nextBtn.addEventListener("click", nextSong);
prevBtn.addEventListener("click", prevSong);


// ---------- Change the button icon when the audio plays or pauses ----------
audio.addEventListener("play", function () {
  playButtons.forEach(function (button) {
    button.classList.add("is-playing");
  });
});

audio.addEventListener("pause", function () {
  playButtons.forEach(function (button) {
    button.classList.remove("is-playing");
  });
});


// ---------- Progress bar ----------
audio.addEventListener("loadedmetadata", function () {
  totalTimeText.textContent = formatTime(audio.duration);
});

audio.addEventListener("timeupdate", function () {
  if (audio.duration) {
    progressBar.value = (audio.currentTime / audio.duration) * 100;
    currentTimeText.textContent = formatTime(audio.currentTime);
  }
});

// The user moves the progress bar
progressBar.addEventListener("input", function () {
  if (audio.duration) {
    audio.currentTime = (progressBar.value / 100) * audio.duration;
  }
});

// When the song ends, play the next one
audio.addEventListener("ended", nextSong);


// ---------- Volume ----------
volumeBar.addEventListener("input", function () {
  audio.volume = volumeBar.value / 100;
});