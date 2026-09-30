import React, { useState } from 'react';
import { PageId } from '../components/Navbar';
import { 
  REAL_IMAGES, 
  WORKSHOP_EQUIPMENT, 
  DYNAMIC_AUTO_INFO 
} from '../data/businessData';
import { 
  ShieldCheck, 
  CheckCircle2, 
  Wrench, 
  Cpu, 
  Compass, 
  Maximize2, 
  X, 
  ArrowRight,
  MapPin,
  Clock
} from 'lucide-react';

interface WorkshopPageProps {
  onNavigate: (page: PageId) => void;
  onOpenBookingModal: (serviceId?: string) => void;
}

export const WorkshopPage: React.FC<WorkshopPageProps> = ({
  onNavigate,
  onOpenBookingModal,
}) => {
  const [activePhoto, setActivePhoto] = useState<string | null>(null);

  const realPhotos = [
    {
      src: REAL_IMAGES.workshopBay,
      title: "Main Workshop Service Floor & Alignment Bay",
      description: "Equipped with dual hydraulic vehicle lifts, smooth level epoxy flooring, and optical laser target mounts for precision four-wheel computerized alignment.",
      tag: "Workshop Floor"
    },
    {
      src: REAL_IMAGES.mechanicsTeam,
      title: "Specialist Wheel & Tyre Mounting Station",
      description: "Our certified technicians with automatic pneumatic leverless tyre changer and dynamic high-speed electronic balancing unit.",
      tag: "Tyre Bay"
    }
  ];

  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="pt-8 pb-10 border-b border-zinc-100 bg-zinc-50/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold text-orange-600 tracking-wider uppercase">
              Facility &amp; Standards
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 mt-1 tracking-tight">
              Inside Our Isolo Workshop
            </h1>
            <p className="text-sm text-zinc-600 mt-2 leading-relaxed">
              We built Dynamic Auto to bring European-grade workshop precision to Nigerian vehicle owners. Real diagnostics, calibrated machinery, and certified mechanics.
            </p>
          </div>
        </div>
      </section>

      {/* Verified Facility Photos Gallery */}
      <section className="py-12 border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="mb-6">
            <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">
              Authentic Facility Photos
            </span>
            <h2 className="text-2xl font-bold text-zinc-900 mt-1">
              Real Workshop. Real Equipment. Real Technicians.
            </h2>
            <p className="text-xs sm:text-sm text-zinc-500 mt-1">
              Click any photo to view full resolution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {realPhotos.map((photo, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl border border-zinc-200 overflow-hidden shadow-xs group"
              >
                <div
                  className="relative h-72 sm:h-80 overflow-hidden bg-zinc-100 cursor-pointer"
                  onClick={() => setActivePhoto(photo.src)}
                >
                  <img
                    src={photo.src}
                    alt={photo.title}
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-white/90 text-zinc-900 text-xs font-bold px-3 py-1.5 rounded-full shadow flex items-center gap-1.5">
                      <Maximize2 className="w-3.5 h-3.5" />
                      View High-Res
                    </span>
                  </div>
                  <span className="absolute top-3 left-3 bg-zinc-900/80 text-white text-[11px] font-medium px-2.5 py-1 rounded">
                    {photo.tag}
                  </span>
                </div>
                <div className="p-5 space-y-2">
                  <h3 className="font-bold text-zinc-900 text-base">
                    {photo.title}
                  </h3>
                  <p className="text-xs text-zinc-600 leading-relaxed">
                    {photo.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Specs */}
      <section className="py-14 bg-zinc-50 border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">
              Diagnostic Machinery
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 mt-1">
              Precision Diagnostic &amp; Alignment Equipment
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600 mt-2">
              Why we avoid roadside trial-and-error: our machinery provides exact mathematical readings on steering angles, brake rotor thickness, and engine sensors.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {WORKSHOP_EQUIPMENT.map((eq, i) => (
              <div
                key={i}
                className="bg-white rounded-lg border border-zinc-200 p-6 flex flex-col justify-between shadow-xs"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-zinc-500">
                    <span className="font-bold uppercase tracking-wider text-orange-600">
                      {eq.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-zinc-900">
                    {eq.name}
                  </h3>

                  <p className="text-xs text-zinc-600 leading-relaxed">
                    {eq.description}
                  </p>

                  <div className="pt-2 flex items-center gap-2 text-xs font-medium text-emerald-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{eq.keyBenefit}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our 4 Workshop Standards */}
      <section className="py-14 border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">
              Our Code of Ethics
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 mt-1">
              The Dynamic Auto Quality Standard
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600 mt-2">
              Automotive repair in Lagos shouldn&apos;t feel like a gamble. We operate with radical transparency.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 rounded-lg border border-zinc-200 bg-white space-y-2">
              <div className="w-8 h-8 rounded bg-orange-50 text-orange-600 flex items-center justify-center font-bold text-sm">
                01
              </div>
              <h4 className="font-bold text-zinc-900 text-sm">Zero Counterfeits</h4>
              <p className="text-xs text-zinc-600 leading-relaxed">
                We only pour genuine API-certified synthetic oils and mount direct factory-sourced tyres with verifiable batch codes.
              </p>
            </div>

            <div className="p-5 rounded-lg border border-zinc-200 bg-white space-y-2">
              <div className="w-8 h-8 rounded bg-orange-50 text-orange-600 flex items-center justify-center font-bold text-sm">
                02
              </div>
              <h4 className="font-bold text-zinc-900 text-sm">Itemized Quotes</h4>
              <p className="text-xs text-zinc-600 leading-relaxed">
                No surprise bills. You receive a full written estimate breaking down parts and labor before any technician touches your car.
              </p>
            </div>

            <div className="p-5 rounded-lg border border-zinc-200 bg-white space-y-2">
              <div className="w-8 h-8 rounded bg-orange-50 text-orange-600 flex items-center justify-center font-bold text-sm">
                03
              </div>
              <h4 className="font-bold text-zinc-900 text-sm">Old Parts Returned</h4>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Whenever worn suspension bushings, spark plugs, or brake pads are replaced, the old components are presented for your verification.
              </p>
            </div>

            <div className="p-5 rounded-lg border border-zinc-200 bg-white space-y-2">
              <div className="w-8 h-8 rounded bg-orange-50 text-orange-600 flex items-center justify-center font-bold text-sm">
                04
              </div>
              <h4 className="font-bold text-zinc-900 text-sm">Customer Lounge</h4>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Wait in comfort with air-conditioning, high-speed WiFi, work desks, and viewing windows directly overlooking the service floor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA to Booking & Location */}
      <section className="py-12 bg-zinc-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-xl border border-zinc-200 p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
            <div className="space-y-1">
              <h3 className="text-xl font-bold text-zinc-900">
                Visit Our Workshop in Isolo, Lagos
              </h3>
              <p className="text-xs sm:text-sm text-zinc-500">
                Plot 12, Isolo Expressway · Open Monday to Saturday from 8:00 AM
              </p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => onNavigate('contact')}
                className="px-4 py-2.5 text-xs font-semibold text-zinc-800 bg-zinc-100 hover:bg-zinc-200 rounded transition-colors"
              >
                Driving Directions
              </button>
              <button
                onClick={() => onNavigate('booking')}
                className="px-4 py-2.5 text-xs font-semibold text-white bg-orange-500 hover:bg-orange-600 rounded transition-colors"
              >
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Image Lightbox Modal */}
      {activePhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 backdrop-blur-xs"
          onClick={() => setActivePhoto(null)}
        >
          <div className="relative max-w-4xl w-full bg-white rounded-lg overflow-hidden shadow-2xl" onClick={e => e.stopPropagation()}>
            <button
              onClick={() => setActivePhoto(null)}
              className="absolute top-3 right-3 z-10 p-1.5 rounded-full bg-black/60 text-white hover:bg-black transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={activePhoto}
              alt="Enlarged Workshop Facility Photo"
              className="w-full max-h-[80vh] object-contain bg-zinc-900"
            />
            <div className="p-4 bg-white text-xs text-zinc-600 flex items-center justify-between">
              <span className="font-semibold text-zinc-900">
                Dynamic Auto &amp; Tyre Centre · Isolo Expressway, Lagos
              </span>
              <span>Authentic facility photo</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
