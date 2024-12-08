export const GOOGLE_MAPS_CONFIG = {
  apiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY || 'YOUR_GOOGLE_MAPS_API_KEY',
  defaultCenter: {
    lat: 48.8566,
    lng: 2.3522, // Paris coordinates
  },
  defaultZoom: 14,
  styles: [
    {
      featureType: 'poi',
      elementType: 'labels',
      stylers: [{ visibility: 'off' }],
    },
    {
      featureType: 'transit',
      elementType: 'labels',
      stylers: [{ visibility: 'off' }],
    },
  ],
};