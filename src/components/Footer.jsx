import footerImage from "../assets/restaurant.png"
import { BsFacebook, BsInstagram, BsTelegram, BsTwitter, BsYoutube } from "react-icons/bs"

function Footer() {
    return (
        <footer className="mt-20 px-4 sm:px-12  rounded-md">
            <div className='flex flex-wrap gap-4 justify-between w-full'>
                <div className="flex flex-col justify-between h-28">
                    <div className='flex flex-col justify-end font-mono  text-sm leading-4'>
                        <div className='flex gap-0'>
                            <span className='text-3xl text_gradient_p'>R</span>
                            <div className='leading-4'>
                                <h1 className='text_gradient_h flex justify-end text-md underline' >Mike</h1>
                                <p className='text_gradient_p -left-2'>estaurant</p>
                            </div>
                        </div>

                    </div>
                    <img src={footerImage} alt="footerImg" className="w-12 h-12" />
                </div>
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