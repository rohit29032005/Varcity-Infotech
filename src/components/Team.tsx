import React from 'react';
import { Code, Brain, Database, Shield, Globe, Cpu } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: 'Anamika Chaudhary',
      role: 'Specialized Instructor in ADFA',
      expertise: 'Specilized in DFA, SAP, Power BI',
      icon: Brain,
      experience: '6+ years',
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Suhani Singh ',
      role: 'Specialized Instructor in ADFA',
      expertise: 'Specialized in ADFA, SAP, Power BI',
      icon: Code,
      experience: '5+ years',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Sneha Karambele',
      role: 'Specialized Instructor in Web Development ',
      expertise: 'Specialized in Web Development, HTML, CSS, JavaScript,Jquey and java,PHP,python',
      icon: Shield,
      experience: '2+ years',
      color: 'from-red-500 to-orange-500'
    },
    {
      name: 'Shweta Gupta',
      role: 'DFA Instructor Marathi Typing',
      expertise: 'DFA, Marathi Typing, Tally',
      icon: Database,
      experience: '3+ years',
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Deepa Pandey',
      role: 'Specialized Instructor in DFA',
      expertise: 'DFA, Tally, GST',
      icon: Globe,
      experience: '3+ years',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      name: 'AKash kharwar',
      role: 'Video Content Creator',
      expertise: 'Video Editing, Content Creation, Digital Marketing',
      icon: Cpu,
      experience: '2+ years',
      color: 'from-yellow-500 to-amber-500'
    }
    
  ];

  return (
    <section id="team" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Our Expert Team
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Meet the industry professionals who will guide your learning journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => {
            const Icon = member.icon;
            return (
              <div
                key={index}
                className="group relative perspective-1000"
                style={{
                  animation: `fade-in-up 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                <div className="relative w-full h-80 transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                  {/* Front of Card */}
                  <div className="absolute inset-0 w-full h-full backface-hidden">
                    <div className="w-full h-full bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 overflow-hidden">
                      {/* Background Gradient */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${member.color} opacity-10`}></div>
                      
                      <div className="relative z-10 p-6 h-full flex flex-col items-center justify-center text-center">
                        {/* Avatar */}
                        <div className={`w-24 h-24 bg-gradient-to-br ${member.color} rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className="w-12 h-12 text-white" />
                        </div>

                        <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                        <p className="text-cyan-400 font-semibold mb-3">{member.role}</p>
                        <p className="text-white/60 text-sm mb-4">{member.experience} experience</p>
                        
                        {/* Hover Indicator */}
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white/40 text-xs animate-pulse">
                          Hover to flip
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Back of Card */}
                  <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
                    <div className="w-full h-full bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 overflow-hidden">
                      <div className={`absolute inset-0 bg-gradient-to-br ${member.color} opacity-20`}></div>
                      
                      <div className="relative z-10 p-6 h-full flex flex-col justify-center">
                        <h3 className="text-lg font-bold text-white mb-4 text-center">{member.name}</h3>
                        
                        <div className="space-y-3">
                          <div>
                            <h4 className="text-cyan-400 font-semibold text-sm mb-2">Expertise:</h4>
                            <p className="text-white/90 text-sm leading-relaxed">{member.expertise}</p>
                          </div>
                          
                          <div>
                            <h4 className="text-cyan-400 font-semibold text-sm mb-2">Experience:</h4>
                            <p className="text-white/90 text-sm">{member.experience}</p>
                          </div>

                          <div className="pt-4">
                            <button className="w-full py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 rounded-lg text-cyan-400 hover:from-cyan-500 hover:to-blue-500 hover:text-white transition-all duration-300">
                              View Profile
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-cyan-400/30 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-blue-400/30 rounded-full animate-pulse delay-150 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            );
          })}
        </div>

        {/* Team Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: '50+', label: 'Years Combined Experience' },
            { value: '15+', label: 'Industry Experts' },
            { value: '100+', label: 'Certifications' },
            { value: '24/7', label: 'Student Support' }
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 hover:border-cyan-400/50 transition-all duration-300"
            >
              <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.value}</div>
              <div className="text-white/80 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;