import React from 'react';
import { Cpu, Network, Code, Terminal, Loader, Settings, Zap, FileCode2, Briefcase } from 'lucide-react';

const technicalSkills = [
  {
    label: 'Primary Skills',
    icon: <Zap size={18} className="text-purple-400" />,
    skills: [
      'PNR',
      'Synthesis',
      'Timing Analysis',
      'Timing Closure',
      'Python',
    ],
  },
  {
    label: 'EDA Tools',
    icon: <Settings size={18} className="text-purple-400" />,
    skills: [
      'Cadence Innovus',
      'Aprisa',
      'Genus',
      'Tempus',
      'Xilinx',
      'Arduino',
      'Multisim',
      'LTSpice',
    ],
  },
  {
    label: 'Scripting',
    icon: <FileCode2 size={18} className="text-purple-400" />,
    skills: [
      'TCL',
      'Shell-Scripting',
      'Verilog',
      'Linux',
      'C',
      'Python',
    ],
  },
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-mesh opacity-[0.03]"></div>
        
        {/* Floating Orbs */}
        <div className="absolute top-20 right-[10%] w-96 h-96 bg-purple-500/5 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-40 left-[5%] w-72 h-72 bg-purple-500/5 rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        
        {/* Particles */}
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-400/20 rounded-full animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Career Objective */}
        <div className="mb-12 animate-fade-in">
          <div className="flex flex-col items-center text-center mb-8">
            <div className="inline-block mb-3 font-mono text-xs text-purple-400 px-3 py-1 border border-purple-500/30 rounded-full">
            About Me
            </div>
            <h2 className="text-3xl font-bold">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-300">
                Career Objective
              </span>
            </h2>
          </div>
          <div className="bg-gray-900/40 rounded-xl p-6 border border-purple-500/10 backdrop-blur-sm hover:border-purple-500/20 transition-all duration-300">
            <p className="text-gray-300 text-base leading-relaxed">
              To obtain a challenging position in an organization that best utilizes my skills, abilities and provide opportunities to enhance my technical skills which would help me to solve critical real time problems while fulfilling the organization goals.
            </p>
          </div>
        </div>

        {/* Professional Overview */}
        <div className="mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="flex flex-col items-center text-center mb-8">
            <div className="inline-block mb-3 font-mono text-xs text-purple-400 px-3 py-1 border border-purple-500/30 rounded-full">
              My Journey
            </div>
            <h2 className="text-3xl font-bold">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-300">
              Professional Overview
            </span>
          </h2>
        </div>
          <div className="bg-gray-900/40 rounded-xl p-6 border border-purple-500/10 backdrop-blur-sm hover:border-purple-500/20 transition-all duration-300">
            <div className="space-y-4 text-gray-300 text-base leading-relaxed">
                <p>
                With around two years of experience in PnR, Synthesis, and IR, I have developed extensive expertise in physical design and ASIC development. During my role as a Physical Design Intern, I successfully handled multiple blocks in 16nm technology node, demonstrating strong capabilities in complex chip design.
              </p>
              <p>
                My core expertise lies in Floorplan, Placement, Clock Tree Synthesis, Routing, and Timing Closure. I have consistently demonstrated proficiency in ASIC flow and excel in handling placement challenges for high-count macros during Floor Planning, Pin Placement, and Floorplan Def Resize operations.
              </p>
              <p>
                I possess a comprehensive understanding of Floorplan and placement challenges, particularly for blocks with complex and logic-intensive designs. My experience extends to IR and physical Verification, coupled with strong knowledge in static timing analysis and implementing effective timing fixes for blocks.
                </p>
                <p>
                Additionally, I bring valuable expertise in synthesis, LEC, and Shell scripting, making me well-versed in both the technical and practical aspects of chip design and automation.
                </p>
              </div>
            </div>
              </div>
              
        {/* Technical Skills */}
        <div className="mb-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="flex flex-col items-center text-center mb-8">
            <div className="inline-block mb-3 font-mono text-xs text-purple-400 px-3 py-1 border border-purple-500/30 rounded-full">
              My Expertise
            </div>
            <h2 className="text-3xl font-bold">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-300">
                Technical Skills
              </span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {technicalSkills.map((group, idx) => (
              <div 
                key={idx} 
                className="bg-gray-900/40 rounded-xl p-6 border border-purple-500/10 backdrop-blur-sm hover:border-purple-500/20 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${0.6 + idx * 0.2}s` }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <div className="animate-float" style={{ animationDelay: `${idx * 0.2}s` }}>
                    {group.icon}
                  </div>
                  <h3 className="font-semibold text-gray-200">{group.label}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, i) => (
                    <span 
                      key={i} 
                      className="px-2.5 py-1 bg-purple-500/10 text-purple-400 rounded-md text-sm border border-purple-500/20 transition-all hover:bg-purple-500/20 hover:border-purple-500/30"
                    >
                      {skill}
                    </span>
                ))}
              </div>
            </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;