import React from 'react';

const SocialIcon = ({ href, Icon, hoverColor }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`transition text-3xl hover:${hoverColor}`}
    >
      <Icon />
    </a>
  );
};

export default SocialIcon;
