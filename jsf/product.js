document.getElementById('productImage').addEventListener('mousemove', function(e) {
    const zoomer = e.currentTarget;
    const offsetX = e.offsetX;
    const offsetY = e.offsetY;
    const x = (offsetX / zoomer.offsetWidth) * 100;
    const y = (offsetY / zoomer.offsetHeight) * 100;
    zoomer.style.transformOrigin = `${x}% ${y}%`;
    zoomer.style.transform = 'scale(1.5)';
});

document.getElementById('productImage').addEventListener('mouseleave', function(e) {
    e.currentTarget.style.transform = 'scale(1)';
    e.currentTarget.style.transformOrigin = 'center center';
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


document.addEventListener('DOMContentLoaded', function() {
    const minusButton = document.querySelector('.minus');
    const plusButton = document.querySelector('.plus');
    const quantityInput = document.getElementById('quantity');

    minusButton.addEventListener('click', function() {
        let currentValue = parseInt(quantityInput.value);
        if (currentValue > 1) { // Minimum quantity of 1
            quantityInput.value = currentValue - 1;
        }
    });

    plusButton.addEventListener('click', function() {
        let currentValue = parseInt(quantityInput.value);
        quantityInput.value = currentValue + 1;
    });
});


function openTab(event, tabId) {
    // Get all elements with class="tab-content" and hide them
    var tabContents = document.getElementsByClassName("tab-content");
    for (var i = 0; i < tabContents.length; i++) {
        tabContents[i].style.display = "none";
    }

    // Get all elements with class="tab-button" and remove the class "active"
    var tabButtons = document.getElementsByClassName("tab-button");
    for (var i = 0; i < tabButtons.length; i++) {
        tabButtons[i].classList.remove("active");
    }

    // Show the current tab and add an "active" class to the button that opened the tab
    document.getElementById(tabId).style.display = "block";
    event.currentTarget.classList.add("active");
}


const stars = document.querySelectorAll('.star-rating .star');

stars.forEach((star, index) => {
    star.addEventListener('mouseover', () => {
        // Remove highlight from all stars
        stars.forEach(s => s.style.color = '#ccc');
        // Highlight stars up to the one being hovered over
        for (let i = 0; i <= index; i++) {
            stars[i].style.color = '#ffd700';
        }
    });

    star.addEventListener('click', () => {
        setRating(index + 1);
    });
});

// Remove highlight when not hovering
document.querySelector('.star-rating').addEventListener('mouseleave', () => {
    stars.forEach(star => star.style.color = '#ccc');
    // Reapply selected rating
    const selectedRating = document.querySelectorAll('.star-rating .star.selected').length;
    for (let i = 0; i < selectedRating; i++) {
        stars[i].style.color = '#ffd700';
    }
});

function setRating(rating) {
    stars.forEach(star => {
        star.classList.remove('selected');
    });
    // Add 'selected' class to stars up to the clicked one
    for (let i = 0; i < rating; i++) {
        stars[i].classList.add('selected');
    }
}


