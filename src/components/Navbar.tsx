import React, { useState } from 'react';
import { Phone, MessageSquare, Menu, X, ArrowUpRight, Wrench, Shield, Clock, MapPin } from 'lucide-react';
import { DYNAMIC_AUTO_INFO } from '../data/businessData';

export type PageId = 'home' | 'services' | 'tyres' | 'workshop' | 'booking' | 'contact';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenBookingModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenBookingModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'tyres', label: 'Tyre Centre' },
    { id: 'workshop', label: 'Our Workshop' },
    { id: 'booking', label: 'Cost Estimator' },
    { id: 'contact', label: 'Contact & Location' },
  ];

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-zinc-200">
      {/* Top micro bar for direct contact & location info */}
      <div className="bg-zinc-50 border-b border-zinc-200 text-xs text-zinc-600 hidden md:block">
        <div className="max-w-6xl mx-auto px-4 py-1.5 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-orange-500" />
              Plot 12, Isolo Expressway, Lagos
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-zinc-400" />
              Mon – Sat: 8:00 AM – 6:00 PM
            </span>
          </div>
          <div className="flex items-center gap-5">
            <a
              href={`tel:${DYNAMIC_AUTO_INFO.phone}`}
              className="hover:text-orange-600 flex items-center gap-1 font-medium transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-orange-500" />
              {DYNAMIC_AUTO_INFO.phoneDisplay}
            </a>
            <span className="text-zinc-300">|</span>
            <a
              href={`https://wa.me/${DYNAMIC_AUTO_INFO.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="hover:text-orange-600 flex items-center gap-1 font-medium text-orange-600 transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              WhatsApp Helpdesk
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          
          {/* Brand Logo & Name */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left focus:outline-none cursor-pointer group"
          >
            <div className="w-9 h-9 rounded-lg bg-zinc-900 text-white flex items-center justify-center font-bold text-sm tracking-tight group-hover:bg-orange-600 transition-colors">
              DA
            </div>
            <div>
              <span className="text-lg font-bold tracking-tight text-zinc-900 block leading-tight">
                Dynamic Auto <span className="text-orange-600">&amp;</span> Tyre
              </span>
              <span className="text-[11px] text-zinc-500 font-medium block">
                Professional Workshop · Isolo, Lagos
              </span>
            </div>
          </button>

          {/* Clean Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`transition-colors cursor-pointer relative py-1 text-sm ${
                    isActive
                      ? 'text-orange-600 font-semibold'
                      : 'text-zinc-600 hover:text-zinc-900'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-600 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Quick CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenBookingModal}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-orange-500 hover:bg-orange-600 rounded-md transition-colors shadow-xs cursor-pointer"
            >
              Book Service
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={onOpenBookingModal}
              className="px-3 py-1.5 text-xs font-semibold text-white bg-orange-500 hover:bg-orange-600 rounded-md transition-colors"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-zinc-700 hover:text-zinc-900 hover:bg-zinc-100 rounded-md transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-zinc-200 px-4 pt-2 pb-6 space-y-2">
          {navLinks.map((link) => {
            const isActive = currentPage === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`w-full text-left px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-orange-50 text-orange-600 font-semibold'
                    : 'text-zinc-700 hover:bg-zinc-50'
                }`}
              >
                {link.label}
              </button>
            );
          })}
          <div className="pt-3 border-t border-zinc-100 flex flex-col gap-2">
            <a
              href={`tel:${DYNAMIC_AUTO_INFO.phone}`}
              className="flex items-center justify-center gap-2 py-2 px-3 text-xs font-semibold text-zinc-700 bg-zinc-100 hover:bg-zinc-200 rounded-md"
            >
              <Phone className="w-3.5 h-3.5 text-orange-500" />
              Call {DYNAMIC_AUTO_INFO.phoneDisplay}
            </a>
            <a
              href={`https://wa.me/${DYNAMIC_AUTO_INFO.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 py-2 px-3 text-xs font-semibold text-white bg-green-600 hover:bg-green-700 rounded-md"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              WhatsApp Workshop Desk
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
