// JavaScript function to scroll to the "About" section
function scrollToAbout() {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
}

function scrollToPortfolio() {
    document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' });
}

/// JavaScript function to handle the fade-in effect for the about section
function fadeInAbout() {
    const aboutContainer = document.querySelector('.about-container');
    const aboutSection = document.getElementById('about');

    // Function to handle the intersection changes
    function handleIntersection(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                aboutContainer.classList.add('fadeIn'); // Apply the fadeIn class
                observer.unobserve(aboutSection); // Stop observing once the fade-in effect is applied
            }
        });
    }

    // Create an Intersection Observer instance
    const observer = new IntersectionObserver(handleIntersection);

    // Start observing the about section
    observer.observe(aboutSection);
}

// Call the function to initiate the fade-in effect
fadeInAbout();

// JavaScript function to show or hide the corresponding gallery and scroll to the portfolio section
function showGallery(galleryId) {
    // Get all galleries
    const galleries = document.querySelectorAll('.gallery');
    const selectedGallery = document.getElementById(galleryId);

    // Check if the selected gallery is already active
    const isActive = selectedGallery.classList.contains('active');

    // Hide all galleries
    galleries.forEach(gallery => gallery.classList.remove('active'));

    // Remove active class from all buttons
    const buttons = document.querySelectorAll('.button-portfolio');
    buttons.forEach(button => button.classList.remove('active'));

    // If the selected gallery was not active, activate it and the corresponding button
    if (!isActive) {
        selectedGallery.classList.add('active');
        const clickedButton = document.querySelector(`.button-portfolio[onclick="showGallery('${galleryId}')"]`);
        clickedButton.classList.add('active');
        
        // Scroll to the portfolio section
        document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' });
    }
}

// JavaScript function to enable smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});