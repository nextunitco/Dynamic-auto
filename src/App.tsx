import React, { useState, useEffect } from 'react';
import { Navbar, PageId } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ContactPage } from './pages/ContactPage';
import { DYNAMIC_AUTO_INFO } from './data/businessData';
import { MessageSquare, ArrowUpRight } from 'lucide-react';

function getPageFromHash(): PageId {
  const hash = window.location.hash.replace('#/', '').replace('#', '').trim();
  const validPages: PageId[] = ['home', 'about', 'services', 'contact'];
  if (validPages.includes(hash as PageId)) {
    return hash as PageId;
  }
  return 'home';
}

export function App() {
  const [currentPage, setCurrentPage] = useState<PageId>(getPageFromHash);

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

  return (
    <div className="min-h-screen bg-[#F5F8FC] text-[#172033] flex flex-col font-sans">
      
      {/* Top Professional Navigation */}
      <Navbar 
        currentPage={currentPage} 
        onNavigate={handleNavigate}
      />

      {/* Main Multi-Page View */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage 
            onNavigate={handleNavigate} 
          />
        )}

        {currentPage === 'about' && (
          <AboutPage 
            onNavigate={handleNavigate} 
          />
        )}

        {currentPage === 'services' && (
          <ServicesPage 
            onNavigate={handleNavigate} 
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage 
            onNavigate={handleNavigate} 
          />
        )}
      </main>

      {/* Clean Professional Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Floating WhatsApp Action Button */}
      <a
        href={`https://wa.me/${DYNAMIC_AUTO_INFO.whatsapp}`}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-5 z-40 bg-[#0B3D91] hover:bg-[#062B63] text-white px-3.5 py-2.5 rounded-full shadow-md border border-white/20 flex items-center gap-2 transition-all duration-200 hover:scale-105 group text-xs font-semibold"
        aria-label="Chat with Dynamic Auto on WhatsApp"
      >
        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
        <MessageSquare className="w-3.5 h-3.5 fill-current text-green-400" />
        <span>WhatsApp Desk</span>
        <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
      </a>

    </div>
  );
}

export default App;
