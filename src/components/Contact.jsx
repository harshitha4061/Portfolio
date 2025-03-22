import React, { useState } from "react";
import { motion } from 'motion/react'
import { easeInOut } from "motion"
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { SiHackerrank } from "react-icons/si";
import { SiGeeksforgeeks } from "react-icons/si";


const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { name, email, message };

    try {
      const response = await fetch(import.meta.env.VITE_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        alert("Message sent successfully!");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      alert("Error sending message.");
    }
  };

  return (
    <div id="contact">
      <div className='w-full h-auto bg-[#1B1A19] p-8 sm:p-16 '>
        <div className='w-full h-full flex flex-row  justify-between flex-wrap'>
          <div className='w-full sm:w-[45%] h-full flex flex-col flex-wrap p-4 sm:p-0'>
            <motion.h1 className="text-2xl sm:text-4xl text-left  text-orange-500"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5, ease: easeInOut }}>DO YOU HAVE A PROJECT TO DISCUSS?</motion.h1>
            <motion.h1 className="text-2xl sm:text-4xl text-left my-5 text-white"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 1, ease: easeInOut }}>GET IN TOUCH</motion.h1>
            <div className='w-full h-auto flex flex-row justify-between flex-wrap'>
              <div>
                <h1 className="text-xl sm:text-2xl  text-left text-white">CONTACT</h1>
                <h1 className="text-lg  text-left text-blue-400 py-2">harshu.kolli05@gmail.com</h1>
              </div>
              <div className='flex flex-col items-start sm:items-center'>
                <h1 className="text-xl sm:text-2xl  text-left text-white ">SOCIAL MEDIA</h1>
                <div className='flex flex-row text-4xl text-white justify-between py-2 gap-4'>
                  <a href="https://github.com/harshitha4061" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                  </a>
                  <a href="https://leetcode.com/u/harshu_kolli05/" target="_blank" rel="noopener noreferrer">
                    <SiLeetcode />
                  </a>
                  <a href="https://www.linkedin.com/in/kolli-harshitha-b95006293/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                  </a>
                  <a href="https://www.hackerrank.com/profile/harshu_kolli05" target="_blank" rel="noopener noreferrer">
                    <SiHackerrank />
                  </a>
                  <a href="https://www.geeksforgeeks.org/user/harshuk2knb/?_gl=1*3yswcp*_up*MQ..*_gs*MQ..&gclid=Cj0KCQjwv_m-BhC4ARIsAIqNeBte0ftDrXv0sNOU5foFPV6mNYonEyxbWL7q3Y-F9gNr14LFbL9wnvsaAhsrEALw_wcB" target="_blank" rel="noopener noreferrer">
                    <SiGeeksforgeeks />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col items-center h-full w-full sm:w-[45%] mx-5'>
            <motion.h1 className='text-2xl sm:text-3xl self-start py-4 sm:p-4 text-orange-500'
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5, ease: easeInOut }}>CONTACT FORM</motion.h1>

            <div className='flex flex-col w-full p-0 sm:p-4 '>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col">
                  <label htmlFor="name" className='text-white text-lg sm:text-xl mb-3'>Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className='p-2 rounded-2xl border-[0.5px] border-white text-white bg-[#1B1A19] '
                    placeholder="Your Name"
                    autoComplete="name"
                    value={name} 
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="email" className='text-white text-lg sm:text-xl mb-3'>Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className='p-2 rounded-2xl border-[0.5px] border-white text-white bg-[#1B1A19] '
                    placeholder="Your Email"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="message" className='text-white text-lg sm:text-xl mb-3'>Message</label>
                  <textarea
                    id="message"
                    name="message"
                    className='p-2 rounded-2xl border-[0.5px] border-white text-white bg-[#1B1A19] '
                    placeholder="Your Message"
                    rows="4"
                    autoComplete="off"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>

                <div className="flex self-start">
                  <button type="submit" className="bg-blue-600 text-white text-md sm:text-lg px-6 py-3 rounded-2xl hover:bg-blue-800 transition-colors">
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>

  )
}

export default Contact
