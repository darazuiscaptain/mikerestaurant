import Featured from "../UI/Featured"
import Main from "../UI/Main"
import Meal from "../UI/Meal"
import Drinks from "../UI/Drinks"
import Statistics from "../UI/Statistics"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Cart from "../UI/Cart"
import FastFood from "../UI/FastFood"

function Home() {
    return (
        <>
            <Header />
            <div className="flex flex-col md:flex-row gap-1">
                <div className="flex flex-col flex-1 md:rounded-lg p-1 border-2">
                    <Main />
                    <Statistics />
                    <FastFood />
                    <Meal />
                    <Drinks />
                    <Featured />
                </div>
                <div className="hidden sticky top-2 lg:flex flex-col w-[350px] h-[100vh]  p-1 border-2">
                    <Cart />
                </div>

            </div>
            <Footer />
        </>
    )
}

export default Home