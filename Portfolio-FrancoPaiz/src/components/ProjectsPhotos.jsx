import React from 'react';

import {PROJECTS} from '../constants/index.js'

export const ProjectsPhotos = () => {
  
  return (
    <div className="flex flex-wrap justify-center gap-4 p-5">
      {PROJECTS.map((project, index) => (
        <div
          key={index}
          className="border border-gray-300 rounded-lg overflow-hidden w-48 text-center transition-transform transform hover:scale-105"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-32 object-cover"
          />
          <div className="p-3">
            <h3 className="text-lg font-semibold">{project.title}</h3>
            {/* <p className="text-sm text-gray-600">{project.description}</p> */}
          </div>
        </div>
      ))}
    </div>
  );
};