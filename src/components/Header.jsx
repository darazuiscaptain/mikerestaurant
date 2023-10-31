import React from 'react'
import MenuDrawer from './drawer'
import Logo from './Logo'

function Header() {
  return (
    <header className='flex justify-center my-8 mx-5'>
        <div className='flex justify-between items-center w-[1100px]'>
            <h1 className='text-3xl md:text-5xl font-bold cursor-pointer'>
              <Logo />
            </h1>
            <ul className='hidden md:flex gap-5 items-center justify-center'>
                <li className='hover:underline cursor-pointer text_gradient_a'>Home</li>
                <li className='hover:underline cursor-pointer text_gradient_a'>Contact Us</li>
                <li className='hover:underline cursor-pointer text_gradient_a'>About Us</li>
                <button className='p-2 px-5 rounded-lg bg-blue-gray-900 text-white hover:opacity-90'>Sign In</button>
                <button className='p-2 px-5 rounded-lg bg-blue-900 text-white hover:opacity-90'>Sign Up</button>
            </ul>
            <div className='flex md:hidden'>
                <MenuDrawer/>
            </div>
        </div>
    </header>
  )
}

export default Header