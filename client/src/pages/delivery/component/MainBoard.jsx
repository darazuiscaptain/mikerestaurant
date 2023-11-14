
import { FaAngleRight, FaUsers } from 'react-icons/fa'
import { SlBasketLoaded } from 'react-icons/sl'
import { GiExpense } from 'react-icons/gi'
import { MdOutlineAttachMoney } from 'react-icons/md'

import NavBar from './NavBar'

const MainBoard = () => {

    return (
        <div id="mainboard" className='flex flex-col p-5 w-full gap-4'>
            {/* ---------------- Nav bar --------------------- */}
            <NavBar />

            {/* ----------------- upper menu ---------------- */}
            <div className='flex justify-between'>
                <div>
                    <h2 className='text-gray-700 font-normal text-2xl'>Mike Restaurant Dashboard</h2>
                    <h5 className='flex items-center gap-1 text-gray-400 text-xs'>Dashboard <FaAngleRight /> <span>Home</span></h5>
                </div>
                <div className='flex gap-0'>
                    <button className='px-3 p-1 bg-white border-[1px] text-sm'>Day</button>
                    <button className='px-3 p-1 bg-white border-[1px] text-sm'>Week</button>
                    <button className='px-3 p-1 bg-white border-[1px] text-sm'>Month</button>
                    <button className='px-3 p-1 bg-white border-[1px] text-sm'>Annual</button>
                </div>
            </div>
            {/* ---------------- Status Card --------------- */}
            <div className='flex gap-4 h-36 w-full'>
                <div className='bg-orange-500 w-full p-5 text-white'>
                    <div className='flex justify-between items-center'>
                        <div className='flex flex-col'>
                            <h4 className='uppercase text-sm'>Pending orders</h4>
                            <h2 className='text-3xl'>10</h2>
                            <h6 className='text-xs text-gray-500'>in (30 days)</h6>
                        </div>
                        <div className='text-3xl p-4 rounded-full bg-white'>
                            <FaUsers className='text-orange-500' />
                        </div>
                    </div>
                    <div></div>
                </div>
                <div className='bg-purple-500 w-full p-5 text-white flex flex-col justify-between'>
                    <div className='flex justify-between items-center'>
                        <div className='flex flex-col'>
                            <h4 className='uppercase text-sm'>Deliverd Orders</h4>
                            <h2 className='text-3xl'>120</h2>
                            <h6 className='text-xs text-gray-500'>in (30 days)</h6>
                        </div>
                        <div className='text-3xl p-4 rounded-full bg-white'>
                            <SlBasketLoaded className='text-purple-500' />
                        </div>
                    </div>
                    <div></div>
                </div>
                <div className='bg-teal-500 w-full p-5 text-white'>
                    <div className='flex justify-between items-center'>
                        <div className='flex flex-col'>
                            <h4 className='uppercase text-sm'>Total Income</h4>
                            <h2 className='text-3xl'>12505</h2>
                            <h6 className='text-xs text-gray-500'>Increased by (20%)</h6>
                        </div>
                        <div className='text-3xl p-4 rounded-full bg-white'>
                            <MdOutlineAttachMoney className='text-teal-500' />
                        </div>
                    </div>
                    <div></div>
                </div>
                <div className='bg-blue-500 w-full p-5 text-white'>
                    <div className='flex justify-between items-center'>
                        <div className='flex flex-col'>
                            <h4 className='uppercase text-sm'>Total Expense</h4>
                            <h2 className='text-3xl'>3455</h2>
                            <h6 className='text-xs text-gray-500'>Increased by (15%)</h6>
                        </div>
                        <div className='text-3xl p-4 rounded-full bg-white'>
                            <GiExpense className='text-blue-500' />
                        </div>
                    </div>
                    <div></div>
                </div>

            </div>
            {/* ---------------- Summary Section ----------- */}

        </div>
    )
}

export default MainBoard