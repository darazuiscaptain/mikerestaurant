import { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

const initialValue = {
  full_name: "",
  email: "",
  subject: "",
  message: ""
}
function Contact() {

  const emailTo = "smikiyas37@gmail.com"
  const [emailFrom, sendEmailFrom] = useState(initialValue)
  const handleChange = (e) => {
    sendEmailFrom({ ...emailFrom, [e.target.name]: e.target.value })
  }

  const sendEmail = () => {
    if (emailFrom.email === "") {
      toast("Please provide your email")
    } else {
      const { full_name, email, subject, message } = emailFrom;
      const mailtoLink = `mailto:${emailTo}?subject=Regarding ${subject}&body=Hey I'm ${full_name},  ${message}`;
      window.location.href = mailtoLink;
      sendEmailFrom(initialValue)
    }
  };

  const { full_name, email, subject, message } = emailFrom
  return (
    <section className='flex flex-col justify-center items-center gap-5 w-full md:h-[100vh] bg-blue-700 mx-auto mt-4 sm:mt-8 md:mt-12 lg:mt-16'>
      <div className='flex flex-col min-w-[400px] mx-auto text-white '>
        <h1 className='text-2xl text-center underline-offset-2 pt-3'>Contact Us</h1>
        <form className='flex flex-col w-full h-full gap-3 my-4'>
          <input
            type="text"
            name="full_name"
            value={full_name}
            onChange={handleChange}
            placeholder='Full name'
            className='hover:outline-none flex w-full bg-transparent  focus:outline-none p-[6px] border-[0.7px] border-gray-400' />
          <input
            type="text"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder='Email'
            className='hover:outline-none bg-transparent focus:outline-none p-[6px] border-[0.7px] border-gray-400' />
          <input
            type="text"
            name="subject"
            value={subject}
            onChange={handleChange}
            placeholder='Subject'
            className='hover:outline-none bg-transparent focus:outline-none p-[6px] border-[0.7px] border-gray-400' />
          <textarea
            name="message"
            value={message}
            onChange={handleChange}
            className='max-h-32 hover:outline-none bg-transparent focus:outline-none p-[6px] border-[0.7px] border-gray-400'
            cols="10" rows="10" placeholder='Write here..'>
          </textarea>
          <Link
            onClick={() => sendEmail()}
            className='text-center w-full uppercase p-3 rounded-lg my-3 border-2  border-white hover:bg-black text-white opacity-90'>
            send
          </Link>
        </form>
      </div>
    </section>
  )
}
export default Contact
