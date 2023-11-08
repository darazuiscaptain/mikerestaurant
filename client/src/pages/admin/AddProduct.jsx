import { FaUpload } from 'react-icons/fa'
import Sidebar from './component/Sidebar'
import Dropzone from 'react-dropzone'
import { useState } from 'react';

const AddProduct = () => {

  const [selectedImage, setSelectedImage] = useState(null);

  const handleDrop = (acceptedFiles) => {
    setSelectedImage(URL.createObjectURL(acceptedFiles[0]));
  };

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
          <div className='flex flex-col bg-white flex-1 py-2'>
            <div className='flex flex-col p-3'>
              <h2 className='text-gray-700 text-md'>Product Name</h2>
              <input type="text" className='px-5 p-2 w-full border-2 hover:outline-none focus:outline-none' />
            </div>
            <div className='flex gap-3 p-3'>
              <div className='flex flex-col flex-1'>
                <h2 className='text-gray-700 text-md'>Price</h2>
                <input type="number" min="1" className='px-5 p-2 w-full border-2 hover:outline-none focus:outline-none' />
              </div>
              <div className='flex flex-col flex-1'>
                <h2 className='text-gray-700 text-md'>Amount</h2>
                <input type="number" min="1" className='px-5 p-2 w-full border-2 hover:outline-none focus:outline-none' />
              </div>
            </div>
            {/* <Uploader className="w-full flex-1" /> */}
            <div className='flex gap-3 w-full h-full m-3'>
              <div className='flex flex-1'>
                <Dropzone onDrop={handleDrop}>
                  {({ getRootProps, getInputProps }) => (
                    <section className='flex items-center justify-center min-w-fit m-3 border-dashed border-2 h-[100px]'>
                      <div className='p-3 flex flex-col' {...getRootProps()}>
                        <input {...getInputProps()} />
                        <FaUpload className="text-blue-500 text-2xl" />
                        <p className='flex text-xs gap-1'>
                          Drag 'n' drop some files here, or
                         <br /> 
                         <span className='text-blue-500 cursor-pointer'>click</span>
                          to select files</p>
                      </div>
                    </section>
                  )}
                </Dropzone>
              </div>
              <div className='flex flex-1'>
                {selectedImage && <img src={selectedImage} alt="Selected" className='flex h-[7rem] w-[8rem] object-contain' />}
              </div>
            </div>
            <div className='flex w-[20%] mb-16 m-5 '>
              <button className='p-2 flex justify-center w-full text-white text-sm bg-blue-500'>
                Add Product
              </button>
            </div>
          </div>

          <div className='flex flex-col gap-5 bg-white w-[300px] p-5'>
            <h2 className='text-md'>Categories</h2>
            <div className='border-b-2 border-gray-300' />
            <div className='flex flex-col gap-2'>
              <div className='flex gap-2'>
                <input type="checkbox" />
                <h3 className='text-sm text-gray-600'>Fast Food</h3>
              </div>
              <div className='flex gap-2'>
                <input type="checkbox" />
                <h3 className='text-sm text-gray-600'>Meals</h3>
              </div>
              <div className='flex gap-2'>
                <input type="checkbox" />
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