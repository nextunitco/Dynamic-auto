import React, { useState } from 'react';
import { PageId } from '../components/Navbar';
import { 
  DYNAMIC_AUTO_INFO, 
  REAL_IMAGES, 
  SERVICES_LIST, 
  TYRES_CATALOG, 
  TESTIMONIALS, 
  formatNgn 
} from '../data/businessData';
import { 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Wrench, 
  Gauge, 
  Compass, 
  Phone, 
  MessageSquare, 
  Sparkles, 
  Clock, 
  ChevronRight,
  MapPin,
  Star
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenBookingModal: (serviceId?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenBookingModal,
}) => {
  const [quickRim, setQuickRim] = useState<number>(17);

  const featuredTyres = TYRES_CATALOG.filter(t => t.rim === quickRim).slice(0, 3);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative pt-6 pb-14 border-b border-zinc-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-orange-600 bg-orange-50 px-3 py-1 rounded-full border border-orange-200/60">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
                Plot 12, Isolo Expressway · Lagos, Nigeria
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-900 tracking-tight leading-[1.15]">
                Professional Auto Care &amp; Genuine Tyres Built for Lagos Roads.
              </h1>

              <p className="text-base text-zinc-600 leading-relaxed max-w-xl">
                Dealer-grade computer diagnostics, computerized 3D laser wheel alignment, and brand new certified tyres. Zero guesswork, zero counterfeit parts.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => onNavigate('booking')}
                  className="px-5 py-3 text-sm font-semibold text-white bg-orange-500 hover:bg-orange-600 rounded-md transition-colors shadow-xs inline-flex items-center gap-2 cursor-pointer"
                >
                  <Wrench className="w-4 h-4" />
                  Estimate &amp; Book Service
                </button>
                <button
                  onClick={() => onNavigate('tyres')}
                  className="px-5 py-3 text-sm font-semibold text-zinc-800 bg-zinc-100 hover:bg-zinc-200 rounded-md transition-colors inline-flex items-center gap-2 cursor-pointer"
                >
                  Browse Genuine Tyres
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="pt-4 border-t border-zinc-100 grid grid-cols-3 gap-3 text-xs text-zinc-600">
                <div className="flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>100% Genuine Tyres &amp; Lubricants</span>
                </div>
                <div className="flex items-start gap-2">
                  <Compass className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                  <span>3D Laser Optical Alignment</span>
                </div>
                <div className="flex items-start gap-2">
                  <Clock className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>Same-Day Fast Turnaround</span>
                </div>
              </div>
            </div>

            {/* Right Hero Image Card featuring Real Workshop Photo */}
            <div className="lg:col-span-6">
              <div className="relative rounded-xl overflow-hidden border border-zinc-200 shadow-sm bg-zinc-100">
                <img
                  src={REAL_IMAGES.workshopBay}
                  alt="Dynamic Auto & Tyre Centre Workshop Bay in Isolo Lagos"
                  className="w-full h-80 sm:h-96 object-cover"
                />
                
                {/* Floating workshop caption */}
                <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-xs rounded-lg p-3 border border-zinc-200 shadow-xs flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-zinc-900">
                      Dynamic Auto Main Workshop Floor
                    </p>
                    <p className="text-[11px] text-zinc-500">
                      Active diagnostic bays, hydraulic lifts &amp; computerized test equipment
                    </p>
                  </div>
                  <button
                    onClick={() => onNavigate('workshop')}
                    className="text-xs font-semibold text-orange-600 hover:text-orange-700 flex items-center gap-1 shrink-0"
                  >
                    View Facility <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Real Photos & Facility Showcase */}
      <section className="py-14 bg-zinc-50 border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-bold text-orange-600 tracking-wider uppercase">
                Authentic Facility &amp; Certified Technicians
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 mt-1">
                See Inside Our Isolo Workshop
              </h2>
              <p className="text-sm text-zinc-600 mt-1 max-w-xl">
                Real photos from our operational service center. Equipped with high-precision European equipment for clean, damage-free repairs.
              </p>
            </div>
            <button
              onClick={() => onNavigate('workshop')}
              className="text-xs font-semibold text-orange-600 hover:text-orange-700 inline-flex items-center gap-1 self-start sm:self-auto cursor-pointer"
            >
              Explore Equipment Specs <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Real Photo 1: Workshop Bay */}
            <div className="bg-white rounded-lg border border-zinc-200 overflow-hidden shadow-xs group">
              <div className="relative h-64 overflow-hidden bg-zinc-100">
                <img
                  src={REAL_IMAGES.workshopBay}
                  alt="Dynamic Auto Diagnostic and Mechanical Service Bay"
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                />
                <span className="absolute top-3 left-3 bg-zinc-900/80 text-white text-[11px] font-medium px-2.5 py-1 rounded">
                  Facility Bay 1 · Diagnostics &amp; Alignment
                </span>
              </div>
              <div className="p-4 space-y-2">
                <h3 className="font-bold text-zinc-900 text-base">
                  Hydraulic Vehicle Lifts &amp; Laser Alignment Bay
                </h3>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  Clean, well-illuminated bays allow detailed undercarriage inspections for shock absorbers, control arm bushings, steering tie-rods, and exhaust systems.
                </p>
                <div className="pt-2 flex items-center justify-between text-xs text-zinc-500 border-t border-zinc-100">
                  <span>Hunter-spec optical targets</span>
                  <button
                    onClick={() => onOpenBookingModal('wheel-alignment')}
                    className="text-orange-600 font-semibold hover:underline"
                  >
                    Book Alignment
                  </button>
                </div>
              </div>
            </div>

            {/* Real Photo 2: Mechanics & Tyre Station */}
            <div className="bg-white rounded-lg border border-zinc-200 overflow-hidden shadow-xs group">
              <div className="relative h-64 overflow-hidden bg-zinc-100">
                <img
                  src={REAL_IMAGES.mechanicsTeam}
                  alt="Specialist Technicians with Touchless Tyre Changer"
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                />
                <span className="absolute top-3 left-3 bg-zinc-900/80 text-white text-[11px] font-medium px-2.5 py-1 rounded">
                  Facility Bay 2 · Touchless Wheel Mounting
                </span>
              </div>
              <div className="p-4 space-y-2">
                <h3 className="font-bold text-zinc-900 text-base">
                  Certified Tyre Mounting &amp; Dynamic Balancing
                </h3>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  Our trained technicians use automatic leverless tyre changers to protect sensitive alloy rims from gouges, combined with pure dry nitrogen gas inflation.
                </p>
                <div className="pt-2 flex items-center justify-between text-xs text-zinc-500 border-t border-zinc-100">
                  <span>Touchless mounting · Rim-safe</span>
                  <button
                    onClick={() => onNavigate('tyres')}
                    className="text-orange-600 font-semibold hover:underline"
                  >
                    Browse Tyres
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-14 border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-bold text-orange-600 tracking-wider uppercase">
                Specialized Services
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 mt-1">
                Precision Auto Maintenance
              </h2>
              <p className="text-sm text-zinc-600 mt-1 max-w-xl">
                Clear upfront pricing in Nigerian Naira, transparent turnaround times, and verified OEM parts.
              </p>
            </div>
            <button
              onClick={() => onNavigate('services')}
              className="text-xs font-semibold text-orange-600 hover:text-orange-700 inline-flex items-center gap-1 cursor-pointer"
            >
              View All Services &amp; Packages <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES_LIST.slice(0, 6).map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-lg border border-zinc-200 p-5 hover:border-zinc-300 hover:shadow-xs transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">
                      {service.category}
                    </span>
                    <span className="text-xs font-medium text-zinc-500 flex items-center gap-1">
                      <Clock className="w-3 h-3 text-zinc-400" />
                      {service.estimatedDuration}
                    </span>
                  </div>

                  <h3 className="font-bold text-zinc-900 text-base">
                    {service.name}
                  </h3>

                  <p className="text-xs text-zinc-600 line-clamp-2">
                    {service.summary}
                  </p>

                  <ul className="space-y-1.5 pt-1 text-xs text-zinc-600">
                    {service.features.slice(0, 2).map((feat, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 mt-4 border-t border-zinc-100 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-zinc-400 uppercase block">Starting from</span>
                    <span className="text-sm font-bold text-zinc-900">
                      {formatNgn(service.estimatedPriceNgn)}
                    </span>
                  </div>
                  <button
                    onClick={() => onOpenBookingModal(service.id)}
                    className="px-3 py-1.5 text-xs font-semibold text-orange-600 hover:text-white hover:bg-orange-600 border border-orange-300 hover:border-orange-600 rounded transition-colors cursor-pointer"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tyre Quick Finder Strip */}
      <section className="py-12 bg-zinc-50 border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-xl border border-zinc-200 p-6 sm:p-8 shadow-xs">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-6">
              <div>
                <span className="text-xs font-bold text-orange-600 tracking-wider uppercase">
                  Tyre Sizing &amp; Fitting
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 mt-1">
                  Find Tyres for Your Rim Size
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 mt-1">
                  Complimentary touchless fitting, high-speed balancing, and fresh DOT dates on all models.
                </p>
              </div>

              {/* Rim diameter selector tabs */}
              <div className="flex items-center gap-1.5 bg-zinc-100 p-1 rounded-lg">
                {[15, 16, 17, 18].map((rim) => (
                  <button
                    key={rim}
                    onClick={() => setQuickRim(rim)}
                    className={`px-3 py-1.5 text-xs font-bold rounded-md transition-colors cursor-pointer ${
                      quickRim === rim
                        ? 'bg-white text-zinc-900 shadow-xs'
                        : 'text-zinc-600 hover:text-zinc-900'
                    }`}
                  >
                    R{rim}&quot;
                  </button>
                ))}
              </div>
            </div>

            {/* Featured tyres for this rim */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {featuredTyres.map((tyre) => (
                <div
                  key={tyre.id}
                  className="bg-zinc-50 rounded-lg p-4 border border-zinc-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="font-bold text-zinc-900">{tyre.brand}</span>
                      <span className="text-zinc-500 font-mono text-[11px]">{tyre.type}</span>
                    </div>
                    <div className="text-sm font-extrabold text-orange-600 mb-1">
                      {tyre.size}
                    </div>
                    <div className="text-xs text-zinc-600 mb-2 font-medium">
                      {tyre.model}
                    </div>
                    <span className="text-[11px] text-zinc-500 block">
                      {tyre.warranty} · In Stock
                    </span>
                  </div>

                  <div className="pt-3 mt-3 border-t border-zinc-200 flex items-center justify-between">
                    <span className="text-xs font-bold text-zinc-900">
                      {formatNgn(tyre.priceNgn)} <span className="text-[10px] text-zinc-400 font-normal">/ tyre</span>
                    </span>
                    <button
                      onClick={() => onNavigate('tyres')}
                      className="text-xs text-orange-600 hover:text-orange-700 font-semibold flex items-center gap-0.5"
                    >
                      Details <ChevronRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-zinc-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <span className="text-zinc-500">
                Need specialized run-flats or commercial sizes? We have over 20+ sizes in stock.
              </span>
              <button
                onClick={() => onNavigate('tyres')}
                className="text-orange-600 hover:text-orange-700 font-bold inline-flex items-center gap-1 self-start sm:self-auto cursor-pointer"
              >
                Go to Full Tyre Showroom <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials & Road Conditions */}
      <section className="py-14 border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold text-orange-600 tracking-wider uppercase">
              Customer Feedback
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 mt-1">
              Trusted by Lagos Drivers
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600 mt-2">
              From daily commuters to luxury car owners, here is what our customers say about our workshop transparency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg border border-zinc-200 p-6 flex flex-col justify-between shadow-xs"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 stroke-none" />
                    ))}
                  </div>
                  <p className="text-xs text-zinc-700 leading-relaxed italic">
                    &quot;{t.quote}&quot;
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-zinc-100">
                  <p className="text-xs font-bold text-zinc-900">{t.author}</p>
                  <p className="text-[11px] text-zinc-500">{t.vehicle} · {t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Booking Callout */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="bg-zinc-900 text-white rounded-xl p-8 sm:p-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <span className="text-xs font-bold text-orange-400 uppercase tracking-wider">
                Fast Bay Reservation
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
                Ready to Experience Precise Auto Service?
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300">
                Calculate an exact service cost estimate or send your vehicle specs to our workshop engineers on WhatsApp.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                onClick={() => onNavigate('booking')}
                className="px-5 py-3 text-xs font-semibold text-zinc-900 bg-white hover:bg-zinc-100 rounded-md transition-colors cursor-pointer"
              >
                Use Cost Estimator
              </button>
              <a
                href={`https://wa.me/${DYNAMIC_AUTO_INFO.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-3 text-xs font-semibold text-white bg-orange-600 hover:bg-orange-500 rounded-md transition-colors inline-flex items-center gap-2"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                WhatsApp Workshop
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
