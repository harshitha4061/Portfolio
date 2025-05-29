import React from 'react'
import { motion } from "motion/react"
import { easeInOut } from 'motion'

const About = () => {
    return (
        <div id="aboutme" className='w-full h-auto p-8 sm:p-16 bg-[#1B1A19]  selection:bg-orange-500 selection:text-white border-b-[0.10px] border-white border-opacity-5'>
            <motion.h1 className="text-3xl sm:text-6xl text-center sm:text-left pb-5 sm:pb-10 text-orange-500"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5, ease: easeInOut }}>ABOUT ME</motion.h1>
            <div className="flex flex-row">
                <div className="w-full sm:w-[70%] flex flex-col " >
                    <motion.p className="text-md sm:text-xl text-white text-center sm:text-left "
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5, ease: easeInOut }}>
                        Aspiring Information Technology undergraduate with knowledge of Computer Science principles, pursuing a Bachelor’s degree in Engineering with a CGPA of 9.51. Demonstrates practical experience in HTML, CSS, JavaScript, and Python. Successfully completed projects involving full-stack development, utilizing frameworks such as Node.js, Express.js, and Flask, along with databases like MongoDB.Seeking opportunities to leverage technical skills and contribute to innovative engineering projects in a collaborative team environment
                    </motion.p>
                    <br />
                    <motion.p className="text-md sm:text-xl text-white text-center sm:text-left"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5, ease: easeInOut }}>
                        Beyond academics, I have taken up leadership roles in student clubs. As the Joint Secretary of CBIT Cyber Security Club, I was involved in team management, event planning, and organizing various activities. As the Design Coordinator for IEEE CBIT Student Branch, we worked on creating posters, graphics, and promotional materials for different events.
                    </motion.p>
                </div>
                <div className='w-full sm:w-[30%] h-full sm:flex flex-col mx-5 hidden '>
                    <div className='border-l-2 px-5 my-2 border-white'>
                        <p className='text-white text-lg'>Kendriya Vidyalaya, Ballari</p>
                        <p className='text-orange-500 text-lg'>2015 - 2020</p>
                        <p className='text-white text-lg'>Percentage: <span className='text-orange-500 text-lg'>93.17 %</span></p>
                    </div>
                    <div className="w-1 h-1 bg-orange-500 rounded-full"></div>
                    <div className='border-l-2 px-5 my-2 border-white'>
                        <p className='text-white text-lg'>Sri Guru PU College, Hospete</p>
                        <p className='text-orange-500 text-lg'>2020 - 2022</p>
                        <p className='text-white text-lg'>Percentage: <span className='text-orange-500 text-lg'>98.33 %</span></p>
                    </div>
                    <div className="w-1 h-1 bg-orange-500 rounded-full"></div>
                    <div className='border-l-2 px-5 my-2 border-white'>
                        <p className='text-white text-lg'>Chaitanya Bharathi Institute of Technology, Hyderabad</p>
                        <p className='text-orange-500 text-lg'>2022 - 2026</p>
                        <p className='text-white text-lg'>CGPA (V Sem): <span className='text-orange-500 text-lg'>9.51 </span></p>
                    </div>
                </div>
            </div>
            <div className='w-full h-full flex flex-col my-5  sm:hidden '>
                <div className='border-l-3 px-5 my-2 border-white'>
                    <p className='text-white text-lg'>Kendriya Vidyalaya, Ballari</p>
                    <p className='text-orange-500 text-lg'>2015 - 2020</p>
                    <p className='text-white text-lg'>Percentage: <span className='text-orange-500 text-lg'>93.17 %</span></p>
                </div>
                <div className="w-1 h-1 bg-orange-500 rounded-full"></div>
                <div className='border-l-3 px-5 my-2 border-white'>
                    <p className='text-white text-lg'>Sri Guru PU College, Hospete</p>
                    <p className='text-orange-500 text-lg'>2020 - 2022</p>
                    <p className='text-white text-lg'>Percentage: <span className='text-orange-500 text-lg'>98.33 %</span></p>
                </div>
                <div className="w-1 h-1 bg-orange-500 rounded-full"></div>
                <div className='border-l-3 px-5 my-2 border-white'>
                    <p className='text-white text-lg'>Chaitanya Bharathi Institute of Technology, Hyderabad</p>
                    <p className='text-orange-500 text-lg'>2022 - 2026</p>
                    <p className='text-white text-lg'>CGPA (V Sem): <span className='text-orange-500 text-lg'>9.48 </span></p>
                </div>
            </div>
        </div>
    )
}

export default About
