import { motion } from 'motion/react'
import { easeInOut } from 'motion'
import React from 'react'
import { FaExternalLinkAlt } from "react-icons/fa";

const Project = () => {
  return (
    <div id="project" className='w-full h-auto'>
      <div className="bg-[#1B1A19] sm:bg-[url('/bg10.png')] bg-cover bg-center w-full h-full p-8 sm:p-16 border-b-[0.10px] border-white border-opacity-2">
        <motion.h1 className="text-3xl sm:text-6xl text-center pb-5 text-orange-500"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5, ease: easeInOut }}>Projects</motion.h1>
        <div className='flex flex-wrap justify-around'>
          <div className="w-80 h-75 border-[0.5px] border-white rounded-xl bg-[#1B1A19]  overflow-hidden m-5 hover:scale-105">
            <div className="w-full aspect-[16/9]">
              <img src="fitwave.jpeg" alt="Fitwave" className="w-full h-full object-cover" />
            </div>
            <div className='flex flex-col p-3'>
              <div className="flex justify-end">
                <a href="https://github.com/harshitha4061/Fitwave_Project" target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkAlt className="text-white text-xl hover:text-gray-600 transition duration-200" />
                </a>
              </div>
              <div className='p-2'>
                <p className='text-xl text-center text-white'>Fitwave</p>
                <p className='text-center text-white text-sm'>(HTML, CSS, JavaScript, Flask ,MongoDB)</p>
              </div>
            </div>
          </div>
          <div className="w-80 h-75 border-[0.5px] border-white rounded-xl bg-[#1B1A19]  overflow-hidden m-5 hover:scale-105">
            <div className="w-full aspect-[16/9]">
              <img src="lostandfound.png" alt="Lost and Found" className="w-full h-full object-cover" />
            </div>
            <div className='flex flex-col p-3'>
              <div className="flex justify-end">
                <a href="https://github.com/harshitha4061/Fitwave_Project" target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkAlt className="text-white text-xl hover:text-gray-600 transition duration-200" />
                </a>
              </div>
              <div className='p-2'>
                <p className='text-xl text-center text-white'>Lost and Found</p>
                <p className='text-center text-white text-xs'>(HTML, CSS, JavaScript, Express.js, Node.js, MongoDB)</p>
              </div>
            </div>
          </div>
          <div className="w-80 h-75 border-[0.5px] border-white rounded-xl bg-[#1B1A19]  overflow-hidden m-5 hover:scale-105">
            <div className="w-full aspect-[16/9]">
              <img src="lostandfound.png" alt="Lost and Found" className="w-full h-full object-cover" />
            </div>
            <div className='flex flex-col p-3'>
              <div className="flex justify-end">
                <a href="https://github.com/harshitha4061/Fitwave_Project" target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkAlt className="text-white text-xl hover:text-gray-600 transition duration-200" />
                </a>
              </div>
              <div className='p-2'>
                <p className='text-xl text-center text-white'>Lost and Found</p>
                <p className='text-center text-white text-xs'>(HTML, CSS, JavaScript, Express.js, Node.js, MongoDB)</p>
              </div>
            </div>
          </div>
          <div className="w-80 h-75 border-[0.5px] border-white rounded-xl bg-[#1B1A19]  overflow-hidden m-5 hover:scale-105">
            <div className="w-full aspect-[16/9]">
              <img src="lostandfound.png" alt="Lost and Found" className="w-full h-full object-cover" />
            </div>
            <div className='flex flex-col p-3'>
              <div className="flex justify-end">
                <a href="https://github.com/harshitha4061/Fitwave_Project" target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkAlt className="text-white text-xl hover:text-gray-600 transition duration-200" />
                </a>
              </div>
              <div className='p-2'>
                <p className='text-xl text-center text-white'>Lost and Found</p>
                <p className='text-center text-white text-xs'>(HTML, CSS, JavaScript, Express.js, Node.js, MongoDB)</p>
              </div>
            </div>
          </div>
          <div className="w-80 h-75 border-[0.5px] border-white rounded-xl bg-[#1B1A19]  overflow-hidden m-5 hover:scale-105">
            <div className="w-full aspect-[16/9]">
              <img src="fitwave.jpeg" alt="Fitwave" className="w-full h-full object-cover" />
            </div>
            <div className='flex flex-col p-3'>
              <div className="flex justify-end">
                <a href="https://github.com/harshitha4061/Fitwave_Project" target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkAlt className="text-white text-xl hover:text-gray-600 transition duration-200" />
                </a>
              </div>
              <div className='p-2'>
                <p className='text-xl text-center text-white'>Fitwave</p>
                <p className='text-center text-white text-sm'>(HTML, CSS, JavaScript, Flask ,MongoDB)</p>
              </div>
            </div>
          </div>
          <div className="w-80 h-75 border-[0.5px] border-white rounded-xl bg-[#1B1A19]  overflow-hidden m-5 hover:scale-105">
            <div className="w-full aspect-[16/9]">
              <img src="fitwave.jpeg" alt="Fitwave" className="w-full h-full object-cover" />
            </div>
            <div className='flex flex-col p-3'>
              <div className="flex justify-end">
                <a href="https://github.com/harshitha4061/Fitwave_Project" target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkAlt className="text-white text-xl hover:text-gray-600 transition duration-200" />
                </a>
              </div>
              <div className='p-2'>
                <p className='text-xl text-center text-white'>Fitwave</p>
                <p className='text-center text-white text-sm'>(HTML, CSS, JavaScript, Flask ,MongoDB)</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Project
