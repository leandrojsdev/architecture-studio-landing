import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import Philosophy from './components/ProblemSolution'; // Renamed import
import Process from './components/Process';
import Portfolio from './components/Portfolio';
import LeadCapture from './components/LeadCapture';
import Footer from './components/Footer';
import { useScrollTracking } from './hooks/useScrollTracking';

function App() {
  useScrollTracking();
  
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-lux-cream bg-grain bg-repeat">
      <Header onCtaClick={scrollToContact} />
      
      <main>
        <Hero onCtaClick={scrollToContact} />
        <SocialProof />
        <Philosophy />
        <Portfolio onCtaClick={scrollToContact} />
        <Process />
        <LeadCapture />
      </main>

      <Footer />
    </div>
  );
}

export default App;
