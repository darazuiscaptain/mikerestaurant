import { stats } from '../utils/Stats'
import CountUp from "react-countup"

function Statistics() {
  return (
    <section className='flex flex-col gap-8 p-5 '>
      <div className='flex gap-4  flex-wrap items-center justify-center'>
        {
          stats.map((stats) => (
            <div key={stats.name}
              className='flex gap-5 items-center justify-center min-w-[200px]'>
              
              <div>
                <h1 className='flex justify-center text-md text-red-400'>{stats.name}</h1>
                <h2 className='flex justify-center'>
                  <CountUp end={stats.value} suffix='+' delay={2} />
                </h2>

              </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Statistics