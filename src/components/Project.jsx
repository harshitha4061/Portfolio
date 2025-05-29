import { motion } from 'motion/react'
import { easeInOut } from 'motion'
import React from 'react'
import { FaExternalLinkAlt } from "react-icons/fa";

const Project = () => {
  return (
    <div id="project" className='w-full h-auto'>
      <div className="bg-[#1B1A19] sm:bg-[url('/bg10.png')] bg-cover bg-center w-full h-full p-8 sm:p-16 border-b-[0.10px] border-white border-opacity-2">
        <motion.h1 className="text-3xl sm:text-6xl text-left pb-5 sm:pb-10 px-5 text-orange-500 "
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1,delay:0.5, ease: easeInOut }}>PROJECTS</motion.h1>
        <div className='flex flex-wrap justify-between'>
          <motion.div className="w-83 h-75 border-[0.5px] border-white rounded-xl bg-[#1B1A19]  overflow-hidden m-5 hover:scale-105"
          initial={{opacity:0,y:10}}
          whileInView={{opacity:1,y:0}}
          viewport={{ once: true }}
          transition={{duration:2,ease:easeInOut}}>
            <div className="w-full aspect-[16/9]">
              <img src="fitwave.jpeg" alt="Fitwave" className="w-full h-full object-cover" />
            </div>
            <div className='flex flex-col p-3'>
              <div className="flex justify-end">
                <a href="https://fitwave-2q1v.onrender.com/" target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkAlt className="text-white text-xl hover:text-gray-600 transition duration-200" />
                </a>
              </div>
              <div className='p-2'>
                <p className='text-xl text-center text-white'>Fitwave</p>
                <p className='text-center text-white text-xs'>( HTML, CSS, JavaScript, Flask, MongoDB, Render)</p>
              </div>
            </div>
          </motion.div>
          <motion.div className="w-83 h-75 border-[0.5px] border-white rounded-xl bg-[#1B1A19]  overflow-hidden m-5 hover:scale-105"
          initial={{opacity:0,y:10}}
          whileInView={{opacity:1,y:0}}
          viewport={{ once: true }}
          transition={{duration:2,ease:easeInOut}}>
            <div className="w-full aspect-[16/9]">
              <img src="lostandfound.png" alt="Lost and Found" className="w-full h-full object-cover" />
            </div>
            <div className='flex flex-col p-3'>
              <div className="flex justify-end">
                <a href="https://lostandfound-ori5.onrender.com/" target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkAlt className="text-white text-xl hover:text-gray-600 transition duration-200" />
                </a>
              </div>
              <div className='p-2'>
                <p className='text-xl text-center text-white'>FindItHub</p>
                <p className='text-center text-white text-xs'>( HTML, CSS, JavaScript Node.js, Express.js, Multer, MongoDB,Cloudinary ,Render)</p>
              </div>
            </div>
          </motion.div>
          <motion.div className="w-83 h-75 border-[0.5px] border-white rounded-xl bg-[#1B1A19]  overflow-hidden m-5 hover:scale-105"
          initial={{opacity:0,y:10}}
          whileInView={{opacity:1,y:0}}
          viewport={{ once: true }}
          transition={{duration:2,ease:easeInOut}}>
            <div className="w-full aspect-[16/9]">
              <img src="DOT.jpeg" alt="Lost and Found" className="w-full h-full object-cover" />
            </div>
            <div className='flex flex-col p-3'>
              <div className="flex justify-end">
                <a href="https://github.com/harshitha4061/DELIVER-ON-TIME/tree/main" target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkAlt className="text-white text-xl hover:text-gray-600 transition duration-200" />
                </a>
              </div>
              <div className='p-2'>
                <p className='text-xl text-center text-white'>Deliver on Time</p>
                <p className='text-center text-white text-xs'>(Python, Pandas, NumPy, Seaborn, and Matplotlib)</p>
              </div>
            </div>
          </motion.div>
          <motion.div className="w-83 h-75 border-[0.5px] border-white rounded-xl bg-[#1B1A19]  overflow-hidden m-5 hover:scale-105"
          initial={{opacity:0,y:10}}
          whileInView={{opacity:1,y:0}}
          viewport={{ once: true }}
          transition={{duration:2,ease:easeInOut}}>
            <div className="w-full aspect-[16/9]">
              <img src="portfolio.png" alt="Portfolio" className="w-full h-full object-cover" />
            </div>
            <div className='flex flex-col p-3'>
              <div className="flex justify-end">
                <a href="https://portfolio-nu-sandy-28.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkAlt className="text-white text-xl hover:text-gray-600 transition duration-200" />
                </a>
              </div>
              <div className='p-2'>
                <p className='text-xl text-center text-white'>Portfolio</p>
                <p className='text-center text-white text-xs'>(React.js, Tailwind CSS, Framer Motion, Node.js,Express.js, Vercel, Render )</p>
              </div>
            </div>
          </motion.div>
          <motion.div className="w-83 h-75 border-[0.5px] border-white rounded-xl bg-[#1B1A19]  overflow-hidden m-5 hover:scale-105"
          initial={{opacity:0,y:10}}
          whileInView={{opacity:1,y:0}}
          viewport={{ once: true }}
          transition={{duration:2,ease:easeInOut}}>
            <div className="w-full aspect-[16/9]">
              <img src="credit.jpeg" alt="Credit Score Optimizer" className="w-full h-full object-fill" />
            </div>
            <div className='flex flex-col p-3'>
              <div className="flex justify-end">
                <a href="https://credit-frontend.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkAlt className="text-white text-xl hover:text-gray-600 transition duration-200" />
                </a>
              </div>
              <div className='p-2'>
                <p className='text-xl text-center text-white'>Credit Score Optimizer</p>
                <p className='text-center text-white text-xs'>(React.js, Tailwind ,Flask ,NumPy, Pandas, Scikit-learn ,Vercel ,Render)</p>
              </div>
            </div>
          </motion.div>
          <motion.div className="w-83 h-75 border-[0.5px] border-white rounded-xl bg-[#1B1A19]  overflow-hidden m-5 hover:scale-105"
          initial={{opacity:0,y:10}}
          whileInView={{opacity:1,y:0}}
          viewport={{ once: true }}
          transition={{duration:2,ease:easeInOut}}>
            <div className="w-full aspect-[16/9]">
              <img src="map.png" alt="College Map Tracker" className="w-full h-full object-cover" />
            </div>
            <div className='flex flex-col p-3'>
              <div className="flex justify-end">
                <a href="https://collegemaptracker.onrender.com" target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkAlt className="text-white text-xl hover:text-gray-600 transition duration-200" />
                </a>
              </div>
              <div className='p-2'>
                <p className='text-xl text-center text-white'>College Map Tracker</p>
                <p className='text-center text-white text-xs'>(HTML, Javascript, CSS, Node.js, Express.js , Leaflet ,Socket.IO , Render)</p>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  )
}

export default Project
