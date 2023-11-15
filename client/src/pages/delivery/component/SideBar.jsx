import { Link } from 'react-router-dom'
import logo from '../../../assets/food-delivery-logo.jpg'
import { AiTwotoneHome } from "react-icons/ai"
import { FaSalesforce } from "react-icons/fa"
import { useSelector } from 'react-redux'


const Sidebar = () => {
    const { currentUser } = useSelector((state) => state.auth)
    const { username, email } = currentUser
    return (
        <div className='flex w-[11rem] h-[100vh] sticky top-0 left-0 rounded-none border-r-2'>
            <div className='flex flex-col mx-auto pt-7 gap-6'>
                <div className='flex flex-col gap-4'>
                    <Link to={"/"}><img src={logo} alt="" className='w-16 h-16' /></Link>
                    <div className='flex flex-col items-center justify-center'>
                        <h2 className='text-sm font-normal'>{username}</h2>
                        <h5 className='text-xs text-gray-500'>{email}</h5>
                    </div>
                </div>
                <div></div>
                <div className='flex flex-col flex-1 justify-start'>
                    <ul className='flex flex-col gap-5 text-gray-800'>
                        <Link to={"/delivery/dashboard"} className='flex flex-row items-center gap-3'>
                            <AiTwotoneHome />
                            <span className='text-sm'>Home</span>
                        </Link>

                        <Link to={"/delivery/orders"} className='flex flex-row items-center gap-3'>
                            <FaSalesforce />
                            <span className='text-sm'>Orders</span>
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar