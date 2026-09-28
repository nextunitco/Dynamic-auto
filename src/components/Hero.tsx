import React, { useState, useEffect } from 'react';
import { 
  Calendar, 
  Phone, 
  CheckCircle2, 
  ArrowRight,
  Disc,
  Wrench,
  Star,
  Sparkles,
  ShieldCheck,
  MapPin
} from 'lucide-react';
import { DYNAMIC_AUTO_INFO } from '../data/dynamicAutoData';

interface HeroProps {
  onOpenBooking: (prefillService?: string, prefillPhone?: string, prefillName?: string) => void;
  onExploreTyres: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onExploreTyres, onExploreServices }) => {
  // Animated rotating ticker text for WordPress hero
  const rotatingWords = [
    'Brand New Tyres',
    'Full Car Servicing',
    'MOT Roadworthiness',
    '3D Wheel Alignment',
    'Specialized Ford Diagnostics'
  ];
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="relative bg-[#181c24] text-white pt-16 pb-24 lg:pt-20 lg:pb-32 border-b border-[#2a3040] overflow-hidden">
      
      {/* Background Lighting & Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none automotive-dark-grid opacity-30" />
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[650px] h-[350px] bg-[#4883ff]/15 rounded-full blur-[140px] pointer-events-none animate-wp-pulse-glow" />

      {/* Floating Guarantee Badge (Upper Right) */}
      <div className="hidden xl:flex absolute top-10 right-12 z-10 items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2.5 rounded-2xl animate-wp-float-slow shadow-xl">
        <div className="w-10 h-10 rounded-xl bg-[#4883ff] text-white flex items-center justify-center font-bold">
          <ShieldCheck className="w-5 h-5" />
        </div>
        <div className="text-left">
          <div className="flex items-center gap-1 text-amber-400 text-xs">
            <Star className="w-3.5 h-3.5 fill-current" />
            <Star className="w-3.5 h-3.5 fill-current" />
            <Star className="w-3.5 h-3.5 fill-current" />
            <Star className="w-3.5 h-3.5 fill-current" />
            <Star className="w-3.5 h-3.5 fill-current" />
            <span className="text-white text-[11px] font-bold ml-1">4.9/5</span>
          </div>
          <p className="text-[11px] text-neutral-200 font-semibold">
            Guaranteed Tyres in Lagos
          </p>
        </div>
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 w-full z-10 text-center">
        
        {/* Animated Pill Badge */}
        <div className="inline-flex items-center gap-2 text-xs font-bold text-white bg-[#4883ff] px-4 py-1.5 rounded-full shadow-md shadow-[#4883ff]/30 animate-wp-pulse-glow mb-6">
          <Sparkles className="w-3.5 h-3.5 animate-spin text-white" style={{ animationDuration: '6s' }} />
          <span>DYNAMIC AUTO &amp; TYRE CENTRE · OYEMAT HOUSE, ISOLO</span>
        </div>

        {/* Main Headline with Animated Rotating Specialty */}
        <div className="space-y-4 max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight leading-tight">
            What are you{' '}
            <span className="text-[#4883ff] underline decoration-[#4883ff]/40 underline-offset-8">
              looking for?
            </span>
            <span className="block mt-3 text-2xl sm:text-4xl lg:text-5xl text-neutral-200 font-medium">
              We specialize in{' '}
              <span className="text-[#4883ff] font-bold transition-all duration-300 inline-block border-b-3 border-[#4883ff]">
                {rotatingWords[wordIndex]}
              </span>
            </span>
          </h1>
          
          <p className="text-sm sm:text-base lg:text-lg text-neutral-300 font-normal max-w-2xl mx-auto leading-relaxed pt-2">
            Save on tyres with Dynamicauto.com.ng new offers. Unrivalled tyre choice with lifetime mileage guarantees, official MOT roadworthiness tests, and dealership-grade servicing in Lagos.
          </p>
        </div>

        {/* Proof Points Strip */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 pt-6 text-xs text-neutral-200 font-medium">
          <span className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1.5 rounded-xl">
            <CheckCircle2 className="w-4 h-4 text-[#4883ff]" />
            <span>Lifetime Mileage Guarantee</span>
          </span>
          <span className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1.5 rounded-xl">
            <CheckCircle2 className="w-4 h-4 text-[#4883ff]" />
            <span>OEM-Certified Parts</span>
          </span>
          <span className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1.5 rounded-xl">
            <CheckCircle2 className="w-4 h-4 text-[#4883ff]" />
            <span>Specialized Ford Diagnostics</span>
          </span>
          <span className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1.5 rounded-xl">
            <MapPin className="w-4 h-4 text-[#4883ff]" />
            <span>Oyemat House, Isolo</span>
          </span>
        </div>

        {/* Primary Call to Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 pt-8">
          <button
            onClick={() => onOpenBooking()}
            className="wp-btn-shine px-7 py-3.5 rounded-xl text-sm font-bold bg-[#4883ff] hover:bg-[#3470e8] text-white transition-all flex items-center gap-2.5 shadow-xl shadow-[#4883ff]/30 cursor-pointer active:scale-98"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Service Appointment</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          
          <button
            onClick={onExploreTyres}
            className="px-6 py-3.5 rounded-xl text-sm font-semibold bg-white/10 hover:bg-white/15 text-white border border-white/20 transition-all flex items-center gap-2 cursor-pointer active:scale-98"
          >
            <Disc className="w-4 h-4 text-[#4883ff]" />
            <span>Browse Tyre Brands</span>
          </button>

          <button
            onClick={onExploreServices}
            className="px-6 py-3.5 rounded-xl text-sm font-semibold bg-white/10 hover:bg-white/15 text-white border border-white/20 transition-all flex items-center gap-2 cursor-pointer active:scale-98"
          >
            <Wrench className="w-4 h-4 text-[#4883ff]" />
            <span>Explore All Services</span>
          </button>
        </div>

        {/* Workshop Contact Hotline Strip */}
        <div className="pt-8 text-xs text-neutral-400 flex items-center justify-center gap-2">
          <span>Workshop Hotline:</span>
          <a 
            href={`tel:${DYNAMIC_AUTO_INFO.phonePrimaryRaw}`}
            className="text-white hover:text-[#4883ff] font-bold flex items-center gap-1 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#4883ff]" />
            <span>{DYNAMIC_AUTO_INFO.phonePrimary}</span>
          </a>
          <span className="text-neutral-600">|</span>
          <span className="text-neutral-400">Mon – Sat: 8:00 AM – 6:00 PM</span>
        </div>

      </div>

      {/* Classic Elementor Wave / Curve Shape Divider */}
      <div className="wp-shape-divider">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#ffffff" />
        </svg>
      </div>

    </section>
  );
};
