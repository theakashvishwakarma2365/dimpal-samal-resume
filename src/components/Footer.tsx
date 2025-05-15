import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 border-t border-purple-500/10 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="text-gray-500 text-sm text-center">
            <p>&copy; {new Date().getFullYear()} Dimpal Samal. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;