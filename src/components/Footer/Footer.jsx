import React from 'react';
import FooterLogo from './FooterLogo';
import FooterMessage from './FooterMessage';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white px-4 py-10">
      <div className="max-w-6xl mx-auto text-center">
        <FooterLogo text="Simran" />
        <FooterMessage message="Thank you for visiting my portfolio!" />
      </div>
    </footer>
  );
};

export default Footer;
