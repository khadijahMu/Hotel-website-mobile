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






// Show the deals page when "Last Minute Deals" is clicked
document.getElementById('deals-link').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('deals-page').style.display = 'block';  // Show the last deals page
    document.getElementById('menu-page').style.display = 'none';    // Hide the main menu or any other page
});

// Close the deals page when the "close" button is clicked
document.getElementById('close-deals').addEventListener('click', function() {
    document.getElementById('deals-page').style.display = 'none';   // Hide the last deals page
    document.getElementById('menu-page').style.display = 'block';   // Show the main menu or previous page
});
