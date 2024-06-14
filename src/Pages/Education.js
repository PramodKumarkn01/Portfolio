import React from 'react';
import Proffesional from '../Assets/Images/Proffesional1.jpg'
import Student from '../Assets/Images/student.jpg'
// Ensure you have Tailwind CSS imported here

const EducationExperience = () => {
    const education = [
        {
          period: '2018 - 2022',
          degree: 'Karnataka State Board',
          description: 'Combination: Commerce',
          per: 'Percentage: 68%',
        },
        {
          period: '2018 - 2021',
          degree: "Kuvempu University ",
          description: 'Degree: BCA ',
          per: 'Percentage: 70%',
        },
        {
          period: '2021 - 2023',
          degree: "Visvesvaraya Technological University (VTU)",
          description: 'Degree: MCA',
          per: 'CGPA: 8.1',
        },
      ];
    
      const experience = [
        {
          period: '2023 - Present',
          role: 'Frontend Developer',
          description: 'React js, React Native, HTML, CSS, JavaScript.',
        },
        {
          period: '2023 - present',
          role: 'Backend Developer',
          description: 'Proficient in Node.js, My-Sql, databases, and server management.',
        },
        {
          period: '2023 - Present',
          role: 'WordPress Developer',
          description: 'Proficient in Creating User Interfaces and Handling Live Websites.',
        },
        {
          period: '2023 - Present',
          role: 'AWS',
          description: 'API & Instances',
        },
      ];

  return (
    <div className="bg-gray-100 p-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* College Image */}
          <div className="flex justify-center items-center p-4">
            <img src={Student} alt="College" className="rounded-lg shadow-md" />
          </div>
          {/* Education List */}
          <div className="p-4">
            <h2 className="text-3xl font-bold text-green-600 mb-6 text-center">Education</h2>
            <div className="relative border-l-2 border-green-600 pl-6">
              {education.map((item, index) => (
                <div className="mb-8 ml-6 relative" key={index}>
                  <div className="absolute -left-6 top-1/2 transform -translate-y-1/2 bg-white border-2 border-green-600 w-4 h-4 rounded-full"></div>
                  <div className="bg-white rounded-lg p-4 shadow-md">
                    <h3 className="text-xl font-semibold text-green-600">{item.period}</h3>
                    <h4 className="text-lg font-bold">{item.degree}</h4>
                    <p className="text-gray-600 mt-2">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Professional Image */}
          
          {/* Experience List */}
          <div className="p-4">
            <h2 className="text-3xl font-bold text-green-600 mb-6 text-center">Experience</h2>
            <div className="relative border-l-2 border-green-600 pl-6">
              {experience.map((item, index) => (
                <div className="mb-8 ml-6 relative" key={index}>
                  <div className="absolute -left-6 top-1/2 transform -translate-y-1/2 bg-white border-2 border-green-600 w-4 h-4 rounded-full"></div>
                  <div className="bg-white rounded-lg p-4 shadow-md">
                    <h3 className="text-xl font-semibold text-green-600">{item.period}</h3>
                    <h4 className="text-lg font-bold">{item.role}</h4>
                    <p className="text-gray-600 mt-2">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center items-center p-4 ">
            <img src={Proffesional} alt="Professional" className="rounded-lg shadow-md" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationExperience;
