import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

function About() {
  return (
    <div className='flex flex-col'>
      <Header/>
      <div className='flex flex-col gap-5 h-[70vh] max-w-[500px] mx-auto px-3 font-serif mt-4 sm:mt-8 md:mt-12 lg:mt-16'>
        <h1 className='text_gradient_h text-2xl uppercase font-semibold'>Lorem ipsum dolor</h1>
        <p className=''>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Odio similique voluptatum magnam earum fuga libero tempora sint nobis ipsa voluptates.
          Culpa error earum laborum accusantium.
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Ut, distinctio placeat ea neque qui corrupti sunt rem sed culpa maxime magni,
          quae repudiandae blanditiis similique ipsam dolor ipsum exercitationem optio!
          Aliquam similique quis voluptates eaque.
        </p>

        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Veritatis sapiente eius dolor temporibus perferendis adipisci incidunt ut perspiciatis
          voluptatem,
          enim iste repellendus reiciendis repellat rerum distinctio aperiam itaque.
        </p>
      </div>
      <Footer/>
    </div>
  )
}

export default About