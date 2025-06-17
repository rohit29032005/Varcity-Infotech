import React from 'react';
import { Code2, Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: '#', color: 'hover:text-blue-500' },
    { icon: Twitter, href: '#', color: 'hover:text-sky-400' },
    { icon: Instagram, href: '#', color: 'hover:text-pink-500' },
    { icon: Linkedin, href: '#', color: 'hover:text-blue-600' },
    { icon: Youtube, href: '#', color: 'hover:text-red-500' }
  ];

  const quickLinks = [
    'About Us', 'Courses', 'Admissions', 'Student Portal', 'Career Services', 'Alumni Network'
  ];

  const courses = [
    'Web Development', 'AI/ML', 'Data Science', 'Ethical Hacking', 'Full Stack', 'Mobile Development'
  ];

  return (
    <footer className="relative bg-slate-900/50 backdrop-blur-lg border-t border-white/10">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -left-24 w-48 h-48 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -top-32 -right-32 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-150"></div>
      </div>

      <div className="relative container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="relative group">
                {/* <Code2 className="w-8 h-8 text-cyan-400 transform group-hover:rotate-12 transition-transform duration-300" />
                <div className="absolute inset-0 bg-cyan-400/20 blur-xl group-hover:blur-2xl transition-all duration-300"></div> */}
                <img
                  src="/logo.jpg"
                  alt="Varcity Infotech Logo"
                  className="w-10 h-10 rounded-full border-2 border-cyan-400 shadow-lg"></img>
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Varcity Infotech Computer Education
              </h3>
            </div>
            
            <p className="text-white/80 leading-relaxed">
              Empowering the next generation of developers with cutting-edge education and hands-on experience in emerging technologies.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-white/70 hover:text-cyan-400 transition-colors">
                <Mail className="w-4 h-4" />
                <span className="text-sm">info@codemasterinstitute.com</span>
              </div>
              <div className="flex items-center space-x-3 text-white/70 hover:text-cyan-400 transition-colors">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+91 98765-43210</span>
              </div>
              <div className="flex items-center space-x-3 text-white/70 hover:text-cyan-400 transition-colors">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Silicon City, India</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className={`w-10 h-10 bg-white/5 backdrop-blur-sm rounded-full flex items-center justify-center text-white/70 ${social.color} transition-all duration-300 hover:scale-110 hover:bg-white/10 border border-white/10`}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-white/70 hover:text-cyan-400 transition-colors duration-300 hover:translate-x-1 transform inline-block"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Popular Courses</h4>
            <ul className="space-y-3">
              {courses.map((course, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-white/70 hover:text-cyan-400 transition-colors duration-300 hover:translate-x-1 transform inline-block"
                  >
                    {course}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Stay Updated</h4>
            <p className="text-white/70 text-sm mb-4">
              Subscribe to our newsletter for the latest updates on courses and tech trends.
            </p>
            
            <div className="space-y-4">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-l-lg text-white placeholder-white/50 focus:border-cyan-400 focus:outline-none text-sm"
                />
                <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-r-lg text-white hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                  <Mail className="w-4 h-4" />
                </button>
              </div>
              
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="newsletter" className="rounded border-white/20" />
                <label htmlFor="newsletter" className="text-white/70 text-xs">
                  I agree to receive marketing emails
                </label>
              </div>
            </div>

            {/* Achievement Badges */}
            <div className="mt-6 space-y-2">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-white/70 text-xs">20,000+ Students Trained</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-150"></div>
                <span className="text-white/70 text-xs">95% Placement Rate</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-300"></div>
                <span className="text-white/70 text-xs">Industry Certified</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white/60 text-sm">
              © 2025 Varcity Infotech Computer Education . All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-white/60">
              <a href="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-cyan-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-cyan-400 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
    </footer>
  );
};

export default Footer;