import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    
    return (
        <div>
            <div className='flex justify-between items-center w-full  h-20 bg-slate-900 text-white pl-4 fixed top-0 '>
                <h1 className='text-4xl font-mono '>Amruta</h1>
                <ul className='flex gap-6  pr-4 hidden md:flex '>
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#education">Education & Experience</a>
                    <a href="#skills">Skills</a>
                    <a href="#projects">Projects</a>
                </ul>
                <div onClick={() => setNav(!nav)} className='pr-4  z-10 cursor-pointer text-gray-500 md:hidden'>
                    {nav ? <FaTimes size={30} /> : <FaBars size={30} />}

                </div>
                {nav && (
                    <ul className='flex flex-col  justify-center items-center fixed top-0 left-0 w-full h-screen bg-slate-900 '>
                        <a href="#home" onClick={()=> setNav(!nav)}>Home</a>
                        <a href="#about" onClick={()=> setNav(!nav)}>About</a>
                        <a href="#education" onClick={()=> setNav(!nav)}>Education & Experience</a>
                        <a href="#skills" onClick={()=> setNav(!nav)}>Skills</a>
                        <a href="#projects"onClick={()=> setNav(!nav)}>Projects</a>
                            
                    </ul>

                )}


            </div>


        </div>
    )
}

export default Navbar
