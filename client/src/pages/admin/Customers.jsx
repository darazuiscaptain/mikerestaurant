import React, { useEffect, useState } from 'react'
import Sidebar from './component/Sidebar'
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai'
import NavBar from './component/NavBar'
import fetchAPI from '../../utils/fetchData/fetchAPI'
import LoadingSpinner from '../../components/LoadingSpinner'

const BASE_URL = import.meta.env.BASE_URL

const Customers = () => {

    const [customers, setCustomers] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        const fetchCustomers = async () => {
            const result = await fetchAPI(`${BASE_URL}/users?role=customer`)
            setCustomers(result)
            setLoading(false)
        }
        fetchCustomers()
    }, [])

    return (
        <div id="dashboard" className='flex w-full h-full'>
            <div id="sidebar">
                <Sidebar />
            </div>
            <div id="customers" className='flex flex-col gap-5 flex-1 bg-blue-gray-50 p-5'>
                <NavBar />

                <div className='flex flex-col w-full bg-white p-5'>
                    <h2 className='text-md text-gray-700'>Customers</h2>
                </div>
                <div className='flex flex-col felx-1 w-full h-full bg-white px-12 p-3'>
                    <div className='flex flex-col gap-3'>
                        <ul className='grid grid-cols-4 w-5/6'>
                            <li className='text-sm text-gray-900'>Username</li>
                            <li className='text-sm text-gray-900'>Email</li>
                        </ul>
                        <div className='border-b-2 w-full border-gray-200' />
                        {loading
                            ? <LoadingSpinner size={100} color={'#4299e1'} />
                            : customers && customers.map((user, index) => (
                                <ul
                                    key={index}
                                    className='grid grid-cols-4  w-5/6'>
                                    <div className='flex gap-3 items-center'>
                                        <img src={user.photo} alt='' className='flex w-8 h-8 rounded-full' />
                                        <li className='flex items-center text-xs text-gray-600 truncate uppercase'>{user.username}</li>
                                    </div>
                                    <li className='flex items-center text-xs text-gray-600'>{user.email}</li>
                                    <div className='flex items-center gap-2'>
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