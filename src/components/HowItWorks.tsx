import React from 'react';
import { MapPin, Clock, CreditCard, ThumbsUp } from 'lucide-react';

const steps = [
  {
    icon: MapPin,
    title: "Localisez",
    description: "Indiquez votre position ou la zone où vous cherchez une place"
  },
  {
    icon: Clock,
    title: "Réservez",
    description: "Choisissez parmi les places disponibles en temps réel"
  },
  {
    icon: CreditCard,
    title: "Payez",
    description: "Effectuez un paiement sécurisé via l'application"
  },
  {
    icon: ThumbsUp,
    title: "Stationnez",
    description: "Garez-vous en toute tranquillité à l'emplacement réservé"
  }
];

export const HowItWorks: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50" id="comment-ca-marche">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Comment ça marche ?
          </h2>
          <p className="text-lg text-gray-600">
            SwiftPark simplifie votre recherche de stationnement en 4 étapes simples
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm"
            >
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                <step.icon className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};