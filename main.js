document.querySelector('.show-more-btn').addEventListener('click', function() {
    const additionalReviews = document.querySelector('.additional-reviews');
    
    // Check if the reviews are currently visible
    if (additionalReviews.style.display === 'none' || additionalReviews.style.display === '') {
        additionalReviews.style.display = 'block';  // Show the reviews
    } else {
        additionalReviews.style.display = 'none';  // Hide the reviews
    }
});
