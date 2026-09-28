import React from 'react';
import { Phone, Mail, MessageCircle, Clock, ChevronRight, BookOpen, ShieldCheck, Star } from 'lucide-react';
import { DYNAMIC_AUTO_INFO } from '../data/dynamicAutoData';
import { Logo } from './Logo';
import { useNavigation } from '../context/NavigationContext';

import { FacebookBadgeIcon, InstagramBadgeIcon } from './SocialIcons';

interface FooterProps {
  onOpenBooking: (service?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  const { navigateTo } = useNavigation();

  return (
    <footer className="bg-[#1c2029] border-t border-neutral-800 text-neutral-300 text-xs text-left relative overflow-hidden">
      
      {/* Subtle background glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#4883ff]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        
        {/* WordPress Widgetized 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 items-start">
          
          {/* Column 1: Brand, Mission & Accreditation Badge (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <button 
              onClick={() => navigateTo('home')}
              className="cursor-pointer focus:outline-none"
            >
              <Logo variant="dark" />
            </button>

            <p className="text-xs text-neutral-400 leading-relaxed pr-2">
              Lagos' No. 1 automotive &amp; tyres centre. Computerized diagnostics, manufacturer-standard servicing, MOT roadworthiness tests, and guaranteed tyres with our legal-life defect guarantee at Oyemat House, Isolo.
            </p>

            {/* WordPress Trust Seal Badge */}
            <div className="inline-flex items-center gap-2 p-2 bg-neutral-900 border border-neutral-800 rounded-xl text-[11px] text-neutral-300">
              <ShieldCheck className="w-4 h-4 text-[#4883ff] shrink-0" />
              <span>Certified Bosch Diagnostic Partner &amp; MOT Centre</span>
            </div>

            <div className="text-[11px] text-neutral-400">
              <span className="text-white font-bold block mb-0.5">Facility Location:</span>
              <span>{DYNAMIC_AUTO_INFO.address}</span>
            </div>
          </div>

          {/* Column 2: WordPress "Auto Care Tips & Articles" Widget (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-display font-bold text-white uppercase tracking-wider border-b border-[#4883ff]/50 pb-1.5 inline-block">
              Auto Care Tips &amp; Insights
            </h4>
            
            <div className="space-y-3 pt-1">
              <div 
                onClick={() => navigateTo('services', 'intervals')}
                className="group cursor-pointer block"
              >
                <span className="text-[10px] text-[#4883ff] font-semibold block mb-0.5">MAINTENANCE GUIDE</span>
                <span className="text-xs text-neutral-300 group-hover:text-[#4883ff] transition-colors font-medium block leading-snug">
                  Interim vs Full Service: What your car needs in Lagos
                </span>
              </div>

              <div 
                onClick={() => navigateTo('services', 'battery')}
                className="group cursor-pointer block"
              >
                <span className="text-[10px] text-[#4883ff] font-semibold block mb-0.5">BATTERY CARE</span>
                <span className="text-xs text-neutral-300 group-hover:text-[#4883ff] transition-colors font-medium block leading-snug">
                  Why cranking amperage drops &amp; how to prevent flat batteries
                </span>
              </div>

              <div 
                onClick={() => navigateTo('tyres')}
                className="group cursor-pointer block"
              >
                <span className="text-[10px] text-[#4883ff] font-semibold block mb-0.5">TYRE SAFETY</span>
                <span className="text-xs text-neutral-300 group-hover:text-[#4883ff] transition-colors font-medium block leading-snug">
                  Lifetime Mileage Guarantee: How your warranty works
                </span>
              </div>
            </div>
          </div>

          {/* Column 3: Quick Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-display font-bold text-white uppercase tracking-wider border-b border-[#4883ff]/50 pb-1.5 inline-block">
              Site Navigation
            </h4>
            <ul className="space-y-2 pt-1">
              <li>
                <button 
                  onClick={() => navigateTo('home')}
                  className="hover:text-[#4883ff] transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <ChevronRight className="w-3 h-3 text-[#4883ff]" />
                  <span>Home Page</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateTo('about')}
                  className="hover:text-[#4883ff] transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <ChevronRight className="w-3 h-3 text-[#4883ff]" />
                  <span>About Us</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateTo('services')}
                  className="hover:text-[#4883ff] transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <ChevronRight className="w-3 h-3 text-[#4883ff]" />
                  <span>Services &amp; MOT</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateTo('tyres')}
                  className="hover:text-[#4883ff] transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <ChevronRight className="w-3 h-3 text-[#4883ff]" />
                  <span>Tyres &amp; Brands</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateTo('contact')}
                  className="hover:text-[#4883ff] transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <ChevronRight className="w-3 h-3 text-[#4883ff]" />
                  <span>Contact &amp; Map</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Direct Workshop Contact (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-display font-bold text-white uppercase tracking-wider border-b border-[#4883ff]/50 pb-1.5 inline-block">
              Workshop Contact
            </h4>
            
            <div className="space-y-2 text-xs text-neutral-300 pt-1">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#4883ff] shrink-0" />
                <a href={`tel:${DYNAMIC_AUTO_INFO.phonePrimaryRaw}`} className="text-white hover:text-[#4883ff] font-bold">
                  {DYNAMIC_AUTO_INFO.phonePrimary}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <a 
                  href={`https://wa.me/2349126983699?text=${encodeURIComponent("Hello Dynamic Auto, I would like to inquire about services.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:underline font-bold"
                >
                  WhatsApp: {DYNAMIC_AUTO_INFO.whatsappDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#4883ff] shrink-0" />
                <a href={`mailto:${DYNAMIC_AUTO_INFO.emailPrimary}`} className="hover:text-white">
                  {DYNAMIC_AUTO_INFO.emailPrimary}
                </a>
              </div>
              <div className="flex items-center gap-2 text-neutral-400 pt-0.5">
                <Clock className="w-3.5 h-3.5 text-[#4883ff] shrink-0" />
                <span>Mon – Sat: 8:00 AM – 6:00 PM</span>
              </div>
            </div>

            {/* Socials with authentic logos */}
            <div className="pt-2 flex flex-wrap items-center gap-2.5">
              <a
                href={DYNAMIC_AUTO_INFO.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-neutral-900 border border-neutral-700 hover:border-[#1877F2] text-neutral-200 hover:text-white transition-all text-xs font-semibold group shadow-xs"
                title="Follow Dynamic Auto on Facebook"
              >
                <FacebookBadgeIcon className="w-4 h-4 shrink-0 group-hover:scale-110 transition-transform" />
                <span>Facebook</span>
              </a>
              <a
                href={DYNAMIC_AUTO_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-neutral-900 border border-neutral-700 hover:border-[#e1306c] text-neutral-200 hover:text-white transition-all text-xs font-semibold group shadow-xs"
                title="Follow Dynamic Auto on Instagram"
              >
                <InstagramBadgeIcon className="w-4 h-4 shrink-0 group-hover:scale-110 transition-transform" />
                <span>Instagram</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Credits & Copyright */}
        <div className="mt-12 pt-6 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-neutral-400">
          <p>
            Copyright &copy; 2026 Dynamic Auto &amp; Tyre Center. All rights reserved.
          </p>
          <div className="flex items-center gap-1.5">
            <span>Created by</span>
            <span className="text-white font-bold tracking-wide hover:text-[#4883ff] transition-colors">Nexunit</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
