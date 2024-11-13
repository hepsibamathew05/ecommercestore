const searchIcon = document.getElementById("searchIcon");
const searchContainer = document.querySelector(".search-container");
const searchInput = document.getElementById("searchInput");

let isOpen = false; // To track if the search bar is open

searchIcon.addEventListener("click", function() {
    if (isOpen) {
        searchContainer.classList.remove("active"); // Hide the input field
        searchInput.value = ""; // Clear the input value
    } else {
        searchContainer.classList.add("active"); // Show the input field
        searchInput.focus(); // Focus on the input field
    }
    isOpen = !isOpen; // Toggle state
});



document.querySelectorAll('.color').forEach(item => {
    item.addEventListener('click', function() {
        // Remove active class from all colors
        document.querySelectorAll('.color').forEach(c => c.classList.remove('active'));
        // Add active class to the clicked color
        this.classList.add('active');
    });
});

document.querySelectorAll('.size').forEach(item => {
    item.addEventListener('click', function() {
        // Remove active class from all sizes
        document.querySelectorAll('.size').forEach(s => s.classList.remove('active'));
        // Add active class to the clicked size
        this.classList.add('active');
    });
});
