import { Fragment, useState } from "react";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { BiHomeAlt, BiMenuAltRight,  BiPhoneCall } from "react-icons/bi"
import Logo from "./Logo"
import { BsInfoLg } from "react-icons/bs";

function Header() {

  const [open, setOpen] = useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);


  return (
    <header className='flex justify-between mb-8 px-5 sm:px-20 w-full bg-white sticky top-0 py-5 z-99'>
      <h1 className='text-3xl md:text-5xl font-bold cursor-pointer'>
        <Logo />
      </h1>
      <ul className='hidden md:flex gap-5 items-center justify-center'>
        <li className='hover:underline cursor-pointer text_gradient_a'>Home</li>
        <li className='hover:underline cursor-pointer text_gradient_a'>Contact Us</li>
        <li className='hover:underline cursor-pointer text_gradient_a'>About Us</li>
        <button className='p-1 px-3 rounded-lg bg-blue-gray-900 text-white hover:opacity-90'>Sign In</button>
        <button className='p-1 px-3 rounded-lg bg-blue-900 text-white hover:opacity-90'>Sign Up</button>
      </ul>
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
                  <li className="flex gap-3 items-center p-3 mx-2 text-lg rounded-lg cursor-pointer hover:bg-gray-100 text-teal-700">
                    <span><BiHomeAlt /></span> Home
                  </li>
                  <li className="flex gap-3 items-center p-3 mx-2 text-lg rounded-lg cursor-pointer hover:bg-gray-100 text-teal-700">
                    <span><BiPhoneCall /></span> Contact Us
                  </li>
                  <li className="flex gap-3 items-center p-3 mx-2 text-lg rounded-lg cursor-pointer hover:bg-gray-100 text-teal-700">
                    <span><BsInfoLg /></span> About Us
                  </li>
                </ul>
              </div>
              <div>
                <Button className="mt-3 ml-5 hover:opacity-90" size="sm">
                  Sign In
                </Button>
                <Button className="mt-3 ml-5 bg-blue-900 hover:opacity-90" size="sm">
                  Sign Up
                </Button>
              </div>
            </div>
          </Drawer>
        </Fragment>
      </div>
    </header>
  )
}

export default Header