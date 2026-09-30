import React, { useState, useEffect, useRef } from 'react';
import { PageId } from './Navbar';
import { HERO_SLIDES } from '../data/businessData';
import { ArrowRight, ChevronLeft, ChevronRight, Phone } from 'lucide-react';

interface HeroSlideshowProps {
  onNavigate: (page: PageId) => void;
}

export const HeroSlideshow: React.FC<HeroSlideshowProps> = ({ onNavigate }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const goToSlide = (idx: number) => {
    setCurrentSlide(idx);
    startTimer();
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
    startTimer();
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    startTimer();
  };

  return (
    <div className="relative w-full h-[620px] sm:h-[680px] lg:h-[750px] overflow-hidden bg-[#062B63]">
      
      {/* Background Slides with Slow Crossfade */}
      {HERO_SLIDES.map((slide, idx) => {
        const isActive = idx === currentSlide;
        return (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover object-center scale-100 transition-transform duration-1000"
            />
          </div>
        );
      })}

      {/* Cinematic Automotive Blue Gradient Overlay (Keeps vehicles visible, text 100% legible) */}
      <div 
        className="absolute inset-0 z-20 pointer-events-none"
        style={{
          background: 'linear-gradient(90deg, rgba(6,43,99,0.88) 0%, rgba(6,43,99,0.55) 55%, rgba(0,0,0,0.30) 100%)'
        }}
      />

      {/* Bottom gradient ground shadow */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/60 to-transparent z-20 pointer-events-none" />

      {/* Hero Content (Left-aligned on desktop, vertically centered) */}
      <div className="relative z-30 max-w-6xl mx-auto px-4 sm:px-6 h-full flex flex-col justify-center pt-16 sm:pt-20">
        <div className="max-w-xl text-white space-y-4 sm:space-y-5">
          
          {/* Small Label */}
          <div className="inline-flex items-center gap-2">
            <span className="text-xs font-bold tracking-widest text-[#F97316] uppercase bg-black/40 px-3 py-1 rounded backdrop-blur-xs border border-white/10">
              DYNAMIC AUTO · LAGOS
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-heading leading-[1.1] text-white drop-shadow-sm">
            DRIVE WITH CONFIDENCE.
          </h1>

          {/* Supporting Text from Existing Company Information */}
          <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-lg drop-shadow-xs">
            Dealer-grade computer diagnostics, computerized 3D laser wheel alignment, genuine tyres, and quality inspected vehicles. Professional automotive service located along Isolo Expressway, Lagos.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={() => onNavigate('services')}
              className="px-6 py-3 text-xs sm:text-sm font-bold text-white bg-[#F97316] hover:bg-[#EA580C] rounded-md transition-colors shadow-md flex items-center gap-2 cursor-pointer"
            >
              EXPLORE SERVICES
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3 text-xs sm:text-sm font-bold text-white border border-white/80 hover:bg-white hover:text-[#062B63] rounded-md transition-colors backdrop-blur-xs flex items-center gap-2 cursor-pointer"
            >
              CONTACT US
            </button>
          </div>

          {/* Live Slide Vehicle Label */}
          <div className="pt-4 text-xs text-slate-300 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#F97316]" />
            <span className="font-semibold text-white">
              {HERO_SLIDES[currentSlide].title}
            </span>
            <span className="text-slate-400">·</span>
            <span className="text-slate-300">
              {HERO_SLIDES[currentSlide].caption}
            </span>
          </div>

        </div>
      </div>

      {/* Subtle Slide Indicators & Prev/Next Controls near bottom */}
      <div className="absolute bottom-6 left-0 right-0 z-30 max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        
        {/* Dot Indicators */}
        <div className="flex items-center gap-2">
          {HERO_SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`transition-all duration-300 rounded-full cursor-pointer ${
                idx === currentSlide
                  ? 'w-8 h-2 bg-[#F97316]'
                  : 'w-2 h-2 bg-white/50 hover:bg-white'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Prev / Next arrows */}
        <div className="flex items-center gap-2 text-white">
          <button
            onClick={prevSlide}
            className="p-2 rounded-full bg-black/40 hover:bg-black/70 border border-white/20 transition-colors cursor-pointer"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={nextSlide}
            className="p-2 rounded-full bg-black/40 hover:bg-black/70 border border-white/20 transition-colors cursor-pointer"
            aria-label="Next slide"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>

    </div>
  );
};
