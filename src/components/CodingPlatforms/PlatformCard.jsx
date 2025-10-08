import React from 'react';

const PlatformCard = ({ name, username, link, bgColor }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex flex-col items-center justify-center p-5 rounded-lg shadow-lg hover:scale-105 transition transform ${bgColor} text-white`}
    >
      <span className="text-3xl font-bold mb-2">{name.charAt(0)}</span>
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="text-sm mt-1">{username}</p>
    </a>
  );
};

export default PlatformCard;
