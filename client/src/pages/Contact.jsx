import { Card } from '@material-tailwind/react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function Contact() {
  const emailTo = "smikiyas37@gmail.com"
  const [ emailFrom, sendEmailFrom ] = useState({
    full_name: "",
    email: "",
    subject: "",
    message: ""
  })
  const handleChange = (e) => {
    sendEmailFrom({...emailFrom, [e.target.name]: e.target.value})
  }

  const { full_name, email, subject, message } = emailFrom
  return (
    <section className='flex flex-col justify-center gap-5 w-full max-w-[500px] mx-auto sm:mt-8 md:mt-12 lg:mt-16'>
      <Card className='flex flex-col justify-between px-5 sm:px-12 drop-shadow-2xl '>
        <h1 className='text_gradient_p text-2xl text-center underline-offset-2 pt-2 pt-3'>Contact Us</h1>
        <form className='flex flex-col w-full h-full gap-3 my-4'>
          <input 
            type="text" 
            name="full_name"
            value={full_name}
            onChange={handleChange}
            placeholder='Full name' 
            className='hover:outline-none placeholder:text-blue-gray-100 focus:outline-none p-[6px] border-[0.7px] border-gray-400' />
          <input 
            type="text" 
            name="email"
            value={email}
            onChange={handleChange}
            placeholder='Email' 
            className='hover:outline-none placeholder:text-blue-gray-100 focus:outline-none p-[6px] border-[0.7px] border-gray-400'/>
          <input 
            type="text" 
            name="subject"
            value={subject}
            onChange={handleChange}
            placeholder='Subject' 
            className='hover:outline-none placeholder:text-blue-gray-100 focus:outline-none p-[6px] border-[0.7px] border-gray-400'/>
          <textarea 
            name="message" 
            value={message}
            onChange={handleChange}
            className='max-h-24 hover:outline-none placeholder:text-blue-gray-100 focus:outline-none p-[6px] border-[0.7px] border-gray-400' 
            cols="10" rows="10" placeholder='Write here..'>
          </textarea>
          <Link 
            to={`mailto:${emailTo}?subject=Regarding ${subject}&body=HeyI'm ${full_name},  ${message}`}
            className='text-center w-full uppercase p-3 rounded-lg my-3 bg-[#51b75a] text-white opacity-90'>
            send
          </Link>
        </form>
      </Card>
    </section>
  ) 
}
export default Contact