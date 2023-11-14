import homeLogo from '../assets/home-image.jpg'
import Statistics from "../UI/Statistics"

function Main() {
    return (
        <section id='main' className=''>
            <div className='grid md:grid-cols-3 h-fit '>
                <div className='flex flex-col  gap-0  justify-around p-8 sm:p-4 max-w-[400px] sm:w-full'>
                    <div className='flex items-center justify-center px-5 sm:px-12'>
                        <h2 className='flex flex-col text-[40px] font-extrabold leading-10 text-red-400'>
                            Order Delivery
                            <span className='text-black'>
                                near you!
                            </span>
                            <span className='text-gray-500 text-sm font-light my-2'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Iorem sum sit amet.
                            </span>
                        </h2>
                    </div>
                </div>
                <div className='flex  bg-white'>
                    <img src={homeLogo} alt="" className='bg-white' />
                </div>
                <div className='flex'>
                    <Statistics />
                </div>
            </div>
        </section>
    )
}

export default Main