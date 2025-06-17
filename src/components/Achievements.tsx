import React, { useState, useEffect } from 'react';
import { Award, Trophy, Star, Medal, Users, BookOpen, Target, Zap } from 'lucide-react';

const Achievements = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const achievements = [
    {
      icon: Trophy,
      title: 'Best Educator Award 2023',
      description: 'Recognized as the leading computer education provider',
      year: '2023',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      icon: Award,
      title: 'Industry Excellence Award',
      description: 'Outstanding contribution to tech education',
      year: '2022',
      color: 'from-blue-400 to-cyan-500'
    },
    {
      icon: Star,
      title: 'Innovation in Teaching',
      description: 'Revolutionary approach to programming education',
      year: '2023',
      color: 'from-purple-400 to-pink-500'
    },
    {
      icon: Medal,
      title: 'Top 10 EdTech Leader',
      description: 'Listed among top educational technology leaders',
      year: '2022',
      color: 'from-green-400 to-emerald-500'
    },
    {
      icon: Users,
      title: '20K+ Students Milestone',
      description: 'Successfully trained over 20,000 students',
      year: '2023',
      color: 'from-red-400 to-pink-500'
    },
    {
      icon: BookOpen,
      title: 'Published Author',
      description: 'Author of "Modern Programming Techniques"',
      year: '2021',
      color: 'from-indigo-400 to-purple-500'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Software Engineer at Google',
      content: 'The AI/ML course completely transformed my career. The practical approach and industry-relevant projects made all the difference.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Full Stack Developer',
      content: 'Best investment I made for my career. The instructors are amazing and the curriculum is always up-to-date with industry standards.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Data Scientist at Microsoft',
      content: 'The Data Science course provided me with both theoretical knowledge and practical skills. Landed my dream job within 3 months!',
      rating: 5
    }
  ];

  const partners = [
    'Google', 'Microsoft', 'Amazon', 'Meta', 'Apple', 'Netflix', 'Tesla', 'IBM'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % achievements.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="achievements" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Our Achievements
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Recognition and milestones that showcase our commitment to excellence in education
          </p>
        </div>

        {/* 3D Rotating Carousel */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-white text-center mb-12">Awards & Recognition</h3>
          
          <div className="relative h-80 perspective-1000">
            <div className="absolute inset-0 flex items-center justify-center">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                const rotation = (index - currentSlide) * 60;
                const isActive = index === currentSlide;
                
                return (
                  <div
                    key={index}
                    className={`absolute w-64 h-64 transition-all duration-1000 transform-gpu ${
                      isActive ? 'scale-110 z-10' : 'scale-90 z-0'
                    }`}
                    style={{
                      transform: `rotateY(${rotation}deg) translateZ(200px) ${isActive ? 'translateZ(250px)' : ''}`
                    }}
                  >
                    <div className={`w-full h-full bg-gradient-to-br ${achievement.color} rounded-2xl p-6 shadow-2xl border border-white/20 backdrop-blur-lg ${isActive ? 'shadow-cyan-500/50' : ''}`}>
                      <div className="flex flex-col items-center justify-center h-full text-center">
                        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <h4 className="text-lg font-bold text-white mb-2">{achievement.title}</h4>
                        <p className="text-white/90 text-sm mb-3">{achievement.description}</p>
                        <span className="text-white/80 text-xs bg-white/20 px-3 py-1 rounded-full">
                          {achievement.year}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {achievements.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentSlide ? 'bg-cyan-400' : 'bg-white/30'
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-white text-center mb-12">What Our Students Say</h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105"
                style={{
                  animation: `fade-in-up 0.6s ease-out ${index * 0.2}s both`
                }}
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-white/90 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-cyan-400">{testimonial.name}</div>
                  <div className="text-white/60 text-sm">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Partner Logos */}
        <div>
          <h3 className="text-2xl font-bold text-white text-center mb-12">Our Students Work At</h3>
          
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll space-x-12">
              {[...partners, ...partners].map((partner, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-32 h-16 bg-white/5 backdrop-blur-lg rounded-lg border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors duration-300"
                >
                  <span className="text-white/80 font-semibold">{partner}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;