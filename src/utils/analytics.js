/**
 * Google Analytics integration
 *
 * To enable Google Analytics:
 * 1. Create a GA4 property at https://analytics.google.com
 * 2. Get your Measurement ID (format: G-XXXXXXXXXX)
 * 3. Add it to your .env file: VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
 * 4. The script will automatically load in production
 */

export function initGoogleAnalytics() {
  const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;

  // Only load GA in production and if measurement ID is configured
  if (!measurementId || import.meta.env.DEV) {
    console.log('Google Analytics not loaded (dev mode or missing ID)');
    return;
  }

  // Load gtag.js script
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);

  // Initialize gtag
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  gtag('js', new Date());
  gtag('config', measurementId, {
    anonymize_ip: true, // Anonymize IP for GDPR compliance
    cookie_flags: 'SameSite=None;Secure' // Cookie settings
  });

  // Make gtag globally available
  window.gtag = gtag;

  console.log('Google Analytics initialized:', measurementId);
}

/**
 * Track custom events
 * @param {string} eventName - Name of the event
 * @param {object} eventParams - Event parameters
 */
export function trackEvent(eventName, eventParams = {}) {
  if (window.gtag) {
    window.gtag('event', eventName, eventParams);
  }
}

/**
 * Track page views (automatically called by router)
 * @param {string} pagePath - Path of the page
 * @param {string} pageTitle - Title of the page
 */
export function trackPageView(pagePath, pageTitle) {
  if (window.gtag) {
    window.gtag('event', 'page_view', {
      page_path: pagePath,
      page_title: pageTitle
    });
  }
}
