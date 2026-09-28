import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Menu, 
  X, 
  Calendar 
} from 'lucide-react';
import { DYNAMIC_AUTO_INFO } from '../data/dynamicAutoData';
import { Logo } from './Logo';
import { useNavigation, PageId } from '../context/NavigationContext';

interface NavbarProps {
  onOpenBooking: (prefillService?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const { currentPage, navigateTo } = useNavigation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (page: PageId) => {
    setMobileMenuOpen(false);
    navigateTo(page);
  };

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Main Clean Multi-Page Navigation Bar */}
      <nav className={`w-full transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/98 backdrop-blur-md shadow-md shadow-black/5 border-b border-[#dddddd] py-2.5 text-[#232323]' 
          : 'bg-white/95 backdrop-blur-sm border-b border-[#dddddd]/80 py-3 text-[#232323]'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          
          {/* Logo Branding -> Returns to Home */}
          <button 
            onClick={() => handleNavClick('home')} 
            className="cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4883ff] rounded-lg"
          >
            <Logo variant="light" />
          </button>

          {/* Multi-Page Navigation Links */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            <button
              onClick={() => handleNavClick('home')}
              className={`px-3 py-1.5 text-sm font-semibold transition-colors rounded-lg cursor-pointer ${
                currentPage === 'home' ? 'text-[#4883ff] bg-[#edf3ff]' : 'text-[#232323] hover:text-[#4883ff] hover:bg-neutral-50'
              }`}
            >
              Home
            </button>

            <button
              onClick={() => handleNavClick('about')}
              className={`px-3 py-1.5 text-sm font-semibold transition-colors rounded-lg cursor-pointer ${
                currentPage === 'about' ? 'text-[#4883ff] bg-[#edf3ff]' : 'text-[#232323] hover:text-[#4883ff] hover:bg-neutral-50'
              }`}
            >
              About Us
            </button>

            <button
              onClick={() => handleNavClick('services')}
              className={`px-3 py-1.5 text-sm font-semibold transition-colors rounded-lg cursor-pointer ${
                currentPage === 'services' ? 'text-[#4883ff] bg-[#edf3ff]' : 'text-[#232323] hover:text-[#4883ff] hover:bg-neutral-50'
              }`}
            >
              Services
            </button>

            <button
              onClick={() => handleNavClick('tyres')}
              className={`px-3 py-1.5 text-sm font-semibold transition-colors rounded-lg cursor-pointer ${
                currentPage === 'tyres' ? 'text-[#4883ff] bg-[#edf3ff]' : 'text-[#232323] hover:text-[#4883ff] hover:bg-neutral-50'
              }`}
            >
              Tyres &amp; Offers
            </button>

            <button
              onClick={() => handleNavClick('contact')}
              className={`px-3 py-1.5 text-sm font-semibold transition-colors rounded-lg cursor-pointer ${
                currentPage === 'contact' ? 'text-[#4883ff] bg-[#edf3ff]' : 'text-[#232323] hover:text-[#4883ff] hover:bg-neutral-50'
              }`}
            >
              Contact
            </button>
          </div>

          {/* Primary Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => onOpenBooking()}
              className="inline-flex items-center gap-2 px-4.5 py-2 text-sm font-bold text-white bg-[#4883ff] hover:bg-[#3470e8] active:scale-98 transition-all rounded-xl shadow-md shadow-[#4883ff]/20 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => onOpenBooking()}
              className="px-3 py-1.5 text-xs font-bold text-white bg-[#4883ff] hover:bg-[#3470e8] rounded-lg shadow-sm"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-[#232323] hover:bg-neutral-100 rounded-lg focus:outline-none cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Multi-Page Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[#dddddd] bg-white px-4 py-3 space-y-1 shadow-lg text-left">
            <button
              onClick={() => handleNavClick('home')}
              className={`w-full text-left px-3 py-2 text-sm font-semibold rounded-lg ${
                currentPage === 'home' ? 'text-[#4883ff] bg-[#edf3ff]' : 'text-[#232323] hover:bg-[#edf3ff]'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className={`w-full text-left px-3 py-2 text-sm font-semibold rounded-lg ${
                currentPage === 'about' ? 'text-[#4883ff] bg-[#edf3ff]' : 'text-[#232323] hover:bg-[#edf3ff]'
              }`}
            >
              About Us
            </button>
            <button
              onClick={() => handleNavClick('services')}
              className={`w-full text-left px-3 py-2 text-sm font-semibold rounded-lg ${
                currentPage === 'services' ? 'text-[#4883ff] bg-[#edf3ff]' : 'text-[#232323] hover:bg-[#edf3ff]'
              }`}
            >
              Services (Workshop, Intervals, Battery)
            </button>
            <button
              onClick={() => handleNavClick('tyres')}
              className={`w-full text-left px-3 py-2 text-sm font-semibold rounded-lg ${
                currentPage === 'tyres' ? 'text-[#4883ff] bg-[#edf3ff]' : 'text-[#232323] hover:bg-[#edf3ff]'
              }`}
            >
              Tyres &amp; Seasonal Offers
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className={`w-full text-left px-3 py-2 text-sm font-semibold rounded-lg ${
                currentPage === 'contact' ? 'text-[#4883ff] bg-[#edf3ff]' : 'text-[#232323] hover:bg-[#edf3ff]'
              }`}
            >
              Contact Us &amp; Workshop Map
            </button>

            <div className="pt-2 border-t border-[#dddddd] flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-2 text-center text-xs font-bold text-white bg-[#4883ff] hover:bg-[#3470e8] rounded-lg shadow cursor-pointer"
              >
                Book An Appointment
              </button>
              <a
                href={`tel:${DYNAMIC_AUTO_INFO.phonePrimaryRaw}`}
                className="w-full py-2 text-center text-xs font-semibold text-[#232323] bg-[#f4f4f4] rounded-lg flex items-center justify-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-[#4883ff]" />
                <span>Call {DYNAMIC_AUTO_INFO.phonePrimary}</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
