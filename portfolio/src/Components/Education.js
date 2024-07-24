import React from 'react'

const Education = () => {
  const educations =[
    {
      year:'2019 - 2023',
      name:'Bachelor of Engineering',
      desc:"BLDEA's V P Dr PG Halakatti College of Engineering & Technology Bijapur Karnataka"
    },
    {
      year:'2017 - 2019',
      name:'PUC',
      desc:"Vagdevi Vikas PU Science College Mudhol"
    },
    {
      year:'2017',
      name:'SSLC',
      desc:"BVVS New Girls High School Mudhol"
    }
  ]
  const exp =[
    {
      year:'2024',
      name:'Web Designer',
      desc:'Solid experience in creating wireframes, storyboards, user flows, process flows and site maps.'
    },
    {
      year:'2023',
      name:'Frontend-End Developer',
      desc:'Developed complex user interfaces with HTML, CSS, JavaScript, React, and user-friendly experience.'
    },
    {
      year:'2022',
      name:'Back-End Developer',
      desc:'experience in developing web applications, cloud computing, software architecture.'
    }
  ]
  return (
    <div>
        <div className='flex flex-col p-4 gap-10 md:flex-row pt-28'>
            <div className=' md:ml-48 '>
                <h1 className='text-2xl text-center pt-2 text-black'>Education</h1>
                <div className='flex flex-col gap-4 mt-4 '>
                  {educations.map((eduction)=>(
                      <div className='w-96 h-32 bg-pink-900 pl-2 rounded'>
                      <h2 className='text-sm w-28 text-center text-black text-bold mt-2 rounded bg-slate-300'>{eduction.year}</h2>
                      <h2 className='text-xl font-semibold pt-3 text-white'>{eduction.name}</h2>
                      <p className='text-sm pt-3  text-white'>{eduction.desc}</p>
                     </div> 
                    ))
                  }       
                </div>
            </div>
            <div >
                <h1 className='text-2xl text-center pt-2 text-black'>Experience</h1>
                <div className='flex flex-col gap-4 mt-4 '>
                   {
                    exp.map((exps)=>(
                    <div className='w-96 h-32 bg-pink-900 pl-2 rounded'>
                    <h2 className='text-sm w-28 text-center text-black text-bold mt-2 rounded bg-slate-300'>{exps.year}</h2>
                    <h2 className='text-xl font-semibold pt-3 text-white'>{exps.name}</h2>
                    <p className='text-sm pt-3  text-white'>{exps.desc}</p>
                   </div> 
                    ))
                   } 
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Education
