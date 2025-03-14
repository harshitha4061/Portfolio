import React, { useState } from 'react';
import { FiMenu, FiX } from "react-icons/fi";
import Side from './Side';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <div className="w-full flex flex-row justify-between items-center sm:px-16 px-5 bg-[#121110]">
                <p className="p-5 text-xl text-white font-bold hover:scale-105 transition duration-200">Kolli Harshitha</p>

                <div onClick={() => setIsOpen(!isOpen)} className="text-white text-2xl sm:hidden">
                    {isOpen ? <FiX /> : <FiMenu />}
                </div>

                <ul className="hidden sm:flex flex-row ">
                    <li className='p-5 text-sm text-white font-extralight cursor-pointer hover:text-gray-500 hover:scale-110 hover:underline underline-offset-6 transition duration-200'>About Me</li>
                    <li className='p-5 text-sm text-white font-extralight cursor-pointer hover:text-gray-500 hover:scale-110 hover:underline underline-offset-6 transition duration-200'>Skills</li>
                    <li className='p-5 text-sm text-white font-extralight cursor-pointer hover:text-gray-500 hover:scale-110 hover:underline underline-offset-6 transition duration-200'>Education</li>
                    <li className='p-5 text-sm text-white font-extralight cursor-pointer hover:text-gray-500 hover:scale-110 hover:underline underline-offset-6 transition duration-200'>Projects</li>
                    <li className='p-5 text-sm text-white font-extralight cursor-pointer hover:text-gray-500 hover:scale-110 hover:underline underline-offset-6 transition duration-200'>Experience</li>
                    <li className='p-5 text-sm text-white font-extralight cursor-pointer hover:text-gray-500 hover:scale-110 hover:underline underline-offset-6 transition duration-200'>Contact</li>
                </ul>
            </div>
            <div>
                {isOpen && <Side />}
            </div>
        </div>
    );
};

export default Navbar;
