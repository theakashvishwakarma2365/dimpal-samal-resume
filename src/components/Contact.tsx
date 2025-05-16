import React from 'react';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';

const contactInfo = [
  {
    icon: <Mail size={20} className="text-purple-400" />,
    label: 'Email',
    value: 'dimpalsamal29@gmail.com',
    href: 'mailto:dimpalsamal29@gmail.com'
  },
  {
    icon: <Phone size={20} className="text-purple-400" />,
    label: 'Phone',
    value: '+91 7382075883',
    href: 'tel:+917382075883'
  },
  {
    icon: <Linkedin size={20} className="text-purple-400" />,
    label: 'LinkedIn',
    value: 'Dimpal Samal',
    href: 'https://www.linkedin.com/in/dimpal-samal-9aa1541b3/'
  },
  {
    icon: <MapPin size={20} className="text-purple-400" />,
    label: 'Location',
    value: 'Bangalore, India'
  }
];

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-mesh opacity-[0.03]"></div>
        
        {/* Floating Orbs */}
        <div className="absolute top-20 right-[20%] w-96 h-96 bg-purple-500/5 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 left-[10%] w-72 h-72 bg-purple-500/5 rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        
        {/* Particles */}
        {Array.from({ length: 10 }).map((_, i) => (
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
            Get in Touch
          </div>
          <h2 className="text-3xl font-bold animate-slide-up">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-300">
              Contact Me
            </span>
          </h2>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="bg-gray-900/40 rounded-xl p-6 border border-purple-500/10 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-purple-400 mb-4">Let's Connect</h3>
              <p className="text-gray-300 mb-6">
                Feel free to reach out for collaborations, opportunities, or just to say hello! 
                I'll get back to you as soon as possible.
              </p>
              <div className="space-y-4">
                {contactInfo.map((info, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-4 p-4 rounded-lg bg-gray-800/40 border border-purple-500/10 hover:border-purple-500/20 transition-all duration-300"
                  >
                    <div className="animate-float" style={{ animationDelay: `${idx * 0.2}s` }}>
                      {info.icon}
              </div>
              <div>
                      <div className="text-sm text-gray-400 mb-1">{info.label}</div>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-purple-400 hover:text-purple-300 transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <div className="text-gray-200">{info.value}</div>
                      )}
                    </div>
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

export default Contact;