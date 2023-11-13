import { Fragment, useState } from "react";
import {
  Drawer,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { BiHomeAlt, BiMenuAltLeft, BiPhoneCall } from "react-icons/bi"
import Logo from "./Logo"
import { BsInfoLg, BsFillCartCheckFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector, useDispatch } from 'react-redux'
import { logoutSuccess, logoutFailure, logoutStart } from "../redux/authSlice";
import { toast } from "react-toastify";
import LoadingSpinner from "./LoadingSpinner";



function Header() {
  
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { currentUser, loading } = useSelector((state) => state.auth)

  const [open, setOpen] = useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);


  const handleLogin = () => {
    closeDrawer()
    navigate("/sign_up_in")
  }

  const handleLogout = async () => {
    dispatch(logoutStart())
    try {
      await axios.post(`/api/auth/logout`)
      navigate("/")
      dispatch(logoutSuccess())
      toast("Logout success", { autoClose: 1200 })
    } catch (error) {
      dispatch(logoutFailure(error?.response?.data?.message))
    } finally {
      closeDrawer()
    }
  }

  const manageProfile = () => {
    if (currentUser) {
      navigate("/profile/me")
      closeDrawer()
    } else {
      toast("something err Refresh the page")
    }
  }

  return (
    <div className="px-5 pt-4 py-2">
      <header className='flex justify-between flex-row-reverse lg:flex-row'>
        <h1 className='text-3xl md:text-5xl font-bold cursor-pointer'>
          <Logo />
        </h1>
        <ul className='hidden lg:flex gap-12 items-center justify-center'>
          <div className="flex gap-3">
            <Link to="/" className='hover:underline cursor-pointer text_gradient_a text-sx'>
              Home
            </Link>
            <Link to="/contact" className='hover:underline cursor-pointer text_gradient_a text-sx'>
              Contact Us
            </Link>
            <Link to="/about" className='hover:underline cursor-pointer text_gradient_a text-sx'>
              About Us
            </Link>
          </div>
          {
            currentUser ? (
              <div className="flex flex-row items-center gap-3">
                <Link to={"/mycart"}>
                  <BsFillCartCheckFill className="text-md text-teal-900" />
                </Link>
                <div onClick={manageProfile}>
                  <img
                    src={currentUser.photo}
                    alt={currentUser.username}
                    className="h-8 w-8 rounded-full cursor-pointer" />
                </div>
                <button
                  onClick={handleLogout}
                  className='p-1 px-2 text-xs rounded-lg bg-red-400 text-white hover:opacity-90'>
                  {loading ? <LoadingSpinner size={20} color={"#fff"} /> : "Logout" }
                </button>
              </div>
            ) : (
              <button
                onClick={handleLogin}
                className='p-1 px-5 rounded-full bg-teal-400 text-white hover:opacity-90'>
                {loading ? <LoadingSpinner size={20} color={"#fff"} /> : "Login" }
              </button>
            )
          }
        </ul>

        {/* ==================== Mobile Menu ====================== */}

        <div className='flex lg:hidden'>
          <Fragment>
            <div onClick={openDrawer} className="bg-white border-none shadow-none">
              <div className="text-gray-700 text-4xl cursor-pointer">
                <BiMenuAltLeft />
              </div>
            </div>
            <Drawer open={open} onClose={closeDrawer} placement="right">
              <div className="mb-2 flex items-center justify-between p-4">
                <Typography variant="h5" color="blue-gray">
                  <Logo />
                </Typography>
                <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </IconButton>
              </div>
              <div className="flex flex-col justify-between h-96 my-12">
                <div>
                  <ul className='flex flex-col gap-2 '>
                    <Link to="/" onClick={closeDrawer} className="flex gap-3 items-center p-3 mx-2 text-lg rounded-lg cursor-pointer hover:bg-gray-100 text-teal-700">
                      <span><BiHomeAlt /></span> Home
                    </Link>
                    <Link to="contact" onClick={closeDrawer} className="flex gap-3 items-center p-3 mx-2 text-lg rounded-lg cursor-pointer hover:bg-gray-100 text-teal-700">
                      <span><BiPhoneCall /></span> Contact Us
                    </Link>
                    <Link to="about" onClick={closeDrawer} className="flex gap-3 items-center p-3 mx-2 text-lg rounded-lg cursor-pointer hover:bg-gray-100 text-teal-700">
                      <span><BsInfoLg /></span> About Us
                    </Link>
                  </ul>
                </div>
                {currentUser && (
                  <div className="w-full flex gap-5 justify-center items-center">
                    <Link to={"/mycart"}>
                      <BsFillCartCheckFill className="text-xl text-teal-900" />
                    </Link>
                    <div onClick={manageProfile} >
                      <img
                        src={currentUser.photo}
                        alt={currentUser.username}
                        className="h-12 w-12 rounded-full cursor-pointer" />
                    </div>
                  </div>
                )}
                <div className="flex gap-6 justify-center">
                  {
                    currentUser ? (
                      <div className="flex flex-row justify-between w-full px-5 items-center">
                        <button
                          onClick={handleLogout}
                          className='p-1 px-3 rounded-lg bg-red-400 text-white hover:opacity-90'>
                          {loading ? <LoadingSpinner size={20} color={"#fff"} /> : "Login" }
                        </button>

                      </div>
                    ) : (
                      <button
                        onClick={handleLogin}
                        className='p-1 px-3 rounded-lg bg-teal-600 text-white hover:opacity-90'>
                        {loading ? <LoadingSpinner size={20} color={"#fff"} /> : "Login" }
                      </button>
                    )
                  }
                </div>
              </div>
            </Drawer>
          </Fragment>
        </div>
      </header>
    </div>

  )
}

export default Header