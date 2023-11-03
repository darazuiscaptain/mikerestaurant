
function Card({image, open, title}) {
  return (
    <card>
        <div className='sm:w-48 lg:w-52 shadow-md rounded-md overflow-hidden'>
            <img src={image} alt={title} className=' cursor-pointer h-[150px] w-full rounded-t-md hover:scale-105 ' />
            <div className='p-2'>
                <h1 data-aos='fade-right' data-aos-duration='1500'>{title}</h1>
                <p className='text-xs text-gray-500 font-thin font'>
                    ipsum dolor sit amet consectetur adipisicing elit. 
                    Necessitatibus, harum. Lorem ipsum dolor sit amet, 
                    consectetur adipisicing elit. Numquam, reprehenderit?
                </p>
                <div className='flex justify-between items-center mt-2'>
                    <button className={`p-1 px-3 ${open === "open" ? "bg-teal-400" : "bg-red-700 "} text-white rounded-lg text-sm hover:opacity-90`}>
                        {open}
                    </button>
                    <span className='text-xs font-thin text-gray-600'>Lorem, ipsum dolor.</span>
                </div>
            </div>
        </div>
    </card>
  )
}

export default Card