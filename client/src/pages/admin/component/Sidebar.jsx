import React from 'react'
import Logo from '../../../components/Logo'
import { AiTwotoneHome } from "react-icons/ai"
import { GrTransaction } from "react-icons/gr"
import { MdOutlineProductionQuantityLimits, MdRememberMe } from "react-icons/md"
import { HiDocumentReport } from "react-icons/hi"
import { FaSalesforce } from "react-icons/fa"


const Sidebar = () => {
    return (
        <div className='flex w-[11rem] h-[100vh] sticky top-0 left-0 rounded-none border-r-2'>
            <div className='flex flex-col mx-auto pt-7 gap-6'>
                <div className='flex flex-col gap-4'>
                    <Logo />
                    <div className='flex flex-col items-center justify-center'>
                        <h2 className='text-sm font-normal'>Mikiyas</h2>
                        <h5 className='text-xs text-gray-500'>smikiyas37@gmail.com</h5>
                    </div>
                </div>
                <div></div>
                <div className='flex flex-col flex-1 justify-start'>
                    <ul className='flex flex-col gap-5'>
                        <li className='flex flex-row items-center gap-3'>
                            <AiTwotoneHome />
                            <span className='text-sm'>Home</span>
                        </li>
                        <li className='flex flex-row items-center gap-3'>
                            <GrTransaction />
                            <span className='text-sm'>Transactions</span>
                        </li>
                        <li className='flex flex-row items-center gap-3'>
                            <FaSalesforce />
                            <span className='text-sm'>Sales</span>
                        </li>
                        <li className='flex flex-row items-center gap-3'>
                            <MdOutlineProductionQuantityLimits />
                            <span className='text-sm'>Products</span>
                        </li>
                        <li className='flex flex-row items-center gap-3'>
                            <MdRememberMe />
                            <span className='text-sm'>Members</span>
                        </li>
                        <li className='flex flex-row items-center gap-3'>
                            <HiDocumentReport />
                            <span className='text-sm'>Reporting</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar