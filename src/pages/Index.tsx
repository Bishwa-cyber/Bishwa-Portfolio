import React, { useState } from 'react';
import TopNavbar from '../components/TopNavbar';
import SpaceBackground from '../components/SpaceBackground';
import FloatingPlanet from '../components/FloatingPlanet';
import SpaceParticles from '../components/SpaceParticles';
import AnimatedSection from '../components/AnimatedSection';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import SplashScreen from '../components/SplashScreen';

const Index = () => {
  const [showSplash, setShowSplash] = useState(true);

  const handleLoadingComplete = () => {
    setShowSplash(false);
  };

  if (showSplash) {
    return <SplashScreen onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* Space Background Layers */}
      <div className="fixed inset-0 bg-black z-0" />
      <div className="fixed inset-0 bg-gradient-to-b from-gray-900 via-purple-900/20 to-black z-0" />
      <SpaceBackground />
      <FloatingPlanet />
      <SpaceParticles />
      
      {/* Top Navigation */}
      <TopNavbar />
      
      {/* Content with animations */}
      <div className="relative z-10">
        <AnimatedSection>
          <Hero />
        </AnimatedSection>
        
        <AnimatedSection delay={200}>
          <About />
        </AnimatedSection>
        
        <AnimatedSection delay={400}>
          <Skills />
        </AnimatedSection>
        
        <AnimatedSection delay={600}>
          <Projects />
        </AnimatedSection>
        
        <AnimatedSection delay={800}>
          <Contact />
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Index;
