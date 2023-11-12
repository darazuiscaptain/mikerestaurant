import { useEffect, useState } from 'react'
import Sidebar from './component/Sidebar'

import fetchAPI from '../../utils/fetchData/fetchAPI.js'
import axios from 'axios'
import { toast } from 'react-toastify'
import NavBar from './component/NavBar'

const BASE_URL = "https://mern-restaurant-5rre.onrender.com"

const Products = () => {
    const [products, setProducts] = useState([])

    const handleInputChange = (index, event) => {
        const newProducts = [...products];
        newProducts[index][event.target.name] = event.target.value;
        setProducts(newProducts);
    };

    const handleUpdate = async (index) => {
        const product = products[index]

        try {
            const update = await axios.put(`${BASE_URL}/products/update/${product._id}`, product)
            if (update) {
                toast.success("Update successfully")
            }
        } catch (error) {
            toast.error(error)
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await fetchAPI(`${BASE_URL}/products`);
                setProducts(result);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, [])
    return (
        <div id="dashboard" className='flex w-full h-full'>
            <div id="sidebar">
                <Sidebar />
            </div>
            <div id="products" className='flex flex-col gap-5 flex-1 bg-blue-gray-50 p-5'>
                <NavBar />
                <div className='flex flex-col w-full bg-white p-1 px-3'>
                    <h2 className='text-md text-gray-700'>Products</h2>
                </div>
                <div className='flex flex-col gap-5 felx-1 w-full h-full bg-white p-5'>
                    <div className='flex flex-col gap-3'>
                        <ul className='grid grid-cols-8 w-full'>
                            <li className='text-sm text-gray-600 max-w-[300px]'>Image</li>
                            <li className='text-sm text-gray-600'>Product Name</li>
                            <li className='text-sm text-gray-600'>Price</li>
                            <li className='text-sm text-gray-600'>Amount</li>
                        </ul>
                        <div className='border-b-2 w-full border-black' />
                        {products && products.map((res, index) => (
                            <ul key={res._id} className='grid grid-cols-8 mt-3'>
                                <img src={res.productImage} className='h-14 w-[6rem] object-fit' />
                                <li className='text-sm'>{res.productName}</li>
                                <input
                                    type='number' min="1"
                                    value={res.price} name='price'
                                    onChange={(e) => handleInputChange(index, e)}
                                    className='w-[4rem] hover:outline-none focus:outline-none text-xs h-[1.7rem] border-2 px-2' />
                                <input
                                    type='number' min="1"
                                    value={res.amount} name='amount'
                                    onChange={(e) => handleInputChange(index, e)}
                                    className='w-[4rem] hover:outline-none focus:outline-none text-xs h-[1.7rem] border-2 px-2' />
                                <button
                                    onClick={() => handleUpdate(index)}
                                    className='border-2 border-orange-600 text-orange-600 px-3 rounded-md cursor-pointer text-xs w-fit h-fit p-1'>
                                    Update
                                </button>
                            </ul>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products