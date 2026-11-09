import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  HelpCircle, 
  Plus, 
  Minus, 
  Phone, 
  FileCheck, 
  ShieldAlert, 
  Calendar, 
  ArrowRight,
  Search,
  Sparkles
} from 'lucide-react';
import { faqItems, businessInfo } from '../data/groomingData';

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Vaccinations & Safety', 'Experience & Timeline', 'Special Needs & Temperament', 'Location & Drop-off'];

  const filteredFaqs = faqItems.filter((faq) => {
    const matchesSearch = 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-16 pb-16">
      {/* Header */}
      <section className="bg-gradient-to-b from-cream-100 to-cream-50 pt-12 pb-16 border-b border-cream-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cream-200 text-stone-700 text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5 text-sage-600" />
            Answers & Studio Guidelines
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-stone-900 leading-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-base sm:text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed">
            Have questions about rabies requirements, drop-off timing, or our cage-free philosophy? Find clear answers below.
          </p>

          {/* Search bar */}
          <div className="max-w-md mx-auto relative pt-4">
            <Search className="w-5 h-5 text-stone-400 absolute left-3.5 top-7 pointer-events-none" />
            <input
              type="text"
              placeholder="Search questions (e.g. rabies, time, senior, location)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-full border border-cream-300 focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-transparent text-sm bg-white shadow-xs"
            />
          </div>
        </div>
      </section>

      {/* Main FAQ Accordion Container */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                selectedCategory === cat
                  ? 'bg-sage-700 text-white shadow-xs'
                  : 'bg-white text-stone-700 border border-cream-300 hover:bg-cream-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Highlight Banner: North Carolina Rabies Requirement */}
        <div className="bg-sage-50 rounded-2xl p-5 border border-sage-200 mb-8 flex items-start gap-4 shadow-xs">
          <div className="p-2 rounded-xl bg-sage-200 text-sage-800 shrink-0">
            <FileCheck className="w-5 h-5" />
          </div>
          <div className="text-xs sm:text-sm text-stone-700">
            <strong className="text-sage-900 block font-bold mb-1">
              NC Pet Health Compliance: Rabies Vaccination Required Upfront
            </strong>
            Under North Carolina state law and our high boutique sanitation protocol, all dogs must have verified, up-to-date rabies records prior to stepping inside our studio. You can easily upload a photo or PDF of your certificate in our online booking form.
          </div>
        </div>

        {/* FAQs */}
        <div className="space-y-4">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-2xl border border-cream-200">
              <p className="text-stone-500 text-sm">No questions matching your search.</p>
              <button
                type="button"
                onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                className="mt-2 text-xs font-bold text-sage-700 hover:underline"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            filteredFaqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-cream-200 overflow-hidden shadow-xs transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-sage-600 block mb-1">
                        {faq.category}
                      </span>
                      <span className="font-serif text-base sm:text-lg font-bold text-stone-900 block">
                        {faq.question}
                      </span>
                    </div>
                    <span className="p-1.5 rounded-full bg-cream-100 text-stone-700 shrink-0">
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 text-sm text-stone-600 leading-relaxed border-t border-cream-100 pt-4">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Direct Contact prompt */}
        <div className="mt-14 p-8 rounded-3xl bg-cream-100 border border-cream-300 text-center space-y-4">
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-900">
            Have a unique question about your dog?
          </h3>
          <p className="text-sm text-stone-600 max-w-lg mx-auto">
            Tutku is happy to chat about your dog's temperament, coat condition, or medical needs before booking.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <a
              href={`tel:${businessInfo.phoneClean}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-sage-800 text-white font-semibold text-sm hover:bg-sage-700 transition-colors shadow-xs"
            >
              <Phone className="w-4 h-4 text-clay-200" />
              <span>Call / Text: {businessInfo.phone}</span>
            </a>
            <Link
              to="/book"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-clay-500 hover:bg-clay-600 text-white font-semibold text-sm shadow-xs"
            >
              <Calendar className="w-4 h-4" />
              <span>Go to Booking Portal</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
