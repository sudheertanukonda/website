import React from 'react';
import { Menu, X } from 'lucide-react';

interface NavBarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

const NavBar: React.FC<NavBarProps> = ({ 
  activeSection, 
  setActiveSection, 
  isMenuOpen, 
  setIsMenuOpen 
}) => {
  const navItems = ['home', 'about', 'education', 'skills', 'experience', 'projects', 'resume', 'contact'];

  return (
    <nav className="fixed w-full bg-gray-900/50 backdrop-blur-lg z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Sudheer Tanukonda
          </h1>
          
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => setActiveSection(item)}
                className={`capitalize relative ${
                  activeSection === item
                    ? 'text-blue-400'
                    : 'text-gray-300 hover:text-blue-400'
                } transition-all duration-300 after:content-[""] after:absolute after:w-full after:h-0.5 after:bg-blue-400 after:left-0 after:bottom-0 after:rounded-full ${
                  activeSection === item ? 'after:scale-x-100' : 'after:scale-x-0'
                } after:transition-transform after:duration-300 hover:after:scale-x-100`}
              >
                {item}
              </button>
            ))}
          </div>

          <button
            className="md:hidden text-gray-300 hover:text-blue-400 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute w-full left-0 top-20 bg-gray-900/95 backdrop-blur-lg">
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    setActiveSection(item);
                    setIsMenuOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-3 rounded-lg ${
                    activeSection === item
                      ? 'bg-blue-500/20 text-blue-400'
                      : 'text-gray-300 hover:bg-blue-500/10 hover:text-blue-400'
                  } capitalize transition-all duration-300`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;