import React from 'react';
import { 
  ShieldCheck, 
  Wrench, 
  CheckCircle2, 
  MapPin, 
  Clock, 
  Building2, 
  Award, 
  Phone, 
  ArrowRight,
  Cpu,
  Home,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { DYNAMIC_AUTO_INFO, CORPORATE_PARTNERS } from '../data/dynamicAutoData';
import { useNavigation } from '../context/NavigationContext';

interface AboutPageProps {
  onOpenBooking: (service?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenBooking }) => {
  const { navigateTo } = useNavigation();

  return (
    <div className="text-left space-y-0">
      
      {/* Page Header with Breadcrumbs */}
      <section className="bg-[#181c24] text-white py-12 lg:py-16 border-b border-[#2a3040] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none automotive-dark-grid opacity-25" />
        <div className="absolute -top-24 right-10 w-96 h-96 bg-[#4883ff]/15 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-neutral-400 mb-4">
            <button onClick={() => navigateTo('home')} className="hover:text-white flex items-center gap-1 cursor-pointer">
              <Home className="w-3.5 h-3.5" />
              <span>Home</span>
            </button>
            <ChevronRight className="w-3 h-3 text-neutral-600" />
            <span className="text-[#4883ff] font-semibold">About Us</span>
          </div>

          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold text-white bg-[#4883ff] px-3.5 py-1 rounded-full inline-flex items-center gap-1.5 shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              <span>ABOUT DYNAMIC AUTO &amp; TYRE CENTRE</span>
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
              A Trusted Name Among Vehicle Owners in Lagos and Beyond
            </h1>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
              Dealership-grade automotive servicing, certified tyre distribution, and electronic diagnostics engineered for private and corporate fleets in Nigeria.
            </p>
          </div>
        </div>
      </section>

      {/* Editorial Story & Philosophy */}
      <section className="py-16 bg-white border-b border-[#dddddd]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Story */}
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold text-[#4883ff] uppercase tracking-wider block">
                Our Heritage &amp; Standards
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-[#232323]">
                Experts in Modern Motor Vehicle Servicing
              </h2>

              <p className="text-sm text-[#4a4a4a] leading-relaxed">
                At Dynamic Auto &amp; Tyre Centre, we’re experts in motor vehicle servicing, offering flexible options to keep your car in top condition. We pride ourselves on using only quality parts and materials to ensure durability and satisfaction.
              </p>

              <p className="text-sm text-[#7a7a7a] leading-relaxed">
                Our highly trained technicians use high-quality parts equivalent to the manufacturer’s original equipment, providing you with a reliable and cost-effective alternative to dealership servicing — <em>why pay more?</em>
              </p>

              <p className="text-sm text-[#7a7a7a] leading-relaxed">
                We also cater to vans, electric vehicles, and hybrid vehicles, ensuring all drivers receive expert care under one roof. Even if done irregularly, servicing your car helps preserve its value and ensures your safety on the road.
              </p>

              {/* Verified checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
                <div className="flex items-center gap-2 text-xs font-bold text-[#232323]">
                  <CheckCircle2 className="w-4 h-4 text-[#4883ff] shrink-0" />
                  <span>OEM Manufacturer-Equivalent Parts</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-[#232323]">
                  <CheckCircle2 className="w-4 h-4 text-[#4883ff] shrink-0" />
                  <span>Cost-Effective Dealership Alternative</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-[#232323]">
                  <CheckCircle2 className="w-4 h-4 text-[#4883ff] shrink-0" />
                  <span>Cars, Vans, EV &amp; Hybrid Care</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-[#232323]">
                  <CheckCircle2 className="w-4 h-4 text-[#4883ff] shrink-0" />
                  <span>Central Facility at Oyemat House, Isolo</span>
                </div>
              </div>
            </div>

            {/* Visual Pillars */}
            <div className="lg:col-span-5 space-y-4">
              <div className="p-6 bg-[#f4f4f4] border border-[#dddddd] rounded-2xl text-xs space-y-2 wp-card-hover shadow-xs">
                <div className="flex items-center gap-2.5 text-[#4883ff] font-bold text-sm">
                  <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center shadow-xs">
                    <ShieldCheck className="w-5 h-5 text-[#4883ff]" />
                  </div>
                  <span>Quality Guarantee &amp; Parts Durability</span>
                </div>
                <p className="text-[#7a7a7a] leading-relaxed">
                  We install parts that strictly match the vehicle manufacturer's original specifications, protecting vehicle longevity and performance without inflated markups.
                </p>
              </div>

              <div className="p-6 bg-[#f4f4f4] border border-[#dddddd] rounded-2xl text-xs space-y-2 wp-card-hover shadow-xs">
                <div className="flex items-center gap-2.5 text-[#4883ff] font-bold text-sm">
                  <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center shadow-xs">
                    <Cpu className="w-5 h-5 text-[#4883ff]" />
                  </div>
                  <span>Specialized Ford &amp; Multi-Brand Diagnostics</span>
                </div>
                <p className="text-[#7a7a7a] leading-relaxed">
                  Advanced computerized scanning tools, live sensor tracking, module reprogramming, and factory-level diagnostic protocol scanners.
                </p>
              </div>

              <div className="p-6 bg-[#f4f4f4] border border-[#dddddd] rounded-2xl text-xs space-y-2 wp-card-hover shadow-xs">
                <div className="flex items-center gap-2.5 text-[#4883ff] font-bold text-sm">
                  <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center shadow-xs">
                    <MapPin className="w-5 h-5 text-[#4883ff]" />
                  </div>
                  <span>Dedicated Isolo Automotive Centre</span>
                </div>
                <p className="text-[#7a7a7a] leading-relaxed">
                  Oyemat House, 45 Alhaja Kudirat Adenekan Road, Isolo, Lagos. Equipped with modern hydraulic lifts, 3D computerized wheel aligners, and tyre balancing machinery.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Corporate Fleet & Institutional Partners */}
      <section className="py-16 bg-[#f4f4f4] border-b border-[#dddddd]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold text-[#4883ff] uppercase tracking-wider block mb-1">
              Trusted Institutional Fleet Network
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-[#232323]">
              Our Partners &amp; Corporate Clients
            </h2>
            <p className="text-xs sm:text-sm text-[#7a7a7a] mt-2">
              Leading financial institutions, food corporations, microfinance organizations, and development agencies rely on Dynamic Auto for priority fleet maintenance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {CORPORATE_PARTNERS.map((partner) => (
              <div 
                key={partner.name}
                className="bg-white border border-[#dddddd] rounded-2xl p-5 space-y-2.5 shadow-xs wp-card-hover"
              >
                <div className="flex items-center justify-between">
                  <Building2 className="w-5 h-5 text-[#4883ff]" />
                  <span className="text-[10px] font-bold text-[#4883ff] uppercase bg-[#edf3ff] px-2.5 py-0.5 rounded-full">
                    {partner.type}
                  </span>
                </div>
                <h3 className="font-display font-bold text-base text-[#232323]">
                  {partner.name}
                </h3>
                <p className="text-xs text-[#7a7a7a] leading-relaxed">
                  {partner.description}
                </p>
              </div>
            ))}
          </div>

          {/* Corporate Fleet Maintenance Program Card */}
          <div className="mt-10 bg-[#232323] text-white rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl relative overflow-hidden">
            <div>
              <h3 className="font-display font-bold text-2xl text-white">
                Interested in Corporate Fleet Servicing?
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 mt-1 max-w-xl leading-relaxed">
                We offer consolidated monthly billing, priority workshop service bays, customized preventative schedules, and bulk tyre discounts for corporate fleets in Lagos.
              </p>
            </div>
            <button
              onClick={() => onOpenBooking('Corporate Fleet Service')}
              className="wp-btn-shine shrink-0 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#4883ff] hover:bg-[#3470e8] transition-all cursor-pointer shadow-lg shadow-[#4883ff]/30 active:scale-98"
            >
              Request Fleet Proposal
            </button>
          </div>
        </div>
      </section>

      {/* Workshop Location & Visit Information */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-5 p-6 bg-[#edf3ff] border border-[#4883ff]/30 rounded-2xl shadow-xs">
            <div className="flex items-center gap-3.5 text-xs text-[#232323]">
              <MapPin className="w-6 h-6 text-[#4883ff] shrink-0" />
              <div>
                <span className="font-bold text-sm block">Visit Us in Isolo:</span>
                <span className="text-[#4a4a4a]">{DYNAMIC_AUTO_INFO.address}</span>
              </div>
            </div>
            <button
              onClick={() => navigateTo('contact')}
              className="wp-btn-shine shrink-0 px-5 py-2.5 text-xs font-bold text-white bg-[#4883ff] hover:bg-[#3470e8] rounded-xl transition-all cursor-pointer shadow-sm active:scale-98"
            >
              Get Directions &amp; Contact Us
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
