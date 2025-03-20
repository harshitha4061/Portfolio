import React from 'react'
import {motion} from 'motion/react'
import {easeInOut} from "motion"

const Contact = () => {
  return (
    <div id="contact">
      <div className='w-full h-auto bg-[#1B1A19] p-8 sm:p-16 '>
      <motion.h1 className="text-3xl sm:text-6xl text-center sm:text-left pb-5 sm:pb-10 text-orange-500"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5, ease: easeInOut }}>Contact</motion.h1>
      </div>
    </div>
  )
}

export default Contact
