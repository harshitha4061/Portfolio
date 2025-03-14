import React from 'react'

const Side = () => {
    return (
        <div>
            <ul className="flex flex-col bg-black w-full">
                <li className='p-5  px-10  text-sm text-white font-extralight cursor-pointer   border-y border-gray-300  hover:text-gray-500 transition duration-200'>About Me</li>
                <li className='p-5 px-10  text-sm text-white font-extralight cursor-pointer   border-y border-gray-300  hover:text-gray-500 transition duration-200'>Skills</li>
                <li className='p-5  px-10 text-sm text-white font-extralight cursor-pointer border-y border-gray-300  hover:text-gray-500 transition duration-200'  >Education</li>
                <li className='p-5 px-10  text-sm text-white font-extralight cursor-pointer   border-y border-gray-300  hover:text-gray-500 transition duration-200'>Projects</li>
                <li className='p-5 px-10  text-sm text-white font-extralight cursor-pointer   border-y border-gray-300  hover:text-gray-500 transition duration-200'>Experience</li>
                <li className='p-5  px-10 text-sm text-white font-extralight cursor-pointer border-y border-gray-300  hover:text-gray-500 transition duration-200'  >Contact</li>
            </ul>
        </div>
    )
}

export default Side
