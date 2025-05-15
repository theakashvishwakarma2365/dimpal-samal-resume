import React, { useEffect, useRef } from 'react';
import { ChevronDown, Mail, Linkedin } from 'lucide-react';

const Hero: React.FC = () => {
  const typingRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!typingRef.current) return;

    const text = 'Design Automation Engineer';
    let currentIndex = 0;

    const type = () => {
      if (!typingRef.current) return;
      
      if (currentIndex <= text.length) {
        typingRef.current.textContent = text.substring(0, currentIndex);
        currentIndex++;
        setTimeout(type, 100); // Typing speed
      }
    };

    // Start typing after a short delay
    setTimeout(type, 500);
  }, []);

  return (
    <section id="home" className="min-h-screen relative flex items-center">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-mesh opacity-[0.03]"></div>
        
        {/* Gradient Orbs */}
        <div className="absolute top-20 left-[20%] w-72 h-72 bg-purple-500/5 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-[20%] w-96 h-96 bg-purple-500/5 rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-40 right-[30%] w-64 h-32 bg-purple-400/5 rounded-full filter blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-mesh opacity-[0.03]"></div>
        
        {/* Floating Particles */}
        {Array.from({ length: 20 }).map((_, i) => (
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
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
              Hi, I'm{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-300">
                Dimpal Samal
              </span>
            </h1>
            
            <div className="mb-6 h-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <span ref={typingRef} className="font-mono text-purple-400"></span>
              <span className="animate-blink">|</span>
            </div>
            
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto lg:mx-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              Passionate about creating efficient design automation solutions and optimizing VLSI design workflows.
            </p>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start gap-4 mb-8 animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <a 
                href="mailto:dimpalsamal29@gmail.com"
                className="p-2 rounded-full hover:bg-purple-500/10 transition-all duration-300 hover:scale-110"
                aria-label="Email"
              >
                <Mail size={24} className="text-purple-400" />
              </a>
              <a 
                href="https://www.linkedin.com/in/dimpal-samal-9aa1541b3/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-purple-500/10 transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} className="text-purple-400" />
              </a>
            </div>
            
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <a 
                href="#contact" 
                className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-purple-400 text-white font-medium transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg hover:shadow-purple-500/20"
              >
                Get In Touch
              </a>
              <a 
                href="#projects" 
                className="px-6 py-3 rounded-lg border border-purple-500/30 bg-purple-500/5 text-purple-400 font-medium hover:bg-purple-500/10 transition-all duration-300"
              >
                View Projects
              </a>
            </div>
          </div>
          
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 animate-float">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400/30 to-purple-600/30 blur-xl animate-pulse-slow"></div>
              <div className="absolute inset-4 rounded-full bg-gray-900/80 backdrop-blur-sm border border-purple-500/20"></div>
              <div className="relative z-10 w-full h-full flex items-center justify-center">
                <img 
                  src="./assets/picofme.png" 
                  alt="Dimpal Samal" 
                  className="w-56 h-56 md:w-72 md:h-72 object-cover rounded-full p-1 border border-purple-500/30"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <a 
        href="#about" 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-purple-400 animate-bounce-slow"
      >
        <ChevronDown size={24} />
      </a>
    </section>
  );
};

export default Hero;