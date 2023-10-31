import Aos from "aos"
import Featured from "./UI/Featured"
import Home from "./UI/Home"
import { useEffect } from "react"
import Footer from "./components/Footer"
import Header from "./components/Header"


function App() {
  useEffect(() => {
    Aos.init()
  },[])

  return (
    <>
      {/* <NavBar /> */}
      <Header/>
      <Home/>
      <Featured />
      {/* <Map /> */}
      <Footer />
    </>
  )
}

export default App
