import React from 'react'
import Sidebar from './component/Sidebar'
import { AiOutlineSearch, AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai'
import { HiOutlineSelector } from 'react-icons/hi'
import profileImg from "../../assets/user1.png"


const Customers = () => {

    const customers = [
        { username: 'John', email: 'john@example.com', roles: 'Admin', approved: true },
        { username: 'Jane', email: 'jane@example.com', roles: 'User', approved: false },
        { username: 'Joseph Smith', email: 'jane@g.com', roles: 'Administrator', approved: false },
        // Add more customers as needed...
    ]

    return (
        <div id="dashboard" className='flex w-full h-full'>
            <div id="sidebar">
                <Sidebar />
            </div>
            <div id="customers" className='flex flex-col gap-5 flex-1 bg-blue-gray-50 p-5'>
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
                    <h2 className='text-md text-gray-700'>Customers</h2>
                </div>
                <div className='flex flex-col felx-1 w-full h-full bg-white px-12 p-3'>
                    <div className='flex flex-col gap-3'>
                        <ul className='flex items-center justify-between w-full'>
                            <li className='text-sm text-gray-800'>Image</li>
                            <li className='text-sm text-gray-800'>Username</li>
                            <li className='text-sm text-gray-800'>Email</li>
                            <li className=''></li>
                            <li className=''></li>
                        </ul>
                        <div className='border-b-2 w-full border-gray-200' />
                        {customers.map((user, index) => (
                            <ul 
                                key={index}
                                className='flex justify-between  w-full'>
                                <img src={""} alt='' className='flex w-8 h-8 rounded-full'/>
                                <li className='flex text-xs text-gray-600'>{user.username}</li>
                                <li className='flex text-xs text-gray-600'>{user.email}</li>
                                <div className='flex gap-2'>
                                    <li><AiOutlineEdit className='text-orange-600' /></li>
                                    <li><AiOutlineDelete className='text-red-600' /></li>

                                </div>
                            </ul>
                        ))}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Customers