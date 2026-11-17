// =====================================
// 1. LOCAL STORAGE
// =====================================
const localInput = document.getElementById("localInput");
const localSave = document.getElementById("localSave");
const localRemove = document.getElementById("localRemove");
const localResult = document.getElementById("localResult");

// Show the saved value (if there is one)
function showLocal() {
  const name = localStorage.getItem("userName"); // returns null if nothing is saved

  if (name === null) {
    localResult.textContent = "Nothing saved yet.";
  } else {
    localResult.textContent = "Saved name: " + name;
  }
}

localSave.addEventListener("click", function () {
  localStorage.setItem("userName", localInput.value); // key, value
  showLocal();
});

localRemove.addEventListener("click", function () {
  localStorage.removeItem("userName");
  showLocal();
});

showLocal(); // run when the page opens, so the value is still there after refresh


// =====================================
// 2. SESSION STORAGE
// =====================================
const sessionInput = document.getElementById("sessionInput");
const sessionSave = document.getElementById("sessionSave");
const sessionRemove = document.getElementById("sessionRemove");
const sessionResult = document.getElementById("sessionResult");

function showSession() {
  const note = sessionStorage.getItem("tempNote");

  if (note === null) {
    sessionResult.textContent = "Nothing saved yet.";
  } else {
    sessionResult.textContent = "Saved note: " + note;
  }
}

sessionSave.addEventListener("click", function () {
  sessionStorage.setItem("tempNote", sessionInput.value);
  showSession();
});

sessionRemove.addEventListener("click", function () {
  sessionStorage.removeItem("tempNote");
  showSession();
});

showSession();

// Difference to test:
// - Save a value in both boxes, then refresh: both are still there.
// - Close the tab and open the page again: Local is still there, Session is gone.


// =====================================
// 3. ASYNC / AWAIT
// =====================================
const loadBtn = document.getElementById("loadBtn");
const asyncResult = document.getElementById("asyncResult");

// This function pretends to get songs from a server (it takes 2 seconds)
function getSongs() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      const songs = ["Song A", "Song B", "Song C"];
      resolve(songs); // success: send the songs back
      // reject("Server error"); // use this line instead to test the error
    }, 2000);
  });
}

// async tells JS this function uses await inside
async function loadSongs() {
  asyncResult.textContent = "Loading...";

  try {
    const songs = await getSongs(); // wait here until the songs arrive
    asyncResult.textContent = "Songs: " + songs.join(", ");
  } catch (error) {
    asyncResult.textContent = "Something went wrong: " + error;
  }
}

loadBtn.addEventListener("click", loadSongs);