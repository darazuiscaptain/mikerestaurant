import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { useDispatch, useSelector } from 'react-redux';
import { deleteAllCart, removeFromCart } from '../redux/cartSlice';
import { AiFillDelete } from 'react-icons/ai';
import { toast } from 'react-toastify';
import { setCart } from '../redux/cartSlice';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { cart } = useSelector(state => state.cart);


    const deleteCart = () => {
        dispatch(deleteAllCart())
    }
    const removeCart = (item) => {
        dispatch(removeFromCart(item))
        toast("item removed")
    }

    const subtotal = cart.reduce(
        (total, item) => total + item.price * item.quantity, 0)
    

    const proccedToOrder = () => {
        if (cart.length < 1) {
            toast.error("Empty cart")
        } else {
            navigate("/order")
        }
    }

    useEffect(() => {
        console.log(cart)
    }, [cart])

    return (
        <section id="cart" className="flex flex-col p-2 gap-12 ">
            <Header />
            <div className='flex flex-col justify-center mx-12 min-h-[75vh]'>
                <h1 className='text-red-700 font-bold text-2xl whitespace-nowrap'>
                    Your Cart is Here
                </h1>
                <div className="w-full border-b-2 border-gray-500 my-3" />
                <div className='flex flex-col gap-4 lg:gap-6'>
                    <div className='flex flex-wrap gap-2 '>
                        {cart.filter(item => item).map((item, index) => (
                            item && <div key={index}>
                                <div
                                    className='flex flex-col gap-2 min-w-[270px] p-1 border-[1px] bg-gray-50 rounded-lg'>
                                    <div className='flex flex-wrap'>
                                        <div>
                                            <img src={item.productImage} alt={item.productName} className='w-28 h-24' />
                                        </div>
                                        <div className='flex flex-col justify-between px-2 p-1 flex-1'>
                                            <div className='flex flex-col gap-2 min-w-full'>
                                                <h5 className='text-sm truncate lowercase font-normal text-gray-600'>{item.productName}</h5>
                                                <div className='flex items-center justify-between px-1'>
                                                    <span className='text-xs text-green-900'>${item.price}</span>
                                                    <input
                                                        type="number"
                                                        className='w-8 h-6 border-2 flex px-2 focus:outline-none'
                                                        min={1}
                                                        value={item.quantity}
                                                        name='quantity'
                                                        readOnly />
                                                </div>
                                                <div className='flex justify-between'>
                                                    <div className='flex gap-4'>
                                                        <input type="checkbox" className='cursor-pointer' />
                                                    </div>
                                                </div>
                                                <div className='text-md' onClick={() => removeCart(item)}>
                                                    <AiFillDelete className='text-red-700 cursor-pointer' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                        }
                    </div>
                    <div className='flex gap-3 mt-2 md:mt-4 lg:mt-8 justify-start text-blue-gray-500'>
                        <h1 className='text-2xl'>Total:</h1>
                        <h2 className='text-2xl'>${subtotal}</h2>
                    </div>
                    <div className='flex gap-5 mt-4 max-w-[15rem]'>
                        <button
                            className="w-full p-1 uppercase text-xs bg-red-400 text-white whitespace-nowrap px-2 hover:opacity-90"
                            onClick={() => deleteCart()}>
                            Clear the cart
                        </button>
                        <button
                            onClick={() => proccedToOrder()}
                            className='w-full p-1 uppercase font-medium text-xs bg-teal-500 text-white whitespace-nowrap px-2 hover:opacity-90'>
                            Proceed to Order
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </section>

    )
}

export default Cart