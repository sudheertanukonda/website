import React, { useState } from 'react';
import { Menu, X, Download, Linkedin, Mail, MessageCircle } from 'lucide-react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <Home setActiveSection={setActiveSection} />;
      case 'about':
        return <About />;
      case 'education':
        return <Education />;
      case 'skills':
        return <Skills />;
      case 'experience':
        return <Experience />;
      case 'projects':
        return <Projects />;
      case 'resume':
        return <Resume />;
      case 'contact':
        return <Contact />;
      default:
        return <Home setActiveSection={setActiveSection} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <NavBar 
        activeSection={activeSection} 
        setActiveSection={setActiveSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      <main className="container mx-auto px-4 pt-20 pb-12">
        {renderSection()}
      </main>
      
      <footer className="bg-gray-900/50 backdrop-blur-lg py-8 mt-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="flex space-x-6">
              <a 
                href="https://www.linkedin.com/in/sudheertanukonda/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-blue-400 transition-all transform hover:scale-110"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="mailto:sudheert.india@gmail.com" 
                className="hover:text-blue-400 transition-all transform hover:scale-110"
              >
                <Mail size={24} />
              </a>
              <a 
                href="https://wa.me/+919640587569" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-green-400 transition-all transform hover:scale-110"
              >
                <MessageCircle size={24} />
              </a>
            </div>
            <p className="text-sm text-gray-400">© 2024 Sudheer Tanukonda. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;