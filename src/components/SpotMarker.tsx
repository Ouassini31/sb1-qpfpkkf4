import React from 'react';
import { ParkingSpot } from '../types';
import { MapPin } from 'lucide-react';

interface SpotMarkerProps {
  spot: ParkingSpot;
  onClick: () => void;
}

export const SpotMarker: React.FC<SpotMarkerProps> = ({ spot, onClick }) => {
  return (
    <div
      className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
      onClick={onClick}
    >
      <div className="relative">
        <MapPin className="w-8 h-8 text-teal-600 transition-transform group-hover:scale-110" />
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full bg-white rounded-lg shadow-md p-2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          <p className="font-semibold">{spot.price.toFixed(2)}€</p>
          <p className="text-sm text-gray-600">
            Départ à {new Date(spot.departureTime).toLocaleTimeString()}
          </p>
        </div>
      </div>
    </div>
  );
};