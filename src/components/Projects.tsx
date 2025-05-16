import React, { useState } from 'react';
import { Eye, Car, Clock, Bus, Calculator } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  tags: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, icon, tags }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="backdrop-blur-sm bg-gray-900/40 rounded-xl border border-purple-500/10 shadow-lg overflow-hidden transition-all duration-300 h-full animate-fade-in"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
        boxShadow: isHovered ? '0 10px 30px rgba(168, 85, 247, 0.2)' : '0 5px 15px rgba(0, 0, 0, 0.1)'
      }}
    >
      <div className="p-5 flex flex-col h-full relative">
        <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/5 rounded-full blur-3xl -z-10 animate-pulse-slow"></div>
        <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center mb-4 text-purple-400 animate-float">
          {icon}
        </div>
        
        <h3 className="text-lg font-bold mb-2 text-white/90">{title}</h3>
        
        <p className="text-gray-400 text-sm mb-4 flex-grow">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span 
              key={index}
              className="text-xs font-mono px-2 py-1 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20 transition-all hover:bg-purple-500/20"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Digital Eye for Aid of Blind People',
      description: 'A solution to help blind and visually impaired people become more independent by providing navigational instructions and converting text to speech. Implemented using OpenCV for image processing and FPGA for real-time processing.',
      icon: <Eye size={24} />,
      tags: ['OpenCV', 'Verilog', 'Python', 'FPGA']
    },
    {
      title: 'Vehicle Accident Detection',
      description: 'A prototype device using De-10 Nano board that detects vehicle accidents and sends alerts to family members through a mobile app. Features real-time impact detection and GPS location tracking.',
      icon: <Car size={24} />,
      tags: ['Android Studio', 'Verilog', 'Python', 'Arduino']
    },
    {
      title: 'Digital Clock on Nexys-4 DDR Board',
      description: 'Implemented a digital clock using Verilog on FPGA (Nexys-4 DDR) board with counter and display modules. Features include time display, alarm functionality, and 12/24 hour format.',
      icon: <Clock size={24} />,
      tags: ['Verilog', 'FPGA', 'Hardware Design']
    },
    {
      title: 'Bus Reservation System',
      description: 'A system that allows customers to book tickets without going out and waiting for the reservation. Features include seat selection, payment integration, and booking confirmation.',
      icon: <Bus size={24} />,
      tags: ['C Language', 'Data Structures']
    },
    {
      title: 'Counter using DE-10 Nano Board',
      description: 'Designed and implemented a 4-bit counter using Verilog in the Quartus prime software on De-10 Nano Board. Features include synchronous counting, reset functionality, and LED display.',
      icon: <Calculator size={24} />,
      tags: ['Verilog', 'FPGA', 'Digital Design']
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      {/* Modern Grid Background */}
      <div className="absolute inset-0 overflow-hidden opacity-[0.03]">
        <div className="absolute w-full h-full">
          {/* Grid Pattern */}
          <div className="absolute inset-0" 
            style={{
              backgroundImage: `
                linear-gradient(to right, rgb(168 85 247 / 0.1) 1px, transparent 1px),
                linear-gradient(to bottom, rgb(168 85 247 / 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px'
            }}>
          </div>
          
          {/* Floating Circles */}
          {Array.from({ length: 5 }).map((_, i) => (
          <div 
            key={i} 
              className="absolute w-64 h-64 bg-purple-500/10 rounded-full animate-float"
            style={{ 
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.5}s`,
                filter: 'blur(80px)'
              }}
            />
          ))}
          
          {/* Diagonal Lines */}
          <div className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: 'repeating-linear-gradient(45deg, rgb(168 85 247 / 0.05) 0px, rgb(168 85 247 / 0.05) 1px, transparent 1px, transparent 50px)',
            }}>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-block mb-3 font-mono text-xs text-purple-400 px-3 py-1 border border-purple-500/30 rounded-full animate-fade-in">
            My Work
          </div>
          <h2 className="text-3xl font-bold relative animate-slide-up">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-300">
              Featured Projects
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              icon={project.icon}
              tags={project.tags}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;