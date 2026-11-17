// ---------- Get the screens ----------
const signupScreen = document.getElementById("signupScreen");
const loginScreen = document.getElementById("loginScreen");
const registerScreen = document.getElementById("registerScreen");

// ---------- Show one screen and hide the others ----------
function showScreen(screen) {
  signupScreen.classList.add("hidden");
  loginScreen.classList.add("hidden");
  registerScreen.classList.add("hidden");

  screen.classList.remove("hidden");
}

// "Sign up free" button -> register screen
document.getElementById("signupBtn").addEventListener("click", function () {
  showScreen(registerScreen);
});

// "Log in" link on the first screen -> login screen
document.getElementById("goToLogin").addEventListener("click", function (event) {
  event.preventDefault();
  showScreen(loginScreen);
});

// "Sign Up." link on the login screen -> first screen
document.getElementById("loginToSignup").addEventListener("click", function (event) {
  event.preventDefault();
  showScreen(signupScreen);
});

// "Log in" link on the register screen -> login screen
document.getElementById("registerToLogin").addEventListener("click", function (event) {
  event.preventDefault();
  showScreen(loginScreen);
});


// ---------- Regex rules ----------
const emailRegex = /^\S+@\S+\.\S+$/;   // something@something.something
const upperRegex = /[A-Z]/;            // at least one capital letter
const lowerRegex = /[a-z]/;            // at least one small letter
const specialRegex = /[@#$!]/;         // at least one special character


// ---------- Validation functions ----------
// Each function returns an error message, or "" if everything is OK

function checkName(name) {
  if (name.trim() === "") {
    return "Please enter a username.";
  }
  if (name.trim().length < 3) {
    return "Username must be at least 3 characters.";
  }
  return "";
}

function checkEmail(email) {
  if (email === "") {
    return "Please enter your email.";
  }
  if (!emailRegex.test(email)) {
    return "Email is not valid. Example: example@gmail.com";
  }
  return "";
}

function checkPassword(password) {
  if (password === "") {
    return "Please enter your password.";
  }
  if (password.length < 8) {
    return "Password must be at least 8 characters.";
  }
  if (!upperRegex.test(password)) {
    return "Password must have at least 1 uppercase letter.";
  }
  if (!lowerRegex.test(password)) {
    return "Password must have at least 1 lowercase letter.";
  }
  if (!specialRegex.test(password)) {
    return "Password must have at least 1 special character (@ # $ !).";
  }
  return "";
}


// =====================================
// LOGIN FORM
// =====================================
const loginForm = document.getElementById("loginForm");
const loginEmail = document.getElementById("loginEmail");
const loginPassword = document.getElementById("loginPassword");
const loginEmailError = document.getElementById("loginEmailError");
const loginPasswordError = document.getElementById("loginPasswordError");
const loginSuccess = document.getElementById("loginSuccess");

// Check while the user types
loginEmail.addEventListener("input", function () {
  loginEmailError.textContent = checkEmail(loginEmail.value);
});

loginPassword.addEventListener("input", function () {
  loginPasswordError.textContent = checkPassword(loginPassword.value);
});

// Check when the user clicks Login
loginForm.addEventListener("submit", function (event) {
  event.preventDefault(); // stop the page from reloading

  const emailMessage = checkEmail(loginEmail.value);
  const passwordMessage = checkPassword(loginPassword.value);

  loginEmailError.textContent = emailMessage;
  loginPasswordError.textContent = passwordMessage;

  if (emailMessage === "" && passwordMessage === "") {
    loginSuccess.textContent = "Logged in successfully!";
    localStorage.setItem("isLoggedIn", "true"); // remember the login
    window.location.href = "index.html"; // go to the home page
  } else {
    loginSuccess.textContent = "";
  }
});


// =====================================
// REGISTER FORM
// =====================================
const registerForm = document.getElementById("registerForm");
const registerName = document.getElementById("registerName");
const registerEmail = document.getElementById("registerEmail");
const registerPassword = document.getElementById("registerPassword");
const registerNameError = document.getElementById("registerNameError");
const registerEmailError = document.getElementById("registerEmailError");
const registerPasswordError = document.getElementById("registerPasswordError");
const registerSuccess = document.getElementById("registerSuccess");

registerName.addEventListener("input", function () {
  registerNameError.textContent = checkName(registerName.value);
});

registerEmail.addEventListener("input", function () {
  registerEmailError.textContent = checkEmail(registerEmail.value);
});

registerPassword.addEventListener("input", function () {
  registerPasswordError.textContent = checkPassword(registerPassword.value);
});

registerForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const nameMessage = checkName(registerName.value);
  const emailMessage = checkEmail(registerEmail.value);
  const passwordMessage = checkPassword(registerPassword.value);

  registerNameError.textContent = nameMessage;
  registerEmailError.textContent = emailMessage;
  registerPasswordError.textContent = passwordMessage;

  if (nameMessage === "" && emailMessage === "" && passwordMessage === "") {
    registerSuccess.textContent = "Account created! You can log in now.";
    showScreen(loginScreen);
  } else {
    registerSuccess.textContent = "";
  }
});