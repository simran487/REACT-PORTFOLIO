// src/common/SectionTitle.jsx
import React from 'react';

const SectionTitle = ({ title }) => {
  return (
    <h2 className="text-4xl font-bold mb-8 text-blue-400 drop-shadow-lg">
      {title}
    </h2>
  );
};

export default SectionTitle;
