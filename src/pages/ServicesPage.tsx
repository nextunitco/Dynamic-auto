import React from 'react';
import { PageId } from '../components/Navbar';
import { PageHero } from '../components/PageHero';
import { 
  SERVICES_LIST, 
  SERVICE_PACKAGES, 
  PAGE_HERO_IMAGES,
  DYNAMIC_AUTO_INFO,
  createWhatsAppServiceInquiry 
} from '../data/businessData';
import { 
  Cpu, 
  Compass, 
  Wrench, 
  Gauge, 
  CheckCircle2, 
  Check, 
  Clock, 
  ArrowRight,
  MessageSquare,
  ShieldCheck 
} from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: PageId) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-[#F5F8FC]">
      
      {/* 1. VEHICLE IMAGE HEADER (300-400px with dark blue overlay) */}
      <PageHero
        title="OUR SERVICES"
        subtitle="Computer diagnostics, 3D laser alignment, brake systems, touchless tyre mounting, and routine scheduled maintenance."
        backgroundImage={PAGE_HERO_IMAGES.services}
        currentPageName="Services"
        onNavigate={onNavigate}
      />

      {/* 2. SERVICES INTRODUCTION & CARDS */}
      <section className="py-14 sm:py-18">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-bold text-[#0B3D91] uppercase tracking-wider">
              SPECIALIZED WORKSHOP SERVICES
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#062B63] mt-1 font-heading">
              Precision Automotive Care
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
              Every service is carried out using calibrated machinery and dealer-grade diagnostic scanners to ensure vehicle safety and long-term durability.
            </p>
          </div>

          {/* Clean Service Cards with Blue Icons & Orange subtle CTA */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES_LIST.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-lg border border-slate-200 p-6 hover:border-slate-300 shadow-xs transition-colors flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded bg-blue-50 text-[#0B3D91] flex items-center justify-center border border-blue-100">
                    {service.category === 'diagnostics' && <Cpu className="w-5 h-5" />}
                    {service.category === 'tyres' && <Compass className="w-5 h-5" />}
                    {service.category === 'mechanical' && <Wrench className="w-5 h-5" />}
                    {service.category === 'maintenance' && <Gauge className="w-5 h-5" />}
                  </div>

                  <h3 className="font-bold text-base text-[#172033]">
                    {service.name}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {service.summary}
                  </p>

                  <ul className="pt-2 border-t border-slate-100 space-y-1.5 text-xs text-slate-600">
                    {service.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0B3D91] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between">
                  <a
                    href={createWhatsAppServiceInquiry(service.name)}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-semibold text-white bg-[#F97316] hover:bg-[#EA580C] px-3.5 py-1.5 rounded transition-colors inline-flex items-center gap-1.5 shadow-xs"
                  >
                    <MessageSquare className="w-3 h-3" />
                    Inquire / Book
                  </a>
                  <button
                    onClick={() => onNavigate('contact')}
                    className="text-xs font-medium text-slate-500 hover:text-[#0B3D91] cursor-pointer"
                  >
                    Contact Desk
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. LARGE AUTOMOTIVE IMAGE SECTION (SUPPORTING VISUAL) */}
      <section className="relative h-[360px] sm:h-[420px] overflow-hidden flex items-center">
        <img
          src="/images/vehicles/vehicle-01.jpg"
          alt="Workshop Service Bays and Vehicle Alignment"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(90deg, rgba(6,43,99,0.92) 0%, rgba(6,43,99,0.65) 60%, rgba(0,0,0,0.35) 100%)'
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 w-full text-white space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#F97316]">
            AUTHENTIC FACILITY &amp; MACHINERY
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight font-heading max-w-lg leading-tight">
            High-Precision Diagnostic &amp; Alignment Equipment
          </h2>
          <p className="text-xs sm:text-sm text-slate-200 max-w-md leading-relaxed">
            Our active workshop floor on Isolo Expressway features heavy-duty hydraulic lifts and computerized 3D laser alignment sensors for accurate undercarriage checks.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onNavigate('about')}
              className="px-5 py-2.5 text-xs font-bold text-white bg-[#0B3D91] hover:bg-[#062B63] rounded border border-white/20 transition-colors inline-flex items-center gap-2 cursor-pointer"
            >
              Tour Our Facility
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* 4. ADDITIONAL INFORMATION (SERVICE PACKAGES) */}
      <section className="py-14 sm:py-18 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-bold text-[#0B3D91] uppercase tracking-wider">
              STRUCTURED PACKAGES
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#062B63] mt-1 font-heading">
              Maintenance Packages
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Clear maintenance plans tailored for Lagos traffic and inter-state highway travel.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SERVICE_PACKAGES.map((pkg) => (
              <div
                key={pkg.id}
                className={`bg-[#F5F8FC] rounded-lg border p-6 flex flex-col justify-between ${
                  pkg.badge
                    ? 'border-[#0B3D91] shadow-xs relative'
                    : 'border-slate-200'
                }`}
              >
                <div>
                  {pkg.badge && (
                    <span className="inline-block mb-3 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-blue-100 text-[#0B3D91] rounded">
                      {pkg.badge}
                    </span>
                  )}
                  <h3 className="text-base font-bold text-[#062B63]">
                    {pkg.name}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-1 mb-4">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>{pkg.duration} · {pkg.recommendedFor}</span>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-slate-200 text-xs text-slate-700">
                    <span className="font-semibold text-slate-600 block text-[11px] uppercase tracking-wide">
                      What&apos;s Included:
                    </span>
                    {pkg.includes.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-[#0B3D91] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-200">
                  <a
                    href={createWhatsAppServiceInquiry(pkg.name)}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-2.5 text-xs font-semibold text-white bg-[#0B3D91] hover:bg-[#062B63] rounded transition-colors text-center block"
                  >
                    Select {pkg.name}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA WITH AUTOMOTIVE BACKGROUND IMAGE */}
      <section className="relative py-16 sm:py-20 overflow-hidden flex items-center">
        <img
          src="/images/vehicles/vehicle-08.jpg"
          alt="Ford Explorer 4WD Vehicle"
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
            BOOK YOUR APPOINTMENT
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight font-heading">
            Need a Diagnostic Scan or Wheel Alignment?
          </h2>
          <p className="text-xs sm:text-sm text-slate-200 max-w-md mx-auto leading-relaxed">
            Reserve your workshop bay slot or send your vehicle specs to our technicians on WhatsApp.
          </p>
          <div className="pt-3 flex flex-wrap justify-center gap-3">
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3 text-xs sm:text-sm font-bold text-white bg-[#F97316] hover:bg-[#EA580C] rounded-md transition-colors shadow-md cursor-pointer"
            >
              CONTACT SERVICE DESK
            </button>
            <a
              href={`https://wa.me/${DYNAMIC_AUTO_INFO.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 text-xs sm:text-sm font-bold text-white bg-green-600 hover:bg-green-700 rounded-md transition-colors shadow-md inline-flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              WHATSAPP US
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
