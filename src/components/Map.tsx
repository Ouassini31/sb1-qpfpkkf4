import React from 'react';
import { MapPin } from 'lucide-react';
import { ParkingSpot } from '../types';

interface MapProps {
  spots: ParkingSpot[];
  onSpotSelect: (spot: ParkingSpot) => void;
  className?: string;
}

export const Map: React.FC<MapProps> = ({ spots, onSpotSelect, className }) => {
  return (
    <div className={`relative w-full h-full bg-gray-100 rounded-lg ${className || ''}`}>
      <div className="absolute inset-0 p-4">
        <div className="text-center text-gray-600">
          <MapPin className="w-8 h-8 mx-auto mb-2 text-teal-600" />
          <p>Carte simplifiée pour la démo</p>
          <p className="text-sm mt-2">
            {spots.length} places disponibles aux alentours
          </p>
        </div>
        
        <div className="mt-8 space-y-4">
          {spots.map((spot) => (
            <button
              key={spot.id}
              onClick={() => onSpotSelect(spot)}
              className="w-full p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium">Place disponible</p>
                  <p className="text-sm text-gray-500">
                    Départ à {new Date(spot.departureTime).toLocaleTimeString()}
                  </p>
                </div>
                <p className="text-lg font-bold text-teal-600">
                  {spot.price.toFixed(2)}€
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};