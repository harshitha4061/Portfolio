import React from 'react'
import { motion } from "motion/react"
import { easeInOut } from 'motion'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaPython } from "react-icons/fa";
import { SiExpress, SiMongodb, SiCanva, SiFlask } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { RiTailwindCssFill } from "react-icons/ri";

const Education = () => {
    return (
        <div id="skillset">
            <div className="w-full h-auto p-8 sm:p-16 bg-[#1B1A19] flex flex-col  selection:bg-orange-500 selection:text-white border-b-[0.10px] border-white border-opacity-5" >
                <motion.h1 className="text-3xl sm:text-6xl text-center pb-5 sm:pb-15 text-orange-500"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5, ease: easeInOut }}>Skills</motion.h1>
                <div className="flex flex-wrap justify-center gap-6 text-6xl sm:text-8xl ">
                    <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}>
                        <FaHtml5 className="text-orange-600 hover:scale-110" title="HTML5" />
                    </motion.div>
                    <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.1 }} >
                        <FaCss3Alt className="text-blue-500 hover:scale-110" title="CSS3" />
                    </motion.div>
                    <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.9 }}>
                        <RiTailwindCssFill className="text-blue-500 hover:scale-110" title="Tailwind" />
                    </motion.div>
                    <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}>
                        <FaJs className="text-yellow-400 hover:scale-110" title="JavaScript" />
                    </motion.div>
                    <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}>
                        <FaPython className="text-yellow-400 hover:scale-110" title="Python" />
                    </motion.div>
                    <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.1 }}>
                        <FaReact className="text-blue-400 hover:scale-110" title="React" />
                    </motion.div>
                    <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.9 }}>
                        <FaNodeJs className="text-green-500 hover:scale-110" title="Node.js" />
                    </motion.div>
                    <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}>
                        <SiExpress className="text-gray-400 hover:scale-110" title="Express.js" />
                    </motion.div>
                    <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}>
                        <SiFlask className="text-gray-500 hover:scale-110" title="Flask" />
                    </motion.div>
                    <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}>
                        <SiMongodb className="text-green-400 hover:scale-110" title="MongoDB" />
                    </motion.div>
                    <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.9 }}>
                        <FaGitAlt className="text-orange-500 hover:scale-110" title="Git" />
                    </motion.div>
                    <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.1 }}>
                        <VscVscode className="text-blue-500 hover:scale-110" title="VS Code" />
                    </motion.div>
                    <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}>
                        <SiCanva className="text-blue-600 hover:scale-110" title="Canva" />
                    </motion.div>
                </div>

            </div>
        </div>
    )
}

export default Education