import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { ServicesSection } from './components/ServicesSection';
import { GalleryCarousel } from './components/GalleryCarousel';
import { ReviewsSection } from './components/ReviewsSection';
import { ServiceAreasSection } from './components/ServiceAreasSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { CallbackModal } from './components/CallbackModal';
import { StickyMobileBar } from './components/StickyMobileBar';
import { ServicePageBeeWasp } from './components/ServicePageBeeWasp';
import { ServicePageGeneralPest } from './components/ServicePageGeneralPest';
import { trackGoogleLeadConversion } from './utils/googleAds';

export type PageRoute = 'home' | 'bee-wasp-removal' | 'general-pest-control';

export function App() {
  const [currentRoute, setCurrentRoute] = useState<PageRoute>('home');
  const [callbackModalOpen, setCallbackModalOpen] = useState(false);
  const [selectedServiceForCallback, setSelectedServiceForCallback] = useState<string>('');

  // Routing synchronization helper: checks both pathname and hash for maximum reliability
  const getRouteFromUrl = (): PageRoute => {
    if (typeof window === 'undefined') return 'home';
    const path = window.location.pathname.toLowerCase();
    const hash = window.location.hash.toLowerCase();

    if (path.includes('bee-wasp') || hash.includes('bee-wasp')) {
      return 'bee-wasp-removal';
    }
    if (path.includes('general-pest') || hash.includes('general-pest')) {
      return 'general-pest-control';
    }
    return 'home';
  };

  // Synchronize on load and when browser back/forward or hash changes
  useEffect(() => {
    const handleUrlChange = () => {
      const detected = getRouteFromUrl();
      setCurrentRoute(detected);
    };

    window.addEventListener('popstate', handleUrlChange);
    window.addEventListener('hashchange', handleUrlChange);

    // Initial check on mount
    handleUrlChange();

    return () => {
      window.removeEventListener('popstate', handleUrlChange);
      window.removeEventListener('hashchange', handleUrlChange);
    };
  }, []);

  // Update dynamic page title for SEO & clarity
  useEffect(() => {
    if (currentRoute === 'bee-wasp-removal') {
      document.title = 'Bee & Wasp Nest Removal Melbourne | Same-Day Service | Legend Pest Control';
    } else if (currentRoute === 'general-pest-control') {
      document.title = 'General Pest Control Melbourne | 6-Month Warranty | Legend Pest Control';
    } else {
      document.title = 'Legend Pest Control Melbourne | Every pest problem, one legendary solution';
    }
  }, [currentRoute]);

  // Global Click-to-Dial Interceptor: Tracks any phone link clicked anywhere on the website
  useEffect(() => {
    const handleGlobalTelClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a[href^="tel:"]');
      if (target) {
        const phone = target.getAttribute('href')?.replace('tel:', '') || '0416388777';
        const buttonText = (target as HTMLElement).innerText?.trim() || 'Click to Dial';
        trackGoogleLeadConversion('phone_call', {
          label: `Phone Call: ${phone}`,
          source: buttonText,
        });
      }
    };

    document.addEventListener('click', handleGlobalTelClick, { capture: true });
    return () => {
      document.removeEventListener('click', handleGlobalTelClick, { capture: true });
    };
  }, []);

  const navigateTo = (route: PageRoute) => {
    setCurrentRoute(route);
    const newPath = route === 'home' ? '/' : `/services/${route}`;
    try {
      window.history.pushState(null, '', newPath);
    } catch {
      window.location.hash = route === 'home' ? '' : `/services/${route}`;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenCallback = (serviceName?: string) => {
    setSelectedServiceForCallback(serviceName || '');
    setCallbackModalOpen(true);
  };

  const handleCloseCallback = () => {
    setCallbackModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#121418] text-slate-900 antialiased selection:bg-[#DE744C] selection:text-white pb-20 sm:pb-0">
      {/* Navigation Header */}
      <Header
        onOpenCallback={handleOpenCallback}
        currentRoute={currentRoute}
        onNavigateHome={() => navigateTo('home')}
        onNavigateService={(serviceId) => {
          if (serviceId === 'bee-wasp-removal') navigateTo('bee-wasp-removal');
          else if (serviceId === 'general-pest-control') navigateTo('general-pest-control');
        }}
      />

      {/* Main Content Sections based on current route */}
      <main className="flex-1">
        {currentRoute === 'bee-wasp-removal' && (
          <ServicePageBeeWasp
            onOpenCallback={handleOpenCallback}
            onNavigateHome={() => navigateTo('home')}
            onNavigateService={(serviceId) => {
              if (serviceId === 'general-pest-control') navigateTo('general-pest-control');
            }}
          />
        )}

        {currentRoute === 'general-pest-control' && (
          <ServicePageGeneralPest
            onOpenCallback={handleOpenCallback}
            onNavigateHome={() => navigateTo('home')}
            onNavigateService={(serviceId) => {
              if (serviceId === 'bee-wasp-removal') navigateTo('bee-wasp-removal');
            }}
          />
        )}

        {currentRoute === 'home' && (
          <>
            {/* Hero Section */}
            <Hero onOpenCallback={handleOpenCallback} />

            {/* Credentials & Trust Bar */}
            <TrustBar />

            {/* Comprehensive Services Section (All 8 Services) */}
            <ServicesSection 
              onOpenCallback={handleOpenCallback}
            />

            {/* Authentic Field Gallery Carousel */}
            <GalleryCarousel />

            {/* Verified Customer Reviews */}
            <ReviewsSection />

            {/* Melbourne Service Areas (North, East, West, South) */}
            <ServiceAreasSection />

            {/* Homeowner FAQ Accordion */}
            <FaqSection onOpenCallback={() => handleOpenCallback()} />
          </>
        )}
      </main>

      {/* Footer */}
      <Footer
        hideCta={currentRoute !== 'home'}
        onOpenCallback={(serviceName) => handleOpenCallback(serviceName)}
        onNavigateHome={() => navigateTo('home')}
        onNavigateService={(serviceId) => {
          if (serviceId === 'bee-wasp-removal') navigateTo('bee-wasp-removal');
          else if (serviceId === 'general-pest-control') navigateTo('general-pest-control');
        }}
      />

      {/* Interactive Callback Modal */}
      <CallbackModal
        isOpen={callbackModalOpen}
        onClose={handleCloseCallback}
        defaultService={selectedServiceForCallback}
      />

      {/* Sticky Bottom Bar for Mobile Devices */}
      <StickyMobileBar onOpenCallback={() => handleOpenCallback(
        currentRoute === 'bee-wasp-removal' 
          ? 'Bee & Wasp Nest Removal' 
          : currentRoute === 'general-pest-control' 
            ? 'General Pest Treatment' 
            : undefined
      )} />
    </div>
  );
}

export default App;
