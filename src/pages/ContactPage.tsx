import React, { useState } from 'react';
import { PageId } from '../components/Navbar';
import { PageHero } from '../components/PageHero';
import { DYNAMIC_AUTO_INFO, PAGE_HERO_IMAGES } from '../data/businessData';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  Navigation,
  ArrowUpRight 
} from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    setIsSubmitted(true);
  };

  return (
    <div className="bg-[#F5F8FC]">
      
      {/* 1. VEHICLE IMAGE HEADER (300-400px with dark blue overlay) */}
      <PageHero
        title="CONTACT DYNAMIC AUTO"
        subtitle="Located along Plot 12, Isolo Expressway Industrial Zone, Lagos. Reach out for service reservations, diagnostics, or vehicle viewings."
        backgroundImage={PAGE_HERO_IMAGES.contact}
        currentPageName="Contact"
        onNavigate={onNavigate}
      />

      {/* 2. CONTACT DETAILS & FORM */}
      <section className="py-14 sm:py-18">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* LEFT: Get In Touch */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-bold text-[#0B3D91] uppercase tracking-wider">
                  VISIT OR CALL
                </span>
                <h2 className="text-2xl font-extrabold text-[#062B63] mt-1 font-heading">
                  Get In Touch
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  Have a question regarding your car, maintenance booking, or vehicle inspection? Reach out directly using our verified workshop details.
                </p>
              </div>

              {/* Verified Contact Details Card */}
              <div className="bg-white rounded-lg border border-slate-200 p-6 space-y-4 shadow-xs text-xs text-slate-600">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#0B3D91] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#172033] block">Workshop Address</span>
                    <span>{DYNAMIC_AUTO_INFO.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#0B3D91] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#172033] block">Telephone</span>
                    <a href={`tel:${DYNAMIC_AUTO_INFO.phone}`} className="text-[#0B3D91] hover:underline font-semibold text-sm">
                      {DYNAMIC_AUTO_INFO.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#0B3D91] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#172033] block">Email Address</span>
                    <a href={`mailto:${DYNAMIC_AUTO_INFO.email}`} className="text-[#0B3D91] hover:underline">
                      {DYNAMIC_AUTO_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#0B3D91] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#172033] block">Business Hours</span>
                    <span>{DYNAMIC_AUTO_INFO.hours}</span>
                    <span className="text-[11px] text-slate-400 block mt-0.5">Sunday: {DYNAMIC_AUTO_INFO.sunday}</span>
                  </div>
                </div>
              </div>

              {/* Prominent CHAT ON WHATSAPP button */}
              <a
                href={`https://wa.me/${DYNAMIC_AUTO_INFO.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3.5 text-xs font-bold text-white bg-green-600 hover:bg-green-700 rounded-md transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                <MessageSquare className="w-4 h-4" />
                CHAT ON WHATSAPP
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              {/* Landmark Driving Directions */}
              <div className="bg-white rounded-lg border border-slate-200 p-5 space-y-2 text-xs">
                <div className="flex items-center gap-1.5 font-bold text-[#062B63]">
                  <Navigation className="w-4 h-4 text-[#0B3D91]" />
                  <span>Landmark Driving Directions</span>
                </div>
                <div className="space-y-2 text-slate-600 pt-1 text-[11px] leading-relaxed">
                  <p>
                    <strong>From Oshodi / Ikeja / Airport:</strong> Take the Oshodi-Apapa Expressway toward Cele bus stop. Take the service lane exit into the Isolo industrial corridor. Plot 12 is on the main access way.
                  </p>
                  <p>
                    <strong>From Festac / Mile 2 / Ago Palace:</strong> Drive via Okota / Cele toward the Isolo corridor.
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT: Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-lg border border-slate-200 p-6 sm:p-8 shadow-xs">
                <h3 className="text-xl font-bold text-[#062B63] font-heading mb-1">
                  Send Us a Message
                </h3>
                <p className="text-xs text-slate-500 mb-6">
                  Fill in your details below and our service desk will respond promptly.
                </p>

                {isSubmitted ? (
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center space-y-3">
                    <CheckCircle2 className="w-10 h-10 text-[#0B3D91] mx-auto" />
                    <h4 className="text-base font-bold text-[#062B63]">
                      Message Received
                    </h4>
                    <p className="text-xs text-slate-600 max-w-sm mx-auto">
                      Thank you, <strong>{name}</strong>. Your message regarding &quot;{subject || 'General Inquiry'}&quot; has been received by our workshop desk.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="mt-2 text-xs font-semibold text-[#0B3D91] hover:underline cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name */}
                      <div>
                        <label className="block font-semibold text-[#172033] mb-1">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Babatunde Fashina"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full bg-[#F5F8FC] border border-slate-300 rounded px-3 py-2.5 text-xs text-[#172033] focus:outline-none focus:border-[#0B3D91]"
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block font-semibold text-[#172033] mb-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          placeholder="e.g. babatunde@example.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full bg-[#F5F8FC] border border-slate-300 rounded px-3 py-2.5 text-xs text-[#172033] focus:outline-none focus:border-[#0B3D91]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Phone */}
                      <div>
                        <label className="block font-semibold text-[#172033] mb-1">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="e.g. 0803 555 0192"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full bg-[#F5F8FC] border border-slate-300 rounded px-3 py-2.5 text-xs text-[#172033] focus:outline-none focus:border-[#0B3D91]"
                        />
                      </div>

                      {/* Subject */}
                      <div>
                        <label className="block font-semibold text-[#172033] mb-1">
                          Subject
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Wheel Alignment or Vehicle Inquiry"
                          value={subject}
                          onChange={(e) => setSubject(e.target.value)}
                          className="w-full bg-[#F5F8FC] border border-slate-300 rounded px-3 py-2.5 text-xs text-[#172033] focus:outline-none focus:border-[#0B3D91]"
                        />
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block font-semibold text-[#172033] mb-1">
                        Message *
                      </label>
                      <textarea
                        rows={5}
                        required
                        placeholder="Please describe your vehicle model, symptoms, or inquiry..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full bg-[#F5F8FC] border border-slate-300 rounded px-3 py-2.5 text-xs text-[#172033] focus:outline-none focus:border-[#0B3D91]"
                      />
                    </div>

                    {/* SEND MESSAGE button (Orange) */}
                    <button
                      type="submit"
                      className="w-full sm:w-auto px-7 py-3 text-xs font-bold text-white bg-[#F97316] hover:bg-[#EA580C] rounded-md transition-colors shadow-sm inline-flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5" />
                      SEND MESSAGE
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
