import React from 'react';
import { Code, Brain, Database, Shield, Globe, Cpu } from 'lucide-react';
import SEO from './SEO';

const Team = () => {
  const teamMembers = [
    {
      name: 'Anamika Chaudhary',
      role: 'Specialized Instructor in ADFA now in Palghar & Boisar',
      expertise: 'Specialized in DFA, SAP, Power BI',
      icon: Brain,
      experience: '6+ years',
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Suhani Singh',
      role: 'Specialized Instructor in ADFA now in Palghar & Boisar',
      expertise: 'Specialized in ADFA, SAP, Power BI',
      icon: Code,
      experience: '5+ years',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Sneha Karambele',
      role: 'Specialized Instructor in Web Development now in Palghar & Boisar',
      expertise: 'Specialized in Web Development, HTML, CSS, JavaScript, jQuery and Java, PHP, Python',
      icon: Shield,
      experience: '2+ years',
      color: 'from-red-500 to-orange-500'
    },
    {
      name: 'Shweta Gupta',
      role: 'DFA Instructor Marathi Typing now in Palghar & Boisar',
      expertise: 'DFA, Marathi Typing, Tally',
      icon: Database,
      experience: '3+ years',
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Deepa Pandey',
      role: 'Specialized Instructor in DFA now in Palghar & Boisar',
      expertise: 'DFA, Tally, GST',
      icon: Globe,
      experience: '3+ years',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      name: 'Akash Kharwar',
      role: 'Video Content Creator',
      expertise: 'Video Editing, Content Creation, Digital Marketing  now in Palghar & Boisar',
      icon: Cpu,
      experience: '2+ years',
      color: 'from-yellow-500 to-amber-500'
    }
  ];

  return (
    <>
      {/* **UPDATED: Added SEO component for team page** */}
      <SEO 
        title="Expert Team - Full Stack Development & Web Design Instructors | Varcity Infotech"
        description="Meet our expert instructors specializing in full stack development, web design, and digital solutions. Industry professionals with 20+ years experience."
        keywords="full stack development instructors, web design experts, digital solutions team, custom software company India, programming teachers,palghar,boisar"
        canonical="https://www.varcityinfotech.com/team"
      />
      
      <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
        <div className="container mx-auto px-6">
          {/* **UPDATED: Proper heading hierarchy** */}
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Expert Team - Full Stack Development & Web Design Instructors
          </h1>
          
          <h2 className="text-xl md:text-2xl text-center text-white/80 mb-16 max-w-3xl mx-auto">
            Meet the industry professionals who will guide your learning journey in digital solutions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {teamMembers.map((member, index) => {
              const Icon = member.icon;
              return (
                <div key={index} className="group relative perspective-1000">
                  <div className="relative w-full h-80 transform-style-preserve-3d transition-transform duration-700 group-hover:rotate-y-180">
                    
                    {/* Front of Card */}
                    <div className="absolute inset-0 w-full h-full backface-hidden">
                      <div className={`relative h-full bg-gradient-to-br ${member.color} rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-2xl`}>
                        
                        {/* **UPDATED: Added meaningful alt text for team member icons** */}
                        <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-lg flex items-center justify-center mb-4">
                          <Icon 
                            className="w-12 h-12 text-white" 
                            aria-label={`${member.name} - ${member.role} specializing in ${member.expertise.split(',')[0]}`}
                          />
                        </div>

                        {/* **UPDATED: Proper heading hierarchy** */}
                        <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                        <h4 className="text-white/90 mb-4 text-lg">{member.role}</h4>
                        <p className="text-white/80 text-sm mb-4">{member.experience} experience</p>
                        
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                          <p className="text-white/60 text-xs">Hover to flip</p>
                        </div>
                      </div>
                    </div>

                    {/* Back of Card */}
                    <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
                      <div className="relative h-full bg-slate-800/90 backdrop-blur-lg rounded-2xl p-6 flex flex-col justify-center text-center border border-white/10">
                        <h3 className="text-xl font-bold text-white mb-4">{member.name}</h3>
                        <h4 className="text-cyan-400 font-semibold mb-2">Expertise:</h4>
                        <p className="text-white/80 mb-4">{member.expertise}</p>
                        <h4 className="text-cyan-400 font-semibold mb-2">Experience:</h4>
                        <p className="text-white/80 mb-6">{member.experience}</p>
                        <button className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-white font-semibold hover:from-cyan-400 hover:to-blue-500 transition-all duration-300">
                          View Profile
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Team Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '50+', label: 'Years Combined Experience' },
              { value: '15+', label: 'Industry Experts' },
              { value: '100+', label: 'Certifications' },
              { value: '24/7', label: 'Student Support' }
            ].map((stat, index) => (
              <div key={index} className="text-center p-6 bg-white/5 backdrop-blur-lg rounded-xl border border-white/10">
                <h3 className="text-3xl font-bold text-cyan-400 mb-2">{stat.value}</h3>
                <p className="text-white/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
