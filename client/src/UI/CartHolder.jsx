import React from 'react'
import { fastFood } from '../utils/FoodCategory'
import { AiFillDelete } from 'react-icons/ai'

function CartHolder() {
    return (
        <csection id="cart" className="p-2 overflow-y-auto">
            <div className='flex flex-col'>
                <h1 className='text-red-700 font-bold text-2xl whitespace-nowrap'>
                    Your Cart is Here
                </h1>
                <div className="w-full border-b-2 border-gray-500 my-3" />
                <div className='flex flex-col gap-4 lg:gap-6'>
                    <div className='flex flex-wrap gap-2 '>
                        {fastFood.map((fastFood) => (
                            <div 
                                key={fastFood.id}
                                className='flex flex-col gap-2 min-w-[270px] p-1 border-[1px] bg-gray-50 rounded-lg'>
                                <div className='flex flex-wrap'>
                                    <div>
                                        <img src={fastFood.image} alt={fastFood.name} className='w-28 h-24' />
                                    </div>
                                    <div className='flex flex-col justify-between px-2 p-1 flex-1'>
                                        <div className='flex flex-col gap-2 min-w-full'>
                                            <h5 className='text-sm truncate lowercase font-normal text-gray-600'>{fastFood.name}</h5>
                                            <div className='flex items-center justify-between px-1'>
                                                <span className='text-xs text-green-900'>${fastFood.price}</span>
                                                <input
                                                    type="number"
                                                    className='w-8 h-6 border-2 flex px-2 focus:outline-none'
                                                    min={1}
                                                    defaultValue={1} />
                                            </div>
                                            <div className='flex justify-between'>
                                                <div className='flex gap-4'>
                                                    <input type="checkbox" className='cursor-pointer' />
                                                </div>
                                                <span className='text-sm text-gray-500'>total: ${fastFood.price}</span>
                                            </div>
                                            <AiFillDelete className='text-red-700 cursor-pointer' />
                                        </div>
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>
                    <div className='flex max-w-[350px]'>
                        <button className='w-full p-1 uppercase font-medium text-md bg-red-500 text-white'>
                            order now
                        </button>
                    </div>
                </div>
            </div>
        </csection>
    )
}

export default CartHolder