
const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");

// Switch between Login and Signup
document.getElementById("showSignup").addEventListener("click", function(e) {
  e.preventDefault();
  loginForm.classList.add("hidden");
  signupForm.classList.remove("hidden");
  clearMessages();
});

document.getElementById("showLogin").addEventListener("click", function(e) {
  e.preventDefault();
  signupForm.classList.add("hidden");
  loginForm.classList.remove("hidden");
  clearMessages();
});

// Email validation
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Display errors
function showError(id, message) {
  document.getElementById(id).textContent = message;
}

// Clear old messages
function clearMessages() {
  document.querySelectorAll(".error, .success").forEach(function(element) {
    element.textContent = "";
  });
}

// Login validation
loginForm.addEventListener("submit", function(e) {
  e.preventDefault();
  clearMessages();

  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value;

  let valid = true;

  if (email === "") {
    showError("loginEmailError", "Email is required.");
    valid = false;
  } else if (!isValidEmail(email)) {
    showError("loginEmailError", "Enter a valid email address.");
    valid = false;
  }

  if (password === "") {
    showError("loginPasswordError", "Password is required.");
    valid = false;
  } else if (password.length < 8) {
    showError("loginPasswordError", "Password must be at least 8 characters.");
    valid = false;
  }

  if (valid) {
    document.getElementById("loginSuccess").textContent =
      "Validation successful!.";
    loginForm.reset();
  }
});

// Signup validation
signupForm.addEventListener("submit", function(e) {
  e.preventDefault();
  clearMessages();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("signupEmail").value.trim();
  const password = document.getElementById("signupPassword").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  let valid = true;

  
if (name === "") {
  showError("nameError", "Name is required.");
  valid = false;
} else if (!/^[a-zA-Z ]+$/.test(name)) {
  showError("nameError", "Name must contain only letters and spaces.");
  valid = false;
}

  if (email === "") {
    showError("signupEmailError", "Email is required.");
    valid = false;
  } else if (!isValidEmail(email)) {
    showError("signupEmailError", "Enter a valid email address.");
    valid = false;
  }

  if (password === "") {
    showError("signupPasswordError", "Password is required.");
    valid = false;
  } else if (password.length < 8) {
    showError("signupPasswordError", "Password must be at least 8 characters.");
    valid = false;
  }

  if (confirmPassword === "") {
    showError("confirmPasswordError", "Please confirm your password.");
    valid = false;
  } else if (password !== confirmPassword) {
    showError("confirmPasswordError", "Passwords do not match.");
    valid = false;
  }

  if (valid) {
    document.getElementById("signupSuccess").textContent =
      "Account Successfully Created.";
    signupForm.reset();
  }
});
