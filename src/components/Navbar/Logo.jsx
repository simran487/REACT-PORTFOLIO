// src/components/Navbar/Logo.jsx
import React from 'react';

const Logo = ({ text }) => {
  return (
    <div className="text-2xl font-bold text-blue-600 cursor-pointer hover:opacity-80 transition">
      {text}
    </div>
  );
};

export default Logo;
