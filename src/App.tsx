import React, { useState, useEffect } from 'react';
import { Navbar, PageId } from './components/Navbar';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { TyresPage } from './pages/TyresPage';
import { WorkshopPage } from './pages/WorkshopPage';
import { BookingPage } from './pages/BookingPage';
import { ContactPage } from './pages/ContactPage';
import { DYNAMIC_AUTO_INFO } from './data/businessData';
import { MessageSquare, ArrowUpRight } from 'lucide-react';

function getPageFromHash(): PageId {
  const hash = window.location.hash.replace('#/', '').replace('#', '').trim();
  const validPages: PageId[] = ['home', 'services', 'tyres', 'workshop', 'booking', 'contact'];
  if (validPages.includes(hash as PageId)) {
    return hash as PageId;
  }
  return 'home';
}

export function App() {
  const [currentPage, setCurrentPage] = useState<PageId>(getPageFromHash);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [bookingInitialService, setBookingInitialService] = useState<string | undefined>(undefined);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPage(getPageFromHash());
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '#/' : `#/${page}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenBookingModal = (serviceId?: string) => {
    setBookingInitialService(serviceId);
    setIsBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-zinc-900 selection:bg-orange-500 selection:text-white flex flex-col font-sans">
      
      {/* Top Navbar */}
      <Navbar 
        currentPage={currentPage} 
        onNavigate={handleNavigate}
        onOpenBookingModal={() => handleOpenBookingModal()}
      />

      {/* Dynamic Multi-Page Router View */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage 
            onNavigate={handleNavigate} 
            onOpenBookingModal={handleOpenBookingModal} 
          />
        )}

        {currentPage === 'services' && (
          <ServicesPage 
            onNavigate={handleNavigate} 
            onOpenBookingModal={handleOpenBookingModal} 
          />
        )}

        {currentPage === 'tyres' && (
          <TyresPage 
            onNavigate={handleNavigate} 
            onOpenBookingModal={handleOpenBookingModal} 
          />
        )}

        {currentPage === 'workshop' && (
          <WorkshopPage 
            onNavigate={handleNavigate} 
            onOpenBookingModal={handleOpenBookingModal} 
          />
        )}

        {currentPage === 'booking' && (
          <BookingPage 
            onNavigate={handleNavigate} 
            initialServiceId={bookingInitialService} 
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage 
            onNavigate={handleNavigate} 
          />
        )}
      </main>

      {/* Clean Global Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Global Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        defaultServiceId={bookingInitialService}
      />

      {/* Floating WhatsApp Action Button */}
      <a
        href={`https://wa.me/${DYNAMIC_AUTO_INFO.whatsapp}`}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-5 z-40 bg-zinc-900 hover:bg-orange-600 text-white px-3.5 py-2.5 rounded-full shadow-lg border border-zinc-700/50 flex items-center gap-2 transition-all duration-200 hover:scale-105 group text-xs font-semibold"
        aria-label="Chat with Dynamic Auto on WhatsApp"
      >
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <MessageSquare className="w-3.5 h-3.5 fill-current text-emerald-400" />
        <span>WhatsApp Desk</span>
        <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
      </a>

    </div>
  );
}

export default App;
