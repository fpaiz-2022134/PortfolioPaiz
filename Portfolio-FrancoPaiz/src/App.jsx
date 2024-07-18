import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Technologies } from './components/Technologies';
import { Trajectory } from './components/Trajectory';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { ProjectsPhotos } from './components/ProjectsPhotos';

import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'
import { FaInstagram } from 'react-icons/fa'


function App() {
  return (
    <div className='overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900'>
      <div className='fixed top-0 -z-10 h-full w-full'>
        <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
        </div>
      </div>

      <div className='container mx-auto px-8'>
        <Navbar/>
        
        <div id="home">
          <Hero/>
        </div>

        <div id="about">
          <About/>
        </div>
        <div id="technologies">
          <Technologies/>
        </div>

        <div id="trajectory">
          <Trajectory/>
        </div>
        <div id="projects">
          <Projects/>
        </div>
        <div id="photos">
          <ProjectsPhotos/>
        </div>
        <div id="contact">
          <Contact/>
        </div>
      </div>
    </div>
  );
}

export default App;
