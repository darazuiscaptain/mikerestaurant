import React from 'react'

function Cart() {
    return (
        <csection id="cart" className="p-2">
            <div className='flex flex-col gap-5'>
                <h1 className='text-2xl font-semibold text-gray-700 text-center underline'>
                    Your Basket
                </h1>
                <div className='flex flex-col mx-2'>
                    <div className='flex flex-1 gap-2 h-96'>
                        <h1>name</h1>    

                    </div>
                    <button className='flex w-full text-center justify-center p-1 rounded-md bg-red-400 hover:opacity-90 text-white text-1xl'>Order Now</button>
                </div>
            </div>
        </csection>
    )
}

export default Cart