import React from 'react'
import { CONTACT } from '../constants'

export const Contact = () => {
  return (
    <div className='border-b border-neutral-900 pb-20'>
        <h1 className='my-10 text-center text-4xl'> ¡Contact Me!</h1>
        <div className='text-center tracking-tighter'>
            <p className="my-4">
                {CONTACT.address}
            </p>
            <p className='my-4 '>Phone: {CONTACT.phoneNo}</p>
            <p className='my-4 '>Email: {CONTACT.email}</p>
        </div>
    </div>
  )
}

