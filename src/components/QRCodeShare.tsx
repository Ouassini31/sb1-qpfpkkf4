import React from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { Share2 } from 'lucide-react';

export const QRCodeShare = () => {
  const currentUrl = window.location.href;
  
  const handleCopyLink = () => {
    navigator.clipboard.writeText(currentUrl);
    alert('Lien copié !');
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">
          Version mobile
        </h3>
        <button
          onClick={handleCopyLink}
          className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-teal-600 border border-teal-600 rounded-lg hover:bg-teal-50"
        >
          <Share2 className="w-4 h-4" />
          Copier le lien
        </button>
      </div>
      
      <div className="flex justify-center bg-gray-50 p-4 rounded-lg">
        <QRCodeSVG
          value={currentUrl}
          size={200}
          level="H"
          includeMargin
          fgColor="#0d9488"
          bgColor="#f9fafb"
        />
      </div>
      
      <p className="text-sm text-gray-500 text-center mt-4">
        Scannez ce QR code pour accéder à SwiftPark sur mobile
      </p>
    </div>
  );
};