import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  ArrowRight, 
  Calendar, 
  CheckCircle2, 
  Phone, 
  ChevronRight, 
  ShieldCheck, 
  Heart, 
  Scissors, 
  Star,
  Plus,
  Minus
} from 'lucide-react';
import { 
  businessInfo, 
  pillars, 
  pricingCategories, 
  galleryItems, 
  reviews, 
  faqItems,
  includedServices 
} from '../data/groomingData';
import TrustBadges from '../components/TrustBadges';

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="space-y-20 pb-12">
      {/* 2. Hero Section (Above the Fold) */}
      <section className="relative bg-gradient-to-b from-cream-100 via-cream-50 to-cream-50 pt-10 pb-20 sm:pt-14 sm:pb-28 overflow-hidden">
        {/* Soft decorative ambient circles */}
        <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 rounded-full bg-sage-100/60 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-80 h-80 rounded-full bg-clay-100/40 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sage-100 border border-sage-200/80 text-sage-800 text-xs sm:text-sm font-semibold tracking-wide">
                <Sparkles className="w-4 h-4 text-clay-500" />
                <span>Boutique Pet Spa • Cary, NC • 1 Dog at a Time</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-stone-900 leading-[1.15] tracking-tight">
                Stress-Free, 1-on-1 Grooming Where Your Dog Is the{' '}
                <span className="text-sage-700 underline decoration-clay-300 decoration-wavy decoration-2">
                  Only Guest.
                </span>
              </h1>

              <p className="text-base sm:text-lg lg:text-xl text-stone-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                {businessInfo.heroSubheadline}
              </p>

              {/* Call to Actions */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <Link
                  to="/book"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-clay-500 hover:bg-clay-600 text-white font-semibold text-base shadow-xl shadow-clay-500/25 hover:shadow-2xl transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <Calendar className="w-5 h-5" />
                  <span>{businessInfo.primaryCtaText}</span>
                </Link>

                <Link
                  to="/pricing"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-white hover:bg-cream-100 text-stone-800 font-semibold text-base border border-cream-300 shadow-sm transition-colors"
                >
                  <span>{businessInfo.secondaryCtaText}</span>
                  <ArrowRight className="w-4 h-4 text-sage-600" />
                </Link>
              </div>

              {/* Social proof micro-line */}
              <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs sm:text-sm text-stone-600">
                <div className="flex items-center gap-1.5">
                  <div className="flex text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="font-bold text-stone-900">5.0 Star</span>
                  <span>Cary Pet Parents</span>
                </div>
                <div className="hidden sm:inline text-cream-300">•</div>
                <div className="flex items-center gap-1 text-sage-700 font-medium">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Rabies Verified Facility</span>
                </div>
              </div>
            </div>

            {/* Right Visual Direction Column */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Decorative border frame */}
                <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-sage-200 to-clay-200 opacity-60 transform -rotate-1 scale-102 filter blur-xs" />
                
                {/* Main Hero Image */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] sm:aspect-[4/4.5] lg:aspect-[4/5] bg-cream-200">
                  <img
                    src="https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&w=1000&q=85"
                    alt="Calm freshly groomed dog in warm natural light at Tutku Taskiran Pet Grooming in Cary NC"
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  />
                  {/* Floating Tag Card 1 */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-lg border border-cream-200 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span className="text-xs font-bold text-stone-800">100% Cage-Free</span>
                  </div>

                  {/* Floating Tag Card 2 */}
                  <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl shadow-xl border border-cream-200 max-w-xs text-left">
                    <p className="text-xs font-bold text-sage-900 mb-0.5">Gentle, 1-on-1 Focus</p>
                    <p className="text-[11px] text-stone-600">No rushed assembly line. Your pup is picked up immediately after their spa session.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Trust Badges Bar */}
      <TrustBadges />

      {/* 3. Why Choose 1-on-1 Boutique Care? (The Difference) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sage-100 text-sage-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Heart className="w-3.5 h-3.5 text-clay-500" />
            The Tutku Taskiran Difference
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 mb-4">
            A Calmer Kind of Grooming Experience
          </h2>
          <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
            Traditional grooming salons can be overwhelming for sensitive, senior, or anxious dogs. At Tutku Taskiran Pet Grooming, we replace loud high-velocity cages and crowded waiting rooms with a peaceful, private studio environment.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.id}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-cream-200 shadow-sm hover:shadow-xl hover:border-sage-300 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="font-serif text-2xl font-bold text-sage-400 group-hover:text-clay-500 transition-colors">
                    {pillar.number}
                  </span>
                  <span className="text-[11px] uppercase tracking-wider font-bold px-2.5 py-1 rounded-full bg-cream-100 text-sage-800 border border-cream-300">
                    {pillar.badge}
                  </span>
                </div>
                <h3 className="font-serif text-xl font-bold text-stone-900 mb-2.5 group-hover:text-sage-800 transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-sm text-stone-600 leading-relaxed mb-6">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-4 border-t border-cream-200">
                <p className="text-xs italic text-stone-500">
                  "{pillar.quote}"
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/approach"
            className="inline-flex items-center gap-2 text-sage-700 hover:text-sage-900 font-semibold text-sm hover:underline"
          >
            <span>Learn more about our cage-free handling standards & studio setup</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 4. Services & Breed Size Pricing Chart */}
      <section className="bg-cream-100/70 py-16 sm:py-20 border-y border-cream-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-3 py-1 rounded-full bg-clay-100 text-clay-700 text-xs font-bold uppercase tracking-wider mb-2">
              Transparent Pricing
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 mb-4">
              Transparent Pricing by Size & Coat Type
            </h2>
            <p className="text-stone-600 text-base sm:text-lg">
              No hidden add-on fees for essentials. Every groom receives personal, undivided care from start to finish.
            </p>
          </div>

          {/* Pricing Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricingCategories.map((item, idx) => (
              <div
                key={idx}
                className={`bg-white rounded-3xl overflow-hidden border shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between ${
                  item.popular ? 'border-sage-500 ring-2 ring-sage-500/20' : 'border-cream-300'
                }`}
              >
                {item.popular && (
                  <div className="bg-sage-600 text-white text-xs font-bold uppercase tracking-wider text-center py-1.5">
                    Most Requested in Cary
                  </div>
                )}
                
                <div className="p-6">
                  <div className="w-full h-36 rounded-2xl overflow-hidden mb-4 bg-cream-200">
                    <img
                      src={item.image}
                      alt={item.category}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <h3 className="font-serif text-xl font-bold text-stone-900 mb-1">
                    {item.category}
                  </h3>
                  <div className="inline-block text-xs font-semibold text-clay-600 bg-clay-50 px-2 py-0.5 rounded-md mb-2">
                    {item.weight}
                  </div>
                  <p className="text-xs text-stone-500 mb-4 line-clamp-2">
                    {item.examples}
                  </p>

                  <div className="space-y-3 pt-3 border-t border-cream-200">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-stone-600">Bath & Tidy</span>
                      <span className="font-serif text-xl font-bold text-sage-800">
                        ${item.bathAndTidy}
                      </span>
                    </div>

                    <div className="flex items-center justify-between bg-cream-50 p-2.5 rounded-xl border border-cream-200">
                      <div>
                        <span className="text-xs font-bold text-stone-900 block">Full Boutique Groom</span>
                        <span className="text-[10px] text-stone-500">Custom haircut + bath</span>
                      </div>
                      <span className="font-serif text-xl font-bold text-clay-600">
                        {item.fullGroomRange ? item.fullGroomRange : `$${item.fullGroom}`}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Link
                    to={`/book?service=${encodeURIComponent(item.category)}`}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-sage-800 hover:bg-sage-700 text-white text-xs font-semibold transition-colors shadow-xs"
                  >
                    <span>Request for {item.category.split(' ')[0]}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Inclusions summary banner */}
          <div className="mt-12 bg-white rounded-3xl p-6 sm:p-8 border border-cream-300 shadow-sm">
            <h4 className="font-serif text-lg font-bold text-stone-900 mb-3 flex items-center gap-2">
              <Scissors className="w-5 h-5 text-sage-600" />
              <span>What's Included in Every Full-Service Boutique Groom:</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs sm:text-sm text-stone-600">
              {includedServices.slice(0, 4).map((service, i) => (
                <div key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{service}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-cream-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-stone-500">
              <p>
                <strong className="text-stone-700">Pricing Note:</strong> Final pricing depends on coat length, condition, matting, and temperament. De-matting is always quoted transparently before grooming begins.
              </p>
              <Link to="/pricing" className="text-sage-700 font-semibold hover:underline shrink-0 flex items-center gap-1">
                <span>View Full Pricing Page</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Happy Pups Gallery & Local Cary Testimonials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sage-100 text-sage-800 text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 text-clay-500" />
              Real Cary Transformations
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900">
              Fresh Cuts & Wagging Tails in Cary
            </h2>
          </div>
          <Link
            to="/gallery"
            className="mt-4 md:mt-0 inline-flex items-center gap-2 text-sage-700 font-semibold text-sm hover:text-sage-900"
          >
            <span>View All Client Pups & Photos</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 6 Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-3xl overflow-hidden border border-cream-200 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-cream-200">
                <img
                  src={item.image}
                  alt={`${item.name} - ${item.style}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded-full text-[11px] font-bold text-stone-800 shadow-xs">
                  {item.category}
                </span>
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-serif text-lg font-bold text-stone-900">
                    {item.name}
                  </h3>
                  <span className="text-xs text-clay-600 font-medium">{item.breed}</span>
                </div>
                <p className="text-xs font-semibold text-sage-700 mb-2">
                  {item.style}
                </p>
                <p className="text-xs text-stone-500">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials 3-Column */}
        <div className="bg-sage-50 rounded-3xl p-8 sm:p-10 border border-sage-200/80">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 mb-2">
              Loved by Cary & Wake County Pet Parents
            </h3>
            <p className="text-sm text-stone-600">
              Hear why local owners trust Tutku Taskiran with their beloved dogs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.slice(0, 3).map((rev) => (
              <div
                key={rev.id}
                className="bg-white rounded-2xl p-6 shadow-sm border border-cream-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex text-amber-400 mb-3">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-sm text-stone-700 italic mb-5 leading-relaxed">
                    “{rev.quote}”
                  </p>
                </div>
                <div className="pt-3 border-t border-cream-100 flex items-center justify-between">
                  <div>
                    <span className="font-bold text-stone-900 text-sm block">{rev.name}</span>
                    <span className="text-xs text-stone-500">{rev.location}</span>
                  </div>
                  <span className="text-[10px] font-semibold text-sage-700 bg-sage-50 px-2 py-1 rounded-md">
                    {rev.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Appointment Request Teaser Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-clay-500 to-clay-600 rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden">
          <div className="max-w-3xl space-y-4 relative z-10">
            <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-xs">
              Direct Online Booking & Rabies Upload
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold">
              Skip the Back-and-Forth Texting. Request Your Pup’s Spa Slot Online.
            </h2>
            <p className="text-cream-100 text-sm sm:text-base leading-relaxed">
              Fill out your dog’s details, upload your current rabies vaccination certificate, and Tutku will text you to confirm your reserved 1-on-1 time window.
            </p>
            <div className="pt-2">
              <Link
                to="/book"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-clay-700 hover:bg-cream-100 font-bold text-base shadow-lg transition-transform hover:-translate-y-0.5"
              >
                <Calendar className="w-5 h-5 text-clay-600" />
                <span>Go to Appointment Request Portal</span>
                <ArrowRight className="w-4 h-4 text-clay-600" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Frequently Asked Questions (FAQ Accordion) */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="inline-block px-3 py-1 rounded-full bg-cream-200 text-stone-700 text-xs font-bold uppercase tracking-wider mb-2">
            Got Questions?
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 mb-2">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-stone-600">
            Everything you need to know about our cage-free, 1-on-1 pet grooming sessions in Cary, NC.
          </p>
        </div>

        <div className="space-y-4">
          {faqItems.slice(0, 4).map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-cream-200 overflow-hidden shadow-xs transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? -1 : index)}
                  className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="font-serif text-base sm:text-lg font-bold text-stone-900">
                    {faq.question}
                  </span>
                  <span className="p-1 rounded-full bg-cream-100 text-stone-700 shrink-0">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-sm text-stone-600 leading-relaxed border-t border-cream-100 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-8 text-center">
          <Link
            to="/faq"
            className="inline-flex items-center gap-2 text-sm font-semibold text-sage-700 hover:text-sage-900"
          >
            <span>Have more questions? Read our full FAQ & studio guidelines</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
