import React from 'react';
import { BarChart2, Database, Github as Git, Code, Terminal } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Business Intelligence",
      icon: <BarChart2 size={40} className="text-blue-400" />,
      skills: ["Power BI Desktop", "Power Query", "Power BI Service", "Data Modeling", "DAX", "Data Transformation"],
      bgImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
    },
    {
      title: "Database",
      icon: <Database size={40} className="text-purple-400" />,
      skills: ["MySQL"],
      bgImage: "https://www.shutterstock.com/shutterstock/photos/2258134001/display_1500/stock-photo-relational-database-tables-on-databases-are-placed-on-structured-query-language-code-with-server-2258134001.jpg"
    },
    {
      title: "Version Control & Tools",
      icon: <Git size={40} className="text-green-400" />,
      skills: ["Git", "Jira Tool"],
      bgImage: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?auto=format&fit=crop&q=80"
    },
    {
      title: "Programming Language",
      icon: <Code size={40} className="text-yellow-400" />,
      skills: ["Python", "JavaScript", "C++", "Java"],
      bgImage: "https://images.unsplash.com/photo-1555066931-bf19f8fd1085?auto=format&fit=crop&q=80"
    },
    {
      title: "Operating Systems",
      icon: <Terminal size={40} className="text-gray-400" />,
      skills: ["Unix", "Linux", "Windows"],
      bgImage: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <div className="py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent text-center">
          Skills & Expertise
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-2xl"
              style={{
                backgroundImage: `url(${category.bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-70 transition-all duration-500"></div>
              <div className="relative p-8 space-y-6">
                <div className="flex items-center gap-4">
                  {category.icon}
                  <h3 className="text-2xl font-semibold text-white">{category.title}</h3>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {category.skills.map((skill, idx) => (
                    <div
                      key={idx}
                      className="bg-white/10 backdrop-blur-lg px-4 py-3 rounded-xl text-center border border-white/20 hover:border-blue-400/50 hover:bg-blue-500/10 transition-all duration-300 transform hover:scale-105 group"
                    >
                      <span className="text-gray-200 group-hover:text-white">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
