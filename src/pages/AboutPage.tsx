import React from 'react';
import { PageId } from '../components/Navbar';
import { PageHero } from '../components/PageHero';
import { 
  DYNAMIC_AUTO_INFO, 
  WHY_CHOOSE_US, 
  PAGE_HERO_IMAGES 
} from '../data/businessData';
import { 
  CheckCircle2, 
  Wrench, 
  ShieldCheck, 
  Clock, 
  ArrowRight,
  MessageSquare,
  MapPin,
  Cpu
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-[#F5F8FC]">
      
      {/* 1. VEHICLE IMAGE HEADER (300-400px with dark blue overlay) */}
      <PageHero
        title="ABOUT DYNAMIC AUTO"
        subtitle="Professional automotive maintenance, computer diagnostics, 3D laser alignment, and quality vehicles in Isolo, Lagos."
        backgroundImage={PAGE_HERO_IMAGES.about}
        currentPageName="About Us"
        onNavigate={onNavigate}
      />

      {/* 2. ABOUT DYNAMIC AUTO (TEXT + LARGE VEHICLE IMAGE) */}
      <section className="py-14 sm:py-18 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Text */}
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-bold text-[#0B3D91] uppercase tracking-wider">
                WHO WE ARE
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#062B63] font-heading">
                Dedicated to Automotive Excellence in Lagos
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Dynamic Auto is an established automotive service facility and vehicle center situated on Plot 12, Isolo Expressway Industrial Zone, Lagos, Nigeria.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                We bridge the gap between expensive dealership franchises and roadside trial-and-error by providing European-standard computerized diagnostic scanning, laser alignment racks, and genuine factory-sourced tyres at honest Nigerian market rates.
              </p>

              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
                <div className="flex items-start gap-2 bg-[#F5F8FC] p-3 rounded border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#0B3D91] shrink-0 mt-0.5" />
                  <span><strong>Zero Fake Parts:</strong> Only API-certified oils and verifiable parts.</span>
                </div>
                <div className="flex items-start gap-2 bg-[#F5F8FC] p-3 rounded border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#0B3D91] shrink-0 mt-0.5" />
                  <span><strong>Upfront Estimates:</strong> Itemized written bills before any repair.</span>
                </div>
              </div>
            </div>

            {/* Right Large Vehicle Image */}
            <div className="lg:col-span-6">
              <div className="rounded-lg overflow-hidden border border-slate-200 shadow-xs relative bg-slate-100">
                <img
                  src="/images/vehicles/vehicle-03.jpg"
                  alt="Toyota Prado TXL Vehicle Inspected at Dynamic Auto"
                  className="w-full h-80 sm:h-96 object-cover hover:scale-102 transition-transform duration-500"
                />
                <div className="p-3 bg-white border-t border-slate-200 text-xs flex items-center justify-between">
                  <span className="font-bold text-[#062B63]">Client Vehicle Platform Inspection</span>
                  <span className="text-slate-500">Isolo Workshop Bay</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. IMAGE + KEY INFORMATION (FACILITY & WORKSHOP TOUR) */}
      <section className="py-14 sm:py-18">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Large Vehicle / Workshop Image */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="rounded-lg overflow-hidden border border-slate-200 shadow-xs relative bg-slate-100">
                <img
                  src="/images/vehicles/vehicle-02.jpg"
                  alt="Technicians operating automatic tyre changer"
                  className="w-full h-80 sm:h-96 object-cover hover:scale-102 transition-transform duration-500"
                />
                <div className="p-3 bg-white border-t border-slate-200 text-xs flex items-center justify-between">
                  <span className="font-bold text-[#062B63]">Touchless Tyre Mounting Equipment</span>
                  <span className="text-emerald-700 font-semibold">100% Rim-Safe</span>
                </div>
              </div>
            </div>

            {/* Right Information */}
            <div className="lg:col-span-6 order-1 lg:order-2 space-y-4">
              <span className="text-xs font-bold text-[#0B3D91] uppercase tracking-wider">
                OUR WORKSHOP STANDARD
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#062B63] font-heading">
                Equipped for Modern Vehicles
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Modern SUVs and sedans are complex electronic systems on wheels. Our Isolo workshop is outfitted with bi-directional OBD diagnostic computers, calibrated torque wrenches, hydraulic lifts, and computerized 3D laser alignment sensors.
              </p>

              <div className="space-y-3 pt-2 text-xs text-slate-700">
                <div className="p-3.5 rounded bg-white border border-slate-200">
                  <span className="font-bold text-[#062B63] block text-sm">Computerized 3D Laser Alignment</span>
                  <span className="text-slate-600">Corrects steering pull and ensures straight highway tracking on Nigerian highways.</span>
                </div>
                <div className="p-3.5 rounded bg-white border border-slate-200">
                  <span className="font-bold text-[#062B63] block text-sm">Pneumatic Touchless Tyre Changer</span>
                  <span className="text-slate-600">Mounts alloy wheels and run-flats without metal levers scratching polished rims.</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE DYNAMIC AUTO */}
      <section className="py-14 sm:py-18 bg-white border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-bold text-[#0B3D91] uppercase tracking-wider">
              OUR PROMISE
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#062B63] mt-1 font-heading">
              Why Choose Dynamic Auto
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Core commitments that guide every vehicle service and customer interaction.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_CHOOSE_US.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#F5F8FC] rounded-lg border border-slate-200 p-6 space-y-2 shadow-xs"
              >
                <div className="w-8 h-8 rounded bg-white text-[#0B3D91] border border-slate-200 flex items-center justify-center font-bold text-xs shadow-xs">
                  0{idx + 1}
                </div>
                <h3 className="font-bold text-base text-[#172033]">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA WITH AUTOMOTIVE BACKGROUND IMAGE */}
      <section className="relative py-16 sm:py-20 overflow-hidden flex items-center">
        <img
          src="/images/vehicles/vehicle-13.jpg"
          alt="Toyota Land Cruiser V8"
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
            VISIT OUR ISOLO WORKSHOP
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight font-heading">
            Experience Quality Automotive Service
          </h2>
          <p className="text-xs sm:text-sm text-slate-200 max-w-md mx-auto leading-relaxed">
            Conveniently located along Plot 12, Isolo Expressway. Open Monday to Saturday from 8:00 AM.
          </p>
          <div className="pt-3 flex flex-wrap justify-center gap-3">
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3 text-xs sm:text-sm font-bold text-white bg-[#F97316] hover:bg-[#EA580C] rounded-md transition-colors shadow-md cursor-pointer"
            >
              CONTACT US
            </button>
            <button
              onClick={() => onNavigate('services')}
              className="px-6 py-3 text-xs sm:text-sm font-bold text-white border border-white/70 hover:bg-white hover:text-[#062B63] rounded-md transition-colors cursor-pointer"
            >
              VIEW SERVICES
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
