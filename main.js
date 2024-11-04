document.querySelector('.show-more-btn').addEventListener('click', function() {
    const additionalReviews = document.querySelector('.additional-reviews');   
    if (additionalReviews.style.display === 'none' || additionalReviews.style.display === '') {
        additionalReviews.style.display = 'block';  // Show the reviews
    } else {
        additionalReviews.style.display = 'none';  // Hide the reviews
    }
});
window.addEventListener('load', () => {
    const splashScreen = document.getElementById('splash-screen');
    setTimeout(() => {
        splashScreen.classList.add('hidden');
    }, 2000);
});
// Get the elements
const menuIcon = document.getElementById('menu-icon');
const menuPage = document.getElementById('menu-page');
const closeMenu = document.getElementById('close-menu');
// Shows the menu page when the menu icon is clicked
menuIcon.addEventListener('click', function() {
    menuPage.style.display = 'block'; 
});
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
     // "Why Choose Us" Section
    const whyChooseUsData = [
        {
            imgSrc: "hotel images/img.png",
            title: "Payment Methods",
            description: "We have a lot of them, from cryptocurrencies to barter for potatoes"
        },
        {
            imgSrc: "hotel images/img (1).png",
            title: "Simple Search Process",
            description: "We checked it out, even the kid did it, but it was my mom's friend's son"
        },
        {
            imgSrc: "hotel images/img (2).png",
            title: "24/7 Support",
            description: "Is there something you don't understand? Feel free to call us.Phone number in the footer"
        },
        {
            imgSrc: "hotel images/img (3).png",
            title: "We Are Nice",
            description: "Fantasy is over, there will be something really convincing here"
        }
    ];
    // "Special Offers" Section
    const specialOffersData = [
        {
            imgSrc: "hotel images/Rectangle 9 (17).png",
            rating: "4.8",
            title: "Wilderness Club at Big Cedar",
            datePrice: "28 October — 1 November",
            priceLarge: "$2016", // Separate large and small parts for better styling control
            priceSmall: "/ 6 nights"
        },
        {
            imgSrc: "hotel images/Rectangle 9 (1).png",
            rating: "4.8",
            title: "Wilderness Club at Big Cedar",
            datePrice: "28 October — 1 November",
            priceLarge: "$2016",
            priceSmall: "/ 6 nights"
        },
        {
            imgSrc: "hotel images/Rectangle 9 (2).png",
            rating: "4.8",
            title: "Wilderness Club at Big Cedar",
            datePrice: "28 October — 1 November",
            priceLarge: "$2016",
            priceSmall: "/ 6 nights"
        }
    ];
    // "Reviews" Section
    const reviewsData = [
        {
            imgSrc: "hotel images/Ellipse 6 (2).png",
            text: "I quickly found the right tour for me, but I had a few questions about the hotel, I wrote to tech support and they answered all my questions within an hour. The vacation itself was perfect. Thank you very much. I will come back again and again.",
            name: "Jannike Borg",
            profession: "Publisher"
        },
        {
            imgSrc: "hotel images/Ellipse 6.png",
            text: "I quickly found the right tour for me, but I had a few questions about the hotel, I wrote to tech support and they answered all my questions within an hour. The vacation itself was perfect. Thank you very much. I will come back again and again.",
            name: "LeBron Durant",
            profession: "Flight attendant"
        },
        {
            imgSrc: "hotel images/Ellipse 6 (1).png",
            text: "I quickly found the right tour for me, but I had a few questions about the hotel, I wrote to tech support and they answered all my questions within an hour. The vacation itself was perfect. Thank you very much. I will come back again and again.",
            name: "Kaarel Piho",
            profession: "Chiropodist"
        }
    ];
    // "Recent Posts" Section
    const recentPostsData = [
        {
            imgSrc: "hotel images/Rectangle 17.png",
            date: "May 23, 2022",
            time: "5 minutes",
            title: "My trip to Athens",
            description: "It would seem that in a city where Theseus, Plato and Epicurus once walked, the very idea of the subway is alien to the city, but already..."
        },
        {
            imgSrc: "hotel images/Rectangle 17 (2).png",
            date: "May 23, 2022",
            time: "5 minutes",
            title: "Vilnius resorts",
            description: "I haven't seen any resorts in Vilnius, but there are wonderful people and pubs"
        },
        {
            imgSrc: "hotel images/Rectangle 17 (3).png",
            date: "May 23, 2022",
            time: "5 minutes",
            title: "Tips for flying on a plane",
            description: "If you have a fear of flying, here's a helpful tip: bring your co-pilot so you can take a nap while he steers the plane for you"
        }
    ];
    // Functions for "Why Choose Us" Section
    function renderWhyChooseUs() {
        const container = document.querySelector('.why .container');
        whyChooseUsData.forEach(item => {
            const div = document.createElement('div');
            div.className = 'item';
            div.innerHTML = `
                <img src="${item.imgSrc}" alt="${item.title}">
                <h2>${item.title}</h2>
                <h4>${item.description}</h4>
            `;
            container.appendChild(div);
        });
    }
    // Functions for "Special Offers" Section
function renderSpecialOffers() {
    const container = document.querySelector('.special');
    specialOffersData.forEach(offer => {
        const div = document.createElement('div');
        div.className = 'special-offer';
div.innerHTML = `
<img src="${offer.imgSrc}" alt="Offer Image" class="offer-image">
<div class="rate">
    <div class="rating-container">
        <!-- Background for rating -->
        <img src="hotel images/Rectangle 19.png" alt="Rating Background" class="rating-background">
        
        <!-- Content inside the rating background -->
        <div class="rating-content">
            <img src="hotel images/Star 1.png" alt="Star Icon" class="star-icon">
            <span class="rating-text">${offer.rating}</span>
        </div>
    </div>
</div>
<div class="heart">
    <img src="hotel images/favorite (1).svg" alt="Heart Icon" class="heart-icon">
</div>
<div class="offer-details">
    <p class="offer-title">${offer.title}</p>
    <p class="offer-date-price">${offer.datePrice}</p>
    
    <!-- Price with separate spans for styling -->
    <span class="price">
        <span class="price-large">${offer.priceLarge}</span>
        <span class="price-small">${offer.priceSmall}</span>
    </span>
</div>
`;
        container.appendChild(div);
    });
}
    // Functions for the "Reviews" Section
    function renderReviews() {
        const container = document.querySelector('.reviews-container');
        reviewsData.forEach(review => {
            const div = document.createElement('div');
            div.className = 'review-content';
            div.innerHTML = `
                <img src="${review.imgSrc}" alt="Reviewer Image" class="reviewer-image">
                <p class="review-text">${review.text}</p>
                <p class="reviewer-name">${review.name}, <span>${review.profession}</span></p>
            `;
            container.appendChild(div);
        });
    }
    // Functions for the "Recent Posts" Section
    function renderRecentPosts() {
        const container = document.querySelector('.recent-posts-container');
        recentPostsData.forEach(post => {
            const div = document.createElement('div');
            div.className = 'recent-post';
            div.innerHTML = `
                <img src="${post.imgSrc}" alt="">
                <div class="date-time">
                    <h4 class="post-date">${post.date}</h4>
                    <div class="time-icon">
                        <img src="hotel images/bx_time-five (1).svg" alt=""> 
                        <span>${post.time}</span>
                    </div>
                </div>
                <div class="description">
                    <h4>${post.title}</h4>
                    <h5>${post.description}</h5>
                </div>
            `;
            container.appendChild(div);
        });
    }
    // for all the rendered functions
    renderWhyChooseUs();
    renderSpecialOffers();
    renderReviews();
    renderRecentPosts();

