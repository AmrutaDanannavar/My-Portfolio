import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
    return (
    <div className='mt-56'>
        <div className='flex flex-col justify-center mt-20 gap-3 md:flex-row '>

            <div className='flex flex-col gap-3 mt-0 pl-14 text-black'>
                <h3 className='pb-3 text-2xl text-black font-bold font-sans'>Let's Talk ...</h3>
                <p className='pb-7 text-xl text-black font-serif'>I'm open to discussing web development projects</p>
                <div className='mb-4'>
                    <FontAwesomeIcon icon={faEnvelope} size='2x' className='text-pink-900 mr-2' />
                    <a href='' className='text-xl'>amruta.danannavar123@gmail.com</a>
                </div>
                <div className='mb-4'>
                    <FontAwesomeIcon icon={faPhone} size='2x' className='text-pink-900 mr-2' />
                    <span className='text-xl'>8792532374</span>
                </div>
                <div className='mb-4'>
                    <FontAwesomeIcon icon={faMapMarkedAlt} size='2x' className='text-pink-900 mr-2' />
                    <span className='text-xl'>Mudhol , 587313, India</span>
                </div>
            </div>
        </div>
    </div>    
    )
}

export default Contact
