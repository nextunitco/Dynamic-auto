import React, { useState } from 'react';
import { PageId } from '../components/Navbar';
import { DYNAMIC_AUTO_INFO, REAL_IMAGES } from '../data/businessData';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  Navigation,
  Compass,
  ShieldCheck,
  AlertTriangle
} from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [formName, setFormName] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formMessage, setFormMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formPhone || !formName) return;
    setSubmitted(true);
  };

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="pt-8 pb-10 border-b border-zinc-100 bg-zinc-50/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold text-orange-600 tracking-wider uppercase">
              Location &amp; Inquiries
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 mt-1 tracking-tight">
              Contact &amp; Workshop Directions
            </h1>
            <p className="text-sm text-zinc-600 mt-2 leading-relaxed">
              Conveniently situated along the Isolo Expressway industrial corridor in Lagos. Accessible from Oshodi, Festac, Ajao Estate, and Airport Road.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid: Info + Contact Form */}
      <section className="py-12 border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left: Contact Cards & Hours */}
            <div className="lg:col-span-6 space-y-6">
              
              {/* Core Contact Info */}
              <div className="bg-white rounded-lg border border-zinc-200 p-6 space-y-4 shadow-xs">
                <h3 className="font-bold text-zinc-900 text-base">
                  Workshop Contact Details
                </h3>

                <div className="space-y-3 text-xs">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-zinc-900 block">Workshop Address</span>
                      <span className="text-zinc-600">{DYNAMIC_AUTO_INFO.address}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-zinc-900 block">Working Hours</span>
                      <span className="text-zinc-600">{DYNAMIC_AUTO_INFO.hours}</span>
                      <span className="text-[11px] text-zinc-400 block mt-0.5">Sunday: Emergency appointments &amp; towing only</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-zinc-900 block">Direct Telephone Hotline</span>
                      <a href={`tel:${DYNAMIC_AUTO_INFO.phone}`} className="text-orange-600 font-semibold hover:underline">
                        {DYNAMIC_AUTO_INFO.phoneDisplay}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MessageSquare className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-zinc-900 block">WhatsApp Desk</span>
                      <a 
                        href={`https://wa.me/${DYNAMIC_AUTO_INFO.whatsapp}`}
                        target="_blank"
                        rel="noreferrer"
                        className="text-green-600 font-semibold hover:underline"
                      >
                        Chat directly with Service Supervisor
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Roadside Assistance Box */}
              <div className="bg-amber-50 rounded-lg border border-amber-200 p-5 space-y-2">
                <div className="flex items-center gap-2 text-amber-800 font-bold text-xs">
                  <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>Roadside Breakdown Assistance</span>
                </div>
                <p className="text-xs text-amber-900/80 leading-relaxed">
                  Stuck with a flat tyre, dead battery, or overheating engine near Isolo, Oshodi, or Airport Road? Call our rapid assistance response team directly.
                </p>
                <div className="pt-2">
                  <a
                    href={`tel:${DYNAMIC_AUTO_INFO.phone}`}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-white bg-amber-600 hover:bg-amber-700 rounded transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    Call Emergency Line
                  </a>
                </div>
              </div>

              {/* Real Workshop Photo Visual Preview */}
              <div className="bg-white rounded-lg border border-zinc-200 overflow-hidden shadow-xs">
                <img
                  src={REAL_IMAGES.workshopBay}
                  alt="Dynamic Auto Workshop Exterior and Bays in Isolo"
                  className="w-full h-48 object-cover"
                />
                <div className="p-3 text-[11px] text-zinc-500 bg-zinc-50 border-t border-zinc-100 flex items-center justify-between">
                  <span>Isolo Expressway Service Bays</span>
                  <span className="text-emerald-600 font-semibold">Active &amp; Open</span>
                </div>
              </div>

            </div>

            {/* Right: Message Form + Directions */}
            <div className="lg:col-span-6 space-y-6">
              
              {/* Message / Callback Form */}
              <div className="bg-white rounded-lg border border-zinc-200 p-6 space-y-4 shadow-xs">
                <h3 className="font-bold text-zinc-900 text-base">
                  Send an Inquiry or Request Callback
                </h3>
                <p className="text-xs text-zinc-500">
                  Our service advisors respond promptly during operational hours.
                </p>

                {submitted ? (
                  <div className="bg-emerald-50 rounded-lg p-5 border border-emerald-200 text-center space-y-3">
                    <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
                    <p className="text-xs font-bold text-emerald-800">
                      Message Received!
                    </p>
                    <p className="text-xs text-emerald-700">
                      Thank you, {formName}. An advisor will reach out to {formPhone} shortly.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-xs font-semibold text-emerald-800 underline mt-2 block mx-auto cursor-pointer"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
                    <div>
                      <label className="block text-zinc-700 font-semibold mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Babatunde Adeleke"
                        value={formName}
                        onChange={(e) => setFormName(e.target.value)}
                        className="w-full bg-zinc-50 border border-zinc-300 rounded px-3 py-2 text-zinc-900 focus:outline-none focus:border-orange-500 text-xs"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-zinc-700 font-semibold mb-1">
                        Phone or WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        placeholder="e.g. 0802 345 6789"
                        value={formPhone}
                        onChange={(e) => setFormPhone(e.target.value)}
                        className="w-full bg-zinc-50 border border-zinc-300 rounded px-3 py-2 text-zinc-900 focus:outline-none focus:border-orange-500 text-xs"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-zinc-700 font-semibold mb-1">
                        Inquiry / Service Details
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Describe your car issue, tyre size request, or general inquiry..."
                        value={formMessage}
                        onChange={(e) => setFormMessage(e.target.value)}
                        className="w-full bg-zinc-50 border border-zinc-300 rounded px-3 py-2 text-zinc-900 focus:outline-none focus:border-orange-500 text-xs"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-2.5 text-xs font-bold text-white bg-orange-500 hover:bg-orange-600 rounded transition-colors shadow-xs cursor-pointer flex items-center justify-center gap-1.5"
                    >
                      <Send className="w-3.5 h-3.5" />
                      Submit Message
                    </button>
                  </form>
                )}
              </div>

              {/* Landmark Directions for Lagos Drivers */}
              <div className="bg-white rounded-lg border border-zinc-200 p-6 space-y-3 shadow-xs">
                <div className="flex items-center gap-2">
                  <Navigation className="w-4 h-4 text-orange-500" />
                  <h4 className="font-bold text-zinc-900 text-sm">
                    Driving Directions from Lagos Landmarks
                  </h4>
                </div>

                <div className="space-y-3 text-xs text-zinc-600 pt-2 border-t border-zinc-100">
                  <div className="space-y-1">
                    <span className="font-bold text-zinc-800 block">From Oshodi / Airport / Ikeja:</span>
                    <p className="text-[11px] leading-relaxed text-zinc-500">
                      Take the Oshodi-Apapa Expressway heading toward Cele. Take the Isolo industrial service lane exit immediately after the bridge. We are located at Plot 12 on the main access road.
                    </p>
                  </div>

                  <div className="space-y-1">
                    <span className="font-bold text-zinc-800 block">From Festac / Mile 2 / Ago Palace:</span>
                    <p className="text-[11px] leading-relaxed text-zinc-500">
                      Drive through Okota / Cele bus-stop toward the Isolo expressway corridor. Follow the service lane directly into the industrial zone.
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
    </div>
  );
};
