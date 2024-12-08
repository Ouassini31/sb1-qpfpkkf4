import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Button } from '../components/Button';
import { User, Settings, History } from 'lucide-react';

export const Profile: React.FC = () => {
  const { user, signOut } = useAuth();

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Mon Profil</h2>
            <Button variant="outline" onClick={() => signOut()}>
              Déconnexion
            </Button>
          </div>

          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <div className="bg-teal-100 p-3 rounded-full">
                <User className="h-6 w-6 text-teal-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="font-medium">{user.email}</p>
              </div>
            </div>

            <div className="border-t pt-8">
              <h3 className="text-lg font-semibold mb-4">Actions rapides</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-gray-50">
                  <Settings className="h-5 w-5 text-gray-400" />
                  <span>Paramètres du compte</span>
                </button>
                <button className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-gray-50">
                  <History className="h-5 w-5 text-gray-400" />
                  <span>Historique des transactions</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};