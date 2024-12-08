import React from 'react';
import { Car, MapPin } from 'lucide-react';
import { Button } from './Button';
import { Link } from 'react-router-dom';

export const Hero: React.FC = () => {
  return (
    <div className="relative bg-gray-900 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&q=80"
          alt="Parking garage"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Trouvez votre place de parking
            <span className="text-teal-400"> en temps réel</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            SwiftPark connecte les conducteurs qui libèrent une place avec ceux qui en cherchent une.
            Simple, rapide et économique.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/leave" className="inline-block">
              <Button
                variant="primary"
                size="lg"
                className="flex items-center justify-center gap-2 w-full"
              >
                <Car className="w-5 h-5" />
                Je quitte une place
              </Button>
            </Link>
            
            <Link to="/search" className="inline-block">
              <Button
                variant="outline"
                size="lg"
                className="flex items-center justify-center gap-2 w-full text-white border-white hover:bg-white hover:text-gray-900"
              >
                <MapPin className="w-5 h-5" />
                Je cherche une place
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};