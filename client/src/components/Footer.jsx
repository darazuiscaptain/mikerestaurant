import { Link } from "react-router-dom"
import logo from "../assets/food-delivery-logo.jpg"
import { BsFacebook, BsInstagram, BsTelegram, BsTwitter, BsYoutube } from "react-icons/bs"

function Footer() {
    return (
        <footer className="mt-20 px-4 sm:px-12  rounded-md">
            <div className='flex flex-wrap gap-4 justify-between w-full'>
                <Link to={"/"}>
                    <img src={logo} alt="" className="w-24 h-12" />
                </Link>
                <div className="flex items-end">
                    <ul className="flex gap-3 text-red-700 ">
                        <span className="hover:cursor-pointer"><BsFacebook /></span>
                        <span className="hover:cursor-pointer"><BsInstagram /></span>
                        <span className="hover:cursor-pointer"><BsTelegram /></span>
                        <span className="hover:cursor-pointer"><BsTwitter /></span>
                        <span className="hover:cursor-pointer"><BsYoutube /></span>
                    </ul>
                </div>
            </div>
            <div className="w-full border-b-2 border-gray-300 my-2 py-2 " />
            <div>
                <p className="text-gray-700 text-sm text-center">All right reseved  &copy; 2023</p>
            </div>
        </footer>
    )
}

export default Footer