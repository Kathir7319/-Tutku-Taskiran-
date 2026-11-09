import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Calendar, Menu, X, Heart, Shield, Sparkles } from 'lucide-react';
import { businessInfo } from '../data/groomingData';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Our Approach', path: '/approach' },
    { label: 'Breed Pricing', path: '/pricing' },
    { label: 'Happy Pups', path: '/gallery' },
    { label: 'FAQ', path: '/faq' },
  ];

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-50 bg-cream-50/95 backdrop-blur-md border-b border-cream-200 transition-all duration-300">
      {/* Top micro-announcement banner */}
      <div className="bg-sage-800 text-cream-100 text-xs sm:text-sm py-2 px-4 transition-colors">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1 sm:gap-4">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="font-medium tracking-wide">
              {businessInfo.tagline}
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs text-cream-200">
            <span className="hidden md:inline text-sage-300">•</span>
            <span className="hidden md:inline">{businessInfo.hours}</span>
            <span className="text-sage-300">•</span>
            <a
              href={`tel:${businessInfo.phoneClean}`}
              className="flex items-center gap-1.5 font-semibold text-cream-50 hover:text-clay-200 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-clay-200" />
              <span>Call / Text: {businessInfo.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="w-11 h-11 rounded-2xl bg-sage-500 text-cream-50 flex items-center justify-center shadow-md shadow-sage-500/20 group-hover:bg-sage-600 transition-transform group-hover:scale-105 duration-200">
              <Sparkles className="w-6 h-6 text-cream-100" />
            </div>
            <div>
              <div className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-sage-900 group-hover:text-sage-700 transition-colors">
                {businessInfo.shortName}
              </div>
              <div className="text-[10px] sm:text-xs tracking-[0.2em] uppercase font-semibold text-sage-600">
                Pet Grooming • Cary, NC
              </div>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3.5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  isActive(link.path)
                    ? 'bg-sage-100 text-sage-800 font-semibold shadow-xs'
                    : 'text-stone-700 hover:text-sage-700 hover:bg-cream-100'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/book"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-clay-500 hover:bg-clay-600 text-white font-medium text-sm shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Calendar className="w-4 h-4" />
              <span>Request an Appointment</span>
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <Link
              to="/book"
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-clay-500 text-white font-medium text-xs shadow-xs"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book</span>
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 rounded-xl text-stone-700 hover:text-sage-900 hover:bg-cream-200 focus:outline-none transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-cream-200 bg-cream-50 px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-xl text-base font-medium flex items-center justify-between transition-colors ${
                  isActive(link.path)
                    ? 'bg-sage-500 text-white font-semibold'
                    : 'text-stone-700 hover:bg-cream-200'
                }`}
              >
                <span>{link.label}</span>
                <span className="text-xs opacity-70">→</span>
              </Link>
            ))}

            <div className="pt-4 border-t border-cream-200 flex flex-col gap-2.5">
              <Link
                to="/book"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-clay-500 text-white font-semibold shadow-md active:bg-clay-600"
              >
                <Calendar className="w-5 h-5" />
                <span>Request an Appointment</span>
              </Link>

              <a
                href={`tel:${businessInfo.phoneClean}`}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-sage-300 text-sage-800 font-medium bg-sage-50"
              >
                <Phone className="w-4 h-4 text-sage-600" />
                <span>Call {businessInfo.phone}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
