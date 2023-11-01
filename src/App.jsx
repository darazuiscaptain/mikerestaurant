import Aos from "aos"
import Featured from "./UI/Featured"
import Main from "./UI/Main"
import { useEffect } from "react"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Meal from "./UI/Meal"
import Drinks from "./UI/Drinks"
import Statistics from "./UI/Statistics"


function App() {
  useEffect(() => {
    Aos.init()
  }, [])

  return (
    <>
      <Header />
      <div className="max-w-[900px] mx-auto">
        <Main />
        <br/>
        <Statistics/>
        <Meal/>
        <Drinks />
        <Featured />
      </div>
      <Footer />
    </>
  )
}

export default App
