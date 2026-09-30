import React from 'react';
import { PageId } from '../components/Navbar';
import { HeroSlideshow } from '../components/HeroSlideshow';
import { 
  DYNAMIC_AUTO_INFO, 
  CLIENT_VEHICLES, 
  SERVICES_LIST, 
  WHY_CHOOSE_US,
  createWhatsAppVehicleInquiry 
} from '../data/businessData';
import { 
  ArrowRight, 
  Wrench, 
  Compass, 
  ShieldCheck, 
  Clock, 
  CheckCircle2, 
  ChevronRight,
  MessageSquare,
  Cpu,
  Gauge,
  Phone,
  Car
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onSelectVehicle?: (vehicleId: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onSelectVehicle }) => {
  // Show 4 featured vehicles from client photographs
  const featuredVehicles = CLIENT_VEHICLES.filter(v => v.category !== 'Facility').slice(0, 4);

  return (
    <div className="bg-[#F5F8FC]">
      
      {/* 1. HERO SLIDESHOW (FULL-BLEED BACKGROUND SLIDESHOW) */}
      <HeroSlideshow onNavigate={onNavigate} />

      {/* 2. SHORT INTRODUCTION */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-3">
            <span className="text-xs font-bold text-[#0B3D91] uppercase tracking-widest">
              WELCOME TO DYNAMIC AUTO
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#062B63] font-heading">
              Precision Automotive Care &amp; Inspected Vehicles
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Located on the Isolo Expressway industrial corridor in Lagos, Dynamic Auto provides dealer-level computer diagnostics, 3D laser wheel alignment, scratch-free tyre fitting, and a curated inventory of inspected vehicles. We deliver honest craftsmanship without guesswork.
            </p>
          </div>
        </div>
      </section>

      {/* 3. FEATURED VEHICLES (LARGE VEHICLE CARDS) */}
      <section className="py-14 sm:py-18">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-bold text-[#0B3D91] uppercase tracking-wider">
                CLIENT VEHICLES &amp; WORKSHOP SHOWCASE
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#062B63] mt-1 font-heading">
                Inspected &amp; Serviced Vehicles
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl">
                Browse client vehicles maintained, inspected, and serviced to precision standards at our Isolo workshop.
              </p>
            </div>
            <button
              onClick={() => onNavigate('contact')}
              className="text-xs font-semibold text-[#0B3D91] hover:text-[#062B63] inline-flex items-center gap-1 self-start sm:self-auto cursor-pointer"
            >
              Book Vehicle Inspection <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Cards with Subtle Hover Zoom: transform scale(1.03) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredVehicles.map((car) => (
              <div
                key={car.id}
                className="bg-white rounded-lg border border-slate-200 overflow-hidden shadow-xs hover:border-slate-300 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="aspect-[4/3] bg-slate-100 overflow-hidden relative">
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
                  </div>
                  <div className="p-4 space-y-1">
                    <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wide block">
                      {car.category}
                    </span>
                    <h3 className="font-bold text-base text-[#172033] line-clamp-1">
                      {car.title}
                    </h3>
                  </div>
                </div>

                <div className="px-4 pb-4 pt-2 border-t border-slate-100 flex items-center justify-between gap-2">
                  <button
                    onClick={() => onNavigate('services')}
                    className="text-xs font-semibold text-[#0B3D91] hover:text-[#062B63] cursor-pointer"
                  >
                    Workshop Services
                  </button>
                  <a
                    href={createWhatsAppVehicleInquiry(car.title)}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1.5 text-xs font-semibold text-white bg-[#F97316] hover:bg-[#EA580C] rounded transition-colors inline-flex items-center gap-1 shadow-xs"
                  >
                    <MessageSquare className="w-3 h-3" />
                    Inquire
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <button
              onClick={() => onNavigate('services')}
              className="px-6 py-3 text-xs sm:text-sm font-bold text-white bg-[#0B3D91] hover:bg-[#062B63] rounded-md transition-colors shadow-xs inline-flex items-center gap-2 cursor-pointer"
            >
              EXPLORE ALL SERVICES &amp; PRICING
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 4. ABOUT DYNAMIC AUTO (TEXT + LARGE VEHICLE IMAGE SPLIT LAYOUT) */}
      <section className="py-14 sm:py-18 bg-white border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left: Text */}
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-bold text-[#0B3D91] uppercase tracking-wider">
                ABOUT DYNAMIC AUTO
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#062B63] font-heading">
                Engineering Integrity on Lagos Roads
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Automotive ownership in Lagos requires dependable workshop care. We operate with radical transparency: our certified technicians scan vehicles with bi-directional OBD scanners, mount tyres using touchless leverless machinery, and present old replaced parts for customer confirmation.
              </p>

              <div className="space-y-2.5 pt-2 text-xs text-slate-700">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0B3D91] shrink-0 mt-0.5" />
                  <span>Dealer-grade diagnostics without guesswork</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0B3D91] shrink-0 mt-0.5" />
                  <span>Precision 3D optical laser wheel alignment</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0B3D91] shrink-0 mt-0.5" />
                  <span>100% genuine lubricants and direct-sourced tyres</span>
                </div>
              </div>

              <div className="pt-3">
                <button
                  onClick={() => onNavigate('about')}
                  className="px-5 py-2.5 text-xs font-semibold text-[#0B3D91] border border-[#0B3D91] hover:bg-[#0B3D91] hover:text-white rounded-md transition-colors inline-flex items-center gap-2 cursor-pointer"
                >
                  Learn More About Us
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right: Large Vehicle Photograph */}
            <div className="lg:col-span-6">
              <div className="rounded-lg overflow-hidden border border-slate-200 shadow-sm relative group bg-slate-100">
                <img
                  src="/images/vehicles/vehicle-01.jpg"
                  alt="Dynamic Auto Workshop Bay and Laser Alignment"
                  className="w-full h-80 sm:h-96 object-cover group-hover:scale-102 transition-transform duration-500"
                />
                <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-xs rounded p-3 border border-slate-200 flex items-center justify-between text-xs">
                  <div>
                    <p className="font-bold text-[#062B63]">Main Service Floor &amp; Alignment Rack</p>
                    <p className="text-[11px] text-slate-500">Plot 12, Isolo Expressway Industrial Zone</p>
                  </div>
                  <button
                    onClick={() => onNavigate('services')}
                    className="text-xs font-semibold text-[#F97316] hover:underline"
                  >
                    View Services
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. SERVICES (CLEAN SERVICE CARDS WITH BLUE ICONS) */}
      <section className="py-14 sm:py-18">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-bold text-[#0B3D91] uppercase tracking-wider">
                OUR SERVICES
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#062B63] mt-1 font-heading">
                Specialized Workshop Services
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl">
                Diagnostic scans, computerized alignment, tyre mounting, and preventative servicing.
              </p>
            </div>
            <button
              onClick={() => onNavigate('services')}
              className="text-xs font-semibold text-[#0B3D91] hover:text-[#062B63] inline-flex items-center gap-1 self-start sm:self-auto cursor-pointer"
            >
              All Services &amp; Packages <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

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
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => onNavigate('services')}
                    className="text-xs font-semibold text-[#0B3D91] hover:text-[#062B63] flex items-center gap-1 cursor-pointer"
                  >
                    Learn More <ChevronRight className="w-3 h-3" />
                  </button>
                  <button
                    onClick={() => onNavigate('contact')}
                    className="text-xs font-semibold text-[#F97316] hover:underline cursor-pointer"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FULL-WIDTH AUTOMOTIVE IMAGE SECTION (350-500px tall) */}
      <section className="relative h-[380px] sm:h-[450px] overflow-hidden flex items-center">
        <img
          src="/images/vehicles/vehicle-04.jpg"
          alt="Lexus RX 350 Luxury Vehicle"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        
        {/* Dark blue overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(90deg, rgba(6,43,99,0.92) 0%, rgba(6,43,99,0.65) 60%, rgba(0,0,0,0.40) 100%)'
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 w-full text-white space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#F97316]">
            PREMIUM AUTOMOTIVE EXPERIENCE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-heading max-w-xl leading-tight">
            Your Journey Starts Here.
          </h2>
          <p className="text-xs sm:text-sm text-slate-200 max-w-lg leading-relaxed">
            Whether you need precision diagnostics before a long highway trip or are looking for a reliable vehicle inspected by our workshop engineers, Dynamic Auto is your trusted partner.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onNavigate('services')}
              className="px-6 py-3 text-xs sm:text-sm font-bold text-white bg-[#F97316] hover:bg-[#EA580C] rounded-md transition-colors shadow-md inline-flex items-center gap-2 cursor-pointer"
            >
              EXPLORE OUR SERVICES
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 7. WHY CHOOSE DYNAMIC AUTO (4 PILLARS) */}
      <section className="py-14 sm:py-18 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-bold text-[#0B3D91] uppercase tracking-wider">
              OUR PILLARS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#062B63] mt-1 font-heading">
              Why Choose Dynamic Auto
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Dependable automotive care grounded in verified equipment and customer trust.
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

      {/* 8. CTA WITH VEHICLE BACKGROUND */}
      <section className="relative py-16 sm:py-20 overflow-hidden flex items-center">
        <img
          src="/images/vehicles/vehicle-11.jpg"
          alt="Lexus GX 460 Vehicle"
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
            GET IN TOUCH TODAY
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight font-heading">
            Ready for Your Next Vehicle or Service Inspection?
          </h2>
          <p className="text-xs sm:text-sm text-slate-200 max-w-md mx-auto leading-relaxed">
            Visit our workshop on Plot 12, Isolo Expressway or chat directly with our service supervisor on WhatsApp.
          </p>
          <div className="pt-3 flex flex-wrap justify-center gap-3">
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3 text-xs sm:text-sm font-bold text-white bg-[#F97316] hover:bg-[#EA580C] rounded-md transition-colors shadow-md cursor-pointer"
            >
              CONTACT US
            </button>
            <a
              href={`https://wa.me/${DYNAMIC_AUTO_INFO.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 text-xs sm:text-sm font-bold text-white bg-green-600 hover:bg-green-700 rounded-md transition-colors shadow-md inline-flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              CHAT ON WHATSAPP
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
