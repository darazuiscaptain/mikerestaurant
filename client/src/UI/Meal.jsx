import { food } from '../utils/FoodCategory'
import { BiBasket } from 'react-icons/bi'

function Meal() {
    return (
        <section className='mt-8 p-3'>
            <div className='flex justify-start py-2'>
                <h1 className='text_gradient_p font-extrabold text-2xl'>Meals</h1>
            </div>
            <div className='flex flex-wrap gap-2 max-w-full mx-auto'>
                {food.map((meal) => (
                    <div className='flex flex-col gap-2 max-w-[170px] p-1 h-52 border-[1px] bg-gray-50 rounded-lg'>
                        <div className='overflow-hidden flex flex-1'>
                            <img 
                                src={meal.image} 
                                alt="" 
                                className='hover:scale-110  w-full h-full object-cover' />
                        </div>
                        <div className='flex flex-col p-1'>
                            <p className='text-sm font-semibold text-gray-700 truncate lowercase'>{meal.name}</p>
                            <span className='text-xs text-gray-500'>{meal.star}*</span>
                            <div className='flex justify-between items-center'>
                                <span className='text-md text-green-600'>${meal.price}</span>
                                <div className='flex gap-2 justify-center items-center'>
                                    <BiBasket />
                                    <button className='p-1 px-3 bg-teal-500 rounded-md text-xs text-white hover:opacity-90'>
                                        order
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}



                {/* <div className='flex flex-col max-w-[200px] p-1 border-[1px] border-gray-100 bg-blue-gray-50 rounded-lg'>
                    <div className='overflow-hidden flex-1'>
                        <img src={food2} alt="" className='hover:scale-110 w-full h-full object-contain' />
                    </div>
                    <div className='flex flex-col p-1'>
                        <p className='text-sm font-semibold text-gray-700'>name</p>
                        <span className='text-xs'>*****</span>
                        <div className='flex justify-between items-center'>
                            <span className='text-md text-green-600'>$5</span>
                            <div className='flex gap-2 justify-center items-center'>
                                <BiBasket />
                                <button className='p-1 px-3 bg-teal-500 rounded-md text-xs text-white hover:opacity-90'>
                                    order
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col max-w-[200px] p-1 border-[1px] border-gray-100 bg-blue-gray-50 rounded-lg'>
                    <div className='overflow-hidden flex-1'>
                        <img src={food3} alt="" className='hover:scale-110 w-full h-full object-contain' />
                    </div>
                    <div className='flex flex-col p-1'>
                        <p className='text-sm font-semibold text-gray-700'>name</p>
                        <span className='text-xs'>*****</span>
                        <div className='flex justify-between items-center'>
                            <span className='text-md text-green-600'>$15</span>
                            <div className='flex gap-2 justify-center items-center'>
                                <BiBasket />
                                <button className='p-1 px-3 bg-teal-500 rounded-md text-xs text-white hover:opacity-90'>
                                    order
                                </button>
                            </div>
                        </div>
                    </div>
                </div> */}



            </div>
        </section>
    )
}

export default Meal