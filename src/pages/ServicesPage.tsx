import React, { useState } from 'react';
import { PageId } from '../components/Navbar';
import { 
  SERVICES_LIST, 
  ServiceItem, 
  SERVICE_PACKAGES, 
  WORKSHOP_FAQS, 
  REAL_IMAGES, 
  formatNgn,
  createWhatsAppBookingLink,
  DYNAMIC_AUTO_INFO
} from '../data/businessData';
import { 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  Wrench, 
  ShieldCheck, 
  Sparkles, 
  Calendar,
  MessageSquare,
  HelpCircle,
  Check
} from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: PageId) => void;
  onOpenBookingModal: (serviceId?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onNavigate,
  onOpenBookingModal,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'diagnostics', label: 'Diagnostics & ECU' },
    { id: 'tyres', label: 'Tyres & Alignment' },
    { id: 'mechanical', label: 'Brakes & Suspension' },
    { id: 'maintenance', label: 'Oil & Scheduled Service' },
  ];

  const filteredServices = activeCategory === 'all'
    ? SERVICES_LIST
    : SERVICES_LIST.filter(s => s.category === activeCategory);

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="pt-8 pb-10 border-b border-zinc-100 bg-zinc-50/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold text-orange-600 tracking-wider uppercase">
              Workshop Services
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 mt-1 tracking-tight">
              Precision Auto Services &amp; Packages
            </h1>
            <p className="text-sm text-zinc-600 mt-2 leading-relaxed">
              Transparent Nigerian Naira pricing, certified European diagnostic computers, and genuine OEM parts. Every service includes our multi-point vehicle health report.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="mt-8 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-2 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-zinc-900 text-white shadow-xs'
                    : 'bg-white text-zinc-700 border border-zinc-200 hover:bg-zinc-100'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-lg border border-zinc-200 p-6 flex flex-col justify-between hover:border-zinc-300 hover:shadow-xs transition-all"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs text-zinc-500">
                    <span className="font-semibold uppercase tracking-wider text-orange-600">
                      {service.category}
                    </span>
                    <span className="flex items-center gap-1 font-medium">
                      <Clock className="w-3.5 h-3.5 text-zinc-400" />
                      {service.estimatedDuration}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-zinc-900 leading-snug">
                      {service.name}
                    </h3>
                    <p className="text-xs text-zinc-600 mt-2 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-zinc-100 space-y-1.5">
                    <span className="text-[11px] font-semibold text-zinc-500 uppercase tracking-wide block">
                      Key Highlights:
                    </span>
                    {service.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-zinc-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-5 mt-5 border-t border-zinc-100 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-zinc-400 uppercase block font-medium">Estimated Cost</span>
                    <span className="text-base font-bold text-zinc-900">
                      {formatNgn(service.estimatedPriceNgn)}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onOpenBookingModal(service.id)}
                      className="px-3.5 py-1.5 text-xs font-semibold text-white bg-orange-500 hover:bg-orange-600 rounded transition-colors cursor-pointer"
                    >
                      Book Service
                    </button>
                    <a
                      href={createWhatsAppBookingLink(service.name)}
                      target="_blank"
                      rel="noreferrer"
                      className="p-1.5 text-zinc-500 hover:text-green-600 border border-zinc-200 rounded hover:border-green-300 transition-colors"
                      title="Inquire on WhatsApp"
                    >
                      <MessageSquare className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Routine Service Packages Comparison */}
      <section className="py-14 bg-zinc-50 border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold text-orange-600 tracking-wider uppercase">
              Transparent Maintenance Plans
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 mt-1">
              Choose a Service Package
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600 mt-2">
              Structured maintenance packages tailored for driving conditions across Lagos and Nigeria.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SERVICE_PACKAGES.map((pkg) => (
              <div
                key={pkg.id}
                className={`bg-white rounded-xl border p-6 flex flex-col justify-between transition-all ${
                  pkg.badge
                    ? 'border-orange-500 shadow-sm relative'
                    : 'border-zinc-200'
                }`}
              >
                <div>
                  {pkg.badge && (
                    <span className="inline-block mb-3 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-orange-100 text-orange-700 rounded">
                      {pkg.badge}
                    </span>
                  )}
                  <h3 className="text-lg font-bold text-zinc-900">
                    {pkg.name}
                  </h3>
                  <p className="text-xs text-zinc-500 mt-1">
                    {pkg.recommendedFor} · {pkg.duration}
                  </p>

                  <div className="my-5 pb-4 border-b border-zinc-100">
                    <span className="text-2xl font-extrabold text-zinc-900">
                      {formatNgn(pkg.priceNgn)}
                    </span>
                    <span className="text-xs text-zinc-500 block mt-0.5">
                      Includes labor, fluids &amp; consumables
                    </span>
                  </div>

                  <div className="space-y-2.5">
                    <span className="text-[11px] font-bold text-zinc-500 uppercase tracking-wider block">
                      What&apos;s Included:
                    </span>
                    {pkg.includes.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-zinc-700">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-zinc-100">
                  <button
                    onClick={() => onOpenBookingModal(pkg.id)}
                    className={`w-full py-2.5 text-xs font-bold rounded-md transition-colors cursor-pointer ${
                      pkg.badge
                        ? 'bg-orange-500 hover:bg-orange-600 text-white'
                        : 'bg-zinc-900 hover:bg-zinc-800 text-white'
                    }`}
                  >
                    Select {pkg.name}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real Workshop Photo Banner with Equipment Standards */}
      <section className="py-12 border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-xl border border-zinc-200 overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-center">
            <div className="lg:col-span-5 h-64 lg:h-full min-h-[280px]">
              <img
                src={REAL_IMAGES.workshopBay}
                alt="Dynamic Auto Workshop bay in Lagos"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="lg:col-span-7 p-6 sm:p-8 space-y-4">
              <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">
                Workshop Standards
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-zinc-900">
                Dealer-Standard Diagnostics Without Dealer Markups
              </h3>
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                We invest in real diagnostic machinery so you never spend money guessing parts. Every mechanical intervention is backed by digital scans before and after repairs.
              </p>
              <div className="grid grid-cols-2 gap-3 text-xs text-zinc-700 pt-2">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Itemized written invoice</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Old parts returned to you</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-orange-500 shrink-0" />
                  <span>Prompt bay reservation</span>
                </div>
                <div className="flex items-center gap-2">
                  <Wrench className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Calibrated torque specs</span>
                </div>
              </div>

              <div className="pt-3">
                <button
                  onClick={() => onNavigate('workshop')}
                  className="text-xs font-semibold text-orange-600 hover:text-orange-700 inline-flex items-center gap-1 cursor-pointer"
                >
                  Tour our equipment &amp; facility <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service FAQs */}
      <section className="py-14 bg-zinc-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <span className="text-xs font-bold text-orange-600 tracking-wider uppercase">
              Frequently Asked Questions
            </span>
            <h2 className="text-2xl font-bold text-zinc-900 mt-1">
              Workshop Service Queries
            </h2>
          </div>

          <div className="space-y-4">
            {WORKSHOP_FAQS.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg border border-zinc-200 p-5 space-y-2 shadow-xs"
              >
                <h4 className="text-sm font-bold text-zinc-900 flex items-start gap-2">
                  <HelpCircle className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                  <span>{faq.question}</span>
                </h4>
                <p className="text-xs text-zinc-600 pl-6 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center text-xs text-zinc-500">
            Have a custom question about your vehicle?{' '}
            <a
              href={`https://wa.me/${DYNAMIC_AUTO_INFO.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="text-orange-600 font-bold hover:underline"
            >
              Ask our service manager directly on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
