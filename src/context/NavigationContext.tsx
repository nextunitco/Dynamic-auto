import React, { createContext, useContext, useState, useEffect } from 'react';

export type PageId = 'home' | 'about' | 'services' | 'tyres' | 'contact';

interface NavigationContextType {
  currentPage: PageId;
  subTab?: string;
  navigateTo: (page: PageId, subTab?: string) => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const NavigationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Parse initial page from hash or pathname
  const getInitialPage = (): PageId => {
    const hash = window.location.hash.replace('#/', '').replace('#', '').toLowerCase();
    const path = window.location.pathname.replace('/', '').toLowerCase();
    const candidate = hash || path;

    if (candidate.startsWith('about')) return 'about';
    if (candidate.startsWith('service')) return 'services';
    if (candidate.startsWith('tyre') || candidate.startsWith('offer') || candidate.startsWith('product')) return 'tyres';
    if (candidate.startsWith('contact')) return 'contact';
    return 'home';
  };

  const [currentPage, setCurrentPage] = useState<PageId>(getInitialPage());
  const [subTab, setSubTab] = useState<string | undefined>(undefined);

  const navigateTo = (page: PageId, tab?: string) => {
    setCurrentPage(page);
    setSubTab(tab);
    window.location.hash = `#/${page}${tab ? `?tab=${tab}` : ''}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#/', '').replace('#', '').toLowerCase();
      if (!hash) {
        setCurrentPage('home');
        return;
      }
      const [pagePart, queryPart] = hash.split('?');
      if (['home', 'about', 'services', 'tyres', 'contact'].includes(pagePart)) {
        setCurrentPage(pagePart as PageId);
      }
      if (queryPart && queryPart.includes('tab=')) {
        const tabVal = queryPart.split('tab=')[1]?.split('&')[0];
        setSubTab(tabVal);
      } else {
        setSubTab(undefined);
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <NavigationContext.Provider value={{ currentPage, subTab, navigateTo }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};
