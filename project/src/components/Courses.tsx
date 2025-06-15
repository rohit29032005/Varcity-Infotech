import React from 'react';
import { Code, Brain, Database, Shield, Globe, Cpu, BarChart3, FileText } from 'lucide-react';

const Courses = () => {
  const courses = [
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Master HTML, CSS, JavaScript, React, and full-stack development',
      duration: '6 months',
      level: 'Beginner to Advanced',
      students: '5,200+',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Brain,
      title: 'AI/ML',
      description: 'Dive into Artificial Intelligence and Machine Learning with Python',
      duration: '8 months',
      level: 'Intermediate',
      students: '3,100+',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Database,
      title: 'Data Science',
      description: 'Analyze data, create insights, and build predictive models',
      duration: '7 months',
      level: 'Intermediate',
      students: '2,800+',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Shield,
      title: 'Ethical Hacking',
      description: 'Learn cybersecurity, penetration testing, and security auditing',
      duration: '5 months',
      level: 'Advanced',
      students: '1,900+',
      color: 'from-red-500 to-orange-500'
    },
    {
      icon: Cpu,
      title: 'Embedded Systems',
      description: 'Hardware programming, IoT, and microcontroller development',
      duration: '6 months',
      level: 'Intermediate',
      students: '1,400+',
      color: 'from-yellow-500 to-amber-500'
    },
    {
      icon: Code,
      title: 'PHP Development',
      description: 'Server-side scripting, Laravel, and dynamic web applications',
      duration: '4 months',
      level: 'Beginner',
      students: '2,600+',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: BarChart3,
      title: 'Excel Mastery',
      description: 'Advanced Excel, VBA programming, and data analysis',
      duration: '3 months',
      level: 'Beginner to Advanced',
      students: '4,100+',
      color: 'from-teal-500 to-green-500'
    },
    {
      icon: FileText,
      title: 'Full Stack Development',
      description: 'Complete web development with modern frameworks and databases',
      duration: '10 months',
      level: 'Intermediate to Advanced',
      students: '3,700+',
      color: 'from-slate-600 to-slate-500'
    }
  ];

  return (
    <section id="courses" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Our Courses
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Comprehensive courses designed by industry experts to prepare you for the future of technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {courses.map((course, index) => {
            const Icon = course.icon;
            return (
              <div
                key={index}
                className="group relative bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-cyan-400/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/25"
                style={{
                  animation: `fade-in-up 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                {/* 3D Card Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className={`w-12 h-12 bg-gradient-to-br ${course.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {course.title}
                  </h3>

                  <p className="text-white/80 text-sm mb-4 leading-relaxed">
                    {course.description}
                  </p>

                  <div className="space-y-2 text-sm text-white/60">
                    <div className="flex justify-between">
                      <span>Duration:</span>
                      <span className="text-cyan-400">{course.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Level:</span>
                      <span className="text-cyan-400">{course.level}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Students:</span>
                      <span className="text-cyan-400">{course.students}</span>
                    </div>
                  </div>

                  <button className="w-full mt-6 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 rounded-lg text-cyan-400 hover:from-cyan-500 hover:to-blue-500 hover:text-white transition-all duration-300 transform group-hover:translate-y-0">
                    Learn More
                  </button>
                </div>

                {/* Floating Animation */}
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Courses;