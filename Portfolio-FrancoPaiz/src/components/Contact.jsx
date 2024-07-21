import React from 'react'
import { CONTACT } from '../constants'

export const Contact = () => {
  return (
    <div className='border-b border-neutral-900 pb-20'>
      <h1 className='my-10 text-center text-4xl'>¡Contact Me!</h1>
      <div className='text-center tracking-tighter'>
        <p className="my-4">{CONTACT.address}</p>
        {/* <p className='my-2'>Phone: {CONTACT.phoneNo}</p> */}
        <p className='my-2'>Email: {CONTACT.email}</p>
        <a href="https://cetkinal-my.sharepoint.com/:b:/g/personal/fpaiz-2022134_kinal_edu_gt/EYV1cZGdjetIndNNK5lWL9MB1X9vKrBxkPh4ZVb_ZIvLOw?e=TZbR18">Watch my CV</a>
      </div>
      <div className='flex flex-col md:flex-row items-center md:items-start justify-center mt-10'>
        <div className='text-center md:w-1/2 md:pr-5'>
          <h2 className='text-3xl'>Computrabajo Profile</h2>
          <img 
            src={CONTACT.workProfileImage} 
            alt="Work Profile" 
            className="my-4 mx-auto md:mx-0 w-full h-full object-cover"
          />
        </div>
        <div className='text-center md:w-1/2 md:pl-5 mt-10 md:mt-0'>
          <h2 className='text-3xl'>LinkedIn profile</h2>
          <img 
            src={CONTACT.additionalImage} 
            alt="Additional" 
            className="my-4 mx-auto md:mx-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  )
}
