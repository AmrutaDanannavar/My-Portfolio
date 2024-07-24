import React from 'react';
import img10 from '../images/bp1.jpg';
import img11 from '../images/hp1.jpg';
import img12 from '../images/sp1.jpg';



const Projects = () => {
  const projects =[
    {
      name:'Bookstore Ecommerce App',
      image:img10,
      desc:'MERN Stack'
    },
    {
      name:'Hospital Management App',
      image:img11,
      desc:'MERN Stack'
    },
    {
      name:'Social Media Platform',
      image:img12,
      desc:'MERN Stack'
    }
  ]
  return (

    <div className='mt-20 '>
        <div className=''>
            <h1 className='pb-4  pt-24 text-4xl text-white font-bold pl-14'>Projects</h1>
            <div className='flex flex-col  gap-20 justify-center pt-7 md:flex-row '>
                {projects.map((project)=>(
                  <div className='w-80 h-80 border  rounded bg-slate-900'>
                    <img  className="p-4 " src={project.image}/>
                    <h1 className='text-2xl  text-white pt-4 pl-4'>{project.name}</h1>
                    <h2 className='text-xl text-gray-500 pt-4 pl-4'>{project.desc}</h2>   
                 </div> 
                ))

                } 
            </div>
        </div>
      
    </div>
  )
}

export default Projects
