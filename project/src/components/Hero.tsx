import React, { useEffect, useRef } from 'react';
import { ChevronRight, Play } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const xPos = (clientX / innerWidth - 0.5) * 20;
      const yPos = (clientY / innerHeight - 0.5) * 20;
      
      heroRef.current.style.transform = `translate3d(${xPos}px, ${yPos}px, 0)`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-cyan-600/10"></div>
      
      {/* 3D Background Elements */}
      <div className="absolute inset-0 perspective-1000">
        <div className="absolute top-20 left-10 w-64 h-40 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 backdrop-blur-sm rounded-lg transform rotate-12 hover:rotate-6 transition-transform duration-700 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-48 h-32 bg-gradient-to-br from-purple-500/10 to-pink-600/10 backdrop-blur-sm rounded-lg transform -rotate-12 hover:rotate-6 transition-transform duration-700 animate-float-delayed"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* 3D Floating Code Elements */}
          <div ref={heroRef} className="mb-8 transition-transform duration-300 ease-out">
            <div className="relative inline-block">
              <div className="absolute -top-10 -left-10 text-cyan-400/30 font-mono text-sm animate-pulse">
                {'{ code: "future" }'}
              </div>
              <div className="absolute -bottom-10 -right-10 text-blue-400/30 font-mono text-sm animate-pulse delay-150">
                {'<learn />'}
              </div>
              <div className="absolute top-0 right-20 text-purple-400/30 font-mono text-sm animate-pulse delay-300">
                {'AI.learn()'}
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-fade-in" style={{ lineHeight: '1.3' }}>
            From Logic To Legacy — The Varcity Way.
            <br />
            {/* <span className="text-4xl md:text-6xl">Of Computing</span> */}
          </h1>

          <p className="text-xl md:text-2xl text-white/80 mb-8 animate-fade-in-delayed">
           Because Great Careers Start With Great Learning.
          </p>

          <p className="text-lg text-white/60 mb-12 max-w-2xl mx-auto animate-fade-in-delayed-2">
            Transform your career with cutting-edge courses in Web Development, AI/ML, Data Science, 
            and more. Join over 20,000 students worldwide in mastering tomorrow's technology today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-delayed-3">
            <button className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-white font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/25 flex items-center space-x-2">
              <span>Explore Courses</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="group px-8 py-4 border-2 border-cyan-400 rounded-full text-cyan-400 font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
              <Play className="w-5 h-5" />
              <span>Watch Demo</span>
            </button>
          </div>

          {/* 3D Computer Setup */}
          <div className="mt-16 relative">
            <div className="relative mx-auto w-80 h-48 perspective-1000">
              {/* Monitor */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg transform rotate-x-12 hover:rotate-x-6 transition-transform duration-500 border border-cyan-500/30">
                <div className="p-4 h-full bg-gradient-to-br from-slate-900 to-blue-900 rounded-lg m-2">
                  <div className="grid grid-cols-3 gap-1 h-full">
                    <div className="bg-cyan-400/20 rounded animate-pulse"></div>
                    <div className="bg-blue-400/20 rounded animate-pulse delay-150"></div>
                    <div className="bg-purple-400/20 rounded animate-pulse delay-300"></div>
                  </div>
                </div>
              </div>
              
              {/* Keyboard */}
              <div className="absolute -bottom-4 left-4 right-4 h-6 bg-gradient-to-br from-slate-700 to-slate-800 rounded-md transform rotate-x-45 border border-cyan-500/20"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;