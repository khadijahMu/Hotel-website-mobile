document.querySelector('.show-more-btn').addEventListener('click', function() {
    const additionalReviews = document.querySelector('.additional-reviews');
    
    // Check if the reviews are currently visible
    if (additionalReviews.style.display === 'none' || additionalReviews.style.display === '') {
        additionalReviews.style.display = 'block';  // Show the reviews
    } else {
        additionalReviews.style.display = 'none';  // Hide the reviews
    }
});


// Get the elements
const menuIcon = document.getElementById('menu-icon');
const menuPage = document.getElementById('menu-page');
const closeMenu = document.getElementById('close-menu');

// Show the menu page when the menu icon is clicked
menuIcon.addEventListener('click', function() {
    menuPage.style.display = 'block';  // Display the menu page
});

// Hide the menu page when the close icon is clicked
closeMenu.addEventListener('click', function() {
    menuPage.style.display = 'none';  // Hide the menu page
});
