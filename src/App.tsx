import React, { useState, useEffect } from 'react';
import { NavigationProvider, useNavigation } from './context/NavigationContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { TyresPage } from './pages/TyresPage';
import { ContactPage } from './pages/ContactPage';
import { MessageCircle, ArrowUp } from 'lucide-react';

function AppContent() {
  const { currentPage } = useNavigation();
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [bookingPrefill, setBookingPrefill] = useState<{
    service?: string;
    phone?: string;
    name?: string;
    code?: string;
  }>({});

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openBooking = (service?: string, phone?: string, name?: string, code?: string) => {
    setBookingPrefill({ service, phone, name, code });
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#fcfcfd] text-[#232323] flex flex-col font-sans selection:bg-[#4883ff] selection:text-white relative">
      
      {/* 1. Global Multi-Page Navigation Bar */}
      <Navbar onOpenBooking={(service) => openBooking(service)} />

      {/* 2. Main Page Content View with smooth opacity transition */}
      <main className="flex-1 animate-in fade-in duration-200">
        {currentPage === 'home' && (
          <HomePage onOpenBooking={(svc) => openBooking(svc)} />
        )}
        {currentPage === 'about' && (
          <AboutPage onOpenBooking={(svc) => openBooking(svc)} />
        )}
        {currentPage === 'services' && (
          <ServicesPage onOpenBooking={(svc) => openBooking(svc)} />
        )}
        {currentPage === 'tyres' && (
          <TyresPage onOpenBooking={(svc, code) => openBooking(svc, undefined, undefined, code)} />
        )}
        {currentPage === 'contact' && (
          <ContactPage />
        )}
      </main>

      {/* 3. Global Multi-Page Footer */}
      <Footer onOpenBooking={(service) => openBooking(service)} />

      {/* 4. Service Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialService={bookingPrefill.service}
        initialPhone={bookingPrefill.phone}
        initialName={bookingPrefill.name}
        initialCode={bookingPrefill.code}
      />

      {/* 5. Classic WordPress Floating Widgets (Back to Top + WhatsApp with Pulse Ring) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center gap-3">
        {/* WordPress Back to Top Floating Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-white border border-[#dddddd] hover:border-[#4883ff] text-[#232323] hover:text-[#4883ff] flex items-center justify-center shadow-lg transition-all hover:-translate-y-1 cursor-pointer animate-in fade-in slide-in-from-bottom-2 duration-300"
            title="Scroll to top"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}

        {/* WhatsApp with Pulsing Radar Ring */}
        <div className="relative">
          <span className="absolute -inset-1 rounded-full bg-emerald-500 opacity-60 animate-ping pointer-events-none" />
          <a
            href={`https://wa.me/2349126983699?text=${encodeURIComponent("Hello Dynamic Auto & Tyre Centre, I would like to inquire about automotive services.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="relative w-12 h-12 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-xl shadow-emerald-500/30 hover:scale-105 active:scale-95 transition-all group cursor-pointer"
            title="Chat with Dynamic Auto on WhatsApp"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
          </a>
        </div>
      </div>

    </div>
  );
}

export default function App() {
  return (
    <NavigationProvider>
      <AppContent />
    </NavigationProvider>
  );
}
