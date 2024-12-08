import React from 'react';
import { Link } from 'react-router-dom';
import { Car } from 'lucide-react';

export const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center group">
            <Car className="w-8 h-8 text-teal-600 group-hover:text-teal-700" />
            <span className="ml-2 text-xl font-bold text-gray-900">
              SwiftPark
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};