import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageSquare } from 'lucide-react';
import { DYNAMIC_AUTO_INFO } from '../data/businessData';

export type PageId = 'home' | 'about' | 'services' | 'contact';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isHome = currentPage === 'home';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleLinkClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // On home page, before scroll: transparent with white text
  // Scrolled OR inner pages: solid white with dark blue text
  const isTransparent = isHome && !isScrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isTransparent
          ? 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-4 border-b border-white/10'
          : 'bg-white/98 backdrop-blur-md shadow-sm py-3 border-b border-slate-200'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        
        {/* Brand: Official Dynamic Auto Logo */}
        <button
          onClick={() => handleLinkClick('home')}
          className="flex items-center gap-3 text-left focus:outline-none cursor-pointer group"
          aria-label="Dynamic Auto Home"
        >
          <img
            src={DYNAMIC_AUTO_INFO.logo}
            alt="Dynamic Auto Official Logo"
            className="w-10 h-10 object-contain rounded bg-white p-0.5 shadow-xs shrink-0"
          />
          <div>
            <span
              className={`text-lg font-bold tracking-tight block leading-tight font-heading transition-colors ${
                isTransparent ? 'text-white' : 'text-[#062B63]'
              }`}
            >
              Dynamic Auto
            </span>
            <span
              className={`text-[11px] font-medium block leading-none transition-colors ${
                isTransparent ? 'text-slate-300' : 'text-slate-500'
              }`}
            >
              Isolo, Lagos
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => {
            const isActive = currentPage === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`text-sm font-medium transition-colors cursor-pointer py-1 relative ${
                  isActive
                    ? isTransparent
                      ? 'text-[#F97316] font-semibold'
                      : 'text-[#0B3D91] font-semibold'
                    : isTransparent
                    ? 'text-white/90 hover:text-white'
                    : 'text-[#172033] hover:text-[#0B3D91]'
                }`}
              >
                {link.label}
                {isActive && (
                  <span
                    className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-full ${
                      isTransparent ? 'bg-[#F97316]' : 'bg-[#0B3D91]'
                    }`}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right Phone & Orange CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href={`tel:${DYNAMIC_AUTO_INFO.phone}`}
            className={`text-xs font-semibold flex items-center gap-1.5 transition-colors ${
              isTransparent ? 'text-white/90 hover:text-white' : 'text-slate-600 hover:text-[#0B3D91]'
            }`}
          >
            <Phone className={`w-3.5 h-3.5 ${isTransparent ? 'text-[#F97316]' : 'text-[#0B3D91]'}`} />
            <span>{DYNAMIC_AUTO_INFO.phoneDisplay}</span>
          </a>
          <button
            onClick={() => handleLinkClick('contact')}
            className="px-4 py-2 text-xs font-semibold text-white bg-[#F97316] hover:bg-[#EA580C] rounded-md transition-colors shadow-xs cursor-pointer"
          >
            Contact Us
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={() => handleLinkClick('contact')}
            className="px-3 py-1.5 text-xs font-semibold text-white bg-[#F97316] hover:bg-[#EA580C] rounded-md transition-colors"
          >
            Contact
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 rounded-md transition-colors focus:outline-none ${
              isTransparent
                ? 'text-white hover:bg-white/10'
                : 'text-slate-700 hover:text-[#0B3D91] hover:bg-slate-100'
            }`}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-200 px-4 pt-3 pb-5 space-y-1.5 shadow-xl text-[#172033]">
          <div className="flex items-center gap-2.5 pb-2 mb-2 border-b border-slate-100">
            <img
              src={DYNAMIC_AUTO_INFO.logo}
              alt="Dynamic Auto Logo"
              className="w-8 h-8 object-contain rounded p-0.5 bg-slate-50"
            />
            <span className="font-bold text-sm text-[#062B63]">
              Dynamic Auto
            </span>
          </div>

          {navLinks.map((link) => {
            const isActive = currentPage === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-blue-50 text-[#0B3D91] font-semibold'
                    : 'text-[#172033] hover:bg-slate-50'
                }`}
              >
                {link.label}
              </button>
            );
          })}

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <a
              href={`https://wa.me/${DYNAMIC_AUTO_INFO.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 py-2 text-xs font-semibold text-[#0B3D91] bg-blue-50 hover:bg-blue-100 rounded-md transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#0B3D91]" />
              Chat on WhatsApp
            </a>
            <a
              href={`tel:${DYNAMIC_AUTO_INFO.phone}`}
              className="flex items-center justify-center gap-2 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-md transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-slate-600" />
              Call {DYNAMIC_AUTO_INFO.phoneDisplay}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
