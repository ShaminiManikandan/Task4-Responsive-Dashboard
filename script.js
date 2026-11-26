// Select the theme toggle button
const themeToggle = document.getElementById("themeToggle");

// Dark and Light Theme Functionality
themeToggle.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    // Update button text
    if (document.body.classList.contains("dark")) {
        themeToggle.textContent = "☀️ Light Mode";
    } else {
        themeToggle.textContent = "🌙 Dark Mode";
    }

});

// Display welcome message
console.log("Responsive Dashboard Loaded Successfully!");