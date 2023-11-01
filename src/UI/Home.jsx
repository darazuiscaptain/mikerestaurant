import image from '../assets/restaurant1.png'

function Home() {
  return (
    <section>
        <div className='flex flex-col '>
            <img src={image} alt=""  className='border-none w-full h-[450px] sm:h-[400px] opacity-90 -z-10 '/>
            <div className='flex flex-col p-5 sm:p-12 -mt-[200px] md:-mt-[200px]'>
                <h1 
                    data-aos='fade-top' data-aos-duration='900'
                    className='font-bold font-sans  text-white text-2xl sm:text-4xl  '> 
                    Discover Resturants and 
                    <br />
                    <span className='text-red-700'>
                        Order Delivery near you!
                    </span>
                </h1>
                <p className='text-sm flex flex-wrap max-w-[400px] text-white'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Similique nostrum saepe recusandae quis minima modi quia, 
                    quidem nesciunt vero alias!
                </p>
            </div>
            
        </div>
    </section>
  )
}

export default Home