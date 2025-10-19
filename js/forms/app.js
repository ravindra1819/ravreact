// Form in Javascript :

// A form is an HTML element that collects user input. Forms are used to gather data from users, such as text, selections, and files, and submit that data to a server for processing. 
// Forms typically include various input elements like text fields, checkboxes, radio buttons, dropdown menus, and buttons to submit or reset the form.

// Before sending the form data to the server, client-side validation is often performed using JavaScript to ensure that the input meets certain criteria (e.g., required fields are filled, email addresses are in the correct format).

// You can use Javascript for :
// Validation form data before submission
// Prevent invalid data from being sent to the server
// Provide real-time feedback to users
// Enhance user experience by dynamically updating the form based on user input.


// Register Form Validation Example in JavaScript:

const form = document.getElementById('registerForm');
const message = document.getElementById('message');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('cPassword');

// Validation Function :
form.addEventListener('submit', (event) => {
  event.preventDefault();

  const fname = firstName.value.trim();
  const lname = lastName.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const cPasswordValue = confirmPassword.value.trim();

  // Clear previous message
  message.textContent = '';

  // Basic Validation Checks
  if (fname === "" || lname === "" || emailValue === "" || passwordValue === "" || cPasswordValue === "") {
    showMessage("Please fill in all required fields", "red");
    return;
  }

  // First Name validation
  if (fname.length < 3) {
    showMessage("First name should be minimum 3 characters", "red");
    return;
  }

  // Last Name validation
  if (lname.length < 3) {
    showMessage("Last name should be minimum 3 characters", "red");
    return;
  }

  // Email validation (without regex)
  if (!isValidEmail(emailValue)) {
    showMessage("Please enter a valid email address", "red");
    return;
  }

  // Password validation
  const passwordCheck = validatePassword(passwordValue);
  if (!passwordCheck.valid) {
    showMessage(passwordCheck.error, "red");
    return;
  }

  // Confirm password check
  if (passwordValue !== cPasswordValue) {
    showMessage("Passwords do not match", "red");
    return;
  }

  // If all checks pass
  showMessage("Registration Successful!", "green");
  form.reset();
});

// Helper function to show messages
function showMessage(text, color) {
  message.textContent = text;
  message.style.color = color;
}

// Email Validation without Regex
function isValidEmail(email) {
  if (!email.includes("@") || !email.includes(".")) return false;
  const parts = email.split("@");
  if (parts.length !== 2) return false;
  const domain = parts[1];
  if (domain.startsWith(".") || domain.endsWith(".")) return false;
  if (domain.split(".").length < 2) return false;
  return true;
}

// Password Validation without Regex
function validatePassword(password) {
  if (password.length < 8 || password.length > 15) {
    return { valid: false, error: "Password must be 8-15 characters long" };
  }

  let hasUpper = false;
  let hasLower = false;
  let hasNumber = false;
  let hasSpecial = false;
  const specials = "!@#$%^&*()_+-=[]{}|;:'\",.<>?/`~";

  for (let char of password) {
    if (char >= 'A' && char <= 'Z') hasUpper = true;
    else if (char >= 'a' && char <= 'z') hasLower = true;
    else if (char >= '0' && char <= '9') hasNumber = true;
    else if (specials.includes(char)) hasSpecial = true;
  }

  if (!hasUpper) return { valid: false, error: "Password must contain at least one uppercase letter" };
  if (!hasLower) return { valid: false, error: "Password must contain at least one lowercase letter" };
  if (!hasNumber) return { valid: false, error: "Password must contain at least one number" };
  if (!hasSpecial) return { valid: false, error: "Password must contain at least one special character" };

  return { valid: true, error: null };
}
