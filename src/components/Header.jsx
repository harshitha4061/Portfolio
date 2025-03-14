import React from 'react'
import { motion } from 'motion/react'
import { easeIn, easeInOut } from 'motion'

const Header = () => {
  return (
    <div className="flex flex-col sm:flex-row w-full h-auto bg-gradient-to-b from-[#121110] to-[#1B1A19] p-8 sm:p-16 items-center ">
        <motion.img src="/Photo.jpeg" alt="Photo" className="h-60 w-50 sm:hidden m-5 rounded-xl shadow-[10px_10px_15px_rgba(189,131,63,0.2)] hover:scale-102 transition duration-200"        
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1,x:0 }}
        transition={{ duration: 2, delay: 0.5 ,ease:easeInOut}} />
      <motion.div className="flex flex-col sm:pr-10 selection:bg-orange-500 selection:text-white" 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1,x:0 }}
        transition={{ duration: 2, delay: 0.5 ,ease:easeInOut}}>
        <p className="text-6xl sm:text-9xl p-2 text-white sm:text-left text-center">Hello !</p>
        <p className="text-3xl sm:text-7xl p-2 text-white sm:text-left text-center">I'm <span className="text-orange-500">Kolli Harsitha</span> ,</p>
        <p className="text-xl sm:text-3xl p-2 text-white sm:text-left text-center">a Passionate Full Stack Web Developer Crafting Beautiful & Functional Websites. I'm looking for opportunities to collaborate, learn, and grow in the tech industry. Excited to connect and explore job opportunities in web development!</p>
      </motion.div>
      <motion.img src="/Photo.jpeg" alt="Photo" className="h-120 w-120 hidden sm:block  rounded-xl shadow-[10px_10px_15px_rgba(189,131,63,0.2)] hover:scale-102 transition duration-200"        
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1,x:0 }}
        transition={{ duration: 2, delay: 0.5 ,ease:easeInOut}} />
    </div >
  )
}

export default Header
