import React from "react";

const HeroButtons = ({ resumeLink }) => {
  return (
    <div className="flex justify-center gap-4">
      <a
        href={resumeLink}
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition"
      >
        Download Resume
      </a>
      <a
        href="#contact"
        className="px-6 py-3 border border-white rounded-lg hover:bg-white hover:text-gray-900 transition"
      >
        Contact Me
      </a>
    </div>
  );
};

export default HeroButtons;
