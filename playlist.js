// Build the songs table from the songs array (songs.js)

const songList = document.getElementById("songList");

songs.forEach(function (song, index) {
  // Create one row
  const row = document.createElement("div");
  row.className = "song-row";
  row.dataset.id = song.id;

  // Put the song data inside the row
  row.innerHTML =
    '<span>' + (index + 1) + '</span>' +
    '<div class="song-title-cell">' +
      '<div class="song-thumb" style="background-color:' + song.color + '"></div>' +
      '<div>' +
        '<div class="song-name">' + song.title + '</div>' +
        '<div class="song-artist">' + song.artist + '</div>' +
      '</div>' +
    '</div>' +
    '<span class="col-album">' + song.album + '</span>' +
    '<span class="col-date">' + song.added + '</span>' +
    '<span>' + song.duration + '</span>';

  // Add the row to the page
  songList.appendChild(row);
});