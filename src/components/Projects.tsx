import React from 'react';
import { ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Sales Analytics Dashboard",
      description: "Comprehensive Power BI dashboard for sales analysis with real-time data integration, featuring dynamic visualizations and automated reporting capabilities. Implemented complex DAX measures for advanced analytics.",
      technologies: ["Power BI", "DAX", "SQL", "Power Query"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
      live: "https://example.com",
      features: ["Real-time Data Integration", "Custom DAX Measures", "Automated Reporting", "Interactive Filters"]
    },
    {
      title: "Financial Reporting System",
      description: "Automated financial reporting system with custom visualizations, enabling real-time tracking of key performance indicators and financial metrics. Integrated multiple data sources for comprehensive analysis.",
      technologies: ["Power BI", "Python", "Azure", "DAX"],
      image: "https://images.unsplash.com/photo-1554774853-719586f82d77?auto=format&fit=crop&q=80&w=800",
      live: "https://example.com",
      features: ["Automated Reports", "Financial KPIs", "Data Integration", "Custom Visuals"]
    },
    {
      title: "HR Analytics Platform",
      description: "Employee performance and engagement tracking dashboard with predictive analytics capabilities. Developed comprehensive metrics for workforce analysis and decision-making support.",
      technologies: ["Power BI", "DAX", "Excel", "SQL"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      live: "https://example.com",
      features: ["Performance Metrics", "Engagement Analytics", "Predictive Models", "Custom Reports"]
    }
  ];

  return (
    <div className="py-16 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent text-center">
          Featured Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group relative bg-gray-800/50 backdrop-blur-lg rounded-2xl overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-500"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/90"></div>
              </div>
              
              <div className="relative p-6">
                <h3 className="text-2xl font-semibold text-blue-400 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 line-clamp-3">{project.description}</p>
                
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-purple-400">Key Features:</h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {project.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="text-sm text-gray-400 flex items-center space-x-1"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-purple-500"></span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors mt-4"
                  >
                    <ExternalLink size={18} />
                    <span>View Project</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects