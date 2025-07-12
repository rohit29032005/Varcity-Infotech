import React from 'react';
import { Code, Brain, Database, Shield, Globe, Cpu, BarChart3, FileText } from 'lucide-react';
import SEO from './SEO';

const Courses = () => {
  const courses = [
    {
      icon: Globe,
      title: 'Web Development With MERN Stack ',
      description: 'Master HTML, CSS, JavaScript, React, and full-stack development now in Palghar & Boisar',
      duration: '6 months',
      level: 'Beginner to Advanced',
      students: '5,200+',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Brain,
      title: 'Diploma In Financial Accounting',
      description: 'The topic covers Microsoft Office, Advanced Excel, Tally, and GST now in Palghar & Boisar',
      duration: '8 months',
      level: 'Beginner to Advanced',
      students: '3,100+',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Database,
      title: 'Certificate In SAP Systems, Application & Products',
      description: 'SAP FICO, SAP MM, SAP SD, SAP ABAP, and SAP HR now in Palghar & Boisar students doorsteps',
      duration: '3 months',
      level: 'Intermediate',
      students: '2,800+',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Shield,
      title: 'Diploma In Software Engineering (DSE)',
      description: 'Web development, Programming Language, Java, Dot Net, and Python now in Palghar & Boisar',
      duration: '1 year',
      level: 'Beginner to Advanced',
      students: '1,900+',
      color: 'from-red-500 to-orange-500'
    },
    {
      icon: Cpu,
      title: 'Diploma In Web Designing & Development',
      description: 'CorelDraw, Photoshop, HTML, CSS, JS, PHP & MySQL now in Palghar & Boisar stuedents doorsteps',
      duration: '10 months',
      level: 'Intermediate',
      students: '1,400+',
      color: 'from-yellow-500 to-amber-500'
    },
    {
      icon: Code,
      title: 'Certificate In Computerized Accounting',
      description: 'Tally Prime, Tally ERP 9, and GST, including practical training now in Palghar & Boisar students doorsteps',
      duration: '4 months',
      level: 'Beginner',
      students: '2,600+',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: BarChart3,
      title: 'Certificate Course In Python PHP & ADD',
      description: 'Get a certified course in Python, PHP, ADD, Digital Marketing, and more now in Palghar & Boisar',
      duration: '4 months',
      level: 'Beginner to Advanced',
      students: '4,100+',
      color: 'from-teal-500 to-green-500'
    },
    {
      icon: FileText,
      title: 'Data Structures & Algorithms with Design Analysis',
      description: 'Learn the fundamentals of data structures and algorithms with practical applications now in Palghar & Boisar',
      duration: '10 months',
      level: 'Beginner to Advanced',
      students: '3,700+',
      color: 'from-slate-600 to-slate-500'
    }
  ];

  return (
    <>
      {/* **UPDATED: Added SEO component for courses page** */}
      <SEO 
        title="Full Stack Development & Web Design Courses - Varcity Infotech"
        description="Comprehensive courses in full stack development, web design, digital solutions. Expert training in MERN stack, Python, SAP, and more."
        keywords="full stack development courses, web design training, MERN stack course, Python training, SAP certification, digital solutions India"
        canonical="https://www.varcityinfotech.com/courses"
      />
      
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900">
        <div className="container mx-auto px-6">
          {/* **UPDATED: Proper heading hierarchy** */}
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Full Stack Development & Web Design Courses
          </h1>
          
          <h2 className="text-xl md:text-2xl text-center text-white/80 mb-16 max-w-3xl mx-auto">
            Comprehensive courses designed by industry experts to prepare you for the future of technology now for Palghar & Boisar Students
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {courses.map((course, index) => {
              const Icon = course.icon;
              return (
                <div key={index} className="group relative">
                  <div className="relative bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20">
                    
                    {/* **UPDATED: Added meaningful alt text for course icons** */}
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${course.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon 
                        className="w-8 h-8 text-white" 
                        aria-label={`${course.title} course icon representing ${course.description.split(',')[0]}`}
                      />
                    </div>

                    {/* **UPDATED: Proper heading hierarchy** */}
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {course.title}
                    </h3>
                    
                    <p className="text-white/70 mb-6 leading-relaxed">
                      {course.description}
                    </p>

                    <div className="space-y-2 mb-6">
                      <div className="flex justify-between items-center">
                        <span className="text-white/60 text-sm">Duration:</span>
                        <span className="text-cyan-400 font-semibold">{course.duration}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-white/60 text-sm">Level:</span>
                        <span className="text-white font-semibold">{course.level}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-white/60 text-sm">Students:</span>
                        <span className="text-green-400 font-semibold">{course.students}</span>
                      </div>
                    </div>

                    <button className="w-full py-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 rounded-lg text-cyan-400 font-semibold hover:from-cyan-500/30 hover:to-blue-500/30 hover:border-cyan-400/50 transition-all duration-300">
                      Learn More
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Courses;
