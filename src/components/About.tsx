import React from 'react';

const About = () => {
  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          About Me
        </h2>
        
        <div className="space-y-12">
          <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 shadow-lg hover:shadow-blue-500/10 transition-all duration-300">
            <p className="text-lg text-gray-300 leading-relaxed">
              I am Sudheer Tanukonda, an experienced Power BI Developer with a strong background in transforming complex data into actionable insights. I have developed and deployed interactive dashboards and reports in Power BI, assisting business stakeholders in data-driven decision-making. Skilled in Power BI, DAX, Power Query, and MySQL, I specialize in cleaning, transforming, and modeling data from multiple sources to ensure accurate reporting and analysis.

              I have designed and optimized data models, creating relationships between tables for enhanced performance and data integrity. Additionally, I manage data refresh schedules and work on troubleshooting and optimizing the performance of Power BI reports and dashboards. Collaborating with business users, I gather requirements and provide insights into data trends and potential areas for business improvement.

              I also utilize Power BI Service for collaboration, sharing reports, and creating dashboards accessible to all stakeholders. With a passion for data visualization and business intelligence, I help organizations improve efficiency and performance. I continue to expand my skill set to stay at the forefront of BI development and contribute to data-driven strategies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;