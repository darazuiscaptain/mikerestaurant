import restaurantImg from '../assets/restaurant2.png'

function Main() {
  return (
    <section>
        <div className='flex flex-col relative'>
            <img src={restaurantImg} alt="restaurant"  className='border-none w-full h-[300px] object-cover bg-repeat-x sm:h-[350px] -z-10 '/>
            <div className='flex flex-col -z-10 sm:p-12 p-3 bottom-1 absolute'>
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

export default Main