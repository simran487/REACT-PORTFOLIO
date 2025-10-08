import React from 'react';

const CertificationCard = ({ name, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition transform hover:-translate-y-2"
    >
      <div className="h-32 w-full flex items-center justify-center bg-blue-100 rounded-lg mb-4">
        <span className="text-3xl font-bold text-blue-600">
          {name.split(' ')[0].charAt(0)}
        </span>
      </div>
      <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
      <p className="text-blue-600 mt-2 hover:underline">View Certificate</p>
    </a>
  );
};

export default CertificationCard;
