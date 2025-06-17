import React from 'react';
import { Award, Users, BookOpen, Trophy, Star, Target } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, value: '20,000+', label: 'Students Taught' },
    { icon: BookOpen, value: '15+', label: 'Years Experience' },
    { icon: Award, value: '50+', label: 'Industry Awards' },
    { icon: Trophy, value: '95%', label: 'Success Rate' }
  ];

  const achievements = [
    'Award-winning educator with multiple recognitions',
    'Market leader in computer education',
    'Published author of programming guides',
    'Visionary in tech education methods',
    'Mentor to industry professionals',
    'Expert in emerging technologies'
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - 3D Character & Info */}
          <div className="relative">
            <div className="text-center lg:text-left mb-8">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                About Our Founder
              </h2>
            </div>

            {/* 3D Character Representation */}
            <div className="relative mx-auto lg:mx-0 w-80 h-80 mb-8">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-full blur-xl animate-pulse"></div>
              
              {/* Avatar Container */}
              <div className="relative w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 rounded-full border-4 border-cyan-400/30 overflow-hidden transform hover:scale-105 transition-all duration-500">
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 animate-gradient-shift"></div>
                
              {/* Character Elements */}
<div className="absolute inset-0 flex items-center justify-center">
  <div className="text-center">
    {/* Replace the circle with an image */}
    <div className="w-24 h-24 mx-auto mb-4 flex items-center justify-center">
      <img
        src="https://upload.wikimedia.org/wikipedia/en/d/d5/Professor_%28Money_Heist%29.jpg"
        alt="Mr. Rahul Maurya"
        className="w-24 h-24 rounded-full object-cover border-4 border-cyan-400/70 shadow-lg"
      />
    </div>
    <div className="text-white font-bold text-lg">Mr. Rahul Maurya</div>
    <div className="text-cyan-400 text-sm">Founder & Lead Educator</div>
  </div>
</div>

                {/* Floating Elements */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-cyan-400/30 rounded-full animate-float"></div>
                <div className="absolute bottom-4 left-4 w-6 h-6 bg-blue-400/30 rounded-full animate-float-delayed"></div>
                <div className="absolute top-1/2 left-2 w-4 h-4 bg-purple-400/30 rounded-full animate-pulse"></div>
              </div>

              {/* Orbiting Badges */}
              <div className="absolute inset-0 animate-spin-slow">
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div className="absolute top-1/2 -right-2 transform -translate-y-1/2 w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                  <Star className="w-5 h-5 text-white" />
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-11 h-11 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center">
                  <Trophy className="w-5 h-5 text-white" />
                </div>
                <div className="absolute top-1/2 -left-2 transform -translate-y-1/2 w-9 h-9 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full flex items-center justify-center">
                  <BookOpen className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className="group bg-white/5 backdrop-blur-lg rounded-xl p-4 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-white">{stat.value}</div>
                        <div className="text-sm text-white/60">{stat.label}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Side - Description & Achievements */}
          <div className="space-y-8">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">Meet Mr. Rahul Maurya</h3>
              <p className="text-white/80 text-lg leading-relaxed mb-6">
                An award-winning educator, market leader, author, and visionary with over 15 years of 
                teaching experience. Mr. Maurya has transformed the lives of more than 20,000 students 
                worldwide, helping them master cutting-edge technologies and build successful careers 
                in the tech industry.
              </p>
              <p className="text-white/80 text-lg leading-relaxed">
                His innovative teaching methods, combined with deep industry expertise, have made 
                CodeMaster Institute a leading destination for aspiring developers and tech professionals.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">Key Achievements</h3>
              <div className="grid gap-4">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors duration-300"
                  >
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                    <span className="text-white/90">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;