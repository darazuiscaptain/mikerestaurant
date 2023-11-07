import heroImg from '../assets/7.png'

function Main() {
    return (
        <section id='main' className=''>
            <div className='flex flex-col-reverse xl:flex-row-reverse gap-5 lg:gap-0 '>
                <div className='flex h-[140px] xl:h-[20rem]'>
                    <img src={heroImg} alt="restaurant" 
                        className='w-full h-full object-cover' />
                </div>
                <div className='flex flex-col justify-center items-start w-full flex-1 p-3 py-0'>
                    <h1
                        data-aos='fade-top' data-aos-duration='900'
                        className='font-bold font-sans  text-black text-1xl sm:text-3xl  '>
                        
                        <br />
                        <span className='text-red-700 whitespace-nowrap'>
                            Order Delivery near you!
                        </span>
                    </h1>
                    <p className='text-sm flex flex-wrap max-w-[400px] text-gray-600'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Similique nostrum.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Main