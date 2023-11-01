import React from 'react'
import Card from '../components/Card'
import image1 from '../assets/restaurant1.png'
import image2 from '../assets/restaurant2.png'
import image3 from '../assets/restaurant3.png'
import image4 from '../assets/restaurant4.png'
import image6 from '../assets/restaurant6.png'


function Featured() {
  return (
    <section className='sm:mt-8 px-12 sm:p-8 md:p-4 lg:p-0 mt-16 '>
        <div className='flex flex-col gap-2'>
            <h1 className='text_gradient_h max-w-fit cursor-pointer hover:scale-105'>
                Our Restaurants
            </h1>
            <div className='flex flex-wrap gap-4 bg-gray-100 p-2 py-4 rounded-md'>
                <Card image={image1} open={"open"} title={"Lorem"}/>
                <Card image={image6} open={"open"} title={"Ipsum"}/>
                <Card image={image3} open={"close"} title={"Dolor"}/>
                <Card image={image2} open={"open"} title={"amet"}/>
                <Card image={image4} open={"open"} title={"Sit"}/>
                <Card image={image1} open={"close"} title={"Lorem"}/>
                <Card image={image6} open={"open"} title={"Ipsum"}/>
            </div>
        </div>
    </section>
  )
}

export default Featured