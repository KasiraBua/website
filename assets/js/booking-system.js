// assets/js/booking-system.js
window.initBookingSystem = function(config) {
    const { locations, colors, defaultLoc } = config;

    const widget = document.getElementById('salonized-container');
    const selector = document.getElementById('location-selector');

    // 1. Get current URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    let locationParam = urlParams.get('location')?.toLowerCase();

    // 2. Validate and fallback
    if (!locationParam || !locations[locationParam]) {
        locationParam = defaultLoc;
    }

    // 3. Update Dropdown and Widget Attributes
    if (selector) selector.value = locationParam;
    
    widget.setAttribute('data-company', locations[locationParam]);
    widget.setAttribute('data-color', colors[locationParam]);

    // 4. Handle Dropdown Change
    if (selector) {
        selector.addEventListener('change', function() {
            const newUrl = window.location.protocol + "//" + window.location.host + 
                           window.location.pathname + '?location=' + this.value;
            window.location.href = newUrl;
        });
    }

    // 5. Dynamically load Salonized Script
    const script = document.createElement('script');
    script.src = "https://static-widget.salonized.com/loader.js";
    document.body.appendChild(script);
};
