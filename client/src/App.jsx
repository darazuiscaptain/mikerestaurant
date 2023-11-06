import Aos from "aos"
import { useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Sign_up_in from "./pages/Sign_up_in";
import PageNotFound from "./pages/PageNotFound";
import Profile from "./pages/Profile";


function App() {
  useEffect(() => {
    Aos.init()
  }, [])

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="sign_up_in" element={<Sign_up_in />} />
          <Route path="profile/me" element={<Profile />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <ToastContainer/>
      </BrowserRouter>

    </>
  )
}

export default App
