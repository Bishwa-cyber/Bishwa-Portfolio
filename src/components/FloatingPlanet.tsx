
import React from 'react';

const FloatingPlanet = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Main floating planet */}
      <div 
        className="absolute top-1/4 right-1/6 w-64 h-64 rounded-full opacity-20 animate-float"
        style={{
          background: 'radial-gradient(circle at 30% 30%, rgba(0, 217, 255, 0.4), rgba(124, 58, 237, 0.2), rgba(15, 23, 42, 0.8))',
          boxShadow: '0 0 100px rgba(0, 217, 255, 0.3), inset -20px -20px 0 rgba(0, 0, 0, 0.3)',
          animationDuration: '8s',
        }}
      >
        {/* Planet rings */}
        <div 
          className="absolute inset-0 rounded-full border border-cyan-400/20"
          style={{
            width: '120%',
            height: '20%',
            top: '40%',
            left: '-10%',
            borderRadius: '50%',
            transform: 'rotateX(75deg) rotateZ(10deg)',
          }}
        />
      </div>

      {/* Secondary smaller planet */}
      <div 
        className="absolute bottom-1/3 left-1/12 w-32 h-32 rounded-full opacity-15 animate-float"
        style={{
          background: 'radial-gradient(circle at 40% 40%, rgba(124, 58, 237, 0.5), rgba(45, 27, 105, 0.3), rgba(15, 23, 42, 0.9))',
          boxShadow: '0 0 60px rgba(124, 58, 237, 0.2)',
          animationDuration: '12s',
          animationDelay: '2s',
        }}
      />

      {/* Distant galaxy effect */}
      <div 
        className="absolute top-1/6 left-1/3 w-96 h-96 rounded-full opacity-10"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(124, 58, 237, 0.2) 0%, rgba(0, 217, 255, 0.1) 30%, transparent 70%)',
          animation: 'pulse 6s ease-in-out infinite',
        }}
      />
    </div>
  );
};

export default FloatingPlanet;
