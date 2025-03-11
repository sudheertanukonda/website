import React from 'react';

const Education = () => {
  const education = [
    {
      degree: "B.Tech Mechanical Engineering",
      institution: "SRKR Engineering College - Bhimavaram",
      year: "2018-2022",
      description: "I completed my B.Tech in Mechanical Engineering from SRKR Engineering College with 77%, where I gained a strong understanding of mechanical design, thermodynamics, and materials science. I also learned the basics of computer programming and CAD software, which enhanced my problem-solving and technical skills, preparing me for various engineering challenges.",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80"
    },
    {
      degree: "Intermediate (12th) - MPC ",
      institution: "Narayana Junior College - Tanuku",
      year: "2016-2018",
      description: "I completed my Intermediate with the MPC (Mathematics, Physics, and Chemistry) stream at Narayana College, Tanuku, where I achieved 97%. This education strengthened my foundation in core subjects like Mathematics, Physics, and Chemistry, enhancing my analytical and problem-solving skills. The exposure to these subjects played a crucial role in shaping my academic growth.",
      image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80"
    },
    {
      degree: "SSC (10th)",
      institution: "Bhashyam EM School - Tanuku",
      year: "2015-2016",
      description: "I completed my 10th grade at Bhashyam EM School, Tanuku, with a focus on subjects like Mathematics, Science, and English. I achieved 87% in the Class 10 Board Exams. My time at school helped me develop key skills in time management, teamwork, and problem-solving.",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <div className="py-16 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent text-center">
          Education Journey
        </h2>

        <div className="space-y-12">
          {education.map((edu, index) => (
            <div
              key={index}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
              <div className="relative bg-gray-800/50 backdrop-blur-lg rounded-2xl overflow-hidden transition-all duration-300 hover:transform hover:scale-[1.02]">
                <div className="md:flex">
                  <div className="md:w-1/3 relative h-64 md:h-auto overflow-hidden">
                    <img
                      src={edu.image}
                      alt={edu.degree}
                      className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-600/20"></div>
                  </div>
                  <div className="md:w-2/3 p-8">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <h3 className="text-2xl font-semibold text-blue-400 mb-2 md:mb-0">
                        {edu.degree}
                      </h3>
                      <span className="text-purple-400 font-medium">{edu.year}</span>
                    </div>
                    <p className="text-xl text-gray-300 mb-4">{edu.institution}</p>
                    <p className="text-gray-400 leading-relaxed">{edu.description}</p>
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

export default Education;