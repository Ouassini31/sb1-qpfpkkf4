import React, { useState } from 'react';
import { Search, MapPin } from 'lucide-react';

const MOCK_SPOTS = [
  { id: 1, price: 5.50, time: '14:30', distance: '200m' },
  { id: 2, price: 4.75, time: '15:00', distance: '350m' },
];

export const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
        <div className="flex gap-4">
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Entrez une adresse ou un lieu"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
          <button className="px-6 py-2 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-colors">
            Rechercher
          </button>
        </div>
      </div>

      <div className="grid gap-4">
        {MOCK_SPOTS.map(spot => (
          <div key={spot.id} className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-semibold">Place disponible</p>
                <div className="flex items-center text-gray-500 mt-1">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span>À {spot.distance}</span>
                </div>
                <p className="text-sm text-gray-500 mt-1">
                  Départ à {spot.time}
                </p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-teal-600">
                  {spot.price.toFixed(2)}€
                </p>
                <button 
                  onClick={() => alert('Réservation (Version démo)')}
                  className="mt-2 px-4 py-1 bg-teal-600 text-white text-sm font-semibold rounded-lg hover:bg-teal-700"
                >
                  Réserver
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};