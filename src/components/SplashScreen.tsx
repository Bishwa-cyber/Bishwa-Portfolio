
import React, { useEffect, useState } from 'react';
import { Code, Zap, Star } from 'lucide-react';

interface SplashScreenProps {
  onLoadingComplete: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState(0);

  const loadingTexts = [
    "Initializing Portfolio...",
    "Loading Projects...",
    "Configuring Space Environment...",
    "Almost Ready..."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onLoadingComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  useEffect(() => {
    const textInterval = setInterval(() => {
      setCurrentText(prev => (prev + 1) % loadingTexts.length);
    }, 1000);

    return () => clearInterval(textInterval);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20" />
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60 animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center">
        {/* Logo Animation */}
        <div className="mb-8 relative">
          <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-purple-600 to-cyan-400 p-1 animate-pulse-glow">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-900 to-black flex items-center justify-center text-4xl font-bold text-white border-2 border-purple-500/20">
              BB
            </div>
          </div>
          
          {/* Orbiting Icons */}
          <div className="absolute inset-0 animate-spin" style={{ animationDuration: '8s' }}>
            <Code className="absolute -top-4 left-1/2 transform -translate-x-1/2 text-cyan-400" size={20} />
            <Zap className="absolute top-1/2 -right-4 transform -translate-y-1/2 text-purple-400" size={20} />
            <Star className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 text-yellow-400" size={20} />
          </div>
        </div>

        {/* Name */}
        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent animate-gradient font-['Space_Grotesk']">
          Bishwa Bhushan Palar
        </h1>

        {/* Loading Text */}
        <div className="mb-8 h-6">
          <p className="text-gray-300 text-lg animate-fade-in">
            {loadingTexts[currentText]}
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-80 max-w-sm mx-auto mb-4">
          <div className="glass-effect rounded-full h-2 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-purple-600 to-cyan-500 transition-all duration-100 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="text-center mt-2 text-cyan-400 font-semibold">
            {progress}%
          </div>
        </div>

        {/* Tagline */}
        <p className="text-gray-400 text-sm">
          Full Stack Developer & AI Enthusiast
        </p>
      </div>

      {/* Corner Decorations */}
      <div className="absolute top-4 left-4 w-16 h-16 border-l-2 border-t-2 border-purple-500/30" />
      <div className="absolute top-4 right-4 w-16 h-16 border-r-2 border-t-2 border-cyan-500/30" />
      <div className="absolute bottom-4 left-4 w-16 h-16 border-l-2 border-b-2 border-purple-500/30" />
      <div className="absolute bottom-4 right-4 w-16 h-16 border-r-2 border-b-2 border-cyan-500/30" />
    </div>
  );
};

export default SplashScreen;
