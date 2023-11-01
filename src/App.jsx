import Aos from "aos"
import Featured from "./UI/Featured"
import Home from "./UI/Home"
import { useEffect } from "react"
import Footer from "./components/Footer"
import Header from "./components/Header"


function App() {
  useEffect(() => {
    Aos.init()
  }, [])

  return (
    <>
      <Header />
      <div className="max-w-[900px] mx-auto">
        <Home />
        <Featured />
      </div>
      <Footer />
    </>
  )
}

export default App
