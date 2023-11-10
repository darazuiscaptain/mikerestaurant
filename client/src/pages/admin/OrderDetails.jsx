import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import fetchAPI from '../../utils/fetchData/fetchAPI'

const OrderDetails = () => {
  const id = useParams()

  useEffect(() => {
    // const stringID = JSON.stringify(id)

    const handleDetails = async () => {
      // const result = await fetchAPI(`http://localhost:5000/api/v1/orders/${stringID}`)
      // console.log(result)
    }
    handleDetails()
  }, [])
  return (
    <div>OrderDetails</div>
  )
}

export default OrderDetails