import React, { useState } from 'react';
import { FaLinkedin, FaGithub, FaInstagram, FaBars, FaTimes } from 'react-icons/fa';

import computrabajo from '../assets/computrabajo.png';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='mb-20 flex items-center justify-between py-6 px-4 bg-gray-800 text-white'>
      <div className="flex items-center justify-between w-full lg:w-auto">
        <a href="#home" className="text-xl font-bold">Home</a>
        <button onClick={toggleMenu} className="lg:hidden text-2xl focus:outline-none">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      <div className={`lg:flex lg:items-center lg:gap-4 ${isOpen ? 'block' : 'hidden'}`}>
        <a href="#about" className="block lg:inline-block mt-2 lg:mt-0">About me</a>
        <a href="#technologies" className="block lg:inline-block mt-2 lg:mt-0">Technologies</a>
        <a href="#trajectory" className="block lg:inline-block mt-2 lg:mt-0">Education</a>
        <a href="#projects" className="block lg:inline-block mt-2 lg:mt-0">Projects</a>
        <a href="#photos" className="block lg:inline-block mt-2 lg:mt-0">Photos</a>
        <a href="#contact" className="block lg:inline-block mt-2 lg:mt-0">Contact</a>
        <div className='flex items-center justify-center lg:ml-4 mt-4 lg:mt-0'>
          <FaLinkedin className="mx-2 text-2xl" />
          <a href="https://github.com/fpaiz-2022134"><FaGithub className="mx-2 text-2xl" /></a>
          <FaInstagram className="mx-2 text-2xl" />
          <img src={computrabajo} alt="" className='w-10 h-10' />
        </div>
      </div>
    </nav>
  );
};
