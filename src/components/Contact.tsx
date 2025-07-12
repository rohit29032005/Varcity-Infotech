import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, Globe, Edit3 } from 'lucide-react';
import SEO from './SEO'; // ADDED: SEO import

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: ''
  });

  const [mapView, setMapView] = useState('3d'); // '3d' or 'real'
  const [isEditingLocation, setIsEditingLocation] = useState(false);
  const [currentLocation, setCurrentLocation] = useState({
    name: 'Varcity Infotech Computer Education-Boisar Branch',
    address: ['Office No.8,1st Floor,Hakimi Manzil,Above Panchwati Sweets,Opp.Railway Station,Palghar(W)'],
    coordinates: { lat: 19.799371, lng: 72.75864159999999 },
    buildingType: 'tech', // 'tech', 'university', 'corporate'
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d109959.7043257355!2d72.67623989975556!3d19.799352115452802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3be71ef842d07ae1%3A0x9da2e9352b83b99a!2sSecond%20Floor%2C%20Ostwal%20Empire%2C%20B%2F242%2C%20Arihant%20Market%2C%20above%20Aradhna%20Jewellers%2C%20opp.%20ST%20Bus%20Stand%2C%20W%2C%20Boisar%2C%20Maharashtra%20401501!3m2!1d19.799371!2d72.75864159999999!5e1!3m2!1sen!2sin!4v1750007887923!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
  });

  const [newLocationData, setNewLocationData] = useState({
    address: '',
    lat: '',
    lng: ''
  });

  // Predefined locations for quick switching
  const predefinedLocations = [
    {
      name: 'Varcity Infotech Computer Education-Palghar Branch',
      address: ['Office No.8,1st Floor,Hakimi Manzil,Above Panchwati Sweets,Opp.Railway Station,Palghar(W)'],
      coordinates: { lat: 19.799371, lng: 72.75864159999999 },
      buildingType: 'tech',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d109959.7043257355!2d72.67623989975556!3d19.799352115452802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3be71ef842d07ae1%3A0x9da2e9352b83b99a!2sSecond%20Floor%2C%20Ostwal%20Empire%2C%20B%2F242%2C%20Arihant%20Market%2C%20above%20Aradhna%20Jewellers%2C%20opp.%20ST%20Bus%20Stand%2C%20W%2C%20Boisar%2C%20Maharashtra%20401501!3m2!1d19.799371!2d72.75864159999999!5e1!3m2!1sen!2sin!4v1750007887923!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
    },
    {
      name: 'Varcity Infotech Computer Education-Boisar Branch',
      address: ['Second Floor, Ostwal Empire, B/242 Arihant Market, above Aradhna Jewellers opp. ST Bus Stand, Boisar, Maharashtra 401501'],
      coordinates: { lat: 19.799371, lng: 72.75864159999999 },
      buildingType: 'tech',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d109959.7043257355!2d72.67623989975556!3d19.799352115452802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3be71ef842d07ae1%3A0x9da2e9352b83b99a!2sSecond%20Floor%2C%20Ostwal%20Empire%2C%20B%2F242%2C%20Arihant%20Market%2C%20above%20Aradhna%20Jewellers%2C%20opp.%20ST%20Bus%20Stand%2C%20W%2C%20Boisar%2C%20Maharashtra%20401501!3m2!1d19.799371!2d72.75864159999999!5e1!3m2!1sen!2sin!4v1750007887923!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleLocationChange = (location: typeof currentLocation) => {
    setCurrentLocation(location);
    setIsEditingLocation(false);
  };

  const handleCustomLocationSubmit = () => {
    if (newLocationData.address && newLocationData.lat && newLocationData.lng) {
      const customLocation = {
        name: 'Custom Location',
        address: [newLocationData.address],
        coordinates: { 
          lat: parseFloat(newLocationData.lat), 
          lng: parseFloat(newLocationData.lng) 
        },
        buildingType: 'tech' as const,
        mapUrl: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019123456789!2d${newLocationData.lng}!3d${newLocationData.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z${encodeURIComponent(newLocationData.address)}!5e0!3m2!1sen!2sin!4v1712345678904`
      };
      setCurrentLocation(customLocation);
      setNewLocationData({ address: '', lat: '', lng: '' });
      setIsEditingLocation(false);
    }
  };

  // Generate 3D building based on building type
  const get3DBuildingStyle = (type: string) => {
    switch (type) {
      case 'university':
        return {
          building: 'from-amber-700 via-amber-500 to-amber-300',
          shadow: 'shadow-amber-500/50',
          side: 'from-amber-800 to-amber-600'
        };
      case 'corporate':
        return {
          building: 'from-slate-700 via-slate-500 to-slate-300',
          shadow: 'shadow-slate-500/50',
          side: 'from-slate-800 to-slate-600'
        };
      default:
        return {
          building: 'from-cyan-700 via-cyan-500 to-cyan-300',
          shadow: 'shadow-cyan-500/50',
          side: 'from-cyan-800 to-cyan-600'
        };
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+91 7020397495','+91 9021437033'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['varcityedtech@gmail.com'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: MapPin,
      title: 'Address',
      details: ['Office No.8,1st Floor,Hakimi Manzil,Above Panchwati Sweets,Opp.Railway Station,Palghar(W)'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: ['Mon - Fri: 9:00 AM - 8:00 PM', 'Sat - Sun: 10:00 AM - 6:00 PM'],
      color: 'from-orange-500 to-red-500'
    }
  ];

  const courses = [
    'Web Development',
    'AI/ML',
    'Data Science',
    'Ethical Hacking',
    'Embedded Systems',
    'PHP Development',
    'Excel Mastery',
    'Full Stack Development'
  ];

  const buildingStyles = get3DBuildingStyle(currentLocation.buildingType);

  return (
    <>
      {/* ADDED: SEO component for contact page */}
      <SEO 
        title="Contact Varcity Infotech - Full Stack Development & Web Design Training"
        description="Contact leading custom software company in India. Get in touch for full stack development, web design, and digital solutions training."
        keywords="contact varcity infotech, full stack development training, web design courses, digital solutions India, custom software company"
        canonical="https://www.varcityinfotech.com/contact"
      />
      
      <section id="contact" className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            {/* UPDATED: Changed h2 to h1 for proper SEO hierarchy */}
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Contact Varcity Infotech - Custom Software Company
            </h1>
            {/* UPDATED: Changed p to h2 for proper SEO hierarchy */}
            <h2 className="text-xl text-white/80 max-w-3xl mx-auto">
              Ready to start your journey in full stack development and web design? Contact us today and let's discuss how we can help you achieve your goals.
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="space-y-8">
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-6">Send us a message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      {/* ADDED: Proper label with htmlFor for accessibility */}
                      <label htmlFor="name" className="block text-white/80 text-sm font-medium mb-2">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div>
                      {/* ADDED: Proper label with htmlFor for accessibility */}
                      <label htmlFor="email" className="block text-white/80 text-sm font-medium mb-2">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      {/* ADDED: Proper label with htmlFor for accessibility */}
                      <label htmlFor="phone" className="block text-white/80 text-sm font-medium mb-2">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div>
                      {/* ADDED: Proper label with htmlFor for accessibility */}
                      <label htmlFor="course" className="block text-white/80 text-sm font-medium mb-2">Course Interest</label>
                      <select
                        id="course"
                        name="course"
                        value={formData.course}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                      >
                        <option value="" className="bg-slate-800">Select a course</option>
                        {courses.map((course) => (
                          <option key={course} value={course} className="bg-slate-800">{course}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    {/* ADDED: Proper label with htmlFor for accessibility */}
                    <label htmlFor="message" className="block text-white/80 text-sm font-medium mb-2">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 resize-none"
                      placeholder="Tell us about your goals and how we can help you..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg text-white font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/25 flex items-center justify-center space-x-2"
                  >
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </button>
                </form>
              </div>

              {/* Live Chat */}
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/50 transition-all duration-300">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                    {/* ADDED: Alt attribute for accessibility */}
                    <MessageCircle className="w-6 h-6 text-white" aria-label="Live chat support icon" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-white">Live Chat Support</h4>
                    <p className="text-white/70 text-sm">Get instant answers to your questions</p>
                  </div>
                  <a
                    href="https://wa.me/917020397495"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors duration-300 flex items-center justify-center"
                  >
                    Chat Now
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Information & Enhanced Map */}
            <div className="space-y-8">
              {/* Location Selector */}
              <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-semibold text-white">Select Campus Location</h4>
                  <button
                    onClick={() => setIsEditingLocation(!isEditingLocation)}
                    className="p-2 bg-cyan-500/20 hover:bg-cyan-500/30 rounded-lg transition-colors duration-300"
                    aria-label="Edit location settings"
                  >
                    <Edit3 className="w-4 h-4 text-cyan-400" />
                  </button>
                </div>
                
                <div className="grid gap-2">
                  {predefinedLocations.map((location, index) => (
                    <button
                      key={index}
                      onClick={() => handleLocationChange(location)}
                      className={`text-left p-3 rounded-lg transition-all duration-300 ${
                        currentLocation.name === location.name
                          ? 'bg-cyan-500/20 border border-cyan-400/50'
                          : 'bg-white/5 hover:bg-white/10 border border-white/10'
                      }`}
                    >
                      <div className="text-white font-medium text-sm">{location.name}</div>
                      <div className="text-white/60 text-xs">{location.address[0]}</div>
                    </button>
                  ))}
                </div>

                {/* Custom Location Input */}
                {isEditingLocation && (
                  <div className="mt-4 p-4 bg-white/5 rounded-lg border border-white/10">
                    <h5 className="text-white font-medium mb-3">Add Custom Location</h5>
                    <div className="space-y-3">
                      <input
                        type="text"
                        placeholder="Address"
                        value={newLocationData.address}
                        onChange={(e) => setNewLocationData({...newLocationData, address: e.target.value})}
                        className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded text-white placeholder-white/50 text-sm"
                      />
                      <div className="grid grid-cols-2 gap-2">
                        <input
                          type="number"
                          step="any"
                          placeholder="Latitude"
                          value={newLocationData.lat}
                          onChange={(e) => setNewLocationData({...newLocationData, lat: e.target.value})}
                          className="px-3 py-2 bg-white/10 border border-white/20 rounded text-white placeholder-white/50 text-sm"
                        />
                        <input
                          type="number"
                          step="any"
                          placeholder="Longitude"
                          value={newLocationData.lng}
                          onChange={(e) => setNewLocationData({...newLocationData, lng: e.target.value})}
                          className="px-3 py-2 bg-white/10 border border-white/20 rounded text-white placeholder-white/50 text-sm"
                        />
                      </div>
                      <button
                        onClick={handleCustomLocationSubmit}
                        className="w-full py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded text-sm transition-colors duration-300"
                      >
                        Set Location
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Contact Cards */}
              <div className="grid gap-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div
                      key={index}
                      className="group bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105"
                      style={{
                        animation: `fade-in-up 0.6s ease-out ${index * 0.1}s both`
                      }}
                    >
                      <div className="flex items-start space-x-4">
                        <div className={`w-12 h-12 bg-gradient-to-br ${info.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          {/* ADDED: Alt attribute for accessibility */}
                          <Icon className="w-6 h-6 text-white" aria-label={`${info.title} contact information icon`} />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-2">{info.title}</h4>
                          {info.details.map((detail, i) => (
                            <p key={i} className="text-white/80 text-sm mb-1">{detail}</p>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Enhanced Map Container */}
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 relative overflow-hidden">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-white">Visit Our Campus</h3>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => setMapView('3d')}
                      className={`px-3 py-1 rounded-lg text-sm transition-all duration-300 ${
                        mapView === '3d' 
                          ? 'bg-cyan-500 text-white' 
                          : 'bg-white/10 text-white/70 hover:bg-white/20'
                      }`}
                    >
                      3D View
                    </button>
                    <button
                      onClick={() => setMapView('real')}
                      className={`px-3 py-1 rounded-lg text-sm transition-all duration-300 ${
                        mapView === 'real' 
                          ? 'bg-cyan-500 text-white' 
                          : 'bg-white/10 text-white/70 hover:bg-white/20'
                      }`}
                    >
                      Map View
                    </button>
                  </div>
                </div>
                
                {mapView === '3d' ? (
                  /* Enhanced 3D Map Container - Location Responsive */
                  <div className="relative h-80 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-xl overflow-hidden border border-cyan-500/20">
                    {/* Location-based Holographic Grid */}
                    <div className="absolute inset-0 opacity-20">
                      <div 
                        className="w-full h-full animate-pulse"
                        style={{
                          backgroundImage: `
                            linear-gradient(rgba(6, 182, 212, 0.3) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(6, 182, 212, 0.3) 1px, transparent 1px)
                          `,
                          backgroundSize: '25px 25px'
                        }}
                      ></div>
                    </div>

                    {/* Animated Background Particles */}
                    <div className="absolute inset-0">
                      <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-cyan-400 rounded-full animate-ping"></div>
                      <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-blue-400 rounded-full animate-ping delay-1000"></div>
                      <div className="absolute bottom-1/4 left-3/4 w-1 h-1 bg-purple-400 rounded-full animate-ping delay-2000"></div>
                    </div>

                    {/* Main Campus Building - Dynamic based on location */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative group">
                        <div className="relative">
                          <div className={`w-24 h-32 bg-gradient-to-t ${buildingStyles.building} transform perspective-1000 rotateY-12 hover:rotateY-0 transition-all duration-700 relative shadow-2xl ${buildingStyles.shadow}`}>
                            {/* Building face */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                            
                            {/* Windows - Different patterns based on building type */}
                            <div className="absolute top-4 left-2 grid grid-cols-3 gap-1">
                              {[...Array(currentLocation.buildingType === 'university' ? 12 : 9)].map((_, i) => (
                                <div 
                                  key={i} 
                                  className={`w-2 h-2 ${currentLocation.buildingType === 'university' ? 'bg-amber-300' : currentLocation.buildingType === 'corporate' ? 'bg-blue-300' : 'bg-yellow-300'} opacity-80 animate-pulse`}
                                  style={{ animationDelay: `${i * 200}ms` }}
                                ></div>
                              ))}
                            </div>
                            
                            {/* Building side for 3D effect */}
                            <div className={`absolute top-0 -right-2 w-2 h-32 bg-gradient-to-t ${buildingStyles.side} transform skew-y-12`}></div>
                            <div className={`absolute -bottom-2 left-0 w-24 h-2 bg-gradient-to-r ${buildingStyles.side} transform skew-x-12`}></div>
                          </div>
                          
                          {/* Enhanced Location Marker */}
                          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
                            <div className="relative">
                              <div className="w-8 h-8 bg-gradient-to-br from-red-400 to-red-600 rounded-full flex items-center justify-center animate-bounce shadow-lg shadow-red-500/50">
                                {/* ADDED: Alt attribute for accessibility */}
                                <MapPin className="w-5 h-5 text-white" aria-label="Campus location marker" />
                              </div>
                              <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-red-500"></div>
                            </div>
                          </div>

                          {/* Surrounding Elements - Different for each location */}
                          {currentLocation.buildingType === 'university' && (
                            <>
                              <div className="absolute -left-8 top-8 w-4 h-6 bg-green-500 rounded-t-full opacity-70"></div>
                              <div className="absolute -right-8 top-12 w-4 h-6 bg-green-500 rounded-t-full opacity-70"></div>
                              <div className="absolute -left-6 bottom-4 w-3 h-4 bg-green-600 rounded-t-full opacity-60"></div>
                              <div className="absolute -right-6 bottom-6 w-3 h-4 bg-green-600 rounded-t-full opacity-60"></div>
                            </>
                          )}
                          
                          {currentLocation.buildingType === 'corporate' && (
                            <>
                              <div className="absolute -left-10 top-6 w-6 h-8 bg-slate-600 opacity-70"></div>
                              <div className="absolute -right-10 top-10 w-6 h-8 bg-slate-600 opacity-70"></div>
                            </>
                          )}
                          
                          {currentLocation.buildingType === 'tech' && (
                            <>
                              <div className="absolute -left-8 top-8 w-4 h-6 bg-green-500 rounded-t-full opacity-70"></div>
                              <div className="absolute -right-8 top-12 w-4 h-6 bg-green-500 rounded-t-full opacity-70"></div>
                              <div className="absolute -left-6 bottom-4 w-3 h-4 bg-green-600 rounded-t-full opacity-60"></div>
                            </>
                          )}
                        </div>

                        {/* Pulsing Ring Effect */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-2 border-cyan-400 rounded-full animate-ping opacity-30"></div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-cyan-300 rounded-full animate-ping opacity-20 delay-500"></div>
                      </div>
                    </div>

                    {/* Floating Data Points - Location specific */}
                    <div className="absolute top-8 left-8 flex items-center space-x-2 bg-black/30 backdrop-blur-sm rounded-lg px-3 py-1">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-white text-xs">{currentLocation.name.split(' - ')[1] || 'Campus Online'}</span>
                    </div>

                    <div className="absolute bottom-8 right-8 flex items-center space-x-2 bg-black/30 backdrop-blur-sm rounded-lg px-3 py-1">
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                      <span className="text-white text-xs">
                        {currentLocation.buildingType === 'university' ? 'University Hub' : 
                         currentLocation.buildingType === 'corporate' ? 'Corporate Center' : 'Tech Hub'}
                      </span>
                    </div>

                    {/* Coordinates Display */}
                    <div className="absolute top-8 right-8 flex items-center space-x-2 bg-black/30 backdrop-blur-sm rounded-lg px-3 py-1">
                      {/* ADDED: Alt attribute for accessibility */}
                      <Globe className="w-3 h-3 text-cyan-400" aria-label="Location coordinates" />
                      <span className="text-white text-xs">
                        {currentLocation.coordinates.lat.toFixed(4)}, {currentLocation.coordinates.lng.toFixed(4)}
                      </span>
                    </div>
                  </div>
                ) : (
                  /* Real Map View - Location Responsive */
                  <div className="w-full h-80 rounded-xl overflow-hidden border border-cyan-500/20">
                    <iframe
                      key={currentLocation.mapUrl} // Force re-render when location changes
                      src={currentLocation.mapUrl}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title={`${currentLocation.name} Location Map`}
                      className="grayscale hover:grayscale-0 transition-all duration-500"
                    ></iframe>
                  </div>
                )}

                <div className="mt-6 flex items-center justify-between">
                  <div className="text-white/80 text-sm flex items-center">
                    {/* ADDED: Alt attribute for accessibility */}
                    <Globe className="w-4 h-4 mr-2" aria-label="Interactive map icon" />
                    Interactive Campus Map - {currentLocation.name}
                  </div>
                  <button 
                    onClick={() => window.open(`https://www.google.com/maps/dir/?api=1&destination=${currentLocation.coordinates.lat},${currentLocation.coordinates.lng}`, '_blank')}
                    className="text-cyan-400 hover:text-cyan-300 text-sm transition-colors duration-300 flex items-center space-x-1 group"
                  >
                    <span>Get Directions</span>
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes fade-in-up {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          .perspective-1000 {
            perspective: 1000px;
          }
          
          .rotateY-12 {
            transform: rotateY(12deg);
          }
          
          .rotateY-0 {
            transform: rotateY(0deg);
          }
        `}</style>
      </section>
    </>
  );
};

export default Contact;
