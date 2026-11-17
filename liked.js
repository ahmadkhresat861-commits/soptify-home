// Show the liked songs (read from Local Storage)

const likedList = document.getElementById("likedList");
const likedCount = document.getElementById("likedCount");

// Find the data of an id (a playlist card or a song)
function findItem(id) {
  // 1. Is it a playlist card?
  for (let i = 0; i < playlists.length; i++) {
    if (playlists[i].id === id) {
      return {
        title: playlists[i].title,
        subtitle: playlists[i].description,
        type: "Playlist",
        image: playlists[i].image
      };
    }
  }

  // 2. Is it a song?
  for (let i = 0; i < songs.length; i++) {
    if ("track-" + songs[i].id === id) {
      return {
        title: songs[i].title,
        subtitle: songs[i].artist,
        type: "Song",
        color: songs[i].color
      };
    }
  }

  return null; // not found
}

const heartSvg =
  '<svg viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>';

function renderLiked() {
  const likedIds = getLiked();
  likedList.innerHTML = "";

  likedCount.textContent = likedIds.length + " liked";

  // Nothing liked yet
  if (likedIds.length === 0) {
    likedList.innerHTML =
      '<p class="empty-message">No liked songs yet. Click a heart to add one.</p>';
    return;
  }

  likedIds.forEach(function (id) {
    const item = findItem(id);

    if (item === null) {
      return; // skip ids we do not know
    }

    // A picture for playlists, or a colored square for songs
    let thumb;
    if (item.image) {
      thumb = '<img class="liked-thumb" src="' + item.image + '" alt="' + item.title + '">';
    } else {
      thumb = '<div class="liked-thumb" style="background-color:' + item.color + '"></div>';
    }

    const row = document.createElement("div");
    row.className = "liked-row";

    row.innerHTML =
      '<div class="song-title-cell">' +
        thumb +
        '<div>' +
          '<div class="song-name">' + item.title + '</div>' +
          '<div class="song-artist">' + item.subtitle + '</div>' +
        '</div>' +
      '</div>' +
      '<span class="col-type">' + item.type + '</span>' +
      '<button class="heart-btn" data-id="' + id + '" aria-label="Unlike">' + heartSvg + '</button>';

    likedList.appendChild(row);
  });

  // Make the new hearts work. After a click, draw the list again.
  setupHearts(likedList, renderLiked);
  refreshHearts();
}

renderLiked();