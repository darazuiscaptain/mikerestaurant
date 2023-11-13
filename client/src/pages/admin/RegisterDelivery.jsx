import React, { useEffect, useState } from 'react'
import Sidebar from './component/Sidebar'
import NavBar from './component/NavBar'
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import { signInStart, reload, signUpFailure, exit } from '../../redux/authSlice'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { FaAngleDoubleRight } from 'react-icons/fa'

const initialValue = {
    username: "",
    email: "",
    password: "",
    role: "delivery"
}

const BASE_URL = "https://mern-restaurant-5rre.onrender.com"

const RegisterDelivery = () => {
    const { error, loading } = useSelector((state) => state.auth)

    const [user, setUser] = useState(initialValue)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleChange = async (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }
    const { username, email, password } = user

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (username === "" || email === "" || password === "") {
            toast.error("Fields are required!", { autoClose: 1500 })
            dispatch(reload())
        } else {
            try {
                dispatch(signInStart())
                const result = await axios.post(`${BASE_URL}/auth/register`, user)
                dispatch(signUpFailure(result.data))
                if (result.status === 201) {
                    toast.success("Register success")
                    dispatch(exit())
                    setUser(() => initialValue)
                    navigate("/delivery")
                }
            } catch (error) {
                console.log(error)
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

    useEffect(() => {
        toast.error(error)
    }, [error])

    return (
        <div id="dashboard" className='flex w-full h-full'>
            <div id="sidebar">
                <Sidebar />
            </div>
            <div id="customers" className='flex flex-col gap-5 flex-1 bg-blue-gray-50 p-5'>
                <NavBar />
                <div className='flex flex-col w-full bg-white p-5'>
                    <div className='text-md text-gray-700 flex justify-between'>
                        <h2 className='text-md text-gray-700 flex items-center gap-3'>
                            <Link to={"/delivery"}>
                                Deliveries
                            </Link>
                            <FaAngleDoubleRight />
                            <span className='text-sm text-gray-500'>
                                register delivery
                            </span>
                        </h2>
                        <button className='text-xs bg-teal-500 text-white hover:opacity-80 rounded-md shadow-lg p-2'>
                            Add Delivery
                        </button>
                    </div>
                </div>
                {/* Registration section */}
                <div className='bg-white w-full flex justify-center'>
                    <form className='flex flex-col h-full gap-4 my-5 w-1/3' onSubmit={handleSubmit}>
                        <h2 className='text-center text-lg text-gray-900'>Delivery Registration</h2>
                        <div className='flex flex-col gap-1'>
                            <label className='text-gray-600 text-xs'>Username</label>
                            <input
                                type="text"
                                name='username'
                                value={username}
                                className='hover:outline-none  focus:outline-none p-[1px] px-3 border-[0.7px] border-gray-400'
                                onChange={handleChange} />
                        </div>

                        <div className='flex flex-col gap-1'>
                            <label className='text-gray-600 text-xs'>Email</label>
                            <input
                                type="text"
                                name='email'
                                value={email}
                                className='hover:outline-none text-gray-700 focus:outline-none p-[1px] px-3 border-[0.7px] border-gray-400'
                                onChange={handleChange} />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <div className='flex flex-col gap-1'>
                                <label className='text-gray-600 text-xs'>Password</label>
                                <input
                                    type="password"
                                    name='password'
                                    value={password}
                                    minLength={6}
                                    className='hover:outline-none  focus:outline-none p-[1px] px-3 border-[0.7px] border-gray-400'
                                    onChange={handleChange} />
                            </div>

                        </div>
                        <div className='flex flex-col gap-3 my-4'>
                            <button
                                type='submit'
                                className='w-full uppercase p-[5px] bg-teal-400 text-white hover:opacity-90'>
                                {loading ? "loading" : "Register"}
                            </button>

                            {/* =========== Signup with google ================ */}
                            {/* <Oauth loading={loading} /> */}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default RegisterDelivery