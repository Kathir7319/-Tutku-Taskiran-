import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, ShieldCheck, Heart, Sparkles, FileCheck, ArrowRight } from 'lucide-react';
import { businessInfo } from '../data/groomingData';

export default function Footer() {
  return (
    <footer className="bg-sage-900 text-cream-100 pt-16 pb-12 border-t border-sage-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Banner / Call to Action Box */}
        <div className="bg-sage-800/80 rounded-3xl p-8 sm:p-10 mb-16 border border-sage-700/60 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sage-700 text-sage-200 text-xs font-semibold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-clay-200" />
              Private 1-on-1 Studio
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-2">
              Ready to give your pup a peaceful spa day?
            </h3>
            <p className="text-cream-200 text-sm sm:text-base max-w-xl">
              No cages, no wait times, and no assembly line stress. Reserve your dog’s private appointment in Cary, NC today.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <Link
              to="/book"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-clay-500 hover:bg-clay-600 text-white font-semibold text-sm shadow-lg transition-transform hover:-translate-y-0.5"
            >
              <span>Book Appointment Online</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={`tel:${businessInfo.phoneClean}`}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-sage-700 hover:bg-sage-600 text-cream-50 font-medium text-sm transition-colors"
            >
              <Phone className="w-4 h-4 text-clay-200" />
              <span>(919) 825-3459</span>
            </a>
          </div>
        </div>

        {/* 4-column footer details */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-sage-800">
          {/* Brand info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-sage-700 text-cream-100 flex items-center justify-center">
                <Heart className="w-5 h-5 text-clay-200" />
              </div>
              <div>
                <span className="font-serif text-lg font-bold text-white block">
                  {businessInfo.shortName}
                </span>
                <span className="text-xs uppercase tracking-wider text-sage-300">
                  Pet Grooming
                </span>
              </div>
            </div>
            <p className="text-sm text-sage-300 leading-relaxed">
              Cary’s dedicated cage-free, 1-on-1 pet grooming sanctuary. Providing anxious, senior, and doodle pups with calm, patience-first grooming care.
            </p>
            <div className="inline-flex items-center gap-2 text-xs text-cream-200 bg-sage-800/60 px-3 py-1.5 rounded-lg border border-sage-700/50">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Strict Rabies-Verified Facility</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-base font-semibold text-white mb-4 tracking-wide">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-sage-300">
              <li>
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/approach" className="hover:text-white transition-colors">Why 1-on-1 Care (Our Approach)</Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-white transition-colors">Breed Size & Pricing Chart</Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-white transition-colors">Happy Pups Gallery & Reviews</Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-white transition-colors">Frequently Asked Questions</Link>
              </li>
              <li>
                <Link to="/book" className="hover:text-white transition-colors">Appointment & Rabies Upload</Link>
              </li>
            </ul>
          </div>

          {/* Hours & Service Area */}
          <div>
            <h4 className="font-serif text-base font-semibold text-white mb-4 tracking-wide">
              Studio Hours & Area
            </h4>
            <ul className="space-y-3 text-sm text-sage-300">
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-clay-200 shrink-0 mt-0.5" />
                <div>
                  <span className="font-medium text-cream-100 block">Hours:</span>
                  <span>{businessInfo.hours}</span>
                  <p className="text-xs text-sage-400 mt-0.5">Strictly 1 dog per reserved block</p>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-clay-200 shrink-0 mt-0.5" />
                <div>
                  <span className="font-medium text-cream-100 block">Location:</span>
                  <span>Cary, North Carolina</span>
                  <p className="text-xs text-sage-400 mt-0.5">Serving Cary, Apex, Morrisville & Wake County</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Contact & Direct Booking */}
          <div>
            <h4 className="font-serif text-base font-semibold text-white mb-4 tracking-wide">
              Direct Contact
            </h4>
            <div className="space-y-3 text-sm text-sage-300">
              <p>For urgent inquiries or booking questions, text or call Tutku directly:</p>
              <a
                href={`tel:${businessInfo.phoneClean}`}
                className="inline-flex items-center gap-2 text-lg font-bold text-cream-50 hover:text-clay-200 transition-colors"
              >
                <Phone className="w-5 h-5 text-clay-200" />
                <span>{businessInfo.phone}</span>
              </a>
              <div className="p-3 bg-sage-800/80 rounded-xl border border-sage-700 text-xs text-cream-200 flex items-start gap-2">
                <FileCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Rabies vaccination certificates are required prior to confirmed appointments.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright & SEO footer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-sage-400 gap-4">
          <p>© 2026 Tutku Taskiran Pet Grooming. All rights reserved.</p>
          <p className="text-center md:text-right">
            Tutku Taskiran Pet Grooming — Cary, North Carolina • Gentle Cage-Free 1-on-1 Dog Groomer
          </p>
        </div>
      </div>
    </footer>
  );
}
