import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle2, 
  HelpCircle, 
  Sparkles, 
  Calendar, 
  Scissors, 
  Info, 
  ShieldCheck, 
  PlusCircle, 
  ArrowRight,
  Calculator
} from 'lucide-react';
import { 
  pricingCategories, 
  includedServices, 
  addOnServices,
  businessInfo 
} from '../data/groomingData';

export default function PricingPage() {
  const [selectedCategory, setSelectedCategory] = useState(pricingCategories[0]);
  const [selectedServiceType, setSelectedServiceType] = useState('fullGroom'); // 'bathTidy' or 'fullGroom'
  const [selectedAddOns, setSelectedAddOns] = useState([]);

  const toggleAddOn = (addOnName) => {
    if (selectedAddOns.includes(addOnName)) {
      setSelectedAddOns(selectedAddOns.filter(item => item !== addOnName));
    } else {
      setSelectedAddOns([...selectedAddOns, addOnName]);
    }
  };

  const calculateEstimate = () => {
    let base = selectedServiceType === 'bathTidy' 
      ? selectedCategory.bathAndTidy 
      : selectedCategory.fullGroom;
    return base;
  };

  return (
    <div className="space-y-16 pb-16">
      {/* Page Header */}
      <section className="bg-gradient-to-b from-cream-100 to-cream-50 pt-12 pb-16 border-b border-cream-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-clay-100 text-clay-700 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-clay-500" />
            Simple & Transparent Rates
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-stone-900 leading-tight">
            Transparent Pricing by Size & Coat Type
          </h1>
          <p className="text-base sm:text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed">
            Every pup deserves individualized, uninterrupted care. There are no rushed fees or surprise add-ons. Here is our straightforward boutique pricing guide.
          </p>
        </div>
      </section>

      {/* Main Pricing Table / Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {pricingCategories.map((item, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-3xl overflow-hidden border shadow-sm transition-all duration-300 hover:shadow-xl flex flex-col justify-between ${
                item.popular ? 'border-sage-500 ring-2 ring-sage-500/20' : 'border-cream-300'
              }`}
            >
              {item.popular && (
                <div className="bg-sage-600 text-white text-xs font-bold uppercase tracking-wider text-center py-1.5">
                  Popular in Cary
                </div>
              )}

              <div className="p-6">
                <div className="w-full h-40 rounded-2xl overflow-hidden mb-4 bg-cream-200">
                  <img
                    src={item.image}
                    alt={item.category}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex items-baseline justify-between mb-1">
                  <h3 className="font-serif text-xl font-bold text-stone-900">
                    {item.category}
                  </h3>
                </div>
                <div className="inline-block text-xs font-semibold text-clay-700 bg-clay-50 px-2 py-0.5 rounded-md mb-2">
                  {item.weight}
                </div>

                <p className="text-xs text-stone-500 mb-6 leading-relaxed">
                  {item.examples}
                </p>

                {/* Price Boxes */}
                <div className="space-y-3 pt-3 border-t border-cream-200">
                  {/* Bath & Tidy */}
                  <div className="bg-cream-50 p-3 rounded-xl border border-cream-200 flex items-center justify-between">
                    <div>
                      <span className="text-xs font-semibold text-stone-700 block">Bath & Tidy</span>
                      <span className="text-[11px] text-stone-500">Wash, dry, nails & sanitary</span>
                    </div>
                    <span className="font-serif text-xl font-bold text-sage-800">
                      ${item.bathAndTidy}
                    </span>
                  </div>

                  {/* Full Boutique Groom */}
                  <div className="bg-sage-50 p-3 rounded-xl border border-sage-200 flex items-center justify-between">
                    <div>
                      <span className="text-xs font-bold text-sage-900 block">Full Boutique Groom</span>
                      <span className="text-[11px] text-sage-700">Full custom haircut + spa</span>
                    </div>
                    <span className="font-serif text-xl font-bold text-clay-600">
                      {item.fullGroomRange ? item.fullGroomRange : `$${item.fullGroom}`}
                    </span>
                  </div>
                </div>

                {item.specialNote && (
                  <p className="mt-3 text-[11px] text-stone-500 italic bg-amber-50 p-2 rounded-lg border border-amber-200">
                    💡 {item.specialNote}
                  </p>
                )}
              </div>

              <div className="p-6 pt-0">
                <Link
                  to={`/book?service=${encodeURIComponent(item.category)}`}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-clay-500 hover:bg-clay-600 text-white text-xs font-semibold transition-colors shadow-xs"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book for {item.category}</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing Note Callout */}
        <div className="p-6 rounded-3xl bg-amber-50/70 border border-amber-200 flex flex-col sm:flex-row items-start sm:items-center gap-4 text-sm text-stone-700 mb-16">
          <div className="p-2.5 rounded-2xl bg-amber-100 text-amber-800 shrink-0">
            <Info className="w-5 h-5" />
          </div>
          <div>
            <strong className="font-bold text-stone-900">Pricing Note:</strong> Final pricing depends on coat length, condition, matting, and temperament. De-matting and specialty deshedding treatments are always discussed and quoted transparently before grooming begins.
          </div>
        </div>
      </section>

      {/* Interactive Quick Price Estimator */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-cream-300 shadow-xl">
          <div className="flex items-center gap-2 mb-2">
            <Calculator className="w-5 h-5 text-clay-500" />
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
              Interactive Grooming Estimator
            </h2>
          </div>
          <p className="text-sm text-stone-600 mb-8">
            Select your pup's category to calculate your starting investment.
          </p>

          <div className="space-y-6">
            {/* Step 1: Select Size Category */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-stone-700 block mb-3">
                1. Select Size / Breed Group:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {pricingCategories.map((cat, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={`p-3.5 rounded-2xl border text-left transition-all ${
                      selectedCategory.category === cat.category
                        ? 'border-sage-600 bg-sage-50 ring-2 ring-sage-500/30'
                        : 'border-cream-200 hover:border-cream-300 bg-white'
                    }`}
                  >
                    <span className="font-serif font-bold text-xs sm:text-sm text-stone-900 block mb-0.5">
                      {cat.category}
                    </span>
                    <span className="text-[11px] text-stone-500 block">
                      {cat.weight}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Select Service Package */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-stone-700 block mb-3">
                2. Select Service Package:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setSelectedServiceType('bathTidy')}
                  className={`p-4 rounded-2xl border text-left transition-all flex items-start justify-between ${
                    selectedServiceType === 'bathTidy'
                      ? 'border-sage-600 bg-sage-50 ring-2 ring-sage-500/30'
                      : 'border-cream-200 hover:border-cream-300 bg-white'
                  }`}
                >
                  <div>
                    <span className="font-serif font-bold text-sm sm:text-base text-stone-900 block mb-1">
                      Bath & Tidy
                    </span>
                    <span className="text-xs text-stone-500 block">
                      Hydro-massage bath, warm blow-dry, brush, nails buffed, ears cleaned, sanitary trim.
                    </span>
                  </div>
                  <span className="font-serif text-lg font-bold text-sage-800 ml-2">
                    ${selectedCategory.bathAndTidy}
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedServiceType('fullGroom')}
                  className={`p-4 rounded-2xl border text-left transition-all flex items-start justify-between ${
                    selectedServiceType === 'fullGroom'
                      ? 'border-clay-500 bg-clay-50 ring-2 ring-clay-500/30'
                      : 'border-cream-200 hover:border-cream-300 bg-white'
                  }`}
                >
                  <div>
                    <span className="font-serif font-bold text-sm sm:text-base text-stone-900 block mb-1">
                      Full Boutique Groom
                    </span>
                    <span className="text-xs text-stone-500 block">
                      Everything in Bath & Tidy plus full custom styling / teddy bear scissor finish.
                    </span>
                  </div>
                  <span className="font-serif text-lg font-bold text-clay-600 ml-2">
                    {selectedCategory.fullGroomRange ? selectedCategory.fullGroomRange : `$${selectedCategory.fullGroom}`}
                  </span>
                </button>
              </div>
            </div>

            {/* Summary Box */}
            <div className="mt-8 pt-6 border-t border-cream-200 bg-cream-50 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-xs uppercase tracking-wider font-semibold text-stone-500 block">
                  Estimated Starting Investment
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="font-serif text-3xl sm:text-4xl font-bold text-stone-900">
                    {selectedServiceType === 'fullGroom' && selectedCategory.fullGroomRange
                      ? selectedCategory.fullGroomRange
                      : `$${calculateEstimate()}`}
                  </span>
                  <span className="text-xs text-stone-500">
                    (1-on-1 private studio session)
                  </span>
                </div>
              </div>

              <Link
                to={`/book?service=${encodeURIComponent(selectedCategory.category)}&type=${selectedServiceType}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-clay-500 hover:bg-clay-600 text-white font-bold text-sm shadow-md transition-all"
              >
                <span>Book This Slot</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Included Services Details */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-sage-900 text-cream-100 rounded-3xl p-8 sm:p-12">
          <div className="max-w-3xl mb-8">
            <span className="text-xs uppercase tracking-wider font-bold text-sage-300 block mb-2">
              Comprehensive Care
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-2">
              Included Services Overview
            </h2>
            <p className="text-sm sm:text-base text-sage-200">
              Every full-service boutique groom includes thoughtful, fear-free care with zero compromises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {includedServices.map((service, i) => (
              <div key={i} className="flex items-start gap-3 bg-sage-800/70 p-4 rounded-2xl border border-sage-700/60">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-sm text-cream-100">{service}</span>
              </div>
            ))}
          </div>

          {/* Add-on services */}
          <div className="mt-10 pt-8 border-t border-sage-800">
            <h3 className="font-serif text-lg font-bold text-white mb-4">
              Optional Specialty Add-Ons:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {addOnServices.map((addon, i) => (
                <div key={i} className="bg-sage-800/40 p-4 rounded-xl border border-sage-700/40">
                  <div className="flex items-start justify-between mb-1">
                    <span className="font-bold text-xs text-white">{addon.name}</span>
                    <span className="text-xs font-semibold text-clay-300 ml-2">{addon.price}</span>
                  </div>
                  <p className="text-[11px] text-sage-300">{addon.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
