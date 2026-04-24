window.initBookingSystem = function(config) {
    const { locations, colors, defaultLoc } = config;

    const widget = document.getElementById('salonized-container');
    const selector = document.getElementById('location-selector');

    const urlParams = new URLSearchParams(window.location.search);
    let locationParam = urlParams.get('location')?.toLowerCase();

    if (!locationParam || !locations[locationParam]) {
        locationParam = defaultLoc;
    }

    if (selector) selector.value = locationParam;

    widget.setAttribute('data-company', locations[locationParam]);
    widget.setAttribute('data-color', colors[locationParam]);

    if (selector) {
        selector.addEventListener('change', function() {
            if (this.value !== "") {
                const newUrl = window.location.protocol + "//" + window.location.host +
                               window.location.pathname + '?location=' + this.value;
                window.location.href = newUrl;
            }
        });
    }

    const script = document.createElement('script');
    script.src = "https://static-widget.salonized.com/loader.js";
    document.body.appendChild(script);
}
