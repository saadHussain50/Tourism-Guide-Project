class VisitorTracker {
    constructor() {
        this.trackVisit();
    }

    trackVisit() {
        const visitData = {
            timestamp: new Date().toISOString(),
            page: window.location.pathname,
            userAgent: navigator.userAgent,
            referrer: document.referrer,
            screenResolution: `${window.screen.width}x${window.screen.height}`
        };

        // Store in localStorage for demo (in production, send to server)
        let visits = JSON.parse(localStorage.getItem('siteVisits') || '[]');
        visits.push(visitData);
        localStorage.setItem('siteVisits', JSON.stringify(visits));
    }
}

// Initialize tracker
const tracker = new VisitorTracker();
