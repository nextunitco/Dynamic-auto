import React, { useState, useEffect } from 'react';
import { 
  Disc, 
  RotateCcw, 
  Sliders, 
  Wrench, 
  ShieldCheck, 
  Zap, 
  AlertTriangle, 
  Cpu, 
  Truck, 
  CheckCircle2, 
  ArrowRight, 
  Clock, 
  Gauge, 
  Calendar, 
  AlertCircle,
  Home,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { SERVICES_CATALOG, SERVICING_INTERVALS_DATA, DYNAMIC_AUTO_INFO } from '../data/dynamicAutoData';
import { useNavigation } from '../context/NavigationContext';

interface ServicesPageProps {
  onOpenBooking: (service?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenBooking }) => {
  const { subTab, navigateTo } = useNavigation();
  const [activeTab, setActiveTab] = useState<'all' | 'intervals' | 'battery'>('all');
  const [selectedFilter, setSelectedFilter] = useState('All');

  useEffect(() => {
    if (subTab === 'intervals') setActiveTab('intervals');
    else if (subTab === 'battery') setActiveTab('battery');
    else setActiveTab('all');
  }, [subTab]);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Disc': return <Disc className="w-5 h-5 text-[#4883ff]" />;
      case 'RotateCcw': return <RotateCcw className="w-5 h-5 text-[#4883ff]" />;
      case 'Sliders': return <Sliders className="w-5 h-5 text-[#4883ff]" />;
      case 'Wrench': return <Wrench className="w-5 h-5 text-[#4883ff]" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-[#4883ff]" />;
      case 'Zap': return <Zap className="w-5 h-5 text-[#4883ff]" />;
      case 'AlertTriangle': return <AlertTriangle className="w-5 h-5 text-[#4883ff]" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-[#4883ff]" />;
      case 'Truck': return <Truck className="w-5 h-5 text-[#4883ff]" />;
      default: return <Wrench className="w-5 h-5 text-[#4883ff]" />;
    }
  };

  const categories = ['All', 'Tyres & Wheels', 'Vehicle Services', 'MOT & Safety', 'Specialized Diagnostics'];

  const filteredServices = selectedFilter === 'All'
    ? SERVICES_CATALOG
    : SERVICES_CATALOG.filter(s => s.category.includes(selectedFilter) || (selectedFilter === 'Vehicle Services' && s.category === 'Brake Services') || (selectedFilter === 'Specialized Diagnostics' && (s.category === 'Specialized Diagnostics' || s.category === 'Electrical & Battery')));

  return (
    <div className="text-left space-y-0">
      
      {/* WordPress Page Header with Breadcrumbs */}
      <section className="bg-[#181c24] text-white py-12 lg:py-16 border-b border-[#2a3040] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none automotive-dark-grid opacity-25" />
        <div className="absolute -top-24 right-10 w-96 h-96 bg-[#4883ff]/15 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          
          {/* WordPress Breadcrumb Trail */}
          <div className="flex items-center gap-2 text-xs text-neutral-400 mb-4">
            <button onClick={() => navigateTo('home')} className="hover:text-white flex items-center gap-1 cursor-pointer">
              <Home className="w-3.5 h-3.5" />
              <span>Home</span>
            </button>
            <ChevronRight className="w-3 h-3 text-neutral-600" />
            <span className="text-[#4883ff] font-semibold">Services &amp; Maintenance</span>
          </div>

          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold text-white bg-[#4883ff] px-3.5 py-1 rounded-full inline-flex items-center gap-1.5 shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              <span>DYNAMIC AUTO WORKSHOP SERVICES</span>
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
              Automotive Services &amp; Maintenance
            </h1>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
              Dealership-grade servicing, MOT roadworthiness inspections, 3D computerized wheel alignment, and specialized Ford diagnostics in Isolo, Lagos.
            </p>
          </div>
        </div>
      </section>

      {/* WordPress Elementor Tab Bar */}
      <section className="bg-white border-b border-[#dddddd] sticky top-15 z-20 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2 overflow-x-auto py-3 scrollbar-none">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4.5 py-2 text-xs font-bold rounded-xl transition-all shrink-0 cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-[#4883ff] text-white shadow-md shadow-[#4883ff]/25'
                  : 'text-[#7a7a7a] hover:text-[#232323] hover:bg-[#f4f4f4]'
              }`}
            >
              All Workshop Services ({SERVICES_CATALOG.length})
            </button>
            <button
              onClick={() => setActiveTab('intervals')}
              className={`px-4.5 py-2 text-xs font-bold rounded-xl transition-all shrink-0 cursor-pointer ${
                activeTab === 'intervals'
                  ? 'bg-[#4883ff] text-white shadow-md shadow-[#4883ff]/25'
                  : 'text-[#7a7a7a] hover:text-[#232323] hover:bg-[#f4f4f4]'
              }`}
            >
              Vehicle Servicing Intervals Guide
            </button>
            <button
              onClick={() => setActiveTab('battery')}
              className={`px-4.5 py-2 text-xs font-bold rounded-xl transition-all shrink-0 cursor-pointer ${
                activeTab === 'battery'
                  ? 'bg-[#4883ff] text-white shadow-md shadow-[#4883ff]/25'
                  : 'text-[#7a7a7a] hover:text-[#232323] hover:bg-[#f4f4f4]'
              }`}
            >
              Battery Diagnostics &amp; Health
            </button>
          </div>
        </div>
      </section>

      {/* TAB 1: ALL WORKSHOP SERVICES */}
      {activeTab === 'all' && (
        <section className="py-14 bg-[#f4f4f4] border-b border-[#dddddd]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            
            {/* Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 mb-8">
              <span className="text-xs font-bold text-[#7a7a7a] mr-1">Filter Specialty:</span>
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedFilter(cat)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    selectedFilter === cat
                      ? 'bg-[#232323] text-white shadow-sm'
                      : 'bg-white border border-[#dddddd] text-[#7a7a7a] hover:text-[#232323] hover:border-[#4883ff]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Services Grid with WordPress Elementor Hover Lift */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredServices.map(service => (
                <div
                  key={service.id}
                  className="bg-white border border-[#dddddd] hover:border-[#4883ff] rounded-2xl p-6 flex flex-col justify-between transition-all group wp-card-hover shadow-xs"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-[#edf3ff] flex items-center justify-center group-hover:bg-[#4883ff] group-hover:text-white transition-all duration-300">
                        <div className="group-hover:text-white [&>svg]:group-hover:text-white transition-colors">
                          {getServiceIcon(service.iconName)}
                        </div>
                      </div>
                      <span className="text-[10px] font-bold text-[#4883ff] uppercase bg-[#edf3ff] px-2.5 py-0.5 rounded-full">
                        {service.category}
                      </span>
                    </div>

                    <h3 className="text-lg font-display font-bold text-[#232323] group-hover:text-[#4883ff] transition-colors">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-xs text-[#7a7a7a] leading-relaxed">
                      {service.shortDesc}
                    </p>

                    <div className="mt-4 pt-3.5 border-t border-[#dddddd] space-y-2">
                      <span className="text-[11px] font-bold text-[#232323] block mb-1">
                        Key Inclusions:
                      </span>
                      {service.highlights.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-[#4a4a4a]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#4883ff] shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#dddddd]">
                    <button
                      onClick={() => onOpenBooking(service.title)}
                      className="wp-btn-shine w-full py-2.5 px-4 rounded-xl text-xs font-bold text-white bg-[#4883ff] hover:bg-[#3470e8] active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm shadow-[#4883ff]/20"
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Book Service Appointment</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>
      )}

      {/* TAB 2: SERVICING INTERVALS GUIDE */}
      {activeTab === 'intervals' && (
        <section className="py-14 bg-[#f4f4f4] border-b border-[#dddddd]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
            
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-xs font-bold text-[#4883ff] uppercase tracking-wider block mb-1">
                Servicing Matrix &amp; Recommended Schedules
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-[#232323]">
                Vehicle Servicing Intervals
              </h2>
              <p className="text-xs sm:text-sm text-[#7a7a7a] mt-2">
                As a general guideline, your vehicle should receive a Full Service every 12,000 miles or every 12 months — whichever comes first. For more frequent drivers, we provide Interim Services and Engine Oil &amp; Filter Changes.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {SERVICING_INTERVALS_DATA.map((plan, idx) => (
                <div
                  key={plan.type}
                  className={`bg-white rounded-2xl p-6 sm:p-7 flex flex-col justify-between shadow-sm relative wp-card-hover ${
                    idx === 1 ? 'border-2 border-[#4883ff]' : 'border border-[#dddddd]'
                  }`}
                >
                  {idx === 1 && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] font-bold uppercase tracking-wider text-white bg-[#4883ff] px-3.5 py-0.5 rounded-full shadow-md animate-wp-pulse-glow">
                      Most Popular
                    </div>
                  )}

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-display font-bold text-[#232323]">
                        {plan.type}
                      </h3>
                      <Clock className="w-5 h-5 text-[#4883ff]" />
                    </div>

                    <div className="inline-block text-xs font-bold text-[#4883ff] bg-[#edf3ff] px-3 py-1 rounded-lg mb-3">
                      {plan.interval}
                    </div>

                    <p className="text-xs text-[#7a7a7a] mb-5 leading-relaxed">
                      {plan.purpose}
                    </p>

                    <div className="space-y-2 border-t border-[#dddddd] pt-4 text-xs text-[#4a4a4a]">
                      <span className="text-[11px] font-bold text-[#232323] uppercase tracking-wider block mb-2">
                        Inspection &amp; Replacement Checklist:
                      </span>
                      {plan.keyChecks.map((check, cIdx) => (
                        <div key={cIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#4883ff] shrink-0 mt-0.5" />
                          <span>{check}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-[#dddddd]">
                    <button
                      onClick={() => onOpenBooking(plan.type)}
                      className={`wp-btn-shine w-full py-3 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                        idx === 1
                          ? 'bg-[#4883ff] text-white hover:bg-[#3470e8] shadow-md shadow-[#4883ff]/30'
                          : 'bg-[#edf3ff] text-[#4883ff] hover:bg-[#4883ff] hover:text-white'
                      }`}
                    >
                      <span>Book {plan.type}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Editorial block from vehicle_servicing.php */}
            <div className="p-6 bg-white border border-[#dddddd] rounded-2xl flex flex-col sm:flex-row items-center gap-4 text-xs text-[#4a4a4a] max-w-4xl mx-auto shadow-sm">
              <Wrench className="w-8 h-8 text-[#4883ff] shrink-0" />
              <div>
                <h4 className="font-bold text-[#232323] text-sm mb-0.5">
                  Why Regular Servicing Matters
                </h4>
                <p className="leading-relaxed text-[#7a7a7a]">
                  Regular servicing helps your car run smoothly, safely, and efficiently, while allowing early detection of potential issues before they become costly repairs. Even if done irregularly, servicing helps preserve its value and ensures safety on the road. Combine your MOT Roadworthiness Test with any service booking to enjoy extra savings!
                </p>
              </div>
            </div>

          </div>
        </section>
      )}

      {/* TAB 3: BATTERY DIAGNOSTICS & HEALTH */}
      {activeTab === 'battery' && (
        <section className="py-14 bg-[#f4f4f4] border-b border-[#dddddd]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
            
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-xs font-bold text-[#4883ff] uppercase tracking-wider block mb-1">
                Electrical Diagnostics &amp; Supply
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-[#232323]">
                Battery Services at DynamicAuto.com.ng
              </h2>
              <p className="text-xs sm:text-sm text-[#7a7a7a] mt-2">
                If you need a replacement, we offer a complete car battery service, including supply, fitting, and safe disposal of your old unit. Don’t wait until your car won’t start — visit our Isolo workshop for a free test.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              <div className="bg-white border border-[#dddddd] rounded-2xl p-6 sm:p-7 shadow-sm space-y-3 wp-card-hover">
                <div className="w-12 h-12 rounded-xl bg-[#edf3ff] flex items-center justify-center text-[#4883ff]">
                  <Gauge className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-lg text-[#232323]">
                  How Your Car Battery Works?
                </h3>
                <p className="text-xs sm:text-sm text-[#7a7a7a] leading-relaxed">
                  Your car battery is the heart of your vehicle’s electrical system. When you start the engine, the battery powers the starter motor and spark plugs, igniting the fuel-air mixture in the engine cylinders.
                </p>
                <p className="text-xs sm:text-sm text-[#7a7a7a] leading-relaxed">
                  Once the engine is running, the alternator takes over — supplying electricity to your car’s systems and recharging the battery for the next start.
                </p>
              </div>

              <div className="bg-white border border-[#dddddd] rounded-2xl p-6 sm:p-7 shadow-sm space-y-3 wp-card-hover">
                <div className="w-12 h-12 rounded-xl bg-[#edf3ff] flex items-center justify-center text-[#4883ff]">
                  <AlertCircle className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-lg text-[#232323]">
                  Why Battery Health Matters?
                </h3>
                <p className="text-xs sm:text-sm text-[#7a7a7a] leading-relaxed">
                  Over time, your battery’s strength (cranking amperage) decreases due to use, age, and high temperatures. Modern vehicles demand even more power thanks to air conditioning, infotainment, and digital devices.
                </p>
                <p className="text-xs sm:text-sm text-[#7a7a7a] leading-relaxed">
                  Regular battery checks help detect early signs of weakness and prevent unexpected breakdowns or MOT Roadworthiness test failures in Lagos traffic.
                </p>
              </div>
            </div>

            {/* Free Test Prompt */}
            <div className="bg-[#232323] text-white rounded-3xl p-6 sm:p-8 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-5 shadow-xl relative overflow-hidden">
              <div className="relative z-10">
                <span className="text-[10px] font-bold text-[#4883ff] uppercase tracking-wider block mb-1">
                  Complimentary Inspection
                </span>
                <h3 className="text-xl font-display font-bold text-white">
                  Free Battery &amp; Alternator Health Test
                </h3>
                <p className="text-xs text-neutral-300 mt-1">
                  Drive into Oyemat House, Isolo. Our certified technicians will test your battery load and charging system in under 10 minutes.
                </p>
              </div>
              <button
                onClick={() => onOpenBooking('Batteries')}
                className="wp-btn-shine shrink-0 px-6 py-3 rounded-xl text-xs font-bold text-white bg-[#4883ff] hover:bg-[#3470e8] transition-all cursor-pointer shadow-lg shadow-[#4883ff]/30 active:scale-98 relative z-10"
              >
                Book Battery Check
              </button>
            </div>

          </div>
        </section>
      )}

      {/* Workshop Booking Prompt */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-5 p-6 bg-[#edf3ff] border border-[#4883ff]/30 rounded-2xl shadow-xs">
            <div className="text-xs text-[#232323]">
              <span className="font-bold text-base block">Ready to schedule your appointment?</span>
              <span className="text-[#7a7a7a]">Online booking with direct workshop confirmation at Oyemat House, Isolo.</span>
            </div>
            <button
              onClick={() => onOpenBooking()}
              className="wp-btn-shine shrink-0 px-6 py-3 text-xs font-bold text-white bg-[#4883ff] hover:bg-[#3470e8] rounded-xl shadow-md shadow-[#4883ff]/20 transition-all cursor-pointer active:scale-98"
            >
              Book Service Now
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
