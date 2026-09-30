import React from 'react';
import { PageId } from './Navbar';
import { DYNAMIC_AUTO_INFO, SERVICES_LIST } from '../data/businessData';
import { MapPin, Phone, Mail, Clock, MessageSquare, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#062B63] text-slate-300 text-sm border-t border-blue-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-10 mb-10">
          
          {/* Brand Info with Official Logo */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={DYNAMIC_AUTO_INFO.logo}
                alt="Dynamic Auto Official Logo"
                className="w-10 h-10 object-contain rounded bg-white p-0.5 shadow-xs"
              />
              <span className="font-bold text-lg text-white font-heading">
                Dynamic Auto
              </span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Professional automotive maintenance, computer diagnostics, 3D laser wheel alignment, genuine tyres, and quality inspected vehicles in Isolo, Lagos.
            </p>
            <p className="text-xs font-semibold text-[#F97316]">
              Plot 12, Isolo Expressway, Lagos
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 border-b border-white/10 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="hover:text-white transition-colors cursor-pointer text-slate-300"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="hover:text-white transition-colors cursor-pointer text-slate-300"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-white transition-colors cursor-pointer text-slate-300"
                >
                  Automotive Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="hover:text-white transition-colors cursor-pointer text-slate-300"
                >
                  Contact &amp; Location
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 border-b border-white/10 pb-2">
              Our Services
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              {SERVICES_LIST.map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => handleNav('services')}
                    className="hover:text-white transition-colors text-left cursor-pointer"
                  >
                    {s.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 border-b border-white/10 pb-2">
              Contact
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-[#F97316] shrink-0 mt-0.5" />
                <span>{DYNAMIC_AUTO_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-3.5 h-3.5 text-[#F97316] shrink-0" />
                <a href={`tel:${DYNAMIC_AUTO_INFO.phone}`} className="hover:text-white font-medium text-white">
                  {DYNAMIC_AUTO_INFO.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-3.5 h-3.5 text-[#F97316] shrink-0" />
                <a href={`mailto:${DYNAMIC_AUTO_INFO.email}`} className="hover:text-white">
                  {DYNAMIC_AUTO_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span>{DYNAMIC_AUTO_INFO.hours}</span>
              </div>
              <div className="pt-3">
                <a
                  href={`https://wa.me/${DYNAMIC_AUTO_INFO.whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-green-600 hover:bg-green-700 text-white text-xs font-semibold transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  Chat on WhatsApp
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <p>© 2026 Dynamic Auto. All Rights Reserved.</p>
          <p>Plot 12, Isolo Expressway Industrial Zone, Lagos, Nigeria</p>
        </div>
      </div>
    </footer>
  );
};
