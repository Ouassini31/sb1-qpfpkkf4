import React from 'react';
import { Hero } from '../components/Hero';
import { HowItWorks } from '../components/HowItWorks';
import { QRCodeShare } from '../components/QRCodeShare';

export const HomePage = () => {
  return (
    <div>
      <Hero />
      <HowItWorks />
      <div className="max-w-md mx-auto px-4 py-12">
        <QRCodeShare />
      </div>
    </div>
  );
};