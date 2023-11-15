import { useEffect, useState } from "react";
import {
  Button,
  IconButton,
  Collapse,
  Dialog,
} from "@material-tailwind/react";

import { CgProfile } from "react-icons/cg"
import { BsFillCartCheckFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux'
import { logoutSuccess, logoutFailure, logoutStart } from "../redux/authSlice";
import { toast } from "react-toastify";
import LoadingSpinner from "./LoadingSpinner";
import logo from "../assets/food-delivery-logo.jpg"
import { BiEdit, BiLogOut } from "react-icons/bi";

import { BASE_URL } from "../baseurl"
import Sign_up_in from "../pages/Sign_up_in";

export function Header() {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  const { currentUser, loading } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [profile, setProfile] = useState(false)

  const [openNav, setOpenNav] = useState(false);

  const handleLogout = async () => {
    dispatch(logoutStart())
    try {
      await axios.post(`${BASE_URL}/auth/logout`)
      navigate("/")
      dispatch(logoutSuccess())
      toast("Logout success", { autoClose: 1000 })
    } catch (error) {
      console.log(error)
      dispatch(logoutFailure(error?.response?.data?.message))
    } finally {
      closeDrawer()
    }
  }

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);



  return (
    <div className="w-full h-max sticky top-0 z-50  rounded-none shadow-none bg-white px-4 py-2 lg:px-12 lg:py-4">
      <div className="flex items-center justify-between text-blue-gray-900">
        {/* Header logo */}
        <Link to={"/"}>
          <img src={logo} alt="" className="w-24 h-12" />
        </Link>

        {/* nav list  */}
        <nav className="hidden lg:block items-center justify-between text-md">
          <ul className="flex gap-4">
            <li>
              <a
                href="#home"
                className={`px-3 py-2 rounded-md active:text-red-400`}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className={`px-3 py-2 rounded-md active:text-red-400`}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className={`px-3 py-2 rounded-md active:text-red-400`}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {currentUser ? currentUser.role === "admin"
          ? <Link to={"/dashboard"} className="flex text-sm font-bold">
            Admin
          </Link>
          : currentUser.role === "delivery"
            ? <Link to={"/delivery/dashboard"} className="flex text-sm font-bold">
              Delivery
            </Link>
            : (
              <div className="hidden lg:flex text-xl px-5 items-center justify-end gap-3 relative">
                <Link to={"/mycart"}>
                  <BsFillCartCheckFill className=" text-gray-900" />
                </Link>
                <button onClick={() => setProfile(!profile)}
                >
                  <CgProfile />
                </button>
                <div className={`${profile ? "block" : "hidden"} flex flex-col justify-center px-2 gap-3  absolute right-0 top-5 bg-white shadow-2xl h-[7rem] w-[15rem] `}>
                  <Link className='flex gap-3 items-center text-sm font-normal text-gray-600 px-3 hover:opacity-70'>
                    <BiEdit className='text-orange-600 text-lg' />
                    Update Profile
                  </Link>
                  <div className='w-full border-b-2 border-gray-300' />
                  <button disabled={loading} className='flex gap-3 items-center text-sm font-normal text-gray-600 px-3 hover:opacity-70'>
                    <BiLogOut className='text-red-600 text-lg' />
                    <span onClick={() => handleLogout()} >
                      {loading ? <LoadingSpinner size={20} color={'#4299e1'} /> : "Logout"}
                    </span>
                  </button>

                </div>
              </div>
            ) : (
          <div className="flex items-center gap-x-1 text-md">

            <Button onClick={handleOpen}
              variant="text"
              size="sm"
              className="hidden lg:inline-block">
              Log In
            </Button>
            <Dialog open={open} handler={handleOpen} className="w-fit h-fit p-5">
              <Sign_up_in />
            </Dialog>
          </div>
        )
        }

        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>


      {/* ----------- mobile view ------------------ */}
      <Collapse open={openNav}>
        <div className="flex flex-col justify-between p-3 gap-5">
          <ul className="flex flex-col gap-3 text-md">
            <li>
              <a
                href="#"
                className={`px-3 py-2 rounded-md  active:text-red-400 `}
                onClick={() => handleLinkClick(1)}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`px-3 py-2 rounded-md  active:text-red-400 `}
                onClick={() => handleLinkClick(2)}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`px-3 py-2 rounded-md  active:text-red-400 `}
                onClick={() => handleLinkClick(3)}
              >
                Contact
              </a>
            </li>
          </ul>
          {currentUser ? (
            <div className="flex lg:hidden text-xl px-5 items-center justify-end gap-3 relative">
              <Link to={"/mycart"}>
                <BsFillCartCheckFill className=" text-gray-900" />
              </Link>
              <button onClick={() => setProfile(!profile)}
              >
                <CgProfile />
              </button>
              <div className={`${profile ? "block" : "hidden"} flex flex-col justify-center px-2 gap-3  absolute right-0 -top-32 bg-white shadow-2xl h-[7rem] w-[15rem] `}>
                <Link className='flex gap-3 items-center text-sm font-normal text-gray-600 px-3 hover:opacity-70'>
                  <BiEdit className='text-orange-600 text-lg' />
                  Update Profile
                </Link>
                <div className='w-full border-b-2 border-gray-300' />
                <button disabled={loading} className='flex gap-3 items-center text-sm font-normal text-gray-600 px-3 hover:opacity-70'>
                  <BiLogOut className='text-red-600 text-lg' />
                  <span onClick={() => handleLogout()} >
                    {loading ? <LoadingSpinner size={20} color={'#4299e1'} /> : "Logout"}
                  </span>
                </button>

              </div>
            </div>
          ) : (
            <div className="flex justify-end gap-x-1 text-md">
              <Button onClick={handleOpen}
                variant="gradient"
                size="sm"
                className="block lg:hidden">
                Log In
              </Button>
              <Dialog open={open} handler={handleOpen} className="w-fit h-fit p-5">
                <Sign_up_in open={open} setOpen={setOpen} />
              </Dialog>
            </div>
          )
          }
        </div>
      </Collapse>
    </div>
  );
}
export default Header