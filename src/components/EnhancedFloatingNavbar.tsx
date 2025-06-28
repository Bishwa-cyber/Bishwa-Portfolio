
import React, { useState, useEffect } from 'react';
import { Home, User, Code, Mail, Award } from 'lucide-react';

const EnhancedFloatingNavbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'projects', label: 'Projects', icon: Code },
    { id: 'skills', label: 'Skills', icon: Award },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      setScrollProgress((currentScroll / scrollHeight) * 100);

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
    <nav className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50">
      {/* Progress indicator */}
      <div className="absolute -left-6 top-0 h-full w-1 bg-gray-800 rounded-full overflow-hidden">
        <div 
          className="w-full bg-gradient-to-b from-purple-400 to-cyan-400 transition-all duration-300 ease-out"
          style={{ height: `${scrollProgress}%` }}
        />
      </div>

      {/* Navigation items */}
      <div className="flex flex-col space-y-4">
        {navItems.map((item, index) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`group relative p-4 rounded-full transition-all duration-300 ${
                isActive
                  ? 'bg-gradient-to-r from-purple-600 to-cyan-500 shadow-2xl scale-110'
                  : 'glass-effect hover:bg-white/20 hover:scale-105'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Icon size={20} className={`${isActive ? 'text-white' : 'text-gray-300 group-hover:text-white'} transition-colors`} />
              
              {/* Glow effect */}
              {isActive && (
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 opacity-30 animate-pulse-glow" />
              )}
              
              {/* Tooltip */}
              <div className={`absolute right-full mr-4 top-1/2 transform -translate-y-1/2 px-3 py-1 rounded-lg glass-effect text-sm font-medium text-white opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap ${
                isActive ? 'bg-gradient-to-r from-purple-600/20 to-cyan-500/20' : ''
              }`}>
                {item.label}
                <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-white/20 border-y-4 border-y-transparent" />
              </div>
            </button>
          );
        })}
      </div>

      {/* Decorative elements */}
      <div className="absolute -top-4 -left-4 w-2 h-2 bg-cyan-400 rounded-full animate-pulse opacity-60" />
      <div className="absolute -bottom-4 -right-4 w-1 h-1 bg-purple-400 rounded-full animate-pulse opacity-80" style={{ animationDelay: '1s' }} />
    </nav>
  );
};

export default EnhancedFloatingNavbar;
