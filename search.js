// =====================================
// SEARCH: find songs and playlists while typing
// =====================================

const searchInput = document.getElementById("searchInput");
const genreSection = document.getElementById("genreSection");
const searchResults = document.getElementById("searchResults");
const resultsList = document.getElementById("resultsList");

function runSearch() {
  // The text the user typed (small letters, without extra spaces)
  const text = searchInput.value.trim().toLowerCase();

  // Nothing typed -> show the genres again
  if (text === "") {
    genreSection.classList.remove("hidden");
    searchResults.classList.add("hidden");
    return;
  }

  // Something typed -> hide the genres and show the results
  genreSection.classList.add("hidden");
  searchResults.classList.remove("hidden");
  resultsList.innerHTML = "";

  let found = 0; // how many results we found

  // ----- 1. Search in the songs -----
  songs.forEach(function (song, index) {
    const title = song.title.toLowerCase();
    const artist = song.artist.toLowerCase();

    if (title.includes(text) || artist.includes(text)) {
      found++;

      const row = document.createElement("div");
      row.className = "liked-row result-row";
      row.innerHTML =
        '<div class="song-title-cell">' +
          '<div class="liked-thumb" style="background-color:' + song.color + '"></div>' +
          '<div>' +
            '<div class="song-name">' + song.title + '</div>' +
            '<div class="song-artist">' + song.artist + '</div>' +
          '</div>' +
        '</div>' +
        '<span class="col-type">Song</span>';

      // Click a song -> play it (playSongAt is in player.js)
      row.addEventListener("click", function () {
        playSongAt(index);
      });

      resultsList.appendChild(row);
    }
  });

  // ----- 2. Search in the playlists -----
  playlists.forEach(function (playlist) {
    const title = playlist.title.toLowerCase();

    if (title.includes(text)) {
      found++;

      const row = document.createElement("div");
      row.className = "liked-row result-row";
      row.innerHTML =
        '<div class="song-title-cell">' +
          '<img class="liked-thumb" src="' + playlist.image + '" alt="' + playlist.title + '">' +
          '<div>' +
            '<div class="song-name">' + playlist.title + '</div>' +
            '<div class="song-artist">' + playlist.description + '</div>' +
          '</div>' +
        '</div>' +
        '<span class="col-type">Playlist</span>';

      // Only Deep Focus has a page for now
      if (playlist.id === "deep-focus") {
        row.addEventListener("click", function () {
          window.location.href = "playlist.html";
        });
      }

      resultsList.appendChild(row);
    }
  });

  // ----- 3. Nothing found -----
  if (found === 0) {
    resultsList.innerHTML = '<p class="empty-message">No results for "' + searchInput.value + '".</p>';
  }
}

// Search every time the user types
searchInput.addEventListener("input", runSearch);