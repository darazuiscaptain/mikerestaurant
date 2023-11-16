import { IoMdStats } from "react-icons/io";
import { stats } from '../utils/Stats'
import CountUp from "react-countup"

function Statistics() {
  return (
    <section className='flex w-full'>
      <div className='flex w-full items-center justify-center md:flex-col gap-8 sm:gap-3'>
        {
          stats.map((stats) => (
            <div key={stats.name}
              className='flex '>
              <div className='flex gap-3'>
                <div className='hidden md:flex items-center justify-center p-4 border-[1px] shadow-gray-400 shadow-xl'>
                  <IoMdStats className="font-extrabold text-xs" />
                </div>
                <div className='flex flex-col'>
                  <h2 className='flex justify-center text-xl md:text-2xl font-extrabold'>
                    <CountUp end={stats.value} suffix='+' delay={2} />
                  </h2>
                  <h1 className='flex justify-center text-xs text-red-400'>{stats.name}</h1>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Statistics