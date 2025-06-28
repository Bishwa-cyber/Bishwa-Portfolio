
import React, { useEffect, useRef } from 'react';

const SpaceParticles = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create floating particles
    for (let i = 0; i < 50; i++) {
      const particle = document.createElement('div');
      particle.className = 'absolute rounded-full opacity-20 animate-float';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.top = Math.random() * 100 + '%';
      particle.style.width = Math.random() * 4 + 1 + 'px';
      particle.style.height = particle.style.width;
      particle.style.backgroundColor = Math.random() > 0.5 ? '#7c3aed' : '#00d9ff';
      particle.style.animationDuration = Math.random() * 3 + 4 + 's';
      particle.style.animationDelay = Math.random() * 2 + 's';
      container.appendChild(particle);
    }

    return () => {
      if (container) {
        container.innerHTML = '';
      }
    };
  }, []);

  return <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0" />;
};

export default SpaceParticles;
