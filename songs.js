// All the songs of the app live here.
// Every song is an object with its own data.
// "audio" is a test song from the internet. Later you can use your own mp3 files,
// for example: audio: "audio/so-far-so-good.mp3"

const songs = [
  {
    id: 1,
    title: "So Far So Good",
    artist: "Sun Of They",
    album: "Silent Hills",
    added: "1 week ago",
    duration: "2:31",
    color: "#3b82c4",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
  },
  {
    id: 2,
    title: "Apricity",
    artist: "Imala Zir",
    album: "Apricity",
    added: "1 week ago",
    duration: "2:38",
    color: "#e07a3f",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
  },
  {
    id: 3,
    title: "Solatium",
    artist: "Imber Sun",
    album: "Solatium",
    added: "1 week ago",
    duration: "2:06",
    color: "#f2c230",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
  },
  {
    id: 4,
    title: "efflorescence",
    artist: "Far & Beyond",
    album: "efflorescence",
    added: "1 week ago",
    duration: "2:23",
    color: "#6a4fc9",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3"
  },
  {
    id: 5,
    title: "Gather My Thoughts",
    artist: "Josef Briem",
    album: "Gather My Thoughts",
    added: "1 week ago",
    duration: "3:03",
    color: "#9a5bd6",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3"
  },
  {
    id: 6,
    title: "Fresh Paint",
    artist: "Unknown",        // fill this from the Figma design
    album: "Mind Games",
    added: "1 week ago",
    duration: "2:40",         // fill this from the Figma design
    color: "#2f8f83",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3"
  }
];


// The cards of the home page (playlists). Used by the Liked Songs page.
const playlists = [
  { id: "deep-focus", title: "Deep Focus", description: "Keep calm and focus with ambient and post-rock music.", image: "photos/deep-focus.jpg" },
  { id: "instrumental-study", title: "Instrumental Study", description: "Focus with soft study music in the background.", image: "photos/instrumental-study.jpg" },
  { id: "focus-flow", title: "Focus Flow", description: "Uptempo instrumental hip hop beats.", image: "photos/focus-flow.jpg" },
  { id: "peaceful-piano", title: "Peaceful Piano", description: "Peaceful piano to help you slow down, breathe, and...", image: "photos/peaceful-piano.jpg" },
  { id: "peaceful-piano-2", title: "Peaceful Piano", description: "Peaceful piano to help you slow down, breathe, and...", image: "photos/peaceful-piano.jpg" },
  { id: "todays-top-hits", title: "Today's Top Hits", description: "Harry Styles is on top of the Hottest 50!", image: "photos/todays-top-hits.jpg" },
  { id: "rapcaviar", title: "RapCaviar", description: "New music from Lil Baby, Gucci Mane and DaBaby.", image: "photos/rapcaviar.jpg" },
  { id: "all-out-2010s", title: "All Out 2010s", description: "The biggest songs of the 2010s.", image: "photos/all-out-2010s.jpg" },
  { id: "rock-classics", title: "Rock Classics", description: "Rock legends & epic songs that continue to inspire...", image: "photos/rock-classics.jpg" },
  { id: "chill-hits", title: "Chill Hits", description: "Kick back to the best new and recent chill hits.", image: "photos/chill-hits.jpg" }
];