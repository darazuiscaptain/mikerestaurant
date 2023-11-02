import { Card } from '@material-tailwind/react'
import React from 'react'

function Contact() {
  return (
    <section className='flex flex-col justify-center gap-5 w-full max-w-[500px] mx-auto'>
      <Card className='flex flex-col justify-between px-5 sm:px-12'>
        <h1 className='text_gradient_p text-2xl text-center underline-offset-2'>Contact Us</h1>
        <form className='flex flex-col w-full h-full gap-3 my-4'>
          <input type="text" placeholder='Full name' className='hover:outline-none placeholder:text-blue-gray-100 p-3 shadow-md rounded-lg' />
          <input type="text" placeholder='Email' className='hover:outline-none placeholder:text-blue-gray-100 p-3 shadow-md rounded-lg'/>
          <input type="text" placeholder='Subject' className='hover:outline-none placeholder:text-blue-gray-100 p-3 shadow-md rounded-lg'/>
          <textarea name="body" className='max-h-24 hover:outline-none placeholder:text-blue-gray-100 p-3 shadow-md rounded-lg' cols="10" rows="10" placeholder='Write here..'>
          </textarea>
          <button className='w-full uppercase p-3 rounded-lg my-9 bg-green-900 text-white opacity-90'>
            send
          </button>
        </form>
      </Card>

    </section>
  )
}

export default Contact