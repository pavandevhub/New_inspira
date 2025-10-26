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

function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <TopBar onQuoteClick={() => setIsQuoteModalOpen(true)} />
      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
      <FloatingConnectIcons />

      <div className="pt-20">
        <Hero />
        <Portfolio />
        <Statistics />
        <ValuePropAccordion />
        <Testimonials />
        <PartnerLogos />
        <ConnectWithUs />
        <FAQsAccordion />
        <ContactForm />
        <Footer />
      </div>
    </div>
  );
}

export default App;
