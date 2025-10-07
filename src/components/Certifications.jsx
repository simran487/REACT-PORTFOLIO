import React from 'react';
import DBMS from '../assets/pdf_files/Data Base Management System.pdf';
import PM from '../assets/pdf_files/Foundations of Project Management.pdf';
import SE from '../assets/pdf_files/INFOSYS_12022002026021.pdf';

// Corrected certifications data
const certifications = [
  { name: 'Data Base Management System', link: DBMS },
  { name: 'Foundations of Project Management', link: PM },
  { name: 'Software Engineering and Agile software development', link: SE },
];

const Certifications = () => {
  return (
    <section
      id="certifications"
      className="bg-gray-100 px-4 py-8" // reduced padding and removed min-h-screen
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">Certifications</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <a
              key={index}
              href={cert.link}       // Use the imported PDF variable
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition transform hover:-translate-y-2"
            >
              <div className="h-32 w-full flex items-center justify-center bg-blue-100 rounded-lg mb-4">
                <span className="text-3xl font-bold text-blue-600">
                  {cert.name.split(' ')[0].charAt(0)}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800">{cert.name}</h3>
              <p className="text-blue-600 mt-2 hover:underline">View Certificate</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
