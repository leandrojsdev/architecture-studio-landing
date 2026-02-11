import { AnalyticsEvent, TrackingKey } from '../types';

// List of all custom keys we track. We must reset these to undefined
// on every push to prevent "ghost data" from previous events persisting.
const TRACKING_KEYS = Object.values(TrackingKey);

export const pushEvent = (eventName: AnalyticsEvent, params: Partial<Record<TrackingKey, any>> = {}) => {
  if (window.dataLayer) {
    // 1. Create a "reset" object where all keys are undefined
    const resetData = TRACKING_KEYS.reduce((acc, key) => {
      acc[key] = undefined;
      return acc;
    }, {} as Record<string, undefined>);

    // 2. Push the event with the reset data + new params
    window.dataLayer.push({
      event: eventName,
      ...resetData, // Clears previous state
      ...params,    // Sets new state
      timestamp: new Date().toISOString(),
    });
    
    console.log(`[Analytics] Event: ${eventName}`, params);
  }
};
