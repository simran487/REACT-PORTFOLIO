import React from 'react';
import SectionTitle from '../common/SectionTitle';
import SocialIcon from './SocialIcon';
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from 'react-icons/fa';

const socialLinks = [
  {
    href: 'mailto:simrankumarisk03@gmail.com',
    Icon: FaEnvelope,
    hoverColor: 'text-red-500',
  },
  {
    href: 'https://www.linkedin.com/in/simran-kumari-977745249/',
    Icon: FaLinkedin,
    hoverColor: 'text-blue-600',
  },
  {
    href: 'https://github.com/simran487',
    Icon: FaGithub,
    hoverColor: 'text-gray-900',
  },
  {
    href: 'https://x.com/SimranK26108914',
    Icon: FaTwitter,
    hoverColor: 'text-blue-400',
  },
];

const Contact = () => {
  return (
    <section id="contact" className="bg-gray-100 px-4 py-20">
      <div className="max-w-3xl mx-auto text-center">
        {/* Section Title Component */}
        <SectionTitle title="Contact Me" />
        <p className="text-gray-600 mb-8">
          Connect with me via email or social media:
        </p>

        <div className="flex justify-center gap-8">
          {socialLinks.map((link, index) => (
            <SocialIcon
              key={index}
              href={link.href}
              Icon={link.Icon}
              hoverColor={link.hoverColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
