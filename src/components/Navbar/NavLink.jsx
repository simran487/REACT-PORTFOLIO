import React from 'react';

const NavLink = ({ href, text, onClick }) => {
return ( <a
   href={href}
   onClick={onClick}
   className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
 >
{text} </a>
);
};

export default NavLink;
