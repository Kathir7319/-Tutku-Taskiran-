import React from 'react';
import { ShieldCheck, HeartHandshake, Award } from 'lucide-react';
import { trustBadges } from '../data/groomingData';

export default function TrustBadges() {
  const getIcon = (id) => {
    switch (id) {
      case 'cage-free':
        return <ShieldCheck className="w-8 h-8 text-sage-600" />;
      case 'dedicated-one-on-one':
        return <HeartHandshake className="w-8 h-8 text-clay-500" />;
      case 'cary-trusted':
        return <Award className="w-8 h-8 text-amber-600" />;
      default:
        return <ShieldCheck className="w-8 h-8 text-sage-600" />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {trustBadges.map((badge) => (
          <div
            key={badge.id}
            className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-lg shadow-stone-200/50 border border-cream-200 hover:border-sage-300 transition-all duration-300 hover:-translate-y-1 group"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-2xl bg-cream-100 group-hover:bg-sage-50 transition-colors shrink-0">
                {getIcon(badge.id)}
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-stone-900 mb-1 group-hover:text-sage-800 transition-colors">
                  {badge.title}
                </h3>
                <p className="text-sm text-stone-600 leading-relaxed">
                  {badge.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
