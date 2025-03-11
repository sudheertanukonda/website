import React from 'react';
import { MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Power BI Developer",
      company: "Deepija Telecom Pvt. Ltd.",
      project: "Telecom Sales, CRM & Ticket Performance Reporting Solution",
      period: "2023(Dec) - 2025(Jan)",
      location: "Hyderabad, India",
      companyLogo: "https://images.crunchbase.com/image/upload/c_pad,f_auto,q_auto:eco,dpr_1/a50f6cee0c5e4dc68c36a96c6aea52ef",
      responsibilities: [
        "Developed and deployed interactive dashboards and reports in Power BI, assisting business stakeholders in data-driven decision-making.",
        "Utilized Power Query and DAX to clean, transform, and model data from multiple sources, ensuring accurate reporting and analysis.",
        "Designed and optimized data models, creating relationships between tables for enhanced performance and data integrity.",
        "Managed data refresh schedules and worked on troubleshooting and optimizing performance of Power BI reports and dashboards.",
        "Collaborated with business users to gather requirements and provide insights into data trends and potential areas for business improvement.",
        "Utilized Power BI Service for collaboration, sharing reports, and creating dashboards accessible to all stakeholders."
      ]
    },
  ];

  return (
    <div className="py-16 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Experience
        </h2>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
              <div className="relative bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 hover:transform hover:scale-[1.02] transition-all duration-300">
                <div className="flex items-start gap-6">
                  <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                    <img 
                      src={exp.companyLogo} 
                      alt={exp.company}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-semibold text-blue-400 mb-2">
                          {exp.title}
                        </h3>
                        <p className="text-xl text-gray-300">{exp.company}</p>
                        <div className="flex items-center gap-2 text-purple-400 mt-2">
                          <MapPin size={16} />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                      <span className="text-purple-400 font-medium mt-2 md:mt-0">{exp.period}</span>
                    </div>
                    {exp.project && (
                      <p className="text-lg text-gray-400 italic mt-2 mb-4">{exp.project}</p>
                    )}
                    <ul className="space-y-3">
                      {exp.responsibilities.map((resp, idx) => (
                        <li 
                          key={idx} 
                          className="text-gray-400 flex items-start space-x-2"
                        >
                          <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;