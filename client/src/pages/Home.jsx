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
        <div div className="max-w-[1000px] mx-auto">
            <Header />
            <div className="flex flex-col xl:flex-row gap-1">
                <div className="flex flex-col flex-1 md:rounded-lg border-1">
                    <Main />
                    <Statistics />
                    <FastFood />
                    <Meal />
                    <Drinks />
                    <Featured />
                </div>
                <div className="hidden sticky top-2 2xl:flex flex-col w-[350px] h-[100vh]  p-1 border-2">
                    <Cart />
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default Home