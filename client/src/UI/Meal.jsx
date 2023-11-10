import { BsFillCartCheckFill } from "react-icons/bs"
import { useDispatch, useSelector } from "react-redux"
import { addToCart } from "../redux/cartSlice"
import { toast } from "react-toastify"


function Meal({ meals }) {

    const dispatch = useDispatch()
    const { currentUser } = useSelector((state) => state.auth)

    const addCart = (product) => {
        if (currentUser) {
            dispatch(addToCart(product))
            toast("Added to your cart")
        } else {
            toast.error("Please login first!")
        }
    }

    return (
        <section className='mt-8 p-3'>
            <div className='flex justify-start py-2'>
                <h1 className='text_gradient_p font-extrabold text-2xl'>Meals</h1>
            </div>
            <div className='flex flex-wrap gap-2 max-w-full mx-auto'>
                {meals.map((meal) => (
                    <div
                        key={meal._id}
                        className='flex flex-col gap-2 max-w-[170px] p-1 h-52 border-[1px] bg-gray-50 rounded-lg'>
                        <div className='overflow-hidden flex flex-1'>
                            <img
                                src={meal.productImage}
                                alt=""
                                className='hover:scale-110  w-full h-full object-cover' />
                        </div>
                        <div className='flex flex-col p-1'>
                            <p className='text-sm font-semibold text-gray-700 truncate lowercase'>{meal.name}</p>
                            <span className='text-xs text-gray-500'>{meal.star}*</span>
                            <div className='flex justify-between items-center'>
                                <span className='text-md text-green-600'>${meal.price}</span>
                                <div className='flex gap-2 justify-center items-center'>
                                    <div onClick={() => addCart(meal)}>
                                        <BsFillCartCheckFill />
                                    </div>
                                    <button className='p-1 px-3 bg-teal-500 rounded-md text-xs text-white hover:opacity-90'>
                                        order
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Meal