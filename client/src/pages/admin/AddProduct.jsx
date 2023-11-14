import { FaUpload } from 'react-icons/fa'
import Sidebar from './component/Sidebar'
import { useDropzone } from 'react-dropzone'
import { useCallback, useState } from 'react';
import axios from 'axios';
import { toast } from "react-toastify"
import { useNavigate } from 'react-router-dom';
import LoadingSpinner from '../../components/LoadingSpinner';
import { BASE_URL } from "../../baseurl"

const AddProduct = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)

  const [product, setProduct] = useState({})
  const [selectedImage, setSelectedImage] = useState(null);
  const [categories, setCategories] = useState({ fastFood: false, meals: false, drinks: false })

  const onDrop = useCallback((acceptedFiles) => {
    setSelectedImage(acceptedFiles[0]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value })
  }
  const handleCheckboxChange = (e) => {
    setCategories({ ...categories, [e.target.name]: e.target.checked });
  }


  const handleSubmit = async (e) => {
    e.preventDefault()

    const formData = new FormData();
    Object.keys(product).forEach(key => formData.append(key, product[key]));

    // Assuming you have a state for checkboxes like this:
    Object.keys(categories).forEach(key => {
      if (categories[key]) {
        formData.append('categories', key);
      }
    });

    formData.append('image', selectedImage);

    try {
      setLoading(true)
      const result = await axios.post(`${BASE_URL}/products/add-product`, formData);
      if (result) {
        toast.success("Product created successfully")
        navigate("/products")
      }
    } catch (error) {
      toast.error(error);
    } finally {
      setLoading(false)
    }

    // Log FormData entries
    // for (let pair of formData.entries()) {
    //   console.log(pair[0] + ', ' + pair[1]);
    // }

  }

  return (
    <section id="add-product" className='flex w-full h-full'>
      <div id="sidebar">
        <Sidebar />
      </div>
      <div id="main" className='flex flex-col gap-4 flex-1 bg-blue-gray-50'>
        <div className='flex h-[5rem] w-full bg-white '>
          <h1 className='text-xl text-gray-600 p-7'>Add a product</h1>
        </div>
        <div className='flex flex-1 gap-5 p-5'>
          {/* -------------Add Info section ----------- */}
          <div className='flex flex-col bg-white flex-1 py-2'>
            <div className='flex flex-col p-3'>
              <h2 className='text-gray-700 text-md'>Product Name</h2>
              <input value={product.productName} name="productName" onChange={handleChange} type="text" className='px-5 p-2 w-full border-2 hover:outline-none focus:outline-none' />
            </div>
            <div className='flex gap-3 p-3'>
              <div className='flex flex-col flex-1'>
                <h2 className='text-gray-700 text-md'>Price</h2>
                <input value={product.price} name="price" onChange={handleChange} type="number" min="1" className='px-5 p-2 w-full border-2 hover:outline-none focus:outline-none' />
              </div>
              <div className='flex flex-col flex-1'>
                <h2 className='text-gray-700 text-md'>Amount</h2>
                <input value={product.amount} name="amount" onChange={handleChange} type="number" min="1" className='px-5 p-2 w-full border-2 hover:outline-none focus:outline-none' />
              </div>
            </div>
            {/* <Uploader className="w-full flex-1" /> */}
            <div className='flex gap-3 w-full h-full m-3'>
              <div className='flex flex-1'>
                <div {...getRootProps()} className='flex  items-center justify-center w-full p-3 border-dashed border-2 border-blue-300 hover:cursor-pointer'>
                  <input {...getInputProps()} />
                  {
                    isDragActive ?
                      <p>Drop the image here ...</p> :
                      <FaUpload className='text-blue-500 text-2xl' />
                  }
                </div>
              </div>
              <div className='flex flex-1 w-full'>
                {selectedImage
                  ? <img src={URL.createObjectURL(selectedImage)} alt="Selected" className='flex h-[7rem] w-[8rem] object-contain' />
                  : <img src={""} />
                }

              </div>
            </div>
            <div className='flex w-[20%] mb-16 m-5 '>
              <button onClick={handleSubmit} className='p-2 flex justify-center w-full text-white text-sm bg-blue-500'>
                {loading
                  ? <LoadingSpinner size={25} color={'#fff'} />
                  : "Add Product"}
              </button>
            </div>
          </div>

          {/* ----------- Categories section ------------ */}
          <div className='flex flex-col gap-5 bg-white w-[300px] p-5'>
            <h2 className='text-md'>Categories</h2>
            <div className='border-b-2 border-gray-300' />
            <div className='flex flex-col gap-2'>
              <div className='flex gap-2'>
                <input type="checkbox" value={categories.fastFood} name='fast-food' onChange={handleCheckboxChange} />
                <h3 className='text-sm text-gray-600'>Fast Food</h3>
              </div>
              <div className='flex gap-2'>
                <input type="checkbox" value={categories.meals} name='meals' onChange={handleCheckboxChange} />
                <h3 className='text-sm text-gray-600'>Meals</h3>
              </div>
              <div className='flex gap-2'>
                <input type="checkbox" value={categories.drinks} name='drinks' onChange={handleCheckboxChange} />
                <h3 className='text-sm text-gray-600'>Drinks</h3>
              </div>
            </div>
            <h1 className='flex justify-end p-2 text-sm text-blue-400'>Create a new category</h1>
          </div>

        </div>
      </div>
    </section>
  )
}

export default AddProduct