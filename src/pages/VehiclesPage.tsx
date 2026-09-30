import React, { useState } from 'react';
import { PageId } from '../components/Navbar';
import { PageHero } from '../components/PageHero';
import { 
  CLIENT_VEHICLES, 
  VehicleItem, 
  PAGE_HERO_IMAGES,
  DYNAMIC_AUTO_INFO,
  createWhatsAppVehicleInquiry 
} from '../data/businessData';
import { 
  Filter, 
  MessageSquare, 
  X, 
  Maximize2, 
  ArrowRight,
  ShieldCheck 
} from 'lucide-react';

interface VehiclesPageProps {
  onNavigate: (page: PageId) => void;
}

export const VehiclesPage: React.FC<VehiclesPageProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeVehicle, setActiveVehicle] = useState<VehicleItem | null>(null);

  const categories = ['All', 'SUV', 'Sedan', 'Truck', 'Facility'];

  const filteredVehicles = selectedCategory === 'All'
    ? CLIENT_VEHICLES
    : CLIENT_VEHICLES.filter(v => v.category === selectedCategory);

  return (
    <div className="bg-[#F5F8FC]">
      
      {/* 1. VEHICLE IMAGE HEADER (300-400px with dark blue overlay) */}
      <PageHero
        title="VEHICLE INVENTORY &amp; GALLERY"
        subtitle="Explore our verified client vehicles and workshop service bays at Isolo, Lagos. Inquire directly on WhatsApp for viewing and availability."
        backgroundImage={PAGE_HERO_IMAGES.vehicles}
        currentPageName="Vehicles"
        onNavigate={onNavigate}
      />

      {/* 2. INVENTORY & FILTER BAR */}
      <section className="py-14 sm:py-18">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          
          {/* Header & Filter Controls */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b border-slate-200 gap-4">
            <div>
              <span className="text-xs font-bold text-[#0B3D91] uppercase tracking-wider">
                CURRENT INVENTORY
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#062B63] mt-1 font-heading">
                Client Vehicles &amp; Service Platforms
              </h2>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold text-slate-500 mr-1 flex items-center gap-1">
                <Filter className="w-3.5 h-3.5 text-[#0B3D91]" /> Filter:
              </span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded transition-colors cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-[#0B3D91] text-white shadow-xs'
                      : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {cat === 'All' ? 'All Vehicles' : `${cat}s`}
                </button>
              ))}
            </div>
          </div>

          {/* 3. VEHICLE CARDS GRID (3 DESKTOP, 2 TABLET, 1 MOBILE) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredVehicles.map((car) => (
              <div
                key={car.id}
                className="bg-white rounded-lg border border-slate-200 overflow-hidden shadow-xs hover:border-slate-300 transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Large vehicle image with subtle hover zoom (scale 1.03, 300ms) */}
                  <div
                    className="aspect-[4/3] bg-slate-100 overflow-hidden relative cursor-pointer"
                    onClick={() => setActiveVehicle(car)}
                  >
                    <img
                      src={car.image}
                      alt={car.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                    />
                    {car.tag && (
                      <span className="absolute top-2.5 left-2.5 bg-[#0B3D91] text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-xs">
                        {car.tag}
                      </span>
                    )}
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="bg-white/95 text-[#062B63] text-xs font-semibold px-3 py-1.5 rounded shadow-xs flex items-center gap-1.5">
                        <Maximize2 className="w-3.5 h-3.5" />
                        View Full Photo
                      </span>
                    </div>
                  </div>

                  {/* Information area */}
                  <div className="p-5 space-y-1.5">
                    <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wide block">
                      {car.category}
                    </span>
                    <h3 className="font-bold text-lg text-[#172033] leading-snug">
                      {car.title}
                    </h3>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="px-5 pb-5 pt-3 border-t border-slate-100 flex items-center justify-between gap-3">
                  <button
                    onClick={() => setActiveVehicle(car)}
                    className="text-xs font-semibold text-[#0B3D91] hover:text-[#062B63] cursor-pointer"
                  >
                    VIEW DETAILS
                  </button>

                  <a
                    href={createWhatsAppVehicleInquiry(car.title)}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3.5 py-1.5 text-xs font-semibold text-white bg-[#F97316] hover:bg-[#EA580C] rounded transition-colors inline-flex items-center gap-1.5 shadow-xs"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    Inquire
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. CTA WITH VEHICLE BACKGROUND */}
      <section className="relative py-16 sm:py-20 overflow-hidden flex items-center">
        <img
          src="/images/vehicles/vehicle-04.jpg"
          alt="Lexus RX 350 Luxury"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(90deg, rgba(6,43,99,0.92) 0%, rgba(6,43,99,0.80) 100%)'
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center text-white space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#F97316]">
            SPECIAL REQUESTS
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight font-heading">
            Looking for a Specific Model or Vehicle Inspection?
          </h2>
          <p className="text-xs sm:text-sm text-slate-200 max-w-md mx-auto leading-relaxed">
            Our automotive technicians perform pre-purchase diagnostic and physical inspections across Lagos.
          </p>
          <div className="pt-3 flex flex-wrap justify-center gap-3">
            <a
              href={`https://wa.me/${DYNAMIC_AUTO_INFO.whatsapp}?text=Hello%20Dynamic%20Auto,%20I%20am%20inquiring%20about%20vehicle%20inspection%20and%20sourcing.`}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 text-xs sm:text-sm font-bold text-white bg-[#F97316] hover:bg-[#EA580C] rounded-md transition-colors shadow-md inline-flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              INQUIRE ON WHATSAPP
            </a>
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3 text-xs sm:text-sm font-bold text-white border border-white/70 hover:bg-white hover:text-[#062B63] rounded-md transition-colors cursor-pointer"
            >
              CONTACT US
            </button>
          </div>
        </div>
      </section>

      {/* Lightbox / Vehicle Detail Modal */}
      {activeVehicle && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 backdrop-blur-xs"
          onClick={() => setActiveVehicle(null)}
        >
          <div
            className="bg-white rounded-lg max-w-3xl w-full overflow-hidden shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 border-b border-slate-100 flex items-center justify-between">
              <div>
                <span className="text-[11px] font-bold text-[#0B3D91] uppercase tracking-wide block">
                  {activeVehicle.category}
                </span>
                <h3 className="font-bold text-base text-[#062B63]">
                  {activeVehicle.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveVehicle(null)}
                className="p-1 rounded text-slate-400 hover:text-slate-700 hover:bg-slate-100 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* High-res Image display */}
            <div className="bg-slate-900 max-h-[65vh] flex items-center justify-center overflow-hidden">
              <img
                src={activeVehicle.image}
                alt={activeVehicle.title}
                className="max-h-[65vh] w-auto max-w-full object-contain"
              />
            </div>

            <div className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-[#F5F8FC]">
              <div className="text-xs text-slate-600">
                <span className="font-semibold text-slate-900 block">Dynamic Auto Verified</span>
                <span>Plot 12, Isolo Expressway Industrial Zone, Lagos</span>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={createWhatsAppVehicleInquiry(activeVehicle.title)}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 text-xs font-semibold text-white bg-[#F97316] hover:bg-[#EA580C] rounded transition-colors inline-flex items-center gap-1.5 shadow-xs"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  Inquire on WhatsApp
                </a>
                <button
                  onClick={() => setActiveVehicle(null)}
                  className="px-3 py-2 text-xs font-medium text-slate-600 bg-white border border-slate-200 rounded hover:bg-slate-50 cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
