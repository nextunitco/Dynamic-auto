import React from 'react';
import { 
  ShieldCheck, 
  Disc, 
  Wrench, 
  ArrowRight, 
  Calendar, 
  CheckCircle2, 
  Tag, 
  Phone, 
  MapPin, 
  Clock,
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { Hero } from '../components/Hero';
import { WpComparisonAndReviews } from '../components/WpComparisonAndReviews';
import { SERVICES_CATALOG, PROMO_OFFERS, TYRE_BRANDS, DYNAMIC_AUTO_INFO, CORPORATE_PARTNERS } from '../data/dynamicAutoData';
import { useNavigation } from '../context/NavigationContext';

interface HomePageProps {
  onOpenBooking: (service?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenBooking }) => {
  const { navigateTo } = useNavigation();

  // Top 4 services to highlight on Home
  const featuredServices = SERVICES_CATALOG.slice(0, 4);
  // Top 2 seasonal offers
  const topOffers = PROMO_OFFERS.slice(0, 2);

  return (
    <div className="space-y-0 text-left">
      
      {/* 1. WordPress Elementor Hero with Animated Rotating Ticker & Dual-Tab Widget */}
      <Hero
        onOpenBooking={(service, phone, name) => onOpenBooking(service)}
        onExploreTyres={() => navigateTo('tyres')}
        onExploreServices={() => navigateTo('services')}
      />

      {/* 2. Short Company Introduction & Overview with Elementor Icon Boxes */}
      <section className="py-16 bg-white border-b border-[#dddddd]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#4883ff] bg-[#edf3ff] px-3 py-1 rounded-full">
                <Sparkles className="w-3.5 h-3.5" />
                <span>WELCOME TO DYNAMIC AUTO &amp; TYRE CENTRE</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-[#232323] tracking-tight">
                Lagos' Premier Dealership-Level Automotive Facility in Isolo
              </h2>
              
              <p className="text-sm text-[#4a4a4a] leading-relaxed">
                Dynamic Auto combines dealer-level vehicle servicing, computerized diagnostics, and MOT roadworthiness inspections with one of Nigeria’s widest selections of guaranteed tyres. 
              </p>
              
              <p className="text-xs sm:text-sm text-[#7a7a7a] leading-relaxed">
                Located at Oyemat House, Isolo, our trained technicians install manufacturer-equivalent parts for private cars, commercial vans, EV, and hybrid vehicles at transparent, affordable prices — <em>why pay inflated dealership prices?</em>
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => navigateTo('about')}
                  className="wp-btn-shine inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-[#4883ff] hover:bg-[#3470e8] transition-all shadow-md shadow-[#4883ff]/20 cursor-pointer"
                >
                  <span>Learn More About Dynamic Auto</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <a
                  href={`tel:${DYNAMIC_AUTO_INFO.phonePrimaryRaw}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#232323] hover:text-[#4883ff] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#4883ff]" />
                  <span>Call: {DYNAMIC_AUTO_INFO.phonePrimary}</span>
                </a>
              </div>
            </div>

            {/* Quick Overview Highlights (WordPress Icon Box Cards) */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-3.5 text-xs">
              <div className="p-4.5 bg-[#f4f4f4] rounded-2xl border border-[#dddddd] wp-card-hover group">
                <div className="w-10 h-10 rounded-xl bg-white border border-[#dddddd] group-hover:bg-[#4883ff] group-hover:text-white flex items-center justify-center text-[#4883ff] transition-colors mb-3 shadow-2xs">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-[#232323] text-sm">Lifetime Warranty</h4>
                <p className="text-[11px] text-[#7a7a7a] mt-1 leading-relaxed">
                  On all new passenger &amp; commercial tyres
                </p>
              </div>

              <div className="p-4.5 bg-[#f4f4f4] rounded-2xl border border-[#dddddd] wp-card-hover group">
                <div className="w-10 h-10 rounded-xl bg-white border border-[#dddddd] group-hover:bg-[#4883ff] group-hover:text-white flex items-center justify-center text-[#4883ff] transition-colors mb-3 shadow-2xs">
                  <Wrench className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-[#232323] text-sm">OEM Equivalent</h4>
                <p className="text-[11px] text-[#7a7a7a] mt-1 leading-relaxed">
                  Affordable dealership alternative parts
                </p>
              </div>

              <div className="p-4.5 bg-[#f4f4f4] rounded-2xl border border-[#dddddd] wp-card-hover group">
                <div className="w-10 h-10 rounded-xl bg-white border border-[#dddddd] group-hover:bg-[#4883ff] group-hover:text-white flex items-center justify-center text-[#4883ff] transition-colors mb-3 shadow-2xs">
                  <Clock className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-[#232323] text-sm">Mon – Sat Service</h4>
                <p className="text-[11px] text-[#7a7a7a] mt-1 leading-relaxed">
                  8:00 AM to 6:00 PM workshop hours
                </p>
              </div>

              <div className="p-4.5 bg-[#f4f4f4] rounded-2xl border border-[#dddddd] wp-card-hover group">
                <div className="w-10 h-10 rounded-xl bg-white border border-[#dddddd] group-hover:bg-[#4883ff] group-hover:text-white flex items-center justify-center text-[#4883ff] transition-colors mb-3 shadow-2xs">
                  <MapPin className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-[#232323] text-sm">Isolo Facility</h4>
                <p className="text-[11px] text-[#7a7a7a] mt-1 leading-relaxed">
                  Oyemat House, 45 Adenekan Rd
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Core Workshop Services Highlight (WordPress Elementor Style Grid) */}
      <section className="py-16 bg-[#f4f4f4] border-b border-[#dddddd]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-bold text-[#4883ff] uppercase tracking-wider block mb-1">
                Workshop Specialties
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-[#232323]">
                Professional Automotive Solutions
              </h2>
            </div>
            <button
              onClick={() => navigateTo('services')}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#4883ff] hover:underline cursor-pointer"
            >
              <span>View All 9 Services &amp; Schedules</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {featuredServices.map((svc) => (
              <div 
                key={svc.id}
                className="bg-white border border-[#dddddd] hover:border-[#4883ff] rounded-2xl p-5 flex flex-col justify-between transition-all group wp-card-hover shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-bold text-[#4883ff] uppercase bg-[#edf3ff] px-2.5 py-0.5 rounded-full">
                      {svc.category}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-[#4883ff] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  
                  <h3 className="text-base font-display font-bold text-[#232323] group-hover:text-[#4883ff] transition-colors mt-2">
                    {svc.title}
                  </h3>
                  
                  <p className="mt-2 text-xs text-[#7a7a7a] line-clamp-2 leading-relaxed">
                    {svc.shortDesc}
                  </p>
                </div>

                <div className="mt-5 pt-3.5 border-t border-[#dddddd] flex items-center justify-between">
                  <button
                    onClick={() => onOpenBooking(svc.title)}
                    className="text-xs font-bold text-[#4883ff] hover:underline cursor-pointer flex items-center gap-1"
                  >
                    <span>Book Service</span>
                    <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button
                    onClick={() => navigateTo('services')}
                    className="text-xs text-[#7a7a7a] hover:text-[#232323] inline-flex items-center gap-0.5 cursor-pointer font-medium"
                  >
                    <span>Details</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Tyres & Seasonal Offers Overview with Lifetime Guarantee */}
      <section className="py-16 bg-white border-b border-[#dddddd]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left: Tyres & Lifetime Guarantee Callout */}
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold text-[#4883ff] uppercase tracking-wider block">
                Tyres &amp; Fitting in Lagos
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-[#232323]">
                Save on Tyres with Lifetime Mileage Guarantee
              </h2>
              <p className="text-xs sm:text-sm text-[#7a7a7a] leading-relaxed">
                We supply and fit premium &amp; budget tyres from world-leading brands including Pirelli, Goodyear, Michelin, Continental, and Bridgestone. Every new tyre includes our legal-life defect guarantee.
              </p>

              {/* Brand Pills */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                {TYRE_BRANDS.slice(0, 5).map(b => (
                  <span 
                    key={b.name} 
                    className="px-3 py-1.5 text-xs font-bold bg-[#f4f4f4] hover:bg-[#edf3ff] hover:text-[#4883ff] border border-[#dddddd] hover:border-[#4883ff] rounded-xl text-[#232323] transition-colors"
                  >
                    {b.name}
                  </span>
                ))}
              </div>

              <div className="pt-2 flex items-center gap-3">
                <button
                  onClick={() => navigateTo('tyres')}
                  className="wp-btn-shine px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-[#4883ff] hover:bg-[#3470e8] transition-all cursor-pointer shadow-md shadow-[#4883ff]/20"
                >
                  Explore Tyre Brands &amp; Offers
                </button>
              </div>
            </div>

            {/* Right: Active Seasonal Promo Box */}
            <div className="lg:col-span-5 bg-[#f4f4f4] border border-[#dddddd] rounded-2xl p-6 space-y-3.5 wp-card-hover">
              <div className="flex items-center justify-between border-b border-[#dddddd] pb-2.5">
                <span className="text-xs font-bold text-[#232323] flex items-center gap-1.5">
                  <Tag className="w-4 h-4 text-[#4883ff]" />
                  <span>Latest Seasonal Offers</span>
                </span>
                <span className="text-[10px] text-[#4883ff] font-bold bg-white border border-[#4883ff]/30 px-2 py-0.5 rounded-full">
                  Code: DYNAMIC26
                </span>
              </div>

              {topOffers.map(offer => (
                <div key={offer.id} className="p-3.5 bg-white border border-[#dddddd] rounded-xl text-xs shadow-2xs hover:border-[#4883ff] transition-colors">
                  <div className="font-bold text-[#232323] flex items-center justify-between">
                    <span>{offer.title}</span>
                    <span className="text-[10px] text-[#4883ff] uppercase bg-[#edf3ff] px-1.5 py-0.5 rounded">
                      {offer.tag}
                    </span>
                  </div>
                  <div className="text-[#7a7a7a] text-[11px] mt-1 leading-relaxed">
                    {offer.description}
                  </div>
                </div>
              ))}

              <button
                onClick={() => navigateTo('tyres')}
                className="w-full text-center text-xs font-bold text-[#4883ff] hover:underline pt-1 cursor-pointer block"
              >
                View All Promotional Vouchers →
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* 6. WordPress Comparison Table & Interactive Reviews Carousel */}
      <WpComparisonAndReviews />

      {/* 7. Primary Action Prompt & Location Banner */}
      <section className="py-16 bg-[#f4f4f4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="bg-[#232323] text-white rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl relative overflow-hidden">
            
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#4883ff]/20 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10 space-y-2">
              <span className="text-[11px] font-bold text-[#4883ff] uppercase tracking-wider block">
                Have Vehicle Inquiries?
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
                Visit Our Workshop or Book Online Today
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 max-w-xl leading-relaxed">
                Oyemat House, 45 Alhaja Kudirat Adenekan Road, Isolo, Lagos. Fast bookings, priority fleet bays, and transparent customer service.
              </p>
            </div>

            <div className="relative z-10 flex flex-wrap items-center gap-3 shrink-0">
              <button
                onClick={() => onOpenBooking()}
                className="wp-btn-shine px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#4883ff] hover:bg-[#3470e8] transition-all shadow-lg shadow-[#4883ff]/30 cursor-pointer active:scale-98"
              >
                Book Appointment
              </button>
              <button
                onClick={() => navigateTo('contact')}
                className="px-5 py-3 rounded-xl text-xs sm:text-sm font-bold text-neutral-200 bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 transition-all cursor-pointer active:scale-98"
              >
                Contact &amp; Map
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
