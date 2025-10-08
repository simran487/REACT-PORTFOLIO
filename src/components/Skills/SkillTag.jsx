import React from 'react';

const SkillTag = ({ name, color }) => {
  return (
    <span className={`bg-${color}-800 text-white px-3 py-1 rounded-full text-sm`}>
      {name}
    </span>
  );
};

export default SkillTag;
