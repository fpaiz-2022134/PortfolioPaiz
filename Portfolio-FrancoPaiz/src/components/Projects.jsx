import React from 'react';
import { PROJECTS } from '../constants';
import { FaGithub } from "react-icons/fa";
import { motion } from 'framer-motion';

export const Projects = () => {
    const imageWidth = 600; 
    const imageHeight = 400; 

    return (
        <div className='border-b border-neutral-900 pb-4'>
            <h2 className='my-20 text-center text-4xl'>Projects</h2>
            <div>
                {PROJECTS.map((project, index) => (
                    <motion.div 
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: -100 }}
                        transition={{ duration: 2 }}
                        key={index} className='mb-8 flex flex-wrap lg:justify-center items-center'>
                        <img
                            src={project.image}
                            width={imageWidth} 
                            height={imageHeight}
                            className='mb-6 rounded-lg'
                        />
                        <div className='ml-4 max-w-xl'>
                            <h6 className='mb-2 font-semibold'>{project.title}</h6>
                            <p className='mb-4 text-neutral-400 text-justify'>{project.description}</p>
                            <p className='mb-4 text-neutral-400 text-justify italic'>Skills learned: {project.skillsLearned}</p>
                            <div className='mb-4'>
                                {project.technologies.map((tech, index) => (
                                    <span key={index} className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-teal-400'>
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <button className='border border-teal-400 px-4 py-2 rounded-lg bg-teal-400 text-white hover:bg-white hover:text-teal-400'>
                                <a href={project.link} className='flex items-center text-white hover:text-black'>
                                    Watch on my GitHub
                                    <FaGithub className='ml-2' />
                                </a>
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};
