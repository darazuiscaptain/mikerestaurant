import React, { useEffect, useState } from 'react'
import Sidebar from './component/Sidebar'
import { AiOutlineSearch } from 'react-icons/ai'
import { IoIosAddCircle } from 'react-icons/io'
import { HiOutlineSelector } from 'react-icons/hi'
import profileImg from "../../assets/user1.png"
import { Link } from 'react-router-dom'
import fetchAPI from '../../utils/fetchData/fetchAPI.js'
import axios from 'axios'
import { toast } from 'react-toastify'


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
            const update = await axios.put(`http://localhost:5000/api/v1/products/update/${product._id}`, product)
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
                const result = await fetchAPI("http://localhost:5000/api/v1/products");
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
                <div className='flex h-[4rem] bg-white p-3 w-full'>
                    <div className='flex flex-1 justify-around items-center'>
                        <Link to={"/add-product"} className='flex gap-3 cursor-pointer justify-center items-center'>
                            <button className='text-white text-lg p-1 rounded-md bg-blue-600'><IoIosAddCircle /></button>
                            <span className='text-xs text-gray-700'>Add Product</span>
                        </Link>
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