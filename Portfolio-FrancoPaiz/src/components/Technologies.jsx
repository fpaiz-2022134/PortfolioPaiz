import React from 'react';
import { FaJava } from "react-icons/fa";
import { SiMongodb } from 'react-icons/si';
import { FaNodeJs } from 'react-icons/fa';
import { RiReactjsLine } from 'react-icons/ri';
import { SiMysql } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { SiCisco } from "react-icons/si";
import { motion } from 'framer-motion';

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'reverse'
        },
    }
});

const circleVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delay: 0.5,
            duration: 1
        }
    }
};

export const Technologies = () => {
    const technologies = [
        { icon: <SiCisco className='text-7xl text-cyan-400' />, name: 'Cisco', type: 'Networking', percentage: 60, color: 'cyan-400' },
        { icon: <FaJava className='text-7xl text-red-500' />, name: 'Java', type: 'Programming Language', percentage: 90, color: 'blue-600' },
        { icon: <SiMysql className='text-7xl text-blue-500' />, name: 'MySQL', type: 'Database', percentage: 90, color: 'blue-500' },
        { icon: <IoLogoJavascript className='text-7xl text-yellow-500' />, name: 'JavaScript', type: 'Programming Language', percentage: 60, color: 'yellow-500' },
        { icon: <FaHtml5 className='text-7xl text-orange-600' />, name: 'HTML5', type: 'Markup Language', percentage: 80, color: 'orange-600' },
        { icon: <FaCss3Alt className='text-7xl text-blue-600' />, name: 'CSS3', type: 'Styling Language', percentage: 80, color: 'blue-600' },
        { icon: <FaNodeJs className='text-7xl text-green-500' />, name: 'Node.js', type: 'Runtime Environment', percentage: 85, color: 'green-500' },
        { icon: <RiReactjsLine className='text-7xl text-cyan-500' />, name: 'React', type: 'JavaScript Library', percentage: 85, color: 'cyan-500' },
        { icon: <SiMongodb className='text-7xl text-green-500' />, name: 'MongoDB', type: 'Database', percentage: 70, color: 'green-500' },
        { icon: <FaGithub className='text-7xl text-gray-500' />, name: 'GitHub', type: 'Version Control', percentage: 75, color: 'gray-500' },
    ];

    return (
        <div className='border-b border-neutral-800 pb-24'>
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className='my-20 text-center text-4xl'>
                Technologies
            </motion.h1>
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                className='flex flex-wrap items-center justify-center gap-4'>
                {technologies.map((tech, index) => (
                    <motion.div
                        key={index}
                        variants={iconVariants(2.5 + index * 0.2)}
                        initial='initial'
                        animate='animate'
                        className={`rounded-xl border-4 border-neutral-800 p-6 text-center relative shadow-lg bg-neutral-900 text-white`}
                        style={{ minWidth: '250px', maxWidth: '300px' }}>
                        <div className={`rounded-full w-32 h-32 bg-${tech.color} mx-auto mb-6 flex items-center justify-center`}>
                            {tech.icon}
                        </div>
                        <p className='mt-4 text-2xl font-bold'>{tech.name}</p>
                        <p className='mt-2 text-lg'>{tech.type}</p>
                        <svg viewBox="0 0 36 36" className="circular-chart mx-auto mb-4">
                            <motion.circle
                                variants={circleVariants}
                                initial="hidden"
                                animate="visible"
                                cx="18" cy="18" r="15.91549430918954"
                                fill="none" strokeWidth="2" stroke="#FFF"
                                strokeDasharray={`${tech.percentage} 100`}
                                strokeLinecap="round"
                            />
                        </svg>
                        <p className='mt-2 text-lg'>{tech.percentage}%</p>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};
