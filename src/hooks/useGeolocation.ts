import { useState, useEffect } from 'react';
import { GOOGLE_MAPS_CONFIG } from '../config/maps';

interface Location {
  lat: number;
  lng: number;
}

interface GeolocationState {
  location: Location;
  error: string | null;
  loading: boolean;
}

export const useGeolocation = () => {
  const [state, setState] = useState<GeolocationState>({
    location: GOOGLE_MAPS_CONFIG.defaultCenter,
    error: null,
    loading: true,
  });

  useEffect(() => {
    if (!navigator.geolocation) {
      setState(prev => ({
        ...prev,
        error: 'La géolocalisation n\'est pas supportée par votre navigateur',
        loading: false,
      }));
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setState({
          location: {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          },
          error: null,
          loading: false,
        });
      },
      (error) => {
        setState(prev => ({
          ...prev,
          error: 'Impossible d\'obtenir votre position',
          loading: false,
        }));
        console.error('Geolocation error:', error);
      },
      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      }
    );
  }, []);

  return state;
};