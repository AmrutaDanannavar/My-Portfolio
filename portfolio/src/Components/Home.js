import React from 'react';
import img1 from '../images/a2.jpeg';
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <div className='mt-20  '>
            <div className='flex flex-col  gap-10 justify-center items-center md:flex-row '>
                <div className='text-center md:text-left'>
                    <h1 className='text-3xl md:text-4xl mb-6 md:mb-8 font-bold font-sans pb-3 pt-28'> Welcome to My Portfolio...</h1>
                    <p className='text-base md:text-xl text-black font-serif  pb-2'>Hi, I'm Amruta Danannavar, a passionate and innovative MERN Stack </p><p className='text-base md:text-xl text-black font-serif pb-2 '> Developer dedicated to creating dynamic and responsive web applications.</p>
                    <p className='text-base md:text-xl text-black font-serif pb-2'>I build web applications using MongoDB, Express.js, React, and Node.js.</p>

                </div>
                <div>
                    <img src={img1} className='w-64 h-64 mt-14 md:w-72 md:h-80 mt-20  mt-28 rounded-full ' />
                </div>
            </div>
            <div className='flex flex-col md:flex-row gap-10 justify-center md:justify-start items-center  mt-14'>
                <a href="#contact"><button className='bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded  md:ml-28  '>Contact Me</button></a>
                <div className="flex justify-center  ">
                    <a
                        href="/AmrutaD.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        download
                        className='bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded '
                    >
                        Download Resume
                    </a>
                </div>
            </div>
           
        </div>

    )
}

export default Home
