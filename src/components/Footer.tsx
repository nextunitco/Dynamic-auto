import React from 'react';
import { DYNAMIC_AUTO_INFO } from '../data/businessData';
import { PageId } from './Navbar';
import { Phone, MapPin, Clock, MessageSquare, ArrowUpRight, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-zinc-50 border-t border-zinc-200 text-zinc-600 text-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          
          {/* Brand Col */}
          <div className="md:col-span-1 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-zinc-900 text-white flex items-center justify-center font-bold text-sm">
                DA
              </div>
              <span className="font-bold text-zinc-900 text-base">
                Dynamic Auto <span className="text-orange-600">&amp;</span> Tyre
              </span>
            </div>
            <p className="text-xs text-zinc-500 leading-relaxed">
              Professional automotive diagnostics, precision 3D wheel alignment, and genuine manufacturer tyres in Isolo, Lagos.
            </p>
            <div className="flex items-center gap-2 text-xs text-zinc-700 font-medium pt-1">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Zero Fake Parts Guarantee</span>
            </div>
          </div>

          {/* Quick Pages Navigation */}
          <div>
            <h4 className="text-xs font-bold text-zinc-900 uppercase tracking-wider mb-3">
              Explore
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="hover:text-orange-600 transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-orange-600 transition-colors cursor-pointer"
                >
                  Auto Services &amp; Packages
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('tyres')}
                  className="hover:text-orange-600 transition-colors cursor-pointer"
                >
                  Tyre Centre &amp; Sizing
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('workshop')}
                  className="hover:text-orange-600 transition-colors cursor-pointer"
                >
                  Our Facility &amp; Equipment
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('booking')}
                  className="hover:text-orange-600 transition-colors cursor-pointer"
                >
                  Cost Estimator &amp; Booking
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="hover:text-orange-600 transition-colors cursor-pointer"
                >
                  Location &amp; Directions
                </button>
              </li>
            </ul>
          </div>

          {/* Popular Services */}
          <div>
            <h4 className="text-xs font-bold text-zinc-900 uppercase tracking-wider mb-3">
              Core Services
            </h4>
            <ul className="space-y-2 text-xs text-zinc-500">
              <li>Computerized Diagnostic Scan</li>
              <li>3D Laser Wheel Alignment</li>
              <li>Touchless Tyre Mounting &amp; Balancing</li>
              <li>OEM Ceramic Brake Pad Service</li>
              <li>Suspension &amp; Undercarriage Overhaul</li>
              <li>Synthetic Oil &amp; Filter Service</li>
            </ul>
          </div>

          {/* Workshop Contact & Hours */}
          <div>
            <h4 className="text-xs font-bold text-zinc-900 uppercase tracking-wider mb-3">
              Visit Workshop
            </h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                <span>{DYNAMIC_AUTO_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-zinc-400 shrink-0" />
                <span>{DYNAMIC_AUTO_INFO.hours}</span>
              </div>
              <div className="flex items-center gap-2 pt-1">
                <Phone className="w-4 h-4 text-zinc-400 shrink-0" />
                <a href={`tel:${DYNAMIC_AUTO_INFO.phone}`} className="hover:text-orange-600 font-medium">
                  {DYNAMIC_AUTO_INFO.phoneDisplay}
                </a>
              </div>
              <div className="pt-2">
                <a
                  href={`https://wa.me/${DYNAMIC_AUTO_INFO.whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-orange-600 hover:text-orange-700"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  Chat on WhatsApp Desk
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-zinc-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-500">
          <p>© {new Date().getFullYear()} Dynamic Auto &amp; Tyre Centre. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>Isolo, Lagos, Nigeria</span>
            <span>·</span>
            <span>Certified Diagnostic &amp; Alignment Centre</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
