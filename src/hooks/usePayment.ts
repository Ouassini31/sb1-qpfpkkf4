import { useState } from 'react';
import { ParkingSpot, Transaction } from '../types';

export const usePayment = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const processPayment = async (spot: ParkingSpot): Promise<Transaction> => {
    try {
      setLoading(true);
      setError(null);
      
      // Simuler un paiement pour la démo
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const transaction: Transaction = {
        id: Math.random().toString(36).substr(2, 9),
        spotId: spot.id,
        userId: 'demo-user',
        amount: spot.price,
        commission: spot.price * 0.25,
        status: 'completed',
        createdAt: new Date().toISOString()
      };

      return transaction;
    } catch (err) {
      setError('Erreur lors du paiement');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    processPayment,
    loading,
    error
  };
};