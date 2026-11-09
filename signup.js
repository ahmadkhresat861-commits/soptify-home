// ---------- Get the elements from the page ----------
const signupScreen = document.getElementById("signupScreen");
const loginScreen = document.getElementById("loginScreen");

const signupBtn = document.getElementById("signupBtn");
const goToLogin = document.getElementById("goToLogin");
const goToSignup = document.getElementById("goToSignup");

const loginForm = document.getElementById("loginForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const successMsg = document.getElementById("successMsg");


// ---------- Switch between the two screens ----------
function showLogin() {
  signupScreen.classList.add("hidden");
  loginScreen.classList.remove("hidden");
}

function showSignup() {
  loginScreen.classList.add("hidden");
  signupScreen.classList.remove("hidden");
}

signupBtn.addEventListener("click", showLogin);

goToLogin.addEventListener("click", function (event) {
  event.preventDefault();
  showLogin();
});

goToSignup.addEventListener("click", function (event) {
  event.preventDefault();
  showSignup();
});


// ---------- Regex for validation ----------
const emailRegex = /^\S+@\S+\.\S+$/;   // something@something.something
const upperRegex = /[A-Z]/;            // at least one capital letter
const lowerRegex = /[a-z]/;            // at least one small letter
const specialRegex = /[@#$!]/;         // at least one special character


// ---------- Validation functions ----------
// Each function returns an error message, or "" if everything is OK

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


// ---------- Show the error under the input ----------
emailInput.addEventListener("input", function () {
  emailError.textContent = checkEmail(emailInput.value);
});

passwordInput.addEventListener("input", function () {
  passwordError.textContent = checkPassword(passwordInput.value);
});


// ---------- When the user clicks Log in ----------
loginForm.addEventListener("submit", function (event) {
  event.preventDefault(); // stop the page from reloading

  const emailMessage = checkEmail(emailInput.value);
  const passwordMessage = checkPassword(passwordInput.value);

  emailError.textContent = emailMessage;
  passwordError.textContent = passwordMessage;

  if (emailMessage === "" && passwordMessage === "") {
    successMsg.textContent = "Logged in successfully!";
  } else {
    successMsg.textContent = "";
  }
});