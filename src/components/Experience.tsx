import React from 'react';
import { Briefcase, Wrench, Layers, ListChecks, Code2, CalendarDays } from 'lucide-react';

const experienceData = [
  {
    company: 'Maxlinear Technologies',
    roles: [
      {
        title: 'PD-Design Automation Engineer',
        date: 'June 2024 – present',
        icon: <Wrench size={20} className="text-purple-400" />,
        highlights: [
          'Worked on PD flow development.',
          'Worked on Gatelevel netlist Handoff script development.',
        ],
        skills: ['Innovus', 'Aprisa', 'TCL', 'Python', 'Linux', 'Git'],
    },
    {
      title: 'Physical Design Intern',
        date: 'Jul 2023 – Jun 2024',
        icon: <Layers size={20} className="text-purple-400" />,
        blocks: [
          {
            name: 'Block 1',
            details: [
              'Instance count: 425,904',
              'IO pins: 655',
              'Macros: 72',
              'Frequency: 500 MHz',
            ],
            complexities: [
              'Timing critical paths with more logic depth in the design.',
              'Analysing and fixing huge congestion at notches using placement blockages, route guides, floorplan changes, bounds.',
              'Fixed Shorts/Opens and DRC violation.',
            ],
          },
          {
            name: 'Block 2',
            details: [
              'Instance count: 2.6 Million',
              'IO pins: 1400',
              'Macros: 57',
              'Frequency: 500 MHz',
            ],
            complexities: [
              'Core congestion is high in the design, and it is unroutable.',
            ],
          },
          {
            name: 'Block 3',
            details: [
              'Instance count: 2 Million',
              'IO pins: 1372',
              'Macros: 2',
              'Frequency: 700 MHz',
            ],
            complexities: [
              'The block is type of feedthrough block.',
              'Automatically placing the pins with respect to given location.',
              'Reduction in cross talk of clock nets.',
              'Resolving the tran violation issues.',
            ],
          },
        ],
        role: [
          'Floorplan',
          'Power plan',
          'Placement',
          'Trial route and congestion analysis',
          'CTS',
          'Detail Routing',
          'Timing Closure',
        ],
        tools: ['Innovus for Physical design implementation'],
      },
    ],
  },
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-16 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-mesh opacity-[0.03]"></div>
        
        {/* Floating Orbs */}
        <div className="absolute top-40 left-[15%] w-96 h-96 bg-purple-500/5 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-[10%] w-72 h-72 bg-purple-500/5 rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        
        {/* Diagonal Lines */}
        <div className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, rgb(168 85 247 / 0.05) 0px, rgb(168 85 247 / 0.05) 1px, transparent 1px, transparent 50px)',
          }}>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center mb-8">
          <div className="inline-block mb-3 font-mono text-xs text-purple-400 px-3 py-1 border border-purple-500/30 rounded-full animate-fade-in">
            My Experience
          </div>
          <h2 className="text-3xl font-bold animate-slide-up">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-300">
              Work Experience
            </span>
          </h2>
        </div>

        <div className="space-y-6">
          {experienceData.map((exp, idx) => (
            <div 
              key={idx} 
              className="bg-gray-900/40 rounded-xl border border-purple-500/10 p-6 backdrop-blur-sm hover:border-purple-500/20 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: '0.2s' }}
            >
              <h3 className="text-2xl font-bold mb-4 text-white flex items-center gap-2">
                {exp.company}
              </h3>
              <div className="space-y-8">
                {exp.roles.map((role, rIdx) => (
                  <div 
                    key={rIdx} 
                    className="mb-6 animate-fade-in"
                    style={{ animationDelay: `${0.4 + rIdx * 0.2}s` }}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="animate-float" style={{ animationDelay: `${rIdx * 0.2}s` }}>
                        {role.icon}
                      </div>
                      <span className="font-semibold text-lg text-purple-300">{role.title}</span>
                      <span className="ml-auto flex items-center gap-1 text-sm text-gray-400 font-mono">
                        <CalendarDays size={16} />{role.date}
                      </span>
                    </div>
                    {role.highlights && (
                      <ul className="list-disc ml-7 text-gray-300 mb-2">
                        {role.highlights.map((h, i) => (
                          <li key={i}>{h}</li>
                        ))}
                      </ul>
                    )}
                    {role.skills && (
                      <div className="flex flex-wrap gap-2 mb-2 ml-7">
                        {role.skills.map((skill, i) => (
                          <span 
                            key={i} 
                            className="px-2.5 py-1 bg-purple-500/10 text-purple-400 rounded-md text-sm border border-purple-500/20 transition-all hover:bg-purple-500/20 hover:border-purple-500/30"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                    {role.blocks && (
                      <div className="space-y-4 mt-4">
                        {role.blocks.map((block, bIdx) => (
                          <div 
                            key={bIdx} 
                            className="bg-gray-800/60 rounded-lg p-4 border border-purple-500/10 hover:border-purple-500/20 transition-all duration-300 animate-fade-in"
                            style={{ animationDelay: `${0.6 + bIdx * 0.2}s` }}
                          >
                            <div className="font-semibold text-purple-400 mb-2">{block.name} Description</div>
                            <ul className="ml-5 text-gray-300 text-sm mb-3">
                              {block.details.map((d, i) => (
                                <li key={i}>• {d}</li>
                              ))}
                            </ul>
                            <div className="font-semibold text-gray-200 mb-2">Design Complexities:</div>
                            <ul className="ml-5 text-gray-400 text-sm">
                              {block.complexities.map((c, i) => (
                                <li key={i}>• {c}</li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}
                    {role.role && (
                      <div className="mt-4 ml-7">
                        <span className="font-semibold text-gray-200">Role:</span>
                        <span className="ml-2 text-gray-400 text-sm">{role.role.join(' | ')}</span>
                      </div>
                    )}
                    {role.tools && (
                      <div className="ml-7 mt-2">
                        <span className="font-semibold text-gray-200">Tools used:</span>
                        <span className="ml-2 text-gray-400 text-sm">{role.tools.join(', ')}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;