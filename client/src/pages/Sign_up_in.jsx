import { Card } from '@material-tailwind/react'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"

const BASE_URL = "http://localhost:5000/api/v1/auth"
const initialValue = {
  username: "",
  email: "",
  password: ""
}

function Sign_up_in() {
  const [login, setLogin] = useState(true)
  const [user, setUser] = useState(initialValue)
  const [error, setError] = useState(null)

  const navigate = useNavigate()

  const handleChange = async (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const { username, email, password } = user

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (login) {
      if (email === "" || password === "") {
        alert("All fields are required!")
      } else {}
    } else {
      if (username === "" || email === "" || password === "") {
        alert("All fields are required!")
      } else {
        try {
          const data = await axios.post(`${BASE_URL}/register`, user)
          console.log(data)
          navigate("/")
        } catch (error) {
          setError(error.message)
        }
      }
      setUser(() => initialValue)
      setTimeout(() => {
        setError("")
      }, 4000)
    }
  }

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
        <form className='flex flex-col w-full h-full gap-3 my-8' onSubmit={handleSubmit}>
          {error && (
            <p className='px-4 p-2 rounded-md bg-red-100 text-red-400 text-sm'>{error}</p>
          )}
          {!login && <div className='flex flex-col'>
            <label >Username</label>
            <input
              type="text"
              name='username'
              value={username}
              className='hover:outline-none  p-3 shadow-md rounded-lg' required
              onChange={handleChange} />
          </div>}


          <div className='flex flex-col'>
            <label >Email</label>
            <input
              type="text"
              name='email'
              value={email}
              className='hover:outline-none  p-3 shadow-md rounded-lg' required
              onChange={handleChange} />
          </div>
          <div className='flex flex-col gap-1'>
            <div className='flex flex-col'>
              <label >Password</label>
              <input
                type="password"
                name='password'
                value={password}
                className='hover:outline-none  p-3 shadow-md rounded-lg' required
                onChange={handleChange} />
            </div>
            {login && <Link className='text-sm text-blue-500'>Forgot password? </Link>}

          </div>
          <div className='flex flex-col gap-3 my-8'>
            <button
              type='submit'
              className='w-full uppercase p-3 rounded-lg bg-gradient-to-r from-[#f73909] to-[#1205d3] text-white hover:opacity-90'>
              {login ? "Login" : "Register"}
            </button>

            {/* =========== Signup with google ================ */}
            {/* <GoogleLogin
              className='w-full uppercase p-3 rounded-lg cursor-pointer'
              clientId={"745614203657-1dp76p21fcojep5c4bft974r1qhjsjtk.apps.googleusercontent.com"}
              buttonText="Login with Google"
              onSuccess={handleLogin}
              onFailure={handleLogin}
            /> */}

            {/* <button className='w-full uppercase bg-gradient-to-r from-[#c0146a] to-[#36cd08] p-3 rounded-lg text-white hover:opacity-90'>
              Login with Google
            </button> */}
          </div>
        </form>
      </Card>
    </section>
  )
}

export default Sign_up_in