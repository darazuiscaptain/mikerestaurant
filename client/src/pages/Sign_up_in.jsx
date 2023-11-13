import { Card } from '@material-tailwind/react'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"
import Oauth from '../components/Oauth'
import { useDispatch, useSelector } from 'react-redux'
import { reload, signInStart, signInSuccess, signInFailure, signUpSuccess, signUpFailure } from '../redux/authSlice'
import { toast } from 'react-toastify'



const initialValue = {
  username: "",
  email: "",
  password: ""
}

function Sign_up_in() {
  const [login, setLogin] = useState(true)
  const [user, setUser] = useState(initialValue)

  const { error, loading } = useSelector((state) => state.auth)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleChange = async (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const { username, email, password } = user

  const handleSubmit = async (e) => {
    e.preventDefault()
    dispatch(signInStart())
    if (login) {
      if (email === "" || password === "") {
        toast.error("Fields are required!", { autoClose: 1500 })
        dispatch(reload())
      } else {
        try {
          dispatch(signInStart())
          const result = await axios.post(`/api/auth/login`, user)
          console.log(result)
          if (result.status === 200) {
            toast.success("Login success", { autoClose: 1500 })
            dispatch(signInSuccess(result.data))
            setUser(() => initialValue)
            if (result.data.role === "admin") navigate("/dashboard")
            else if (result.data.role === "delivery") navigate("/")
            else if (result.data.role === "customer") navigate("/")
          } else {
            dispatch(signInFailure(result.data))
          }
        } catch (error) {
          console.log(error)
          if (error.response) {
            // Handle specific error codes
            if (error.response.status === 409) {
              dispatch(signInFailure(error.response.data))
            } else if (error.response.status === 400) {
              dispatch(signInFailure(error.response.data.errors[0].message))
            } else {
              dispatch(signInFailure(error.response.data.message))
            }
          } else {
            console.error('Network error:', error);
          }
        }
      }
    } else {
      if (username === "" || email === "" || password === "") {
        toast.error("Fields are required!", { autoClose: 1500 })
        dispatch(reload())
      } else {
        try {
          dispatch(signInStart())
          const result = await axios.post(`/api/auth/register`, user)
          if (result.status === 201) {
            toast.success("Register and login success")
            dispatch(signUpSuccess(result.data))
            setUser(() => initialValue)
            if (result.data.role === "admin") return navigate("/dashboard")
            else if (result.data.role === "delivery") return navigate("/")
            else if (result.data.role === "customer") return navigate("/")
          }
        } catch (error) {
          if (error.response) {
            // Handle specific error codes
            if (error.response.status === 400) {
              dispatch(signUpFailure(error.response.data.errors[0].message))
            } else {
              dispatch(signUpFailure(error.response.data))
            }
          } else {
            console.error('Network error:', error);
          }
        }
      }
    }
  }

  useEffect(() => {
    dispatch(reload())
    setUser(initialValue)
  }, [login])

  useEffect(() => {
    toast.error(error)
  }, [error])

  return (
    <section className='flex flex-col justify-center gap-5 w-full max-w-[500px] mx-auto mt-0'>
      <div className='flex sm:hidden overflow-hidden h-[15rem] relative'>
        <div
          className='h-[520px] w-[320px] rounded-full bg-gradient-to-r from-[rgb(208,214,216)] to-[#4b8ec9] z-30 opacity-95 absolute -top-[320px] -left-[105px] rotate-12' />
        <div
          className='h-[470px] w-[460px] rounded-full bg-gradient-to-r from-[#e4541b] to-[#d069ef] z-10 opacity-70 absolute -top-[230px] -left-[160px] rotate-45' />
        <div
          className='h-[500px] w-[450px] rounded-full bg-gradient-to-r from-[#8289bc] to-[#165b8f] z-20 opacity-80 absolute -top-[290px] left-[100px] rotate-3' />
        <span className='text-2xl font-bold absolute top-[60px] left-[90px] border-2 rotate-6 p-1 z-40 text-white'>M</span>
      </div>
      <Card className='flex flex-col justify-between px-5 sm:px-12 sm:my-12'>
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

        <form className='flex flex-col w-full h-full gap-2 my-3' onSubmit={handleSubmit}>
          {!login && <div className='flex flex-col'>
            <label >Username</label>
            <input
              type="text"
              name='username'
              value={username}
              className='hover:outline-none  focus:outline-none p-[6px] border-[0.7px] border-gray-400'
              onChange={handleChange} />
          </div>}


          <div className='flex flex-col'>
            <label >Email</label>
            <input
              type="text"
              name='email'
              value={email}
              className='hover:outline-none  focus:outline-none p-[6px] border-[0.7px] border-gray-400'
              onChange={handleChange} />
          </div>
          <div className='flex flex-col gap-1'>
            <div className='flex flex-col'>
              <label >Password</label>
              <input
                type="password"
                name='password'
                value={password}
                minLength={6}
                className='hover:outline-none  focus:outline-none p-[6px] border-[0.7px] border-gray-400'
                onChange={handleChange} />
            </div>
            {login && <Link to={"forget"} className='text-sm text-blue-500'>Forgot password? </Link>}

          </div>
          <div className='flex flex-col gap-3 my-4'>
            <button
              type='submit'
              className='w-full uppercase p-[5px] bg-teal-400 text-white hover:opacity-90'>
              {loading ? "loading" : (login ? "Login" : "Register")}
            </button>

            {/* =========== Signup with google ================ */}
            {/* <Oauth loading={loading} /> */}
          </div>
        </form>
      </Card>
    </section>
  )
}

export default Sign_up_in