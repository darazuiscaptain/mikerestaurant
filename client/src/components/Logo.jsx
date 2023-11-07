import { Link } from 'react-router-dom'
import restaurant from '../assets/restaurant.png'

function Logo() {
  return (
    <Link to="/" className='flex items-center justify-end gap-1'>
      <span >
        <img className='w-12 h-8' src={restaurant} alt="resturant" />
      </span>
      <div className='flex flex-col justify-end font-mono  text-sm leading-4'>
        <div className='flex gap-0'>
          <span className='text-3xl text_gradient_p'>R</span>
          <div className='leading-4'>
            <h1 className='text_gradient_h flex justify-end text-md underline' >Mike</h1>
            <p className='text_gradient_p -left-2'>estaurant</p>
          </div>
        </div>

      </div>

    </Link>
  )
}

export default Logo