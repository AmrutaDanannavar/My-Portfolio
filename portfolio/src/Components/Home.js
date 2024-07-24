import React from 'react';
import img1 from '../images/a2.jpeg';
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <div className='mt-20  '>
            <div className='flex flex-col  gap-10 justify-center items-center md:flex-row '>
                <div>
                    <h1 className='text-4xl mb-8 text-white font-bold font-sans pb-3 pt-28'> Welcome to My Portfolio...</h1>
                    <p className='text-xl text-white font-serif  pb-2'>Hi, I'm Amruta Danannavar, a passionate and innovative MERN Stack </p><p className='text-xl text-white font-serif pb-2 '> Developer dedicated to creating dynamic and responsive web applications.</p>
                    <p className='text-xl text-white font-serif pb-2'>I build web applications using MongoDB, Express.js, React, and Node.js.</p>

                </div>
                <div>
                    <img src={img1} className='w-72 h-80 mt-20  mt-28 rounded-full ' />
                </div>
            </div>
            <div className='flex flex-row pl-32  gap-10 justify-start items-center md:pl-32 pt-8'>
                <a href="#contact"><button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded mb-14'>Contact Me</button></a>
                <div className="flex justify-center pb-14 ">
                    <a
                        href="/Amruta D .pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        download
                        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded'
                    >
                        Download Resume
                    </a>
                </div>
            </div>
           
        </div>

    )
}

export default Home
