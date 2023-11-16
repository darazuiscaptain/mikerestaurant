import homeLogo from '../assets/home-image.jpg'
import Statistics from "../UI/Statistics"

function Main() {
    return (
        <section id='main' className=''>
            <div className='grid md:grid-cols-3 w-full'>
                <div className='flex flex-col  gap-0  justify-around p-8 sm:p-4 max-w-[400px] sm:w-full'>
                    <div className='flex items-center justify-end sm:pl-12 w-full sm:px-12'>
                        <h2 className='flex flex-col text-2xl sm:text-[40px] font-extrabold sm:leading-10 text-red-400'>
                            Order Delivery
                            <span className='text-black font-light'>
                                near you!
                            </span>
                            <span className='text-gray-400 text-sm font-light my-2'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Iorem sum sit amet.
                            </span>
                        </h2>
                    </div>
                </div>
                <div className='flex bg-white -mt-10 -ml-16  sm:mt-0 '>
                    <img src={homeLogo} alt="" className='bg-white w-[400px] h-[300px]' />
                </div>
                <div className='flex justify-center items-center w-full'>
                    <Statistics />
                </div>
            </div>
        </section>
    )
}

export default Main