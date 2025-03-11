import React, { useState } from 'react';

interface HomeProps {
  setActiveSection: (section: string) => void;
}

const Home: React.FC<HomeProps> = ({ setActiveSection }) => {
  const [hasError, setHasError] = useState(false);

  return (
    <div className="min-h-[calc(100vh-5rem)] flex flex-col md:flex-row items-center justify-center gap-12 py-12">
      <div className="w-full md:w-1/2 space-y-6 text-center md:text-left px-4 md:px-0">
        <div className="space-y-4">
          <p className="text-blue-400 font-medium">Welcome to my portfolio</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent whitespace-nowrap overflow-visible">
            Hi, I'm Sudheer Tanukonda
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-400">
            Power BI Developer
          </h2>
        </div>
        <p className="text-lg text-gray-300 leading-relaxed max-w-2xl">
          As an Experienced Power BI Developer, I transform complex data into actionable insights through interactive dashboards and custom reports. With expertise in Power BI, DAX, Power Query, and MySQL, I optimize data models and streamline processes to support data-driven decisions. I help organizations unlock valuable insights and drive business growth by delivering tailored solutions. By collaborating with cross-functional teams, I ensure business intelligence strategies align with company goals. Passionate about continuous learning, I stay up-to-date with the latest BI tools to provide innovative and impactful solutions.
        </p>
        <div className="flex gap-4 justify-center md:justify-start">
          <button
            onClick={() => setActiveSection('resume')}
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
          >
            View Resume
          </button>
          <button
            onClick={() => setActiveSection('projects')}
            className="px-8 py-3 border border-blue-400 text-blue-400 rounded-full font-medium hover:bg-blue-400/10 transition-all duration-300 transform hover:scale-105"
          >
            View Projects
          </button>
        </div>
      </div>
      
      <div className="md:w-1/2 flex justify-center">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden">
            <img
              src={hasError ? "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800" : "https://raw.githubusercontent.com/sudheertanukonda/phooto/main/photo.jpg"}
              alt="Profile picture of Sudheer Tanukonda"
              className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
              onError={() => setHasError(true)}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
