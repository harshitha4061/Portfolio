import React from 'react';

const Side = () => {
    return (
        <div className="w-full bg-black">
            <ul className="flex flex-col w-full h-auto">
                <li className="border-t border-b border-gray-300">
                    <a href="#aboutme" className="block p-5 text-sm text-white font-extralight cursor-pointer hover:text-gray-500 transition duration-200">
                        About Me
                    </a>
                </li>
                <li className="border-b border-gray-300">
                    <a href="#skillset" className="block p-5 text-sm text-white font-extralight cursor-pointer hover:text-gray-500 transition duration-200">
                        Skills
                    </a>
                </li>
                <li className="border-b border-gray-300">
                    <a href="#project" className="block p-5 text-sm text-white font-extralight cursor-pointer hover:text-gray-500 transition duration-200">
                        Projects
                    </a>
                </li>
                <li className="border-b border-gray-300">
                    <a href="#contact" className="block p-5 text-sm text-white font-extralight cursor-pointer hover:text-gray-500 transition duration-200">
                        Contact
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Side;

