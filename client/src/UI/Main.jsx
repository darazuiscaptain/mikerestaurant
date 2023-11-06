import heroImg from '../assets/7.png'

function Main() {
    return (
        <section id='hero'>
            <div className='flex flex-col-reverse lg:flex-row-reverse gap-5 lg:gap-0 lg:h-[60vh]'>
                <div className='flex justify-center items-center h-[140px] lg:h-full'>
                    <img src={heroImg} alt="restaurant" 
                        className='w-full h-full object-cover' />
                </div>
                <div className='flex flex-col justify-center items-start w-full flex-1 p-3 py-0'>
                    <h1
                        data-aos='fade-top' data-aos-duration='900'
                        className='font-bold font-sans  text-white text-2xl sm:text-3xl  '>
                        Discover Resturants and
                        <br />
                        <span className='text-red-700'>
                            Order Delivery near you!
                        </span>
                    </h1>
                    <p className='text-sm flex flex-wrap max-w-[400px] text-black'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Similique nostrum.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Main