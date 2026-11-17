// =====================================
// FAVORITES (saved in Local Storage)
// =====================================
// We save a list of liked ids, for example: ["deep-focus", "track-2"]

const LIKED_KEY = "likedSongs";

// Get the list of liked ids from Local Storage
function getLiked() {
  const saved = localStorage.getItem(LIKED_KEY);

  if (saved === null) {
    return []; // nothing saved yet
  }

  try {
    return JSON.parse(saved); // turn the text back into an array
  } catch (error) {
    return []; // if the saved text is broken, start again
  }
}

// Save the list in Local Storage
function saveLiked(list) {
  localStorage.setItem(LIKED_KEY, JSON.stringify(list));
}

// Is this id liked?
function isLiked(id) {
  return getLiked().includes(id);
}

// Add the id if it is not liked, remove it if it is liked
function toggleLike(id) {
  const list = getLiked();
  const position = list.indexOf(id);

  if (position === -1) {
    list.push(id);          // add to favorites
  } else {
    list.splice(position, 1); // remove from favorites
  }

  saveLiked(list);
}

// Color the hearts: red if the id is liked, normal if not
function refreshHearts() {
  const hearts = document.querySelectorAll(".heart-btn[data-id]");

  hearts.forEach(function (button) {
    if (isLiked(button.dataset.id)) {
      button.classList.add("liked");
    } else {
      button.classList.remove("liked");
    }
  });
}

// Make the hearts clickable inside an element (root).
// onChange (optional) runs after every click.
function setupHearts(root, onChange) {
  const hearts = root.querySelectorAll(".heart-btn");

  hearts.forEach(function (button) {
    button.addEventListener("click", function (event) {
      event.stopPropagation(); // do not open the card or play the song

      const id = button.dataset.id;

      if (!id) {
        return; // this heart has no song yet
      }

      toggleLike(id);
      refreshHearts();

      if (onChange) {
        onChange();
      }
    });
  });
}

// Run when the page opens
setupHearts(document);
refreshHearts();