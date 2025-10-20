// Regular Expressions for all input fields
const inputPatterns = {
  firstName: /^[A-Za-z]{2,10}$/,
  lastName: /^[A-Za-z]{2,10}$/,
  mobile: /^[6-9][0-9]{9}$/,
  email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,15}$/
};

// Select all inputs
const inputs = document.querySelectorAll("#registrationForm input");
const form = document.getElementById("registrationForm");
const message = document.getElementById("message");

// Validate each field in real-time
inputs.forEach((input) => {
  input.addEventListener("keyup", (e) => {
    const pattern = inputPatterns[e.target.name];
    if (pattern) {
      validateField(e.target, pattern);
    }
  });
});

// Function to validate field
const validateField = (field, regex) => {
  if (regex.test(field.value)) {
    field.style.borderColor = "green";
  } else {
    field.style.borderColor = "red";
  }
};

// On form submit
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const password = document.getElementById("password").value.trim();
  const confirmPassword = document.getElementById("confirmPassword").value.trim();

  if (password !== confirmPassword) {
    message.textContent = "Passwords do not match!";
    message.style.color = "red";
    return;
  }

  // Check if all fields are valid
  const allValid = Array.from(inputs).every((input) => {
    const pattern = inputPatterns[input.name];
    return pattern ? pattern.test(input.value) : true;
  });

  if (allValid) {
    message.textContent = "Form submitted successfully!";
    message.style.color = "green";
    form.reset();

    // Reset border colors
    inputs.forEach((input) => (input.style.borderColor = "#ccc"));
  } else {
    message.textContent = "Please fill all fields correctly!";
    message.style.color = "red";
  }
});
