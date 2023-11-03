import { stats } from '../utils/Stats'
import CountUp from "react-countup"

function Statistics() {
  return (
    <section className='flex flex-col gap-8 p-5 '>
      <div>
        <h1 className='text_gradient_p text-2xl'>Lorem, ipsum.</h1>
      </div>
      <div className='flex gap-4  flex-wrap items-center justify-center'>
      {
        stats.map((stats) => (
          <div key={stats.name}
          className='flex flex-col min-w-[200px]'>
             <h1 className='flex justify-center text-1xl font-sans text-light-green-900'>{stats.name}</h1>
             <h2 className='flex justify-center text-purple-600'>
                <CountUp end={stats.value} suffix='+' delay={2}/>
             </h2>
          </div>
        ))
      }
      </div>
    </section>
  )
}

export default Statistics