import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteAllCart, removeFromCart } from '../redux/cartSlice';
import { AiFillDelete } from 'react-icons/ai';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Order from "./Order";

const Cart = () => {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);

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


    // const proccedToOrder = () => {
    //     if (cart.length < 1) {
    //         toast.error("Empty cart")
    //     } else {
    //         navigate("/order")
    //     }
    // }

    useEffect(() => {
        console.log(cart)
    }, [cart])

    return (
        <section id="cart" className="flex flex-col p-2 ">
            {/* <Header /> */}
            <div className='flex flex-col mt-4 mx-12  min-h-[75vh]'>
                <h1 className='text-red-700 font-bold text-2xl whitespace-nowrap'>
                    Your Cart is Here
                </h1>
                <div className="w-full border-b-2 border-gray-500 my-3" />
                <div className='grid grid-cols-2 gap-8'>
                    <div className='flex flex-wrap gap-8'>
                        {cart.filter(item => item).map((item, index) => (
                            item && <div key={index}>
                                <div
                                    className='flex flex-col gap-2 min-w-[260px] h-24 p-2 border-[1px] bg-blue-gray-50 rounded-r-lg'>
                                    <div className='flex flex-wrap'>
                                        <div>
                                            <img src={item.productImage} alt={item.productName} className='w-24 h-20 rounded-md' />
                                        </div>
                                        <div className='flex flex-col justify-between px-2 p-1 flex-1'>
                                            <div className='flex flex-col gap-1 min-w-full'>
                                                <h5 className='text-md truncate font-bold  capitalize'>{item.productName}</h5>
                                                <div className='flex items-center justify-between px-1'>
                                                    <span className='text-xs '>${item.price}</span>
                                                    {/* <input
                                                        type="number"
                                                        className='w-8 h-6 border-2 flex px-2 focus:outline-none'
                                                        min={1}
                                                        value={item.quantity}
                                                        name='quantity'
                                                        readOnly /> */}
                                                </div>
                                                <div className='flex justify-between'>
                                                    {/* <div className='flex gap-4'>
                                                        <input type="checkbox" className='cursor-pointer' />
                                                    </div> */}
                                                </div>
                                                <div className='text-md' onClick={() => removeCart(item)}>
                                                    <AiFillDelete className='text-red-400 cursor-pointer' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                        }
                        <h2
                            className="w-full p-2 uppercase text-xs hover:cursor-pointer my-6 text-red-400 rounded-md whitespace-nowrap px-2 hover:opacity-90"
                            onClick={() => deleteCart()}>
                            Clear cart
                        </h2>
                    </div>
                    <div className="flex flex-col justify-between w-[300px] h-fit p-3 mt-3 bg-white shadow-2xl rounded-xl">
                        <div className="flex flex-col gap-3">
                            <h2 className="flex justify-center text-red-400 text-xl">Order Summary</h2>
                            <div className="flex flex-col p-3">
                                <div className="flex justify-between">
                                    <h2 className="text-sm">Subtotal</h2>
                                    <span>${subtotal}</span>
                                </div>
                                <div className="flex justify-between">
                                    <h2 className="text-sm">Shipping cost</h2>
                                    <span>$15</span>
                                </div>
                                <div className="flex justify-between">
                                    <h2 className="text-sm">Total</h2>
                                    <span>${subtotal + 15}</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-3 p-3">

                            <Button onClick={handleOpen} variant="gradient" className="whitespace-nowrap">
                                Procced to checkout
                            </Button>
                            <Dialog open={open} handler={handleOpen} className="max-w-fit">
                                <Order />
                            </Dialog>
                        </div>
                    </div>

                </div>

            </div>
            {/* <Footer /> */}
        </section>

    )

}

export default Cart