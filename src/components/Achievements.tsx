import React from 'react';
import { Trophy, Award, Star, Medal, Lightbulb, Target } from 'lucide-react';

const achievements = [
  {
    title: 'Academic Excellence',
    icon: <Trophy size={20} className="text-purple-400" />,
    items: [
      'Secured 8.5 CGPA in B.Tech',
      'Secured 85% in Intermediate',
      'Secured 90% in SSC',
    ],
  },
  {
    title: 'Technical Achievements',
    icon: <Star size={20} className="text-purple-400" />,
    items: [
      'Successfully completed training in VLSI Physical Design at CDAC',
      'Completed certification in Advanced VLSI Design',
      'Proficient in industry-standard EDA tools',
    ],
  },
  {
    title: 'Professional Development',
    icon: <Target size={20} className="text-purple-400" />,
    items: [
      'Led multiple successful chip design projects',
      'Developed automation scripts for design flow optimization',
      'Contributed to team efficiency improvements',
    ],
  },
];

const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-16 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-mesh opacity-[0.03]"></div>
        
        {/* Floating Orbs */}
        <div className="absolute top-20 left-[25%] w-96 h-96 bg-purple-500/5 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-40 right-[15%] w-72 h-72 bg-purple-500/5 rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        
        {/* Particles */}
        {Array.from({ length: 12 }).map((_, i) => (
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
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-block mb-3 font-mono text-xs text-purple-400 px-3 py-1 border border-purple-500/30 rounded-full animate-fade-in">
            My Achievements
          </div>
          <h2 className="text-3xl font-bold animate-slide-up">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-300">
              Milestones & Accomplishments
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {achievements.map((achievement, idx) => (
            <div
              key={idx}
              className="bg-gray-900/40 rounded-xl p-6 border border-purple-500/10 backdrop-blur-sm hover:border-purple-500/20 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${0.2 + idx * 0.2}s` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="animate-float" style={{ animationDelay: `${idx * 0.2}s` }}>
                  {achievement.icon}
                </div>
                <h3 className="font-semibold text-lg text-purple-300">
                  {achievement.title}
                </h3>
              </div>
              <ul className="space-y-3">
                {achievement.items.map((item, i) => (
                  <li 
                    key={i}
                    className="flex items-start gap-2 text-gray-300 text-sm leading-relaxed group animate-fade-in"
                    style={{ animationDelay: `${0.4 + idx * 0.2 + i * 0.1}s` }}
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-purple-400/60 group-hover:bg-purple-400 transition-colors"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;