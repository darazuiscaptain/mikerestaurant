import React, { useEffect, useState } from 'react'
import Sidebar from './component/Sidebar'
import NavBar from './component/NavBar'
import { Link } from 'react-router-dom'
import fetchAPI from '../../utils/fetchData/fetchAPI'
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai'



const Deliveries = () => {

    const [delivery, setDelivery] = useState([])

    useEffect(() => {
        const fetchDelivery = async () => {
            const result = await fetchAPI(`/api/users?role=delivery`)
            console.log(result)
            setDelivery(result)
        }
        fetchDelivery()
    }, [])

    return (
        <div id="dashboard" className='flex w-full h-full'>
            <div id="sidebar">
                <Sidebar />
            </div>
            <div id="delivery" className='flex flex-col gap-5 flex-1 bg-blue-gray-50 p-5'>
                <NavBar />

                <div className='flex flex-col w-full bg-white p-5'>
                    <div className='text-md text-gray-700 flex justify-between'>
                        <h2>Deliveries</h2>
                        <Link to={"/reg-delivery"}
                            className='text-xs bg-teal-500 text-white hover:opacity-80 rounded-md shadow-lg p-2'>
                            Add Delivery
                        </Link>
                    </div>
                </div>
                <div className='flex flex-col felx-1 w-full h-full bg-white px-12 p-3'>
                    <div className='flex flex-col gap-3'>
                        <ul className='grid grid-cols-4 w-5/6'>
                            <li className='text-sm text-gray-800'>Username</li>
                            <li className='text-sm text-gray-800'>Email</li>
                        </ul>
                        <div className='border-b-2 w-full border-gray-200' />

                        {delivery && delivery.map((user, index) => (
                            <ul
                                key={index}
                                className='grid grid-cols-4  w-5/6'>
                                <div className='flex gap-3 items-center'>
                                    <img src={user.photo} alt='' className='flex w-8 h-8 rounded-full' />
                                    <li className='flex text-xs items-center text-gray-600 truncate uppercase'>{user.username}</li>
                                </div>
                                <li className='flex text-xs items-center text-gray-600'>{user.email}</li>
                                <div className='flex items-center gap-3'>
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

export default Deliveries