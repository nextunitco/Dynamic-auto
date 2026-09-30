import React from 'react';
import { PageId } from './Navbar';
import { ChevronRight } from 'lucide-react';

interface PageHeroProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  currentPageName: string;
  onNavigate?: (page: PageId) => void;
}

export const PageHero: React.FC<PageHeroProps> = ({
  title,
  subtitle,
  backgroundImage,
  currentPageName,
  onNavigate,
}) => {
  return (
    <div className="relative h-[240px] sm:h-[320px] lg:h-[360px] overflow-hidden flex items-center">
      {/* Background Image with cover and center positioning */}
      <img
        src={backgroundImage}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Dark blue / black gradient overlay for high legibility */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(90deg, rgba(6,43,99,0.92) 0%, rgba(6,43,99,0.75) 55%, rgba(0,0,0,0.50) 100%)'
        }}
      />

      {/* Hero Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 w-full text-white pt-12 sm:pt-16">
        {/* Subtle breadcrumb */}
        <div className="flex items-center gap-1.5 text-xs text-slate-300 mb-3">
          {onNavigate ? (
            <button
              onClick={() => onNavigate('home')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Home
            </button>
          ) : (
            <span>Home</span>
          )}
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-[#F97316] font-medium">{currentPageName}</span>
        </div>

        {/* Title */}
        <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight font-heading max-w-2xl leading-tight">
          {title}
        </h1>

        {/* Subtitle */}
        <p className="text-xs sm:text-sm text-slate-200 mt-2 max-w-xl leading-relaxed">
          {subtitle}
        </p>
      </div>
    </div>
  );
};
