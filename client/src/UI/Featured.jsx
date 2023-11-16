import CardLoader from '../components/CardLoader'
import React from 'react'
import image1 from '../assets/restaurant1.png'
import image2 from '../assets/restaurant2.png'
import image3 from '../assets/restaurant3.png'
import image4 from '../assets/restaurant4.png'
import image6 from '../assets/restaurant6.png'


function Featured() {
  return (
    <section className='sm:mt-8 px-2 md:px-8 sm:p-8 md:p-4 lg:p-0 mt-16 '>
        <div className='flex flex-col gap-2'>
            <h1 className='font-extrabold text-2xl text-red-400 px-3 sm:pl-8'>
                Our Restaurants
            </h1>
            <div className='flex flex-wrap gap-5 py-4 rounded-md justify-center lg:justify-start'>
                <CardLoader image={image1} open={"open"} title={"Lorem Kepaso"}/>
                <CardLoader image={image6} open={"open"} title={"Ipsum Isumur gini"}/>
                <CardLoader image={image3} open={"close"} title={"Dolor kapt"}/>
                <CardLoader image={image2} open={"open"} title={"Amet Smirna"}/>
                <CardLoader image={image4} open={"open"} title={"Sit Bakulu"}/>
                <CardLoader image={image1} open={"close"} title={"Lorem Estivasko"}/>
                <CardLoader image={image6} open={"open"} title={"Psum Balo"}/>
            </div>
        </div>
    </section>
  )
}

export default Featured