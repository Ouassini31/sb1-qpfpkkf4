import React from 'react';
import { Clock, Euro } from 'lucide-react';

export const LeavePage = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Merci ! Votre place a été enregistrée (Version démo)');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-3xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Signalez votre départ
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="departureTime" className="block text-sm font-medium text-gray-700 mb-2">
                Heure de départ estimée
              </label>
              <div className="relative">
                <input
                  type="time"
                  id="departureTime"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  required
                />
                <Clock className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>

            <div>
              <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-2">
                Prix demandé (€)
              </label>
              <div className="relative">
                <input
                  type="number"
                  id="price"
                  min="0"
                  step="0.50"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  required
                />
                <Euro className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
              <p className="mt-2 text-sm text-gray-500">
                Commission SwiftPark de 25% sur le prix final
              </p>
            </div>

            <button 
              type="submit"
              className="w-full px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-colors"
            >
              Confirmer mon départ
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};