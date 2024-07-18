import React from 'react';
import { PROJECTS } from '../constants/index.js';
import { motion } from 'framer-motion';

export const ProjectsPhotos = () => {
  return (
    <div>
      <h2 className='my-20 text-center text-4xl'> Photos</h2>
      <div className="flex flex-wrap justify-center gap-4 p-5">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ type: 'spring', stiffness: 50, damping: 10 }}
            whileHover={{ scale: 1.1 }}
            className="border border-gray-300 rounded-lg overflow-hidden w-80 text-center transition-transform transform"
          >
            <a href={project.link}>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2 text-justify">{project.title}</h3>
              </div>
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
