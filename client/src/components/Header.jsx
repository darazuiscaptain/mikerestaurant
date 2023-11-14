import { Fragment, useEffect, useState } from "react";
import {
  MobileNav,
  Button,
  IconButton,
  Collapse,
} from "@material-tailwind/react";

import { CgProfile } from "react-icons/cg"
import {  BsFillCartCheckFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import axios from "axios";
import { useSelector } from 'react-redux'
import { logoutSuccess, logoutFailure, logoutStart } from "../redux/authSlice";
import { toast } from "react-toastify";
import LoadingSpinner from "./LoadingSpinner";
import logo from "../assets/food-delivery-logo.jpg"
import { BASE_URL } from "../baseurl"

export function Header() {
  const { currentUser, loading } = useSelector((state) => state.auth)

  const [openNav, setOpenNav] = useState(false);
  const [activeAnchor, setActiveAnchor] = useState(1); // Assuming links are indexed from 1

  const handleLinkClick = (linkIndex) => {
    setActiveAnchor(linkIndex); // Update active anchor state on link click
  }

  const handleLogout = async () => {
    dispatch(logoutStart())
    try {
      await axios.post(`${BASE_URL}/auth/logout`)
      navigate("/")
      dispatch(logoutSuccess())
      toast("Logout success", { autoClose: 1200 })
    } catch (error) {
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
                href="#"
                className={`px-3 py-2 rounded-md ${activeAnchor === 1 ? 'active:text-red-400' : ''}`}
                onClick={() => handleLinkClick(1)}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`px-3 py-2 rounded-md ${activeAnchor === 2 ? 'active:text-red-400' : ''}`}
                onClick={() => handleLinkClick(2)}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`px-3 py-2 rounded-md ${activeAnchor === 3 ? 'active:text-red-400' : ''}`}
                onClick={() => handleLinkClick(3)}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        { currentUser ? (
            <div className="flex flex-row text-md items-center justify-end gap-3">
              <Link to={"/mycart"}>
                <BsFillCartCheckFill className=" text-gray-900" />
              </Link>
              <button
                onClick={handleLogout}
                className='text-lg text-black'>
                {loading
                  ? <LoadingSpinner size={20} color={"#fff"} />
                  : <CgProfile />}
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-x-1 text-md">
              <Button
                variant="text"
                size="sm"
                className="hidden lg:inline-block"
              >
                <span>Log In</span>
              </Button>
              <Button
                variant="gradient"
                size="sm"
                className="hidden lg:inline-block"
              >
                <span>Sign in</span>
              </Button>
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
                className={`px-3 py-2 rounded-md ${activeAnchor === 1 ? 'active:text-red-400' : ''}`}
                onClick={() => handleLinkClick(1)}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`px-3 py-2 rounded-md ${activeAnchor === 2 ? 'active:text-red-400' : ''}`}
                onClick={() => handleLinkClick(2)}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`px-3 py-2 rounded-md ${activeAnchor === 3 ? 'active:text-red-400' : ''}`}
                onClick={() => handleLinkClick(3)}
              >
                Contact
              </a>
            </li>
          </ul>
          <div className="flex justify-around">
            <Button fullWidth variant="text" size="sm" className="">
              <span>Log In</span>
            </Button>
            <Button fullWidth variant="gradient" size="sm" className="">
              <span>Sign in</span>
            </Button>
          </div>
        </div>
      </Collapse>
    </div>
  );
}
export default Header

// function Header() {

//   const navigate = useNavigate()
//   const dispatch = useDispatch()

//   const [open, setOpen] = useState(false);
//   const openDrawer = () => setOpen(true);
//   const closeDrawer = () => setOpen(false);


//   const handleLogin = () => {
//     closeDrawer()
//     navigate("/sign_up_in")
//   }

  

//   const manageProfile = () => {
//     if (currentUser) {
//       navigate("/profile/me")
//       closeDrawer()
//     } else {
//       toast("something err Refresh the page")
//     }
//   }

