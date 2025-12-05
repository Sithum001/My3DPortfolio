import React, { useState, useEffect } from 'react';
import ParticleBackground from './ParticleBackground';

const LoadingScreen = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [dots, setDots] = useState('');

  useEffect(() => {
    // Progress animation to 100% in 4 seconds
    const duration = 4000;
    const interval = 20;
    const increment = 100 / (duration / interval);

    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + increment;
        if (newProgress >= 100) {
          clearInterval(progressTimer);
          setTimeout(() => onLoadingComplete(), 300);
          return 100;
        }
        return newProgress;
      });
    }, interval);

    // Animated dots
    const dotsTimer = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? '' : prev + '.'));
    }, 400);

    return () => {
      clearInterval(progressTimer);
      clearInterval(dotsTimer);
    };
  }, [onLoadingComplete]);

  return (
    <div className="fixed inset-0 z-[1000] bg-black flex items-center justify-center overflow-hidden">
      {/* Particle Background */}
      <ParticleBackground className="z-0" />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-8 px-6">
        {/* Animated Logo/Icon */}
        <div className="relative">
          <div className="w-24 h-24 md:w-32 md:h-32 relative">
            {/* Rotating circles */}
            <div className="absolute inset-0 border-4 border-blue-500/30 rounded-full animate-spin"></div>
            <div className="absolute inset-2 border-4 border-purple-500/30 rounded-full animate-spin-slow"></div>
            <div className="absolute inset-4 border-4 border-blue-400/40 rounded-full animate-spin-reverse"></div>
            
            {/* Center glow */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-xl opacity-60 animate-pulse"></div>
            </div>
            
            {/* Center icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {'</>'}
              </div>
            </div>
          </div>
        </div>

        {/* Loading Text */}
        <div className="text-center space-y-3">
          <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
            Initializing Components{dots}
          </h2>
          <p className="text-gray-400 text-sm md:text-base tracking-wider">
            Crafting your experience
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-full max-w-md space-y-3">
          {/* Progress Bar Container */}
          <div className="relative h-2 bg-gray-800/50 rounded-full overflow-hidden backdrop-blur-sm border border-gray-700/50">
            {/* Progress Fill */}
            <div
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full transition-all duration-200 ease-out"
              style={{ width: `${progress}%` }}
            >
              {/* Animated shimmer */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
            </div>
            
            {/* Glow effect */}
            <div
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-400/50 to-purple-400/50 blur-md rounded-full transition-all duration-200"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          {/* Percentage Display */}
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-500 font-mono">LOADING...</span>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent tabular-nums">
              {Math.floor(progress)}%
            </span>
          </div>
        </div>

        {/* Bottom decorative elements */}
        <div className="flex gap-2 mt-4">
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce animation-delay-200"></div>
          <div className="w-2 h-2 bg-pink-500 rounded-full animate-bounce animation-delay-400"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
