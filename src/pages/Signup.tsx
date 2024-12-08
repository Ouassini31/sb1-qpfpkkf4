import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock } from 'lucide-react';
import { Button } from '../components/Button';

export const Signup: React.FC = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-sm">
        <div>
          <h2 className="text-center text-3xl font-bold text-gray-900">
            Créer un compte
          </h2>
        </div>
        
        <form className="mt-8 space-y-6">
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <div className="relative">
                <input
                  id="email"
                  type="email"
                  required
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="Adresse email"
                />
                <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>
            
            <div>
              <label htmlFor="password" className="sr-only">Mot de passe</label>
              <div className="relative">
                <input
                  id="password"
                  type="password"
                  required
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="Mot de passe"
                />
                <Lock className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>

          <Button type="submit" variant="primary" className="w-full">
            S'inscrire
          </Button>

          <p className="text-center text-sm text-gray-600">
            Déjà un compte ?{' '}
            <Link to="/login" className="text-teal-600 hover:text-teal-500">
              Se connecter
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};