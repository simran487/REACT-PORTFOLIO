import React from 'react';
import SkillTag from './SkillTag';

const SkillCategory = ({ title, skills, color }) => {
  return (
    <div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <SkillTag key={index} name={skill} color={color} />
        ))}
      </div>
    </div>
  );
};

export default SkillCategory;
