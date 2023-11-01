import { Carousel } from '@material-tailwind/react'
import { food } from "../utils/FoodCategory"

function Meal() {
    return (
        <section className='mt-8 p-3 max-w-[500px] mx-auto'>
            <div className='flex justify-start py-2'>
                <h1 className='text_gradient_p font-extrabold text-2xl'>Meals</h1>
            </div>
            <Carousel
                transition={{ duration: 1 }} 
                autoplay
                autoplayDelay={4000}
                loop
                className="rounded-xl max-w-300 mx-auto h-[300px] -z-10">
                {food.map((food) => (
                    <div className='w-full h-full '
                        key={food.id}>
                        <img
                            src={food.image}
                            alt="image 1"
                            className="w-full h-[70%] object-cover"
                        />
                        <h1 className='p-3 text_gradient_h text-xl'>{food.name}</h1>
                    </div>
                ))}
            </Carousel>
        </section>
    )
}

export default Meal