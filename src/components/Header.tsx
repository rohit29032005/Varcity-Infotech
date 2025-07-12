import React, { useState, useEffect } from 'react';
import { Code2, Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Home', 'Courses', 'About', 'Achievements', 'Team', 'Contact'];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-900/80 backdrop-blur-lg border-b border-blue-500/20'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 py-2 sm:py-3 lg:py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="flex-shrink-0">
              {/* ✅ Added meaningful alt attribute for logo image */}
              <img
                src="/logo1.PNG"
                alt="Varcity Infotech Computer Education - Leading custom software company in India specializing in full stack development and web design"
                className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full border-2 border-cyan-400 shadow-lg object-contain bg-white"
              />
            </div>
            <div className="min-w-0 flex-1">
              {/* ✅ This will be <h1> only on homepage ideally */}
              <div className="text-sm sm:text-lg lg:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent leading-tight">
                <span className="block sm:inline">Varcity Infotech</span>
                <span className="block sm:inline sm:ml-1">Computer Education</span>
              </div>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative text-white/80 hover:text-cyan-400 transition-colors duration-300 group text-lg lg:text-xl whitespace-nowrap"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          <button
            className="md:hidden text-white/80 hover:text-cyan-400 transition-colors p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 p-4 bg-slate-800/90 backdrop-blur-lg rounded-lg border border-blue-500/20 shadow-xl">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block py-3 px-2 text-white/80 hover:text-cyan-400 transition-colors duration-300 border-b border-slate-700/50 last:border-b-0"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
