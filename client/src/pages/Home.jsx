import Featured from "../UI/Featured"
import Main from "../UI/Main"
import Meal from "../UI/Meal"
import Drinks from "../UI/Drinks"
import Statistics from "../UI/Statistics"
import Header from "../components/Header"
import Footer from "../components/Footer"
import CartHolder from "../UI/CartHolder"
import FastFood from "../UI/FastFood"

function Home() {
    return (
        <div div className="max-w-[1000px] mx-auto">
            <Header />
            <Main />
            <div className="flex flex-col lg:flex-row gap-1 lg:mt-5">
                <div className="flex flex-col flex-1 md:rounded-lg border-1">
                    <Statistics />
                    <FastFood />
                    <Meal />
                    <Drinks />
                </div>
                <div className="hidden sticky top-2 lg:flex flex-col w-[350px] h-[100vh]  p-1 border-[0.2px]">
                    <CartHolder />
                </div>
            </div>
            <Featured />
            <Footer />
        </div>
    )
}

export default Home