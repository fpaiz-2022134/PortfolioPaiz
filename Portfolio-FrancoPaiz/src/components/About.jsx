import React from 'react';
import aboutImg from "../assets/me1foto.jpeg";
import { ABOUT_TEXT } from '../constants';
import { motion } from 'framer-motion';

export const About = () => {

    const paragraphs = ABOUT_TEXT.split('\n').map((paragraph, index) => (
        <p key={index} className="my-4">{paragraph}</p>
    ));
    return (
        <div className="border-b border-neutral-900 pb-4">
            <h1 className='my-20 text-center'> About
                <span className='text-neutral-500'> Me</span>
            </h1>

            <div className='flex flex-wrap'>
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                    className='w-full lg:w-1/2 lg:p-8'>
                    <div className='flex items-center justify-center'>
                        <img className="rounded-2xl" src={aboutImg} alt="about" />
                    </div>
                </motion.div>
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 0.5 }}
                    className='w-full lg:w-1/2'>
                    <div className='flex flex-col justify-center lg:justify-start'>
                        <p><strong>Name:</strong> Franco Alejandro Paiz Gónzalez</p>
                        <p><strong>Age:</strong> 18 </p>
                        <p className='my-2 max-w-xl py-6'><strong>Description:</strong> {paragraphs}</p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};
