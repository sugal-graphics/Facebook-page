// Findind the eleements on html
const loginBtn = document.getElementById("loginBtn");
const email = document.getElementById("email");
const password = document.getElementById("password");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

// Function to show error
function showError(input, errorElement, message) {
    input.classList.add("input-error"); // red border
    errorElement.textContent = message;  // show message
}

// Function to clear error
function clearError(input, errorElement) {
    input.classList.remove("input-error"); 
    errorElement.textContent = "";  
}

// listen to Login button
loginBtn.addEventListener("click", function () {
    let isValid = true;

    // Reset errors first
    clearError(email, emailError);
    clearError(password, passwordError);

    // Check email
    if (email.value.trim() === "") {
        showError(email, emailError, "Email or phone is required");
        isValid = false;
    }

    // Check password
    if (password.value.trim() === "") {
        showError(password, passwordError, "Password is required");
        isValid = false;
    }

    // Success alert
    if (isValid) {
        alert("Login successful (demo)");
    }
});

// Clear error while typing
email.addEventListener("input", function() {
    clearError(email, emailError);
});

password.addEventListener("input", function() {
    clearError(password, passwordError);
});

