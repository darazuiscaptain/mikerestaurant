import React from 'react'
import Card from '../components/Card'
import image1 from '../assets/1.png'
import image2 from '../assets/2.png'
import image3 from '../assets/3.png'

function Featured() {
  return (
    <section className='sm:mt-8 px-12 sm:p-8 md:p-4 lg:p-0 mt-16 '>
        <div className='flex flex-col gap-2'>
            <h1 className='max-w-fit text-gray-700 text-semibold text-[20px] cursor-pointer hover:underline'>
                Featured Restaurant
            </h1>
            <div className='flex flex-wrap gap-4 bg-gray-100 p-2 py-4 rounded-md'>
                <Card image={image1} open={"open"}/>
                <Card image={image2} open={"open"}/>
                <Card image={image1} open={"close"}/>
                <Card image={image3} open={"open"}/>
                <Card image={image2} open={"close"}/>
                <Card image={image1} open={"open"}/>
            </div>
        </div>
    </section>
  )
}

export default Featured