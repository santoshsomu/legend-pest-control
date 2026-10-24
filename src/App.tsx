import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { ServicesSection } from './components/ServicesSection';
import { QuoteCalculator } from './components/QuoteCalculator';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ProcessSection } from './components/ProcessSection';
import { ServiceAreas } from './components/ServiceAreas';
import { ReviewsSection } from './components/ReviewsSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CallbackModal } from './components/CallbackModal';
import { StickyMobileBar } from './components/StickyMobileBar';

export function App() {
  const [callbackModalOpen, setCallbackModalOpen] = useState(false);
  const [selectedServiceForCallback, setSelectedServiceForCallback] = useState<string>('General Pest Treatment');

  const handleOpenCallback = (serviceName?: string) => {
    if (serviceName) {
      setSelectedServiceForCallback(serviceName);
    }
    setCallbackModalOpen(true);
  };

  const handleCloseCallback = () => {
    setCallbackModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 antialiased selection:bg-blue-600 selection:text-white pb-14 sm:pb-0">
      {/* Navigation Header */}
      <Header onOpenCallback={handleOpenCallback} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenCallback={handleOpenCallback} />

        {/* Credentials & Trust Bar */}
        <TrustBar />

        {/* Comprehensive Services Section */}
        <ServicesSection onOpenCallback={handleOpenCallback} />

        {/* Interactive Pricing Estimator Engine */}
        <QuoteCalculator onOpenCallback={handleOpenCallback} />

        {/* Competitor Comparison Matrix & Why Choose Us */}
        <WhyChooseUs />

        {/* 4-Step Process Walkthrough */}
        <ProcessSection onOpenCallback={() => handleOpenCallback()} />

        {/* Suburb Search & Service Areas */}
        <ServiceAreas onOpenCallback={(suburb) => handleOpenCallback(suburb)} />

        {/* Verified Customer Reviews */}
        <ReviewsSection />

        {/* Homeowner FAQ Accordion */}
        <FaqSection onOpenCallback={() => handleOpenCallback()} />

        {/* Booking Form & Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onOpenCallback={() => handleOpenCallback()} />

      {/* Interactive Modal */}
      <CallbackModal
        isOpen={callbackModalOpen}
        onClose={handleCloseCallback}
        defaultService={selectedServiceForCallback}
      />

      {/* Sticky Bottom Bar for Mobile Devices */}
      <StickyMobileBar onOpenCallback={() => handleOpenCallback()} />
    </div>
  );
}

export default App;
