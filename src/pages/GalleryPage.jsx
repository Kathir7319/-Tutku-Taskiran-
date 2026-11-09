import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  Star, 
  Heart, 
  ArrowRight, 
  Calendar, 
  Camera, 
  CheckCircle2, 
  ShieldCheck,
  Filter
} from 'lucide-react';
import { galleryItems, reviews } from '../data/groomingData';

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [activePhoto, setActivePhoto] = useState(null);

  const filters = ['All', 'Doodles', 'Small Pups', 'Medium Pups', 'Large Pups'];

  const filteredItems = activeFilter === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <div className="space-y-16 pb-16">
      {/* Header */}
      <section className="bg-gradient-to-b from-cream-100 to-cream-50 pt-12 pb-16 border-b border-cream-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sage-100 text-sage-800 text-xs font-bold uppercase tracking-wider">
            <Camera className="w-3.5 h-3.5 text-clay-500" />
            Before & After Showcase
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-stone-900 leading-tight">
            Fresh Cuts & Wagging Tails in Cary
          </h1>
          <p className="text-base sm:text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed">
            Every pup leaves looking plush, feeling fresh, and completely stress-free. Take a look at some of our recent furry clients from Cary, Apex, and Morrisville.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                activeFilter === filter
                  ? 'bg-sage-700 text-white shadow-md'
                  : 'bg-white text-stone-700 border border-cream-300 hover:bg-cream-100'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActivePhoto(item)}
              className="group bg-white rounded-3xl overflow-hidden border border-cream-200 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-cream-200">
                <img
                  src={item.image}
                  alt={`${item.name} - ${item.style}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs px-3 py-1 rounded-full text-xs font-bold text-stone-800 shadow-xs">
                  {item.category}
                </span>
                <div className="absolute inset-0 bg-stone-900/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-3.5 py-1.5 rounded-full bg-white/90 text-stone-900 text-xs font-bold shadow-md">
                    Click to View Details
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-1.5">
                  <h3 className="font-serif text-xl font-bold text-stone-900">
                    {item.name}
                  </h3>
                  <span className="text-xs font-semibold text-clay-600 bg-clay-50 px-2.5 py-0.5 rounded-md">
                    {item.breed}
                  </span>
                </div>
                <p className="text-xs font-bold text-sage-800 mb-2">
                  {item.style}
                </p>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal for viewing photo in detail */}
      {activePhoto && (
        <div 
          className="fixed inset-0 z-50 bg-stone-950/70 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setActivePhoto(null)}
        >
          <div 
            className="bg-white rounded-3xl overflow-hidden max-w-lg w-full shadow-2xl border border-cream-200 animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[4/3] bg-cream-200">
              <img
                src={activePhoto.image}
                alt={activePhoto.name}
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                onClick={() => setActivePhoto(null)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 text-stone-800 font-bold flex items-center justify-center shadow-md hover:bg-white"
              >
                ✕
              </button>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-serif text-2xl font-bold text-stone-900">{activePhoto.name}</h3>
                <span className="text-xs font-bold text-clay-600">{activePhoto.breed}</span>
              </div>
              <p className="text-sm font-semibold text-sage-700 mb-2">{activePhoto.style}</p>
              <p className="text-sm text-stone-600 mb-6">{activePhoto.description}</p>

              <div className="pt-4 border-t border-cream-200 flex items-center justify-between">
                <span className="text-xs text-stone-500">100% Cage-Free Groom</span>
                <Link
                  to={`/book?service=${encodeURIComponent(activePhoto.category)}`}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-clay-500 hover:bg-clay-600 text-white font-semibold text-xs shadow-xs"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book for Your Pup</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Local Cary Testimonials Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="bg-cream-100 rounded-3xl p-8 sm:p-12 border border-cream-300">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-wider font-bold text-sage-700 block mb-2">
              Community Endorsements
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 mb-2">
              What Cary & Wake County Pet Parents Say
            </h2>
            <p className="text-sm text-stone-600">
              Read authentic reviews from dog moms and dads who made the switch to calm 1-on-1 grooming.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((rev) => (
              <div
                key={rev.id}
                className="bg-white rounded-2xl p-6 sm:p-7 shadow-sm border border-cream-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex text-amber-400">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    <span className="text-[11px] font-bold text-sage-700 bg-sage-50 px-2.5 py-1 rounded-md">
                      {rev.tag}
                    </span>
                  </div>

                  <p className="text-stone-700 italic text-base mb-6 leading-relaxed">
                    “{rev.quote}”
                  </p>
                </div>

                <div className="pt-4 border-t border-cream-100 flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-stone-900 text-sm">{rev.name}</h4>
                    <p className="text-xs text-stone-500">{rev.location}</p>
                  </div>
                  <span className="text-xs text-clay-700 font-medium">{rev.dog}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-4xl mx-auto px-4 text-center">
        <div className="bg-sage-800 text-cream-100 rounded-3xl p-8 sm:p-10 shadow-lg">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-3">
            Want to see your pup in our Happy Pups gallery?
          </h3>
          <p className="text-cream-200 text-sm sm:text-base max-w-xl mx-auto mb-6">
            Schedule your pup’s appointment today. They’ll enjoy a serene spa experience with cage-free care from start to finish.
          </p>
          <Link
            to="/book"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-clay-500 hover:bg-clay-600 text-white font-bold text-sm shadow-md"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Your Pup’s Spa Day</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
