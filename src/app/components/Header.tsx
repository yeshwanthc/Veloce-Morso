// Header.tsx

import React from 'react';

interface HeaderProps {
  title: string;
  subtitle: string;
}

const Header: React.FC<HeaderProps> = ({ title, subtitle }) => {
  return (
    <header className= "text-black p-6 w-full">
      <div className="container flex items-center justify-between">
        {/* Logo (replace 'logo.png' with your actual logo image) */}
        <img src="#" alt="Logo" className="h-12 w-auto" />

        {/* Navigation Links */}
        <nav className="space-x-4">
          <a href="#about" className="text-black hover:underline">
            About
          </a>
          <a href="#projects" className="text-black hover:underline">
            Projects
          </a>
          <a href="#contact" className="text-black hover:underline">
            Contact
          </a>
        </nav>
      </div>

      {/* Title and Subtitle */}
      <div className="container mx-auto mt-4">
        <h1 className="text-3xl font-semibold">{title}</h1>
        <p className="text-sm">{subtitle}</p>
      </div>
    </header>
  );
};

export default Header;
