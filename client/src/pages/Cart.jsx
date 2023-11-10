import React, { useEffect } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { useDispatch, useSelector } from 'react-redux';
import { deleteAllCart, removeFromCart } from '../redux/cartSlice';
import { AiFillDelete } from 'react-icons/ai';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const Cart = () => {
    const dispatch = useDispatch()
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


    useEffect(() => {

    }, [cart])

    return (
        <section id="cart" className="p-2 overflow-y-auto">
            <Header />
            <div className='flex flex-col justify-center mx-12 h-[50vh]'>
                <h1 className='text-red-700 font-bold text-2xl whitespace-nowrap'>
                    Your Cart is Here
                </h1>
                <div className="w-full border-b-2 border-gray-500 my-3" />
                <div className='flex flex-col gap-4 lg:gap-6'>
                    <div className='flex flex-wrap gap-2 '>
                        {cart.filter(item => item).map(item => (
                            item && <div key={item._id}>
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
                                                        defaultValue={1} />
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
                    <h2>Subtotal: ${subtotal.toFixed(2)}</h2>
                    <div className='flex gap-5 max-w-[15rem]'>
                        <button
                            className="w-full p-1 uppercase text-xs bg-red-400 text-white whitespace-nowrap px-2 hover:opacity-90"
                            onClick={() => deleteCart()}>
                            Clear the cart
                        </button>
                        <Link
                            to={"/order"}
                            className='w-full p-1 uppercase font-medium text-xs bg-teal-500 text-white whitespace-nowrap px-2 hover:opacity-90'>
                            Proceed to Order
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </section>

    )
}

export default Cart