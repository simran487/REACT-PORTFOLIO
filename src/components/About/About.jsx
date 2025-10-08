import React from 'react';
import SectionTitle from '../common/SectionTitle';

const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center bg-gray-100 px-4 py-20"
    >
      <div className="max-w-4xl text-center">
        {/* Section Title Component */}
        <SectionTitle title="About Me" />

        <p className="text-lg text-gray-600 mb-6">
          I am an aspiring Software Developer with a keen interest in full-stack development and Artificial Intelligence & Machine Learning (AIML). I enjoy exploring new technologies, solving problems through code, and developing applications that are both efficient and user-friendly. My goal is to combine software development and AIML to create innovative solutions that make a real difference.
        </p>
      </div>
    </section>
  );
};

export default About;
