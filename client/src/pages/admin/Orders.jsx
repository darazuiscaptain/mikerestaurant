import React from 'react'
import Sidebar from './component/Sidebar'
import { AiOutlineSearch } from 'react-icons/ai'
import { HiOutlineSelector } from 'react-icons/hi'
import profileImg from "../../assets/user1.png"

const Orders = () => {
    return (
        <div id="dashboard" className='flex w-full h-full'>
            <div id="sidebar">
                <Sidebar />
            </div>
            <div id="order" className='flex flex-col gap-5 flex-1 bg-blue-gray-50 p-5'>
                <div className='flex h-[4rem] bg-white p-3 w-full'>
                    <div className='flex flex-1 justify-around items-center'>
                        <div className='flex gap-0 justify-center '>
                            <div className='flex gap-3 relative border-[1px]'>
                                <AiOutlineSearch className="absolute top-[0.6rem] left-2 text-xs text-gray-500" />
                                <input
                                    className='w-[10rem] py-2 px-6 text-xs focus:outline-none hover:outline-none border-none'
                                    type="text"
                                    placeholder="Search.."
                                />
                            </div>
                            <button className='px-3 bg-blue-600 text-xs text-white font-light'>Search</button>
                        </div>
                    </div>
                    <div className='flex justify-end flex-1 pr-8'>
                        <div className='flex gap-3 items-center justify-around'>
                            <img src={profileImg} alt="" className='w-8 h-8 rounded-full' />
                            <div className='flex gap-2 items-center'>
                                <span>Mikiyas</span>
                                <HiOutlineSelector />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col w-full bg-white p-1 px-3'>
                    <h2 className='text-md text-gray-700'>Orders</h2>
                </div>
                <div className='flex flex-col gap-5 felx-1 w-full h-full bg-white p-5'>
                    <div className='flex flex-col gap-3'>
                        <ul className='grid grid-cols-5 w-full'>
                            <li className='text-sm text-gray-600'>Order No</li>
                            <li className='text-sm text-gray-600'>Product Name</li>
                            <li className='text-sm text-gray-600'>Purchased On</li>
                            <li className='text-sm text-gray-600'>Status</li>
                        </ul>
                        <div className='border-b-2 w-full border-black' />
                        <ul className='grid grid-cols-5 w-full mt-3'>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li className='text-xs p-[1px] text-green-500 border-green-500 border-2 flex justify-center items-center w-[40%] rounded-md cursor-pointer whitespace-nowrap'>view order</li>
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Orders