import React from 'react';
import { Search } from 'lucide-react';
import { Button } from '../components/Button';

export const SearchSpot: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Entrez une adresse ou un lieu"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            <Button variant="primary">
              Rechercher
            </Button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 text-center">
          <p className="text-gray-600">
            Version de démonstration - La recherche de places sera bientôt disponible
          </p>
        </div>
      </div>
    </div>
  );
};