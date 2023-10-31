import  restaurant  from '../assets/restaurant.png'

function Logo() {
  return (
    <div className='flex items-center justify-end gap-1'>
        <span >
          <img className='w-12 h-8' src={restaurant} alt="resturant" />
        </span>
        <div className='flex flex-col justify-end font-mono  text-sm leading-4'>
            <h1 className='text_gradient_h' >Mike</h1>
            <p className='text_gradient_p l'>Restaurant</p>
        </div>
        
    </div>
  )
}

export default Logo