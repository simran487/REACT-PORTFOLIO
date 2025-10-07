import React from 'react';

const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center bg-gray-100 px-4 py-20"
    >
      <div className="max-w-4xl text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">About Me</h2>
        <p className="text-lg text-gray-600 mb-6">
          I am an aspiring Software Developer with a keen interest in full-stack development and Artificial Intelligence & Machine Learning (AIML). I enjoy exploring new technologies, solving problems through code, and developing applications that are both efficient and user-friendly. My goal is to combine software development and AIML to create innovative solutions that make a real difference.
        </p>
      </div>
    </section>
  );
};

export default About;
