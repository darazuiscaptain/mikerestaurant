import CardLoader from '../components/CardLoader'
import React from 'react'
import image1 from '../assets/restaurant1.png'
import image2 from '../assets/restaurant2.png'
import image3 from '../assets/restaurant3.png'
import image4 from '../assets/restaurant4.png'
import image6 from '../assets/restaurant6.png'


function Featured() {
  return (
    <section className='sm:mt-8 px-8 sm:p-8 md:p-4 lg:p-0 mt-16 '>
        <div className='flex flex-col gap-2'>
            <h1 className='text_gradient_h cursor-pointer hover:scale-105'>
                Our Restaurants
            </h1>
            <div className='flex flex-wrap gap-4 bg-gray-100 p-2 py-4 rounded-md justify-center lg:justify-start'>
                <CardLoader image={image1} open={"open"} title={"Lorem"}/>
                <CardLoader image={image6} open={"open"} title={"Ipsum"}/>
                <CardLoader image={image3} open={"close"} title={"Dolor"}/>
                <CardLoader image={image2} open={"open"} title={"amet"}/>
                <CardLoader image={image4} open={"open"} title={"Sit"}/>
                <CardLoader image={image1} open={"close"} title={"Lorem"}/>
                <CardLoader image={image6} open={"open"} title={"Ipsum"}/>
            </div>
        </div>
    </section>
  )
}

export default Featured