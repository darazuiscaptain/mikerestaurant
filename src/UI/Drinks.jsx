import { Carousel } from '@material-tailwind/react'
import { drinks } from "../utils/FoodCategory"

function Drinks() {
    return (
        <section className='mt-8 p-3 max-w-[500px] mx-auto'>
            <div className='flex justify-start py-2'>
                <h1 className='text_gradient_h font-extrabold text-2xl'>Drinks</h1>
            </div>
            <Carousel
                transition={{ duration: 1 }} 
                autoplay
                autoplayDelay={4000}
                loop
                className="rounded-xl max-w-300 mx-auto h-[300px] -z-10">
                {drinks.map((drinks, index) => (
                    <div className='w-full h-full '
                        key={drinks.id}>
                        <img
                            src={drinks.image}
                            alt="image 1"
                            className="w-full h-[70%] object-cover"
                        />
                        <h1 className='p-3 text_gradient_h text-xl'>{drinks.name}</h1>
                    </div>
                ))}
            </Carousel>
        </section>
    )
}

export default Drinks