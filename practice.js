// =====================================================
// JavaScript Practice - run with: node practice.js
// (or open the browser console and paste the code)
// =====================================================


// ---------- 1. How JavaScript works ----------
// JS is single-threaded: it runs one line at a time.
console.log("1. First");

// setTimeout is asynchronous: it waits, and JS keeps going
setTimeout(function () {
  console.log("3. Third (this runs later, after 1 second)");
}, 1000);

console.log("2. Second (runs before the timeout)");

// Memory heap: objects and arrays are stored in the heap.
// Garbage collection: when nothing uses an object anymore, JS removes it automatically.
let temp = { name: "temporary" };
temp = null; // the old object is now garbage and will be cleaned


// ---------- 2. Variables: let, const, var ----------
let songName = "Song A";   // can be changed
songName = "Song B";

const appName = "Spotify"; // cannot be changed
// appName = "Other";      // this would give an error

var oldWay = "var";        // old style, avoid it
console.log("2.", songName, appName, oldWay);


// ---------- 3. Scopes ----------
const globalValue = "I am global"; // can be used anywhere

if (true) {
  let blockValue = "I live only inside this block";
  console.log("3.", globalValue, blockValue);
}
// console.log(blockValue); // error: blockValue does not exist outside the block

// var ignores block scope (this is why we avoid var)
if (true) {
  var leaked = "var leaks out of the block";
}
console.log("3.", leaked);


// ---------- 4. Functions and objects ----------
function greet(name) {
  return "Hello " + name;
}
console.log("4.", greet("Ahmad"));

const user = {
  name: "Ahmad",
  age: 22,
  sayHi: function () {
    // "this" means the object that owns the function
    console.log("4. Hi, I am " + this.name);
  },
};

console.log(user.name);      // dot notation
console.log(user["age"]);    // bracket notation

const key = "name";
console.log(user[key]);      // bracket notation works with variables, dot does not
user.sayHi();


// ---------- 5. Arrays and array methods ----------
const songs = ["Song A", "Song B", "Song C", "Song D"];
const numbers = [1, 2, 3, 4, 5];

// forEach: do something for each item
songs.forEach(function (song) {
  console.log("5. forEach:", song);
});

// map: make a new array from the old one
const doubled = numbers.map(function (n) {
  return n * 2;
});
console.log("5. map:", doubled); // [2, 4, 6, 8, 10]

// filter: keep only the items that pass a test
const bigNumbers = numbers.filter(function (n) {
  return n > 2;
});
console.log("5. filter:", bigNumbers); // [3, 4, 5]

// find: get the first item that passes a test
const found = numbers.find(function (n) {
  return n > 3;
});
console.log("5. find:", found); // 4

// reduce: turn the array into one value
const sum = numbers.reduce(function (total, n) {
  return total + n;
}, 0);
console.log("5. reduce:", sum); // 15

// includes: check if the array has a value
console.log("5. includes:", songs.includes("Song B")); // true


// ---------- 6. Classes ----------
class Playlist {
  constructor(name) {
    this.name = name;
    this.songs = [];
  }

  addSong(song) {
    this.songs.push(song);
  }

  show() {
    console.log("6. " + this.name + " has " + this.songs.length + " songs");
  }
}

const focus = new Playlist("Deep Focus");
focus.addSong("Song A");
focus.addSong("Song B");
focus.show();


// ---------- 7. Loops ----------
// for: when you know how many times
for (let i = 1; i <= 3; i++) {
  console.log("7. for:", i);
}

// while: repeat while the condition is true
let count = 1;
while (count <= 3) {
  console.log("7. while:", count);
  count++;
}

// do...while: runs at least once, then checks the condition
let n = 5;
do {
  console.log("7. do...while:", n); // prints once even though n > 3
  n++;
} while (n <= 3);


// ---------- 8. Conditionals and logical operators ----------
const age = 20;
const hasAccount = true;

if (age >= 18 && hasAccount) {          // && means both must be true
  console.log("8. Adult with account");
} else if (age >= 18 || hasAccount) {   // || means at least one is true
  console.log("8. Adult or has account");
} else {
  console.log("8. Neither");
}

console.log("8. !hasAccount =", !hasAccount); // ! flips true/false

const day = 3;
switch (day) {
  case 1:
    console.log("8. Monday");
    break;
  case 3:
    console.log("8. Wednesday");
    break;
  default:
    console.log("8. Other day");
}


// ---------- 9. Error handling ----------
try {
  const data = JSON.parse("this is not valid json");
  console.log(data);
} catch (error) {
  console.log("9. Something went wrong:", error.message);
} finally {
  console.log("9. This always runs");
}


// ---------- 10. Spread and rest ----------
// Spread: opens an array/object into separate items
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log("10. spread:", arr2); // [1, 2, 3, 4, 5]

const person = { name: "Ahmad", age: 22 };
const personCopy = { ...person, city: "Amman" };
console.log("10. spread object:", personCopy);

// Rest: collects many items into one array
function addAll(...nums) {
  return nums.reduce(function (total, x) {
    return total + x;
  }, 0);
}
console.log("10. rest:", addAll(1, 2, 3, 4)); // 10


// ---------- 11. Regex ----------
const emailRegex = /^\S+@\S+\.\S+$/;
console.log("11.", emailRegex.test("example@gmail.com")); // true
console.log("11.", emailRegex.test("example.com"));       // false

const hasUpper = /[A-Z]/;
console.log("11.", hasUpper.test("abc"));  // false
console.log("11.", hasUpper.test("Abc"));  // true