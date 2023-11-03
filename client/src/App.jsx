import Aos from "aos"
import { useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Sign_up_in from "./pages/Sign_up_in";


function App() {
  useEffect(() => {
    Aos.init()
  }, [])

  return (
    <>
    <BrowserRouter>
      <Header />
      <Routes>
          <Route path="" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="sign_up_in" element={<Sign_up_in />} />
      </Routes>
      <Footer />
    </BrowserRouter>
      
    </>
  )
}

export default App
