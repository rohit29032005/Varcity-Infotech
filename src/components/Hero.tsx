import React, { useEffect, useRef } from 'react';
import { ChevronRight, Play } from 'lucide-react';
import SEO from './SEO';

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
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
    <>
      {/* UPDATED: Added SEO component for homepage */}
      <SEO 
        title="Varcity Infotech - No 1. Full Stack Development & Web Design Training in Palghar & Boisar"
        description="No 1. custom software Teaching Center in Palghar & Boisar offering full stack development, web design, and digital solutions training. Join 20,000+ students worldwide."
        keywords="full stack development, web design, digital solutions,Tally,Palghar,Boisar,No 1.Institute in palghar & boisar, custom software company India, React training, JavaScript courses, MERN stack"
        canonical="https://www.varcityinfotech.com"
      />

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Background elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-900/20 via-transparent to-transparent"></div>

        {/* UPDATED: Added heroRef to enable mouse movement effect */}
        <div ref={heroRef} className="relative z-10 text-center px-6 max-w-6xl mx-auto">

          {/* ✅ Logo with SEO-friendly alt text */}
          

          {/* Headings */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent leading-tight">
            Full Stack Development & Web Design Training - Varcity Infotech
          </h1>

          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-8 text-white/90">
            No 1. Teaching Center in Palghar & Boisar - From Logic To Legacy
          </h2>

          <p className="text-lg md:text-xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed">
            Transform your career with cutting-edge courses in <strong>Full Stack Development</strong>, <strong>Web Design</strong>, 
            and <strong>Digital Solutions</strong>. Join over 20,000 students worldwide in mastering tomorrow's technology today.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-white font-semibold text-lg hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25">
              <span className="flex items-center space-x-2">
                <span>Explore Courses</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>

            <button className="group flex items-center space-x-3 px-8 py-4 border-2 border-cyan-400/50 rounded-full text-cyan-400 font-semibold text-lg hover:bg-cyan-400/10 transition-all duration-300">
              <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>Watch Demo</span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
