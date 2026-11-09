import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { 
  Upload, 
  FileText, 
  CheckCircle2, 
  Calendar, 
  ShieldCheck, 
  Sparkles, 
  AlertCircle, 
  Phone, 
  Clock, 
  X,
  MessageSquare,
  ArrowRight
} from 'lucide-react';
import { businessInfo } from '../data/groomingData';

export default function BookingPage() {
  const location = useLocation();

  // Form State
  const [formData, setFormData] = useState({
    parentName: '',
    phone: '',
    email: '',
    dogDetails: '',
    serviceNeeded: 'Full Boutique Groom',
    preferredTimes: ['Weekday Mornings'],
    notes: '',
  });

  const [uploadedFile, setUploadedFile] = useState(null);
  const [fileError, setFileError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Check URL query parameters on mount to pre-populate service
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const serviceParam = params.get('service');
    if (serviceParam) {
      if (serviceParam.toLowerCase().includes('doodle')) {
        setFormData(prev => ({ ...prev, serviceNeeded: 'Doodle & Curly Coat Special' }));
      } else if (serviceParam.toLowerCase().includes('bath')) {
        setFormData(prev => ({ ...prev, serviceNeeded: 'Bath & Tidy' }));
      } else {
        setFormData(prev => ({ ...prev, serviceNeeded: 'Full Boutique Groom' }));
      }
    }
  }, [location.search]);

  // Handle Input Changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle Checkboxes
  const handleTimeCheckbox = (timeOption) => {
    setFormData(prev => {
      const current = prev.preferredTimes;
      if (current.includes(timeOption)) {
        return { ...prev, preferredTimes: current.filter(t => t !== timeOption) };
      } else {
        return { ...prev, preferredTimes: [...current, timeOption] };
      }
    });
  };

  // Handle File Upload
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    validateAndSetFile(file);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      validateAndSetFile(e.dataTransfer.files[0]);
    }
  };

  const validateAndSetFile = (file) => {
    setFileError('');
    if (!file) return;

    // Check size (< 10MB)
    const maxSize = 10 * 1024 * 1024; // 10MB
    if (file.size > maxSize) {
      setFileError('File size exceeds the 10MB limit. Please upload a smaller image or PDF.');
      return;
    }

    // Check type
    const validTypes = ['image/jpeg', 'image/png', 'image/webp', 'application/pdf'];
    if (!validTypes.includes(file.type)) {
      setFileError('Please upload a valid PDF, JPG, or PNG file.');
      return;
    }

    setUploadedFile({
      name: file.name,
      size: (file.size / 1024 / 1024).toFixed(2) + ' MB',
      type: file.type,
    });
  };

  const removeFile = () => {
    setUploadedFile(null);
    setFileError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!uploadedFile) {
      setFileError('Please upload your pup\'s rabies certificate (Required for NC health compliance).');
      return;
    }

    setIsSubmitting(true);
    // Simulate swift modern submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      window.scrollTo({ top: 150, behavior: 'smooth' });
    }, 900);
  };

  return (
    <div className="space-y-12 pb-20">
      {/* Page Header */}
      <section className="bg-gradient-to-b from-cream-100 to-cream-50 pt-12 pb-14 border-b border-cream-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-clay-100 text-clay-700 text-xs font-bold uppercase tracking-wider">
            <Calendar className="w-3.5 h-3.5 text-clay-500" />
            Direct Online Intake
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-stone-900 leading-tight">
            Request Your Appointment Online
          </h1>
          <p className="text-base sm:text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed">
            Skip the back-and-forth texting. Fill out your pup’s details below, upload your current rabies vaccination certificate, and Tutku will confirm your time slot shortly.
          </p>
        </div>
      </section>

      {/* Main Form Container */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Success Confirmation Modal / Banner */}
        {isSubmitted ? (
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-emerald-300 shadow-2xl animate-in fade-in zoom-in-95 duration-300 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full">
                Booking Request Received
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
                Thank You, {formData.parentName.split(' ')[0]}!
              </h2>
              <p className="text-stone-600 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
                “Thank you! Your grooming request and vaccination record have been received. Tutku will text you at the number provided within a few hours to confirm your exact appointment time.”
              </p>
            </div>

            {/* Simulated SMS Preview Card */}
            <div className="bg-cream-100/90 rounded-2xl p-5 border border-cream-300 text-left max-w-md mx-auto shadow-inner">
              <div className="flex items-center gap-2 mb-2 text-xs font-bold text-sage-800">
                <MessageSquare className="w-4 h-4 text-clay-500" />
                <span>Simulated SMS Confirmation Preview</span>
              </div>
              <p className="text-xs text-stone-700 leading-relaxed font-mono bg-white p-3.5 rounded-xl border border-cream-200">
                "Hi {formData.parentName}! This is Tutku from Tutku Taskiran Pet Grooming in Cary. I received your request for {formData.dogDetails.split(',')[0] || 'your pup'} for {formData.serviceNeeded}. Rabies certificate looks great! Looking forward to meeting you both. 🐾"
              </p>
            </div>

            {/* Summary Details */}
            <div className="text-left bg-cream-50 rounded-2xl p-5 border border-cream-200 text-xs text-stone-600 space-y-2 max-w-md mx-auto">
              <div className="flex justify-between">
                <span className="font-semibold text-stone-700">Client:</span>
                <span>{formData.parentName}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold text-stone-700">Phone:</span>
                <span>{formData.phone}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold text-stone-700">Pup:</span>
                <span>{formData.dogDetails}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold text-stone-700">Service:</span>
                <span>{formData.serviceNeeded}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold text-stone-700">Rabies Certificate:</span>
                <span className="text-emerald-700 font-bold">✓ {uploadedFile?.name || 'Verified'}</span>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
              <button
                type="button"
                onClick={() => {
                  setIsSubmitted(false);
                  setUploadedFile(null);
                  setFormData({
                    parentName: '',
                    phone: '',
                    email: '',
                    dogDetails: '',
                    serviceNeeded: 'Full Boutique Groom',
                    preferredTimes: ['Weekday Mornings'],
                    notes: '',
                  });
                }}
                className="px-6 py-2.5 rounded-full border border-stone-300 text-stone-700 text-xs font-bold hover:bg-cream-100"
              >
                Submit Another Request
              </button>

              <Link
                to="/"
                className="px-6 py-2.5 rounded-full bg-sage-800 text-white text-xs font-bold hover:bg-sage-700 shadow-xs"
              >
                Return to Homepage
              </Link>
            </div>
          </div>
        ) : (
          /* Intake Form Block */
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-3xl p-6 sm:p-10 border border-cream-300 shadow-xl space-y-8"
          >
            {/* Top reassurance note */}
            <div className="flex items-center gap-3 p-4 bg-sage-50 rounded-2xl border border-sage-200 text-xs text-sage-900">
              <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
              <span>
                <strong>100% Cage-Free Guarantee:</strong> Only one dog is groomed in the studio at a time. No overlapping clients or stressful kennel stays.
              </span>
            </div>

            {/* Section A: Pet Parent Info */}
            <div className="space-y-4">
              <h3 className="font-serif text-lg font-bold text-stone-900 border-b border-cream-200 pb-2">
                1. Pet Parent Information
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Field 1 — Pet Parent Full Name */}
                <div className="sm:col-span-2">
                  <label htmlFor="parentName" className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                    Pet Parent Full Name <span className="text-clay-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="parentName"
                    name="parentName"
                    required
                    placeholder="e.g. Sarah Miller"
                    value={formData.parentName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-cream-300 focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-transparent text-sm bg-cream-50/50"
                  />
                </div>

                {/* Field 2 — Mobile Phone Number */}
                <div>
                  <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                    Mobile Phone Number <span className="text-clay-600">*</span>
                    <span className="text-[10px] font-normal text-stone-500 block">For direct SMS confirmation</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    placeholder="(919) 555-0199"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-cream-300 focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-transparent text-sm bg-cream-50/50"
                  />
                </div>

                {/* Field 3 — Email Address */}
                <div>
                  <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                    Email Address <span className="text-clay-600">*</span>
                    <span className="text-[10px] font-normal text-stone-500 block">For booking receipt & directions</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="sarah@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-cream-300 focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-transparent text-sm bg-cream-50/50"
                  />
                </div>
              </div>
            </div>

            {/* Section B: Dog's Profile & Grooming Service */}
            <div className="space-y-4">
              <h3 className="font-serif text-lg font-bold text-stone-900 border-b border-cream-200 pb-2">
                2. Your Pup's Profile & Service
              </h3>

              {/* Field 4 — Dog’s Name, Breed & Approximate Weight */}
              <div>
                <label htmlFor="dogDetails" className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                  Dog’s Name, Breed & Approximate Weight <span className="text-clay-600">*</span>
                </label>
                <input
                  type="text"
                  id="dogDetails"
                  name="dogDetails"
                  required
                  placeholder="e.g. Archie, Goldendoodle, 32 lbs, 2 years old"
                  value={formData.dogDetails}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-cream-300 focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-transparent text-sm bg-cream-50/50"
                />
              </div>

              {/* Field 5 — Service Needed (Dropdown) */}
              <div>
                <label htmlFor="serviceNeeded" className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                  Service Needed <span className="text-clay-600">*</span>
                </label>
                <select
                  id="serviceNeeded"
                  name="serviceNeeded"
                  value={formData.serviceNeeded}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-cream-300 focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-transparent text-sm bg-white"
                >
                  <option value="Full Boutique Groom">Full Boutique Groom (Custom haircut, bath, nails, styling)</option>
                  <option value="Bath & Tidy">Bath & Tidy (Soothing wash, dry, nails buffed, sanitary trim)</option>
                  <option value="Doodle & Curly Coat Special">Doodle & Curly Coat Special (Scissor work, de-shed & trim)</option>
                  <option value="Nail Trim & Ear Clean">Nail Trim & Ear Clean Only ($25 Quick Session)</option>
                </select>
              </div>

              {/* Field 6 — Preferred Days & Time Window (Checkboxes) */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
                  Preferred Days & Time Window (Check all that apply) <span className="text-clay-600">*</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {['Weekday Mornings', 'Weekday Afternoons', 'Saturdays'].map((option) => (
                    <label
                      key={option}
                      className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer text-xs font-semibold transition-all ${
                        formData.preferredTimes.includes(option)
                          ? 'border-sage-600 bg-sage-50 text-sage-900'
                          : 'border-cream-300 text-stone-700 hover:bg-cream-50'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={formData.preferredTimes.includes(option)}
                        onChange={() => handleTimeCheckbox(option)}
                        className="rounded text-sage-600 focus:ring-sage-500 h-4 w-4"
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Field 7 — Temperament, Health & Coat Notes */}
              <div>
                <label htmlFor="notes" className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                  Temperament, Health & Coat Notes
                  <span className="text-[10px] font-normal text-stone-500 block">
                    Tell us about any anxiety triggers, senior needs, skin allergies, or matting.
                  </span>
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  rows="3"
                  placeholder="e.g. He gets nervous around dryer sounds, has sensitive itchy belly skin, loves belly rubs, or minor matting behind ears..."
                  value={formData.notes}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-cream-300 focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-transparent text-sm bg-cream-50/50"
                ></textarea>
              </div>
            </div>

            {/* Section C: Field 8 — Rabies Vaccination Certificate Upload */}
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-cream-200 pb-2">
                <h3 className="font-serif text-lg font-bold text-stone-900 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-600" />
                  <span>3. Rabies Vaccination Certificate Upload</span>
                </h3>
                <span className="text-[11px] font-bold text-clay-700 bg-clay-50 px-2 py-0.5 rounded-md">
                  Required
                </span>
              </div>

              <p className="text-xs text-stone-600">
                To comply with North Carolina pet care standards and safeguard our clean 1-on-1 studio, a valid rabies certificate from your veterinarian is required for all clients.
              </p>

              {/* Upload Box */}
              {!uploadedFile ? (
                <div
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={handleDrop}
                  className="border-2 border-dashed border-sage-300 rounded-2xl p-6 sm:p-8 text-center hover:border-sage-500 hover:bg-sage-50/40 transition-colors bg-cream-50/40 relative"
                >
                  <Upload className="w-8 h-8 text-sage-600 mx-auto mb-2" />
                  <p className="text-xs sm:text-sm font-semibold text-stone-800 mb-1">
                    Click to browse or drag & drop your rabies certificate
                  </p>
                  <p className="text-[11px] text-stone-500 mb-4">
                    Accepts PDF, JPG, or PNG up to 10MB (phone photos are perfect!)
                  </p>

                  <input
                    type="file"
                    id="rabiesFile"
                    accept=".pdf,image/jpeg,image/png,image/webp"
                    onChange={handleFileChange}
                    className="absolute inset-0 opacity-0 cursor-pointer"
                    aria-label="Upload rabies certificate"
                  />

                  <span className="inline-block px-4 py-2 rounded-xl bg-white border border-cream-300 text-stone-700 text-xs font-semibold shadow-xs">
                    Select File from Device
                  </span>
                </div>
              ) : (
                <div className="bg-emerald-50 border border-emerald-300 rounded-2xl p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-emerald-100 text-emerald-800">
                      <FileText className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-stone-900">{uploadedFile.name}</p>
                      <p className="text-[10px] text-stone-500">{uploadedFile.size} • Verified Format</p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={removeFile}
                    className="p-1.5 rounded-full text-stone-500 hover:text-stone-800 hover:bg-emerald-100"
                    title="Remove file"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              )}

              {fileError && (
                <div className="flex items-center gap-2 text-xs text-rose-600 bg-rose-50 p-3 rounded-xl border border-rose-200">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{fileError}</span>
                </div>
              )}
            </div>

            {/* Form Submit Button */}
            <div className="pt-4 border-t border-cream-200">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-full bg-clay-500 hover:bg-clay-600 active:bg-clay-700 text-white font-bold text-base shadow-xl shadow-clay-500/20 transition-all flex items-center justify-center gap-2 disabled:opacity-75 cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    <span>Submitting Your Request...</span>
                  </>
                ) : (
                  <>
                    <Calendar className="w-5 h-5" />
                    <span>Send Grooming Request</span>
                  </>
                )}
              </button>

              <p className="text-[11px] text-stone-500 text-center mt-3">
                🔒 Your contact info is private and only used to confirm your dog's appointment with Tutku.
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
