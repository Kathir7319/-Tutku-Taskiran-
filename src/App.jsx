import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ApproachPage from './pages/ApproachPage';
import PricingPage from './pages/PricingPage';
import GalleryPage from './pages/GalleryPage';
import FaqPage from './pages/FaqPage';
import BookingPage from './pages/BookingPage';

// Scroll to top helper on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-cream-50 text-stone-800 antialiased font-sans selection:bg-sage-200 selection:text-sage-900">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/approach" element={<ApproachPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/book" element={<BookingPage />} />
            {/* Fallback to home */}
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
