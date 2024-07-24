import React from 'react';
import img2 from '../images/j2.jpg';
import img3 from  '../images/h1.jpg';
import img4 from  '../images/r2.jpg';
import img5 from  '../images/n2.jpg';
import img6 from  '../images/m1.jpg';
import img7 from  '../images/t1.jpg';

const Skills = () => {
    const skills = [
        {
            name:'Javascript',
            image:img2,
            description:'JavaScript is the cornerstone of my web development skills, enabling me to create dynamic and interactive user interfaces.My proficiency extends to working with various libraries and frameworks, particularly React, to build scalable and maintainable front-end applications.'
        },
        {
            name:'HTML',
            image:img3,
            description:'HTML is the foundation of all my web projects, where I craft well-structured and semantic markup. I prioritize accessibility and SEO optimization to ensure that my websites are user-friendly and easily discoverable.'
        },
        {
            name:'React JS',
            image:img4,
            description:'  React.js is my framework of choice for building modern, component-based front-end applications. I specialize in creating reusable components, managing application state with hooks and context, and optimizing performance'
        },
        {
            name:'Node Js',
            image:img5,
            description:' Node.js empowers me to develop powerful server-side applications. I utilize Node.js to create efficient, scalable, and event-driven back-end services.'
        },
        {
            name:'MongoDB',
            image:img6,
            description:'MongoDB is my go-to database for building scalable and efficient server-side applications. I have experience designing and managing databases, creating schemas, and performing CRUD operations.'
        },
        {
            name:'TailwindCSS',
            image:img7,
            description:'Tailwind CSS is my preferred tool for designing responsive and visually appealing user interfaces. Its utility-first approach allows me to quickly build custom designs without writing extensive CSS.'
        }
    ]
  return (
    
        <div className='mt-20 px-4 md:px-4'> 
            <h1 className='pb-4 pt-16 text-3xl md:text-4xl font-bold text-black text-center'>Skills</h1>
            <div className='flex flex-col gap-2 flex-wrap text-white md:flex-row'>
             {skills.map((skill)=>(
                <div className='  w-96  h-44 border bg-pink-900 '>
                    <div className='flex flex-row gap-40 pl-4 pt-2'>
                        <h3 className='text-xl font-semibold'>{skill.name}</h3>
                        <img src={skill.image} className='w-12 h-12 ml-14'/>
                    </div>
                    <p className='text-xs p-2 pt-6'>
                       {skill.description}
                    </p>
                </div>  
             ))} 
            </div>    
        </div>
    
  )
}

export default Skills
