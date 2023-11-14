import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from "axios"

import { AiOutlineSearch } from 'react-icons/ai'
import { HiOutlineSelector } from 'react-icons/hi'
import { BiLogOut, BiEdit } from 'react-icons/bi'

import { useDispatch, useSelector } from 'react-redux'
import { logoutFailure, logoutStart, logoutSuccess } from '../../../redux/authSlice'
import LoadingSpinner from '../../../components/LoadingSpinner'
import { BASE_URL } from "../../../baseurl"

const NavBar = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { currentUser, loading } = useSelector((state) => state.auth)

    const [profile, setProfile] = useState(false)

    const handleLogout = async () => {
        dispatch(logoutStart())
        try {
            await axios.post(`${BASE_URL}/auth/logout`)
            navigate("/")
            dispatch(logoutSuccess())
            toast("Logout success", { autoClose: 1200 })
        } catch (error) {
            dispatch(logoutFailure(error?.response?.data?.message))
            toast.error(error)
        } finally {
            setProfile(!profile)
        }
    }

    return (
        <div className='flex h-[4rem] bg-white p-3 relative w-full'>
            <div className='flex flex-1 justify-around items-center'>
                {/*  */}
                <div className='flex gap-0 justify-center '>
                    <div className='flex gap-3 relative border-[1px]'>
                        <AiOutlineSearch className="absolute top-[0.6rem] left-2 text-xs text-gray-500" />
                        <input
                            className='w-[10rem] py-2 px-6 text-xs focus:outline-none hover:outline-none border-none'
                            type="text"
                            placeholder="Search.."
                        />
                    </div>
                    <button className='px-3 bg-blue-600 text-xs text-white font-light'>Search</button>
                </div>
            </div>
            <div className='flex justify-end flex-1 pr-8'>
                <div className='flex gap-3 items-center justify-around'>
                    <img src={currentUser?.photo} alt="" className='w-8 h-8 rounded-full' />
                    <div className='flex gap-2 items-center'>
                        <span className='capitalize text-blue-gray-700'>{currentUser?.username}</span>
                        <div className="cursor-pointer" onClick={() => setProfile(!profile)}>
                            <HiOutlineSelector />
                        </div>
                    </div>
                    {/* Admin Profile */}
                    <div className={`${profile ? "block" : "hidden"} flex flex-col justify-center px-2 gap-3  absolute right-0 top-[4.5rem] bg-white shadow-2xl h-[7rem] w-[15rem] `}>
                        <Link className='flex gap-3 items-center text-sm font-normal text-gray-600 px-3 hover:opacity-70'>
                            <BiEdit className='text-orange-600 text-lg' />
                            Update Profile
                        </Link>
                        <div className='w-full border-b-2 border-gray-300' />
                        <button disabled={loading} className='flex gap-3 items-center text-sm font-normal text-gray-600 px-3 hover:opacity-70'>
                            <BiLogOut className='text-red-600 text-lg' />
                            <span onClick={() => handleLogout()} >
                            {loading ? <LoadingSpinner size={20} color={'#4299e1'} /> : "Logout" }
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar