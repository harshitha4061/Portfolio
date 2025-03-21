import React, { useState } from 'react';
import { FiMenu, FiX } from "react-icons/fi";
import Side from './Side';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <div className="w-full flex flex-row justify-between items-center sm:px-16 px-5 bg-[#121110]">
                <p className="py-5 text-xl text-white font-bold hover:scale-105 transition duration-200">Kolli Harshitha</p>

                <div onClick={() => setIsOpen(!isOpen)} className="text-white text-2xl sm:hidden">
                    {isOpen ? <FiX /> : <FiMenu />}
                </div>

                <ul className="hidden sm:flex flex-row">
                    <li> <a href="#aboutme" className='p-5 text-sm text-white font-extralight cursor-pointer hover:text-gray-500 hover:scale-110 hover:underline underline-offset-6 transition duration-200 inline-block'>About Me</a></li>
                    <li> <a href="#skillset" className='p-5 text-sm text-white font-extralight cursor-pointer hover:text-gray-500 hover:scale-110 hover:underline underline-offset-6 transition duration-200 inline-block'>Skills</a></li>
                    <li> <a href="#project" className='p-5 text-sm text-white font-extralight cursor-pointer hover:text-gray-500 hover:scale-110 hover:underline underline-offset-6 transition duration-200 inline-block'>Projects</a></li>
                    <li> <a href="#contact" className='p-5 text-sm text-white font-extralight cursor-pointer hover:text-gray-500 hover:scale-110 hover:underline underline-offset-6 transition duration-200 inline-block'>Contact</a></li>
                </ul>

            </div>
            <div>
                {isOpen && <Side />}
            </div>
        </div>
    );
};

export default Navbar;
