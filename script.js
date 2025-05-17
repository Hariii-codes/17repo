// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollTop = 0;
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Initialize Google Maps
function initMap() {
    const map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 45.5017, lng: -73.5673 }, // Montreal coordinates
        zoom: 12,
        styles: [
            {
                featureType: 'all',
                elementType: 'all',
                stylers: [
                    { saturation: -100 }
                ]
            }
        ]
    });

    // Add sample store locations
    const locations = [
        { lat: 45.5017, lng: -73.5673, title: 'Downtown Store' },
        { lat: 45.5217, lng: -73.5873, title: 'Plateau Store' },
        { lat: 45.4917, lng: -73.5473, title: 'Old Port Store' }
    ];

    locations.forEach(location => {
        new google.maps.Marker({
            position: { lat: location.lat, lng: location.lng },
            map: map,
            title: location.title
        });
    });
}

// Initialize map when the API is loaded
window.initMap = initMap;

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.step, .testimonial, .merchant-logos img').forEach(el => {
    observer.observe(el);
});