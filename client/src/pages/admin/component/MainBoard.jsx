import { Link } from 'react-router-dom'

import { IoIosAddCircle } from 'react-icons/io'
import { AiOutlineSearch } from 'react-icons/ai'
import { HiOutlineSelector } from 'react-icons/hi'
import { FaAngleRight, FaUsers } from 'react-icons/fa'
import { SlBasketLoaded } from 'react-icons/sl'
import { GiExpense } from 'react-icons/gi'
import { MdOutlineAttachMoney } from 'react-icons/md'

import profileImg from "../../../assets/user1.png"

const MainBoard = () => {
  return (
    <div id="mainboard" className='flex flex-col p-5 w-full gap-4'>
      {/* ---------------- Nav bar --------------------- */}
      <div className='flex h-[4rem] bg-white p-3'>
        <div className='flex flex-1 justify-around items-center'>
          <Link to={"/add-product"} className='flex gap-3 cursor-pointer justify-center items-center'>
            <button className='text-white text-lg p-1 rounded-md bg-blue-600'><IoIosAddCircle /></button>
            <span className='text-xs text-gray-700'>Add Product</span>
          </Link>
          <div className='flex gap-0 justify-center '>
            <div className='flex gap-3 relative border-[1px]'>
              <AiOutlineSearch className="absolute top-[0.6rem] left-2 text-xs text-gray-500" />
              <input
                className='w-[10rem] py-2 px-6 text-xs focus:outline-none hover:outline-none border-none'
                type="text"
                placeholder="Search.."
              />
            </div>
            <button className='px-3 bg-blue-600 text-xs text-white font-light'>Search</button>
          </div>
        </div>
        <div className='flex justify-end flex-1 pr-8'>
          <div className='flex gap-3 items-center justify-around'>
            <img src={profileImg} alt="" className='w-8 h-8 rounded-full' />
            <div className='flex gap-2 items-center'>
              <span>Mikiyas</span>
              <HiOutlineSelector />
            </div>
          </div>
        </div>
      </div>
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
        <div className='bg-purple-500 w-full p-5 text-white flex flex-col justify-between'>
          <div className='flex justify-between items-center'>
            <div className='flex flex-col'>
              <h4 className='uppercase text-sm'>New Orders</h4>
              <h2 className='text-3xl'>3205</h2>
              <h6 className='text-xs text-gray-500'>in (30 days)</h6>
            </div>
            <div className='text-3xl p-4 rounded-full bg-white'>
              <SlBasketLoaded className='text-purple-500'/>
            </div>
          </div>
          <div></div>
        </div>
        <div className='bg-teal-500 w-full p-5 text-white'>
          <div className='flex justify-between items-center'>
            <div className='flex flex-col'>
              <h4 className='uppercase text-sm'>Total Income</h4>
              <h2 className='text-3xl'>128905</h2>
              <h6 className='text-xs text-gray-500'>Increased by (20%)</h6>
            </div>
            <div className='text-3xl p-4 rounded-full bg-white'>
              <MdOutlineAttachMoney className='text-teal-500'/>
            </div>
          </div>
          <div></div>
        </div>
        <div className='bg-blue-500 w-full p-5 text-white'>
          <div className='flex justify-between items-center'>
            <div className='flex flex-col'>
              <h4 className='uppercase text-sm'>Total Expense</h4>
              <h2 className='text-3xl'>89200</h2>
              <h6 className='text-xs text-gray-500'>Increased by (15%)</h6>
            </div>
            <div className='text-3xl p-4 rounded-full bg-white'>
              <GiExpense className='text-blue-500' />
            </div>
          </div>
          <div></div>
        </div>
        <div className='bg-orange-500 w-full p-5 text-white'>
          <div className='flex justify-between items-center'>
            <div className='flex flex-col'>
              <h4 className='uppercase text-sm'>New Users</h4>
              <h2 className='text-3xl'>1200</h2>
              <h6 className='text-xs text-gray-500'>in (30 days)</h6>
            </div>
            <div className='text-3xl p-4 rounded-full bg-white'>
              <FaUsers className='text-orange-500'/>
            </div>
          </div>
          <div></div>
        </div>
      </div>
      {/* ---------------- Summary Section ----------- */}
      <div className='flex flex-col gap-5 w-1/2 bg-white flex-1 p-2'>
        <div className='flex flex-col gap-3 w-full'>
          <h2 className='text-sm p-2 text-gray-800'>Summary</h2>
          <div className='w-full border-b-2  border-gray-300'/>
        </div>
        {/* ------------- ======= ---------------  */}
        <div className='flex w-full justify-around'>
          <div className='flex flex-col '>
            <h2 className='text-md text-gray-500'>$2,450</h2>
            <span className='text-xs text-gray-300'>Products</span>
          </div>
          <div className='flex flex-col '>
            <h2 className='text-md text-gray-500'>$90,450</h2>
            <span className='text-xs text-gray-300'>Sales</span>
          </div>
          <div className='flex flex-col '>
            <h2 className='text-md text-gray-500'>$500</h2>
            <span className='text-xs text-gray-300'>Cost</span>
          </div>
          <div className='flex flex-col '>
            <h2 className='text-md text-gray-500'>$1,012,450</h2>
            <span className='text-xs text-gray-300'>Revenue</span>
          </div>
        </div>
        <div>

        </div>
      </div>
    </div>
  )
}

export default MainBoard