import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  ShieldCheck, 
  Sparkles, 
  Clock, 
  Smile, 
  VolumeX, 
  Award, 
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Calendar
} from 'lucide-react';
import { pillars, businessInfo } from '../data/groomingData';
import TrustBadges from '../components/TrustBadges';

export default function ApproachPage() {
  return (
    <div className="space-y-20 pb-16">
      {/* Page Header */}
      <section className="bg-gradient-to-b from-cream-100 to-cream-50 pt-12 pb-20 border-b border-cream-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sage-100 text-sage-800 text-xs font-bold uppercase tracking-wider">
            <Heart className="w-3.5 h-3.5 text-clay-500" />
            Our Philosophy
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-stone-900 leading-tight">
            A Calmer Kind of Grooming Experience
          </h1>
          <p className="text-base sm:text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed">
            Traditional grooming salons can be overwhelming for sensitive, senior, or anxious dogs. At Tutku Taskiran Pet Grooming, we replace loud high-velocity cages and crowded waiting rooms with a peaceful, private studio environment.
          </p>
        </div>
      </section>

      {/* Trust Badges Bar */}
      <TrustBadges />

      {/* The 4 Pillars In-Depth */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 mb-3">
            The 4 Pillars of Our Boutique Studio
          </h2>
          <p className="text-stone-600 text-sm sm:text-base">
            Every standard we have built revolves around minimizing canine cortisol and ensuring every pet feels loved, protected, and pampered.
          </p>
        </div>

        <div className="space-y-16">
          {pillars.map((pillar, index) => {
            const isReversed = index % 2 === 1;
            return (
              <div
                key={pillar.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-white rounded-3xl p-6 sm:p-10 border border-cream-200 shadow-sm ${
                  isReversed ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Image side */}
                <div className={`lg:col-span-5 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-cream-200 shadow-md">
                    <img
                      src={pillar.image}
                      alt={pillar.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/95 backdrop-blur-xs text-xs font-bold text-sage-800 shadow-xs">
                      {pillar.badge}
                    </div>
                  </div>
                </div>

                {/* Text side */}
                <div className={`lg:col-span-7 space-y-4 ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="flex items-center gap-3">
                    <span className="font-serif text-3xl font-bold text-clay-500">
                      {pillar.number}
                    </span>
                    <span className="h-px w-12 bg-cream-300" />
                    <span className="text-xs uppercase tracking-wider font-semibold text-sage-700">
                      Standard of Excellence
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
                    {pillar.title}
                  </h3>

                  <p className="text-base text-stone-600 leading-relaxed">
                    {pillar.description}
                  </p>

                  <blockquote className="p-4 rounded-2xl bg-cream-50 border-l-4 border-sage-500 text-sm italic text-stone-700">
                    "{pillar.quote}"
                  </blockquote>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Comparison: Assembly Line Salons vs. Tutku Taskiran */}
      <section className="bg-sage-900 text-cream-100 py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block px-3 py-1 rounded-full bg-sage-800 text-sage-200 text-xs font-bold uppercase tracking-wider mb-2">
              Side-By-Side Comparison
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-3">
              Why 1-on-1 Boutique Care is Different
            </h2>
            <p className="text-sm sm:text-base text-sage-300">
              See the fundamental differences between noisy multi-dog commercial grooming and our quiet private Cary studio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Commercial Salons */}
            <div className="bg-sage-800/80 rounded-3xl p-6 sm:p-8 border border-sage-700/60">
              <div className="flex items-center gap-2 text-rose-400 font-serif text-xl font-bold mb-4">
                <AlertCircle className="w-5 h-5 shrink-0" />
                <span>Traditional Commercial Salons</span>
              </div>
              <ul className="space-y-3.5 text-sm text-sage-200">
                <li className="flex items-start gap-2.5">
                  <span className="text-rose-400 font-bold">✕</span>
                  <span>Multiple dogs waiting in wire or plastic cages for 3 to 6 hours</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-rose-400 font-bold">✕</span>
                  <span>Constant background barking, phone ringing, and roaring cage dryers</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-rose-400 font-bold">✕</span>
                  <span>Different bathers and groomers each visit with rushed quotas</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-rose-400 font-bold">✕</span>
                  <span>Potential risk of cross-contamination or respiratory stress</span>
                </li>
              </ul>
            </div>

            {/* Tutku Taskiran Boutique */}
            <div className="bg-sage-800/90 rounded-3xl p-6 sm:p-8 border-2 border-emerald-500/50 relative shadow-2xl">
              <div className="flex items-center gap-2 text-emerald-300 font-serif text-xl font-bold mb-4">
                <CheckCircle2 className="w-5 h-5 shrink-0" />
                <span>Tutku Taskiran Boutique Studio</span>
              </div>
              <ul className="space-y-3.5 text-sm text-cream-100">
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span><strong>100% Cage-Free:</strong> Your dog stays directly with Tutku and is picked up immediately</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span><strong>Quiet Spa Sanctuary:</strong> Only one pup in the studio at any time with calming acoustic music</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span><strong>Consistent Dedicated Groomer:</strong> The exact same loving hands build trust every time</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span><strong>Strict Rabies Verification:</strong> Sanitized between every single appointment for immaculate hygiene</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/book"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-clay-500 hover:bg-clay-600 text-white font-bold text-sm shadow-xl transition-all"
            >
              <Calendar className="w-4 h-4" />
              <span>Experience the Difference — Request an Appointment</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
