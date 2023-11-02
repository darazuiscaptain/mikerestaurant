import { Card } from '@material-tailwind/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Sign_up_in() {
  const [login, setLogin] = useState(true)

  return (
    <section className='flex flex-col justify-center gap-5 w-full max-w-[500px] mx-auto'>
      <Card className='flex flex-col justify-between px-5 sm:px-12'>
        <div className='flex flex-col gap-2'>
          <h1 className='text_gradient_p uppercase text-2xl text-center'>
            {login ? "Login" : "Sign up"}
          </h1>
          <h5 className='text-sm'>{login ? "Don't Have an account?" : "Have an account!"}
            <span onClick={() => setLogin(!login)} className='text-blue-500 cursor-pointer'>
              {login ? " Sign Up" : " Login"}
            </span>
          </h5>
        </div>
        <form className='flex flex-col w-full h-full gap-3 my-8'>
          {!login && <div className='flex flex-col'>
            <label >Usename</label>
            <input type="text" className='hover:outline-none  p-3 shadow-md rounded-lg' />
          </div>}


          <div className='flex flex-col'>
            <label >Email</label>
            <input type="text" className='hover:outline-none  p-3 shadow-md rounded-lg' />
          </div>
          <div className='flex flex-col gap-1'>
            <div className='flex flex-col'>
              <label >Password</label>
              <input type="text" className='hover:outline-none  p-3 shadow-md rounded-lg' />
            </div>
            {login && <Link className='text-sm text-blue-500'>Forgot password? </Link>}

          </div>
          <div className='flex flex-col gap-3 my-8'>
            <button className='w-full uppercase p-3 rounded-lg  bg-green-900 text-white hover:opacity-90'>
              send
            </button>
            <button className='w-full uppercase bg-red-700 p-3 rounded-lg text-white hover:opacity-90'>
              Login with Google
            </button>
          </div>
        </form>
      </Card>
    </section>
  )
}

export default Sign_up_in