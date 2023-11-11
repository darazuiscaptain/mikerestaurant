import { useDispatch, useSelector } from "react-redux"
import { toast } from "react-toastify"
import axios from "axios"
import { deleteAllCart } from "../redux/cartSlice"
import { useNavigate, useParams } from "react-router-dom"
import { useEffect } from "react"
import fetchAPI from "../utils/fetchData/fetchAPI"

const BASE_URL = "https://mern-restaurant-5rre.onrender.com"

const Order = () => {
  const id = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { cart } = useSelector((state) => state.cart)
  const { currentUser } = useSelector((state) => state.auth)

  const handleSubmit = async () => {
    const productId = []
    if (id) {
      productId.push(id)
    } else {
      cart.forEach(element => {
        productId.push(element._id)
      })
    }
    const order = {
      customer: currentUser?._id,
      items: productId,
      totalAmount: 45
    }
    console.log(order, "order")
    if (cart.length < 1 || !id) {
      toast.error("Empty Cart")
    } else {
      try {
        await axios.post(`${BASE_URL}/orders/create-order`, order)
        dispatch(deleteAllCart())
        toast.success("Order has been added! thank you for choosing us.")
        navigate("/")
      } catch (error) {
        toast.error(error)
      }
    }
  }

  useEffect(() => {
    const fetchSingleProduct = async () => {
      const stringID = JSON.stringify(id)
      try {
        const result = await fetchAPI(`http://localhost:5000/products/${stringID}`);
        console.log(result, "response")
      } catch (error) {
        console.log(error)        
      }
    }
    fetchSingleProduct()
  }, [id])

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col gap-3 max-w-[600px] h-full ">
        <div className="flex flex-col gap-5 items-center justify-center">
          <h2 className="flex gap-3 justify-center text-teal-300">Your Order is on process. Payment on delivery!!!</h2>
          <div className="border-b-2 border-gray-300" />
          <div className="flex gap-5 justify-between w-full">
            <h6>No</h6>
            <h4>Image</h4>
            <h3>Name</h3>
          </div>
          {id ? (
            <div className="flex gap-5">
              {/* <img className="max-w-[60px]" src={productImage} alt={productName} />
              <h2>{productName}</h2> */}
            </div>
          ) : (
            cart && cart.map((item, index) => (
              <div key={item._id} className="flex gap-5 justify-between w-full">
                <h2 className="text-sm">{index + 1}</h2>
                <img className="max-w-[60px]" src={item.productImage} alt={item.productName} />
                <h2>{item.productName}</h2>
              </div>
            ))
          )}

        </div>
        <div className="flex flex-col gap-8 m-12 justify-end w-full">
          <div className="flex gap-2">
            <h1>Total: </h1>
            <span>${cart && cart.total}</span>
          </div>
          <div className="flex gap-2">

            <button
              onClick={() => handleSubmit()}
              className="bg-teal-500 text-md rounded-md px-3 p-1 text-white hover:opacity-90">
              Submit order
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Order