import React from 'react';
import SectionTitle from '../common/SectionTitle';
import SkillCategory from './SkillCategory';

const skillData = [
  {
    title: 'Web Development',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    color: 'blue',
  },
  {
    title: 'Languages',
    skills: ['Python', 'Java', 'C Programming'],
    color: 'green',
  },
  {
    title: 'Tools',
    skills: ['GitHub', 'VS Code', 'Google Colab', 'Jupyter Notebook', 'MySQL'],
    color: 'purple',
  },
  {
    title: 'AI / GenAI',
    skills: ['Machine Learning', 'LSTM', 'GenAI'],
    color: 'red',
  },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-black px-4 py-20">
      <div className="max-w-5xl mx-auto text-center">
        <SectionTitle title="Skills" />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-left">
          {skillData.map((category, index) => (
            <SkillCategory
              key={index}
              title={category.title}
              skills={category.skills}
              color={category.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
