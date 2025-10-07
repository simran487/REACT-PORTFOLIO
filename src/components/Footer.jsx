import React from 'react';

const Footer = () => {
  return (
    <footer className="relative bg-gray-800 text-white px-4 py-10">
      <div className="max-w-6xl mx-auto text-center">
        {/* Logo / Name */}
        <div className="text-2xl font-bold mb-4">
          Simran
        </div>

        {/* Thank You Message */}
        <div className="text-gray-200 text-lg mb-2">
          Thank you for visiting my portfolio!
        </div>

      </div>
    </footer>
  );
};

export default Footer;