//   return (
//     <div className="px-5 md:px-12 lg:px-24  py-4 sticky top-0 bg-white z-50">
//       <header className='flex justify-between flex-row-reverse lg:flex-row'>
//         <h1 className='text-3xl md:text-5xl font-bold cursor-pointer'>
//           <Logo />
//         </h1>
//         <ul className='hidden lg:flex gap-12 items-center justify-center'>
//           <div className="flex gap-3">
//             <Link to="/" className='hover:underline cursor-pointer text_gradient_a text-sx'>
//               Home
//             </Link>
//             <Link to="/contact" className='hover:underline cursor-pointer text_gradient_a text-sx'>
//               Contact Us
//             </Link>
//             <Link to="/about" className='hover:underline cursor-pointer text_gradient_a text-sx'>
//               About Us
//             </Link>
//           </div>
//           {
//             currentUser ? (
//               <div className="flex flex-row items-center gap-3">
//                 <Link to={"/mycart"}>
//                   <BsFillCartCheckFill className="text-md text-teal-900" />
//                 </Link>
//                 {/* <div onClick={manageProfile}>
//                   <img
//                     src={currentUser.photo}
//                     alt={currentUser.username}
//                     className="h-8 w-8 rounded-full cursor-pointer" />
//                 </div> */}
//                 <button
//                   onClick={handleLogout}
//                   className='text-lg text-black'>
//                   {loading 
//                   ? <LoadingSpinner size={20} color={"#fff"} /> 
//                   : <CgProfile /> }
//                 </button>
//               </div>
//             ) : (
//               <button
//                 onClick={handleLogin}
//                 className='p-1 px-5 rounded-full bg-teal-400 text-white hover:opacity-90'>
//                 {loading ? <LoadingSpinner size={20} color={"#fff"} /> : "Login" }
//               </button>
//             )
//           }
//         </ul>

//         {/* ==================== Mobile Menu ====================== */}

//         <div className='flex lg:hidden'>
//           <Fragment>
//             <div onClick={openDrawer} className="bg-white border-none shadow-none">
//               <div className="text-gray-700 text-4xl cursor-pointer">
//                 <BiMenuAltLeft />
//               </div>
//             </div>
//             <Drawer open={open} onClose={closeDrawer} placement="right">
//               <div className="mb-2 flex items-center justify-between p-4">
//                 <Typography variant="h5" color="blue-gray">
//                   <Logo />
//                 </Typography>
//                 <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth={2}
//                     stroke="currentColor"
//                     className="h-5 w-5"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M6 18L18 6M6 6l12 12"
//                     />
//                   </svg>
//                 </IconButton>
//               </div>
//               <div className="flex flex-col justify-between h-96 my-12">
//                 <div>
//                   <ul className='flex flex-col gap-2 '>
//                     <Link to="/" onClick={closeDrawer} className="flex gap-3 items-center p-3 mx-2 text-lg rounded-lg cursor-pointer hover:bg-gray-100 text-teal-700">
//                       <span><BiHomeAlt /></span> Home
//                     </Link>
//                     <Link to="contact" onClick={closeDrawer} className="flex gap-3 items-center p-3 mx-2 text-lg rounded-lg cursor-pointer hover:bg-gray-100 text-teal-700">
//                       <span><BiPhoneCall /></span> Contact Us
//                     </Link>
//                     <Link to="about" onClick={closeDrawer} className="flex gap-3 items-center p-3 mx-2 text-lg rounded-lg cursor-pointer hover:bg-gray-100 text-teal-700">
//                       <span><BsInfoLg /></span> About Us
//                     </Link>
//                   </ul>
//                 </div>
//                 {currentUser && (
//                   <div className="w-full flex gap-5 justify-center items-center">
//                     <Link to={"/mycart"}>
//                       <BsFillCartCheckFill className="text-xl text-teal-900" />
//                     </Link>
//                     <div onClick={manageProfile} >
//                       <img
//                         src={currentUser.photo}
//                         alt={currentUser.username}
//                         className="h-12 w-12 rounded-full cursor-pointer" />
//                     </div>
//                   </div>
//                 )}
//                 <div className="flex gap-6 justify-center">
//                   {
//                     currentUser ? (
//                       <div className="flex flex-row justify-between w-full px-5 items-center">
//                         <button
//                           onClick={handleLogout}
//                           className='p-1 px-3 rounded-lg bg-red-400 text-white hover:opacity-90'>
//                           {loading ? <LoadingSpinner size={20} color={"#fff"} /> : "Login" }
//                         </button>

//                       </div>
//                     ) : (
//                       <button
//                         onClick={handleLogin}
//                         className='p-1 px-3 rounded-lg bg-teal-600 text-white hover:opacity-90'>
//                         {loading ? <LoadingSpinner size={20} color={"#fff"} /> : "Login" }
//                       </button>
//                     )
//                   }
//                 </div>
//               </div>
//             </Drawer>
//           </Fragment>
//         </div>
//       </header>
//     </div>

//   )
// }

