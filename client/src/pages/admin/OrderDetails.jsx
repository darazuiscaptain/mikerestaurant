import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import fetchAPI from '../../utils/fetchData/fetchAPI'
import Sidebar from './component/Sidebar'
import NavBar from './component/NavBar'
import { toast } from 'react-toastify'
import axios from 'axios'
import { FaAngleDoubleRight } from 'react-icons/fa'
import LoadingSpinner from '../../components/LoadingSpinner'

const BASE_URL = import.meta.env.BASE_URL

const OrderDetails = () => {
  const id = useParams()

  const [order, setOrder] = useState([])
  const [delivery, setDelivery] = useState([])
  const [selected, setSelected] = useState("")
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setSelected(e.target.value)
  }

  const handleAssign = async () => {
    const _id = JSON.stringify(id)
    const data = {
      assignedDelivery: selected,
      status: "ready for pickup"
    }
    if (selected) {
      try {
        await axios.put(`${BASE_URL}/orders/edit/${_id}`, data)
        toast.success("Delivery Assigned", { autoClose: 1200 })
      } catch (error) {
        toast.error(error)
      }
    } else {
      toast.error("Select delivery")
    }
  }

  useEffect(() => {
    const stringID = JSON.stringify(id)
    setLoading(true)
    const handleDetails = async () => {
      const result = await fetchAPI(`${BASE_URL}/orders/${stringID}`)
      setOrder(result)
      setLoading(false)
    }
    handleDetails()
  }, [id])

  useEffect(() => {
    const fetchDelivery = async () => {
      const result = await fetchAPI(`${BASE_URL}/users?role=delivery`)
      setDelivery(result)
    }
    fetchDelivery()
  }, [])


  return (
    <div id="dashboard" className='flex w-full h-full '>
      <div id="sidebar">
        <Sidebar />
      </div>
      <div id="order" className='flex flex-col p-5 w-full gap-4 bg-blue-gray-50'>
        <NavBar />

        <div className='flex flex-col w-full bg-white p-5'>
          <h2 className='text-md text-gray-700 flex items-center gap-3'>
            <Link to={"/orders"}>
              Orders
            </Link>
            <FaAngleDoubleRight/>
            <span className='text-sm text-gray-500'>
              order details
            </span>           
          </h2>

        </div>

        <div className='w-full h-full flex gap-4'>
          <div className='flex flex-col bg-white flex-1 p-2 text-gray-600'>
            <h3 className='text-xs '>Ordered lists</h3>
            <div className='flex flex-wrap gap-3 p-3'>
              {loading
              ? <LoadingSpinner size={100} color={'#4299e1'} />
              : order ? (order?.items?.map((order, index) => (
                <div className='flex gap-1 min-w-[14rem] bg-blue-gray-50 min-h-[4rem]' key={index}>
                  <div className='flex flex-col gap-1 m-2 '>
                    <img src={order.productImage} alt="" className='w-[5rem] h-[3.5rem]' />
                  </div>
                  <div className='flex flex-col justify-center'>
                    <h4 className='text-xs text-black truncate'>{order.productName}</h4>
                    <h3 className='text-xs'>{order.categories}</h3>
                    <h3 className='text-xs text-teal-600'>${order.price}</h3>
                  </div>
                </div>
              ))
              ) : ""}
            </div>
            <h1 className='text-md  flex gap-3 justify-start p-5'>
              Total:
              <span className='text-teal-500'>
                ${order && order.totalAmount}
              </span>
            </h1>
          </div>

          {/* ----------- Assign delivery------------ */}
          <div className='flex flex-col gap-12 bg-white w-[300px] p-5'>
            <div className='flex flex-col gap-3'>
              <h2 className='text-md'>Assign Delivery</h2>
              <div className='border-b-2 border-gray-300' />
              <div className='flex flex-col gap-8'>
                <select name="delivery" onChange={handleChange} value={selected} className='hover:bg-blue-gray-50'>
                  <option value="0" className='p-2 hover:bg-red-400'></option>
                  {delivery ? (delivery.map((delivery, index) => (
                    <option
                      key={index}
                      value={delivery.username}

                    >{delivery.username}
                    </option>
                  ))) : ""}
                </select>
                <div className='flex justify-end'>
                  <button
                    onClick={handleAssign}
                    className='text-xs uppercase bg-teal-500 rounded-lg p-2 px-5 w-fit text-white'>
                    Assign
                  </button>
                </div>
              </div>
            </div>
            <div className='flex flex-col gap-3'>
              <h2 className='flex gap-2 text-sm'>
                Assigned Delivery :
                <span className={`${order?.assignedDelivery === "Not Assigned" ? "text-red-500" : "text-gray-400 font-semibold"} capitalize`}>{order?.assignedDelivery}</span>
              </h2>
              <h1 className='flex gap-3 items-center text-md'>
                Status:
                {order ? (
                  <span
                    className={`whitespace-nowrap 
                    ${order.status == "placed"
                        ? "text-orange-500"
                        : order.status === "ready for pickup"
                          ? "text-purple-500"
                          : order.status === "out of delivery"
                            ? "text-blue-500"
                            : order.status === "delivered"
                              ? "text-teal-500"
                              : order.status === "rejected"
                                ? "text-red-500"
                                : "text-black"
                      }`}
                  >
                    {order.status}
                  </span>
                ) : ""}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderDetails