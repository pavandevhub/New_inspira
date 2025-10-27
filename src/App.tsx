import { useState } from 'react';
import { TopBar } from './components/TopBar';
import { QuoteModal } from './components/QuoteModal';
import { FloatingConnectIcons } from './components/FloatingConnectIcons';
import { Hero } from './components/Hero';
import { Portfolio } from './components/Portfolio';
import { Statistics } from './components/Statistics';
import { Testimonials } from './components/Testimonials';
import { ValuePropAccordion } from './components/ValuePropAccordion';
import { PartnerLogos } from './components/PartnerLogos';
import { ConnectWithUs } from './components/ConnectWithUs';
import { FAQsAccordion } from './components/FAQsAccordion';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { ThankYou } from './components/ThankYou';

function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  const handleFormSuccess = () => {
    setShowThankYou(true);
    setIsQuoteModalOpen(false);
  };

  const handleCloseThankYou = () => {
    setShowThankYou(false);
  };

  if (showThankYou) {
    return (
      <div className="min-h-screen">
        <TopBar onQuoteClick={() => setIsQuoteModalOpen(true)} />
        <ThankYou onClose={handleCloseThankYou} />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <TopBar onQuoteClick={() => setIsQuoteModalOpen(true)} />
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        onSuccess={handleFormSuccess}
      />
      <FloatingConnectIcons />

      <div className="pt-20">
        <Hero onFormSuccess={handleFormSuccess} />
        <Portfolio onConsultationRequest={handleFormSuccess} />
        <Statistics />
        <ValuePropAccordion />
        <Testimonials />
        <PartnerLogos />
        <ConnectWithUs />
        <FAQsAccordion />
        <ContactForm onSuccess={handleFormSuccess} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
