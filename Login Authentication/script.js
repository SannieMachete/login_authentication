document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").Value.trim();
    const password = document.getElementById("password").Value.trim();

    const validUsername = "user";
    const validPassword = "password123";

    const errorMessage = document.getElementById("errorMessage");

    errorMessage.textContent = "";

    if (username === validUsername && password === validPassword) {
        alert("Login successful!");

    } else {
        errorMessage.textContent = "Invalid username or password. Please try again.";
    }
});