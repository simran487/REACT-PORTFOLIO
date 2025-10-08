import React, { useState } from 'react';
import NavLink from './NavLink';
import Logo from './Logo';

const Navbar = () => {
const [isOpen, setIsOpen] = useState(false);

const links = [
{ name: 'Home', href: '#hero' },
{ name: 'About', href: '#about' },
{ name: 'Skills', href: '#skills' },
{ name: 'Projects', href: '#projects' },
{ name: 'Certifications', href: '#certifications' },
{ name: 'Coding Platforms', href: '#codingplatforms' },
{ name: 'Contact', href: '#contact' },
];

return ( <nav className="fixed w-full bg-white shadow-md z-50"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
{/* Logo Component */} <Logo text="Simran" />

    {/* Desktop Menu */}
    <div className="hidden md:flex space-x-6">
      {links.map((link) => (
        <NavLink key={link.name} href={link.href} text={link.name} />
      ))}
    </div>

    {/* Mobile Menu Button */}
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-gray-700 focus:outline-none text-2xl"
        aria-label="Toggle menu"
      >
        {isOpen ? '✖' : '☰'}
      </button>
    </div>
  </div>

  {/* Mobile Menu */}
  {isOpen && (
    <div className="md:hidden bg-white shadow-md transition-all duration-300">
      <div className="flex flex-col items-center py-4 space-y-4">
        {links.map((link) => (
          <NavLink
            key={link.name}
            href={link.href}
            text={link.name}
            onClick={() => setIsOpen(false)}
          />
        ))}
      </div>
    </div>
  )}
</nav>

);
};

export default Navbar;
