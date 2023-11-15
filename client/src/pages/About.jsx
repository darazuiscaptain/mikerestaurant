import React from 'react'
import logo from "../assets/res-logo.jpg"


function About() {
  return (
    <div className='w-full bg-yellow-100'>
      <div className='flex flex-col justify-around sm:flex-row sm:h-[100vh] mx-auto px-3 font-serif mt-4 sm:mt-8 md:mt-12 lg:mt-16'>
        <div className='flex justify-center items-center'>
          <img src={logo} alt="" className='' />
        </div>
        <div className='flex flex-col gap-3 justify-center  max-w-[500px] p-5 sm:px-0 mx-auto w-full'>
          <h1 className='flex text-4xl font-extrabold text-red-400'>Mike Restaurant</h1>
          <p className='justify-start'>
            dolor sit amet consectetur adipisicing elit.
            Odio similique voluptatum magnam earum
            fuga libero tempora sint nobis ipsa voluptates.
            Culpa error earum laborum accusantium.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About