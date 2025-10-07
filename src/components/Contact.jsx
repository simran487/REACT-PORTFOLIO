import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="bg-gray-100 px-4 py-20"> 
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Contact Me</h2> {/* Reduced mb */}
        <p className="text-gray-600 mb-8">
          Connect with me via email or social media:
        </p>

        {/* Icons */}
        <div className="flex justify-center gap-8 text-3xl text-gray-700">
          {/* Email */}
          <a
            href="mailto:simrankumarisk03@gmail.com"
            className="hover:text-red-500 transition"
          >
            <FaEnvelope />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/simran-kumari-977745249/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition"
          >
            <FaLinkedin />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/simran487"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 transition"
          >
            <FaGithub />
          </a>

          {/* Twitter */}
          <a
            href="https://x.com/SimranK26108914"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <FaTwitter />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
