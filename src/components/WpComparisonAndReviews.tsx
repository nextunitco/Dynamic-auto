import React, { useState } from 'react';
import { Check, X, Star, ShieldCheck, Quote, ChevronLeft, ChevronRight, Award } from 'lucide-react';
import { TYRE_BRANDS, CORPORATE_PARTNERS } from '../data/dynamicAutoData';

export const WpComparisonAndReviews: React.FC = () => {
  const [activeReviewIdx, setActiveReviewIdx] = useState(0);

  const reviews = [
    {
      name: 'Engr. Babatunde Alabi',
      vehicle: 'Toyota Prado V6',
      service: '4 Tyres Fitted & 3D Wheel Alignment',
      comment: 'Dynamic Auto is the best workshop on the mainland. Saved over 40% compared to dealer prices, and their Lifetime Mileage Guarantee is 100% genuine. The computerized alignment eliminated my highway steering vibrations.',
      rating: 5,
      date: 'Verified Lagos Motorist'
    },
    {
      name: 'Mrs. Ngozi Ezenwa',
      vehicle: 'Mercedes-Benz C300',
      service: 'Major Full Service & Brakes Renewal',
      comment: 'Transparent and professional service at Oyemat House, Isolo. They sent photo updates during the inspection and only fitted OEM-certified parts. Truly dealership quality without dealership inflation!',
      rating: 5,
      date: 'Corporate Fleet Manager'
    },
    {
      name: 'Kelechi Okafor',
      vehicle: 'Ford Explorer XLT',
      service: 'Ford Factory Protocol Diagnostics',
      comment: 'Other mechanics spent weeks guessing my transmission and sensor warning. Dynamic Auto’s specialized Ford protocol diagnostics pinpointed the faulty ABS sensor in 15 minutes. Exceptional technical expertise.',
      rating: 5,
      date: 'Verified Client'
    }
  ];

  const comparisonRows = [
    {
      feature: 'Tyre Lifetime Mileage Guarantee',
      dynamic: 'Yes — Legal life refund on defects',
      others: 'No / 30-day warranty only'
    },
    {
      feature: 'Replacement Parts Quality',
      dynamic: 'OEM Manufacturer-Equivalent Parts',
      others: 'Unverified aftermarket / salvage'
    },
    {
      feature: 'Computerized Wheel Alignment',
      dynamic: '3D High-Precision Optical Sensors',
      others: 'Manual eye estimation / string line'
    },
    {
      feature: 'Specialized Ford & Multi-Car Scanners',
      dynamic: 'Factory Protocol Electronic Tools',
      others: 'Generic cheap code readers'
    },
    {
      feature: 'Facility Infrastructure',
      dynamic: 'Dedicated Modern Facility at Oyemat House',
      others: 'Makeshift roadside mechanic bays'
    }
  ];

  const nextReview = () => {
    setActiveReviewIdx((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setActiveReviewIdx((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className="py-16 bg-white border-b border-[#dddddd] text-[#232323] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Infinite Brand Marquee Ticker (WordPress style) */}
        <div className="mb-16 border-y border-[#dddddd] py-4 overflow-hidden bg-[#fbfbfc]">
          <div className="text-center text-[11px] font-bold text-[#7a7a7a] uppercase tracking-widest mb-3">
            Authorized Tyre Distributors &amp; Fleet Partners
          </div>
          <div className="relative w-full overflow-hidden flex">
            <div className="animate-wp-marquee flex items-center gap-8 whitespace-nowrap">
              {[...TYRE_BRANDS, ...CORPORATE_PARTNERS].map((item, idx) => (
                <div 
                  key={idx} 
                  className="flex items-center gap-2 px-4 py-1.5 bg-white border border-[#dddddd] rounded-lg text-xs font-bold text-[#232323] shadow-xs shrink-0"
                >
                  <span className="w-2 h-2 rounded-full bg-[#4883ff]" />
                  <span>{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 2-Column WordPress Layout: Left Comparison Box, Right Reviews Carousel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Why Dynamic Auto vs Others (Classic Elementor Box) */}
          <div className="lg:col-span-7 space-y-5 text-left">
            <div>
              <span className="text-xs font-bold text-[#4883ff] uppercase tracking-wider block mb-1">
                The Dynamic Auto Difference
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-[#232323]">
                Why Lagos Drivers Choose Us Over Traditional Garages
              </h2>
              <p className="text-xs sm:text-sm text-[#7a7a7a] mt-1.5">
                We combine dealership-standard machinery and guarantees with neighborhood accessibility.
              </p>
            </div>

            {/* Comparison Table */}
            <div className="border border-[#dddddd] rounded-2xl overflow-hidden shadow-sm bg-white">
              <div className="grid grid-cols-12 bg-[#f4f4f4] border-b border-[#dddddd] p-3 text-xs font-bold text-[#232323]">
                <div className="col-span-6 sm:col-span-5">Standard Feature</div>
                <div className="col-span-6 sm:col-span-4 text-[#4883ff] flex items-center gap-1 font-extrabold">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Dynamic Auto</span>
                </div>
                <div className="hidden sm:block sm:col-span-3 text-[#7a7a7a]">Other Garages</div>
              </div>

              <div className="divide-y divide-[#dddddd]">
                {comparisonRows.map((row, idx) => (
                  <div key={idx} className="grid grid-cols-12 p-3.5 text-xs items-center hover:bg-[#edf3ff]/40 transition-colors">
                    <div className="col-span-6 sm:col-span-5 font-semibold text-[#232323]">
                      {row.feature}
                    </div>
                    <div className="col-span-6 sm:col-span-4 flex items-center gap-1.5 text-emerald-700 font-bold">
                      <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 text-emerald-600">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <span className="text-[11px] leading-tight">{row.dynamic}</span>
                    </div>
                    <div className="hidden sm:flex sm:col-span-3 items-center gap-1.5 text-neutral-400">
                      <div className="w-4 h-4 rounded-full bg-neutral-100 flex items-center justify-center shrink-0 text-neutral-400">
                        <X className="w-3 h-3" />
                      </div>
                      <span className="text-[11px]">{row.others}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: WordPress Testimonials Box with Interactive Slider */}
          <div className="lg:col-span-5 text-left">
            <div className="bg-[#f4f4f4] border border-[#dddddd] rounded-2xl p-6 sm:p-7 relative wp-card-hover shadow-sm">
              
              <div className="flex items-center justify-between border-b border-[#dddddd] pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <Quote className="w-5 h-5 text-[#4883ff]" />
                  <span className="text-xs font-bold text-[#232323] uppercase tracking-wider">
                    Customer Reviews
                  </span>
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={prevReview}
                    className="w-7 h-7 rounded-lg bg-white border border-[#dddddd] hover:border-[#4883ff] hover:text-[#4883ff] flex items-center justify-center transition-colors cursor-pointer"
                    aria-label="Previous review"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={nextReview}
                    className="w-7 h-7 rounded-lg bg-white border border-[#dddddd] hover:border-[#4883ff] hover:text-[#4883ff] flex items-center justify-center transition-colors cursor-pointer"
                    aria-label="Next review"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Review Card */}
              <div className="space-y-4">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(reviews[activeReviewIdx].rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                  <span className="text-xs font-bold text-[#232323] ml-1.5">5.0 / 5.0</span>
                </div>

                <p className="text-xs sm:text-sm text-[#4a4a4a] italic leading-relaxed min-h-[90px]">
                  "{reviews[activeReviewIdx].comment}"
                </p>

                <div className="pt-3 border-t border-[#dddddd] flex items-center justify-between">
                  <div>
                    <h4 className="font-display font-bold text-sm text-[#232323]">
                      {reviews[activeReviewIdx].name}
                    </h4>
                    <p className="text-[11px] text-[#4883ff] font-semibold">
                      {reviews[activeReviewIdx].vehicle} · {reviews[activeReviewIdx].service}
                    </p>
                  </div>
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded">
                    Verified
                  </span>
                </div>
              </div>

              {/* WordPress Review Indicators */}
              <div className="flex justify-center gap-1.5 mt-5">
                {reviews.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveReviewIdx(idx)}
                    className={`h-1.5 rounded-full transition-all cursor-pointer ${
                      activeReviewIdx === idx ? 'w-6 bg-[#4883ff]' : 'w-2 bg-[#dddddd]'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
