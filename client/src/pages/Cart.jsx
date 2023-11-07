import React from 'react'
import Footer from '../components/Footer'
import CartHolder from '../UI/CartHolder'
import Header from '../components/Header'

const Cart = () => {
    return (
        <section id="cart" className='flex flex-col'>
            <Header />
            <div className='flex flex-col max-w-[600px] mx-auto h-[70vh] overflow-scroll'>
                <CartHolder />
            </div>
            <Footer />
        </section>
    )
}

export default Cart