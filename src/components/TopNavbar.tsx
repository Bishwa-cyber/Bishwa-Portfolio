import React, { useState, useEffect } from 'react';
import { Home, User, Code, Mail, Award } from 'lucide-react';

const TopNavbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'projects', label: 'Projects', icon: Code },
    { id: 'skills', label: 'Skills', icon: Award },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ${
      scrolled ? 'mt-4' : 'mt-8'
    }`}>
      <div className={`glass-effect rounded-full px-8 py-4 transition-all duration-300 ${
        scrolled ? 'backdrop-blur-xl bg-black/20 shadow-2xl' : 'backdrop-blur-md bg-black/10'
      }`}>
        <div className="flex items-center space-x-8">
          {navItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`group relative flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-r from-purple-600 to-cyan-500 text-white shadow-lg scale-105'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                <Icon size={18} className="transition-all duration-300" />
                <span className="text-sm font-medium hidden md:block">{item.label}</span>
                
                {/* Active indicator */}
                {isActive && (
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 opacity-20 animate-pulse" />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default TopNavbar;
