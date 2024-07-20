import React from 'react';
import { EXPERIENCES } from '../constants';

import { motion } from 'framer-motion';


export const Trajectory = () => {
    return (
        <div className='border-b border-neutral-900 pb-4'>
            <h2 className='my-20 text-center text-4xl'>My Education Trajectory</h2>
            <div>
                {EXPERIENCES.map((experience, index) => (
                    <motion.div
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: -100 }}
                        transition={{ duration: 2 }} key={index} className='mb-8 flex flex-wrap lg:justify-center items-start'>
                        <div className='w-full lg:w-1/4'>
                            <p className='mb-2 text-sm text-neutral-400'>{experience.year}</p>
                            {experience.image && (
                                <img src={experience.image} alt={`Project ${index + 1}`} className='mr-4' />
                            )}
                        </div>
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 100 }}
                            transition={{ duration: 0.5 }}
                            className='w-full max-w-xl lg:w-3/4 ml-5'>
                            <h6 className='mb-2 font-semibold'>{experience.role}</h6>
                            <h6 className='mb-2 font-semibold text-blue-300'>{experience.company}</h6>
                            <div className='mb-4 text-neutral-200 text-justify'>
                                {experience.description.split('\n').map((paragraph, index) => (
                                    <p key={index} className="mb-4">{paragraph}</p>
                                ))}
                            </div>
                            <div className='mb-4'>
                                {experience.technologies.map((tech, techIndex) => (
                                    <span key={techIndex} className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-teal-400'>{tech}</span>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};
