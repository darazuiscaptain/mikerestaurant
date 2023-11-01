import Aos from "aos"
import { useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";


function App() {
  useEffect(() => {
    Aos.init()
  }, [])

  return (
    <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
      
    </>
  )
}

export default App
