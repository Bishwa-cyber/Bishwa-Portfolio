import React from 'react';
import { ArrowDown, Github, Linkedin, Mail, Download, Instagram, Twitter } from 'lucide-react';
const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="text-left">
            {/* Ready to Innovate Badge */}
            <div className="inline-flex items-center space-x-2 px-4 py-2 glass-effect rounded-full mb-8">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
              <span className="text-cyan-400 text-sm font-medium">Ready to Innovate</span>
            </div>

            {/* Main heading */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="text-white">Full Stack</span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
                Developer
              </span>
            </h1>
            
            <div className="text-xl text-gray-300 mb-2">
              Tech Enthusiast |
            </div>
            
            <div className="text-lg text-gray-400 mb-8 max-w-lg">
              Creating innovative, functional, and user-friendly digital solutions.
            </div>

            {/* Tech Stack Tags */}
            <div className="flex flex-wrap gap-3 mb-8">
              {['React', 'JavaScript', 'Node.js', 'Tailwind'].map(tech => <span key={tech} className="px-4 py-2 glass-effect rounded-full text-sm text-gray-300 border border-gray-600">
                  {tech}
                </span>)}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <button onClick={() => scrollToSection('projects')} className="group bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 px-8 py-4 rounded-full font-semibold text-white hover:scale-105 transition-all duration-300 flex items-center space-x-2 shadow-2xl hover:shadow-purple-500/25">
                <span>Projects</span>
                <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform" />
              </button>
              
              <button onClick={() => scrollToSection('contact')} className="group bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 px-8 py-4 rounded-full font-semibold text-white hover:scale-105 transition-all duration-300 flex items-center space-x-2 shadow-2xl hover:shadow-purple-500/25">
                <Mail size={18} />
                <span>Contact</span>
              </button>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {[{
              href: "https://github.com/Bishwa-cyber",
              icon: Github,
              label: "GitHub"
            }, {
              href: "https://www.linkedin.com/in/bishwa-bhushan-palar-45ab4526b/",
              icon: Linkedin,
              label: "LinkedIn"
            }, {
              href: "https://www.instagram.com/bishwax._/",
              icon: Instagram,
              label: "Instagram"
            }].map(social => {
              const Icon = social.icon;
              return <a key={social.href} href={social.href} target="_blank" rel="noopener noreferrer" className="group p-3 glass-effect rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-110 border border-gray-600" aria-label={social.label}>
                    <Icon size={20} className="text-gray-300 group-hover:text-white transition-colors" />
                  </a>;
            })}
            </div>
          </div>

          {/* Right side - Visual element (keeping minimal) */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Simple gradient orb instead of complex graphics */}
              <div className="w-80 h-80 bg-gradient-to-br from-purple-600/20 via-cyan-500/20 to-blue-600/20 rounded-full blur-3xl animate-pulse-glow" />
              <div className="absolute inset-0 w-60 h-60 bg-gradient-to-tr from-cyan-400/30 to-purple-600/30 rounded-full blur-2xl animate-float" style={{
              top: '50px',
              left: '50px'
            }} />
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center relative overflow-hidden">
          <div className="w-1 h-3 bg-gradient-to-b from-cyan-400 to-purple-400 rounded-full mt-2 animate-pulse" />
        </div>
        <div className="text-xs text-gray-400 mt-2 text-center">Scroll</div>
      </div>
    </section>;
};
export default Hero;