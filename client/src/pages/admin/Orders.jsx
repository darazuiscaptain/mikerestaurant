import React, { useEffect, useState } from 'react'
import Sidebar from './component/Sidebar'

import fetchAPI from '../../utils/fetchData/fetchAPI'
import { useNavigate } from 'react-router-dom'
import NavBar from './component/NavBar'

const BASE_URL = "https://mern-restaurant-5rre.onrender.com"

const Orders = () => {

    const [orders, setOrders] = useState([])

    const navigate = useNavigate()

    const handleNavigate = (id) => {
        navigate(`/orders/${id}`)
    }

    useEffect(() => {
        const orders = async () => {
            const result = await fetchAPI(`${BASE_URL}/orders`)
            setOrders(result)
        }
        orders()
    }, [])
    return (
        <div id="dashboard" className='flex w-full h-full '>
            <div id="sidebar">
                <Sidebar />
            </div>
            <div id="order" className='flex flex-col p-5 w-full gap-4 bg-blue-gray-50'>
                <NavBar/>

                <div className='flex flex-col w-full bg-white p-1 px-3'>
                    <h2 className='text-md text-gray-700'>Orders</h2>
                </div>
                <div className='flex flex-col gap-5 felx-1 w-full h-full bg-white p-5'>
                    <div className='flex flex-col gap-3'>
                        <ul className='grid grid-cols-7 w-full'>
                            <li className='text-sm text-gray-600'>Order ID</li>
                            <li className='text-sm text-gray-600'>Customer ID</li>
                            <li className='text-sm text-gray-600'>Total Amount</li>
                            <li className='text-sm text-gray-600'>Order Date</li>
                            <li className='text-sm text-gray-600'>Assigned Delivery</li>
                            <li className='text-sm text-gray-600'>Status</li>
                            <li></li>
                        </ul>
                        <div className='border-b-2 w-full border-black' />
                        {orders.length > 0 ? (orders.map((orders) => (
                            <ul
                                key={orders._id}
                                className='grid grid-cols-7 w-full mt-3 '>
                                <div className='flex gap-3 items-start'>
                                    <li className='truncate text-xs'>{(orders._id).slice(0, 8)}</li>
                                    <img className='w-[4rem]'
                                        src={orders.items.productImage} alt={""} />
                                </div>
                                <li className='truncate text-xs'>{(orders.customer).slice(0, 8)}</li>
                                <li className='text-xs whitespace-nowrap'>{orders.totalAmount}</li>
                                <li className='text-xs whitespace-nowrap truncate '>{new Date(orders.orderDate).toLocaleDateString()}</li>
                                <li className='text-xs whitespace-nowrap truncate '>{(orders.assigndDelivery)}</li>
                                <li className={`text-xs whitespace-nowrap 
                                ${orders.status == "pending"
                                        ? "text-orange-500"
                                        : orders.status === "active"
                                            ? "text-blue-500"
                                            : orders.status === "completed"
                                                ? "text-green-500"
                                                : orders.status === "rejected"
                                                    ? "text-red-500"
                                                    : "text-black"
                                    }`}>{orders.status}</li>
                                <li
                                    onClick={() => handleNavigate(orders._id)}
                                    className='flex justify-center items-center w-[45%] h-[1.5rem] whitespace-nowrap rounded-md cursor-pointer text-xs p-[.1rem] px-2 text-green-500 hover:text-white hover:bg-teal-700 hover:border-none border-green-500 border-[.1rem] '>
                                    view order
                                </li>
                            </ul>
                        ))) : ""}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Orders