import { Fragment, useState } from "react";
import {
  Drawer,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { BiHomeAlt, BiMenuAltRight, BiPhoneCall } from "react-icons/bi"
import Logo from "./Logo"
import { BsInfoLg } from "react-icons/bs";
import { Link } from "react-router-dom";

function Header() {

  const [open, setOpen] = useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  const [user, setUser] = useState(true)
  const handleLogout = () => {}

  return (
    <header className='flex justify-between mb-8 px-5 lg:px-24 w-full bg-white sticky top-0 py-5 z-50'>
      <h1 className='text-3xl md:text-5xl font-bold cursor-pointer'>
        <Logo />
      </h1>
      <ul className='hidden md:flex gap-5 items-center justify-center'>
        <Link to="/" className='hover:underline cursor-pointer text_gradient_a'>
          Home
        </Link>
        <Link to="contact" className='hover:underline cursor-pointer text_gradient_a'>
          Contact Us
        </Link>
        <Link to="about" className='hover:underline cursor-pointer text_gradient_a'>
          About Us
        </Link>
        {
          user ? (
            <button
              onClick={handleLogout}
              className='p-1 px-3 rounded-lg bg-red-400 text-white hover:opacity-90'>
              Logout
            </button>
          ) : (
            <Link to={"/sign_up_in"} className='p-1 px-3 rounded-lg bg-teal-600 text-white hover:opacity-90'>
              Login
            </Link>
          )
        }
      </ul>

      {/* ==================== Mobile Menu ====================== */}

      <div className='flex md:hidden'>
        <Fragment>
          <div onClick={openDrawer} className="bg-white border-none shadow-none">
            <div className="text-gray-700 text-4xl cursor-pointer">
              <BiMenuAltRight />
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
              <div className="flex gap-6 justify-center">
                {
                  user ? (
                    <button
                      onClick={handleLogout}
                      className='p-1 px-3 rounded-lg bg-red-400 text-white hover:opacity-90'>
                      Logout
                    </button>
                  ) : (
                    <Link to={"/sign_up_in"} className='p-1 px-3 rounded-lg bg-teal-600 text-white hover:opacity-90'>
                      Login
                    </Link>
                  )
                }
              </div>
            </div>
          </Drawer>
        </Fragment>
      </div>
    </header >
  )
}

export default Header