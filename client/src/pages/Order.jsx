import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { toast } from "react-toastify"
import { deleteAllCart } from "../redux/cartSlice"
import { useNavigate, useParams } from "react-router-dom"

import fetchAPI from "../utils/fetchData/fetchAPI"
import axios from "axios"


const Order = () => {
  const id = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [product, setProduct] = useState({})

  const { cart } = useSelector((state) => state.cart)
  const { currentUser } = useSelector((state) => state.auth)

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity, 0)


  const handleSubmit = async () => {
    const productId = []
    if (Object.keys(id).length !== 0) {
      const _id = (id.id).toString()
      productId.push(_id)
    } else {
      cart.forEach(element => {
        productId.push(element._id)
      })
    }
    // console.log(productId, "id")
    const order = {
      customer: currentUser?._id,
      items: productId,
      totalAmount: subtotal || product.price
    }

    if (cart.length < 1 && typeof id !== 'object') {
      toast.error("Invalid Request!")
    } else {
      try {
        await axios.post(`/api/orders/create-order`, order)
        if (typeof id !== 'object' || Object.keys(id).length === 0) {
          dispatch(deleteAllCart())
        }
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
        if (typeof id === 'object' && Object.keys(id).length !== 0) {
          const result = await fetchAPI(`/api/products/${stringID}`)
          setProduct(result)
        } else {
          setProduct(null)
        }
      } catch (error) {
        console.log(error)
      }
    }
    fetchSingleProduct()
  }, [])

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-gray-50">
      <div className="flex flex-col gap-3 min-w-[400px] h-full bg-white p-8 shadow-md">
        <div className="flex flex-col gap-5 items-center justify-center">
          <h2 className="flex gap-3 justify-center text-teal-300">Payment on delivery!!!</h2>
          <div className="border-b-2 border-gray-300" />
          {product !== null ? "" : (<div className="grid grid-cols-3 w-full">
            <h6>No</h6>
            <h4>Image</h4>
            <h3>Name</h3>
          </div>)}
          {product !== null ? product && (
            <div className="flex items-center gap-2 bg-blue-gray-50 w-[16rem]">
              <div>
                <img className="w-[8rem] h-[8rem]" src={product.productImage} alt={product.productName} />
              </div>
              <div className="flex flex-col text-gray-600 gap-0">
                <h2>
                  {product.productName}
                </h2>
                <h2 className="text-md flex items-center gap-1">
                  price:
                  <span className="text-lg text-teal-500">${product.price}</span>
                </h2>

              </div>
            </div>
          ) : (
            cart && cart.map((item, index) => (
              <div key={item._id} className="grid grid-cols-3 w-full">
                <h2 className="text-sm">{index + 1}</h2>
                <img className="max-w-[60px]" src={item.productImage} alt={item.productName} />
                <h2>{item.productName}</h2>
              </div>
            ))
          )}
        </div>
        <div className="flex flex-col gap-6 m-4 justify-end w-full">

          {product !== null ? "" : (
            <div className='flex gap-3 justify-end text-blue-gray-500'>
              <h1 className='text-2xl'>Total:</h1>
              <h2 className='text-2xl'>
                <span className="text-teal-600">
                  ${subtotal}
                </span>
              </h2>
            </div>
          )}
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