import React from 'react';

const Skills = () => {
  return (
    <section id="skills" className="bg-black px-4 py-8">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-8">Skills</h2>

        {/* Skill Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-left">
          
          {/* Web Development */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">Web Development</h3>
            <div className="flex flex-wrap gap-2">
              <span className="bg-blue-800 text-white px-3 py-1 rounded-full text-sm">HTML</span>
              <span className="bg-blue-800 text-white px-3 py-1 rounded-full text-sm">CSS</span>
              <span className="bg-blue-800 text-white px-3 py-1 rounded-full text-sm">JavaScript</span>
              <span className="bg-blue-800 text-white px-3 py-1 rounded-full text-sm">React</span>
            </div>
          </div>

          {/* Programming Languages */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">Languages</h3>
            <div className="flex flex-wrap gap-2">
              <span className="bg-green-800 text-white px-3 py-1 rounded-full text-sm">Python</span>
              <span className="bg-green-800 text-white px-3 py-1 rounded-full text-sm">Java</span>
              <span className="bg-green-800 text-white px-3 py-1 rounded-full text-sm">C Programming</span>
            </div>
          </div>

          {/* Tools */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">Tools</h3>
            <div className="flex flex-wrap gap-2">
              <span className="bg-purple-800 text-white px-3 py-1 rounded-full text-sm">GitHub</span>
              <span className="bg-purple-800 text-white px-3 py-1 rounded-full text-sm">VS Code</span>
              <span className="bg-purple-800 text-white px-3 py-1 rounded-full text-sm">Google Colab</span>
              <span className="bg-purple-800 text-white px-3 py-1 rounded-full text-sm">Jupyter Notebook</span>
              <span className="bg-purple-800 text-white px-3 py-1 rounded-full text-sm">MySQL</span>
            </div>
          </div>

          {/* AI / GenAI */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">AI / GenAI</h3>
            <div className="flex flex-wrap gap-2">
              <span className="bg-red-800 text-white px-3 py-1 rounded-full text-sm">Machine Learning</span>
              <span className="bg-red-800 text-white px-3 py-1 rounded-full text-sm">LSTM</span>
              <span className="bg-red-800 text-white px-3 py-1 rounded-full text-sm">GenAI</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
