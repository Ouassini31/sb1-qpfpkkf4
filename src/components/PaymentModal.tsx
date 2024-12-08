import React, { useState } from 'react';
import { X, CreditCard, AlertCircle } from 'lucide-react';
import { Button } from './Button';
import { LoadingSpinner } from './LoadingSpinner';
import { ParkingSpot } from '../types';
import { usePayment } from '../hooks/usePayment';

interface PaymentModalProps {
  spot: ParkingSpot;
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export const PaymentModal: React.FC<PaymentModalProps> = ({
  spot,
  isOpen,
  onClose,
  onSuccess,
}) => {
  const { processPayment, loading, error } = usePayment();
  const [showError, setShowError] = useState(false);

  if (!isOpen) return null;

  const commission = spot.price * 0.25;
  const total = spot.price + commission;

  const handlePayment = async () => {
    try {
      setShowError(false);
      await processPayment(spot);
      onSuccess();
    } catch (err) {
      setShowError(true);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-md w-full p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-semibold text-gray-900">
            Confirmer la réservation
          </h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-500"
            disabled={loading}
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {showError && (
          <div className="mb-6 bg-red-50 text-red-600 p-4 rounded-lg flex items-start">
            <AlertCircle className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-medium">Erreur de paiement</p>
              <p className="text-sm">{error || 'Une erreur est survenue lors du paiement. Veuillez réessayer.'}</p>
            </div>
          </div>
        )}

        <div className="space-y-4 mb-6">
          <div className="flex justify-between py-2">
            <span className="text-gray-600">Prix de la place</span>
            <span className="font-medium">{spot.price.toFixed(2)}€</span>
          </div>
          <div className="flex justify-between py-2">
            <span className="text-gray-600">Commission SwiftPark (25%)</span>
            <span className="font-medium">{commission.toFixed(2)}€</span>
          </div>
          <div className="flex justify-between py-2 border-t">
            <span className="font-semibold">Total</span>
            <span className="font-semibold">{total.toFixed(2)}€</span>
          </div>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg mb-6">
          <div className="flex items-center">
            <CreditCard className="w-6 h-6 text-gray-400 mr-3" />
            <div>
              <p className="font-medium">Carte bancaire</p>
              <p className="text-sm text-gray-500">**** **** **** 4242</p>
            </div>
          </div>
        </div>

        <div className="flex gap-3">
          <Button
            variant="outline"
            className="flex-1"
            onClick={onClose}
            disabled={loading}
          >
            Annuler
          </Button>
          <Button
            variant="primary"
            className="flex-1"
            onClick={handlePayment}
            disabled={loading}
          >
            {loading ? (
              <LoadingSpinner size="sm" className="text-white mx-auto" />
            ) : (
              `Payer ${total.toFixed(2)}€`
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};