/**
 * Google Ads Conversion Tracking Utility
 * Google Ads Account: AW-18454667408
 * Conversion Action: Legend - Lead Received (AW-18454667408/0oW6CLH2l_wcEJDB799E)
 */

declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
  }
}

export const GOOGLE_ADS_ID = 'AW-18454667408';
export const LEAD_CONVERSION_LABEL = 'AW-18454667408/0oW6CLH2l_wcEJDB799E';

/**
 * Fires the Google Ads Lead Received conversion event.
 * Triggers strictly on qualified customer actions:
 * 1. Form Submission (Quote form filled with name, phone, suburb, and submitted)
 * 2. Click to Dial / Call Button (User taps/clicks phone 0416 388 777 anywhere on site)
 */
export const trackGoogleLeadConversion = (
  type: 'quote_form' | 'phone_call',
  details?: Record<string, any>
) => {
  try {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', 'conversion', {
        send_to: LEAD_CONVERSION_LABEL,
        event_category: type === 'quote_form' ? 'Lead - Form Submission' : 'Lead - Click to Call',
        event_label: details?.label || type,
        value: 1.0,
        currency: 'AUD',
      });
      console.log(`[Google Ads] Lead conversion event dispatched successfully: [${type}]`, details);
    } else {
      console.warn('[Google Ads] window.gtag is not yet available, queueing event...');
      if (typeof window !== 'undefined') {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push([
          'event',
          'conversion',
          {
            send_to: LEAD_CONVERSION_LABEL,
            event_category: type === 'quote_form' ? 'Lead - Form Submission' : 'Lead - Click to Call',
            event_label: details?.label || type,
            value: 1.0,
            currency: 'AUD',
          },
        ]);
      }
    }
  } catch (err) {
    console.error('[Google Ads] Error sending conversion event:', err);
  }
};
