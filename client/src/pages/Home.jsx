import Featured from "../UI/Featured"
import Main from "../UI/Main"
import Meal from "../UI/Meal"
import Drinks from "../UI/Drinks"
import Statistics from "../UI/Statistics"
import Header from "../components/Header"
import Footer from "../components/Footer"
import FastFood from "../UI/FastFood"
import { useEffect, useState } from "react"
import axios from "axios"

const BASE_URL = "https://mern-restaurant-5rre.onrender.com"

function Home() {
    const [ fastFood, setFastFood] = useState([])
    const [ meals, setMeals] = useState([])
    const [ drinks, setDrinks] = useState([])

    useEffect(() => {
        const fetchFastFood = async () => {
            const result = await axios.get(`${BASE_URL}/products?categories=fast-food`)
            setFastFood(result.data)
            fetchDrinks()
        }
        fetchFastFood()
        const fetchDrinks = async () => {
            const result = await axios.get(`${BASE_URL}/products?categories=drinks`)
            setDrinks(result.data)
            fetchMeals()
        }
        
        const fetchMeals = async () => {
            const result = await axios.get(`${BASE_URL}/products?categories=meals`)
            setMeals(result.data)
        }
    }, [])
    return (
        <div div className="max-w-[1000px] mx-auto">
            <Header />
            <Main />
            <div className="flex flex-col gap-1 lg:mt-5">
                <div className="flex flex-col flex-1 md:rounded-lg border-1">
                    <Statistics />
                    <FastFood fastFood={fastFood} />
                    <Drinks drinks={drinks} />
                    <Meal meals={meals}/>
                </div>
            </div>
            <Featured />
            <Footer />
        </div>
    )
}

export default Home