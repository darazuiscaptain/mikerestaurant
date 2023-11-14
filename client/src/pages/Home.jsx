import Featured from "../UI/Featured"
import Main from "../UI/Main"
import Meal from "../UI/Meal"
import Drinks from "../UI/Drinks"
import Header from "../components/Header"
import Footer from "../components/Footer"
import FastFood from "../UI/FastFood"
import { useEffect, useState } from "react"
import axios from "axios"
import LoadingSpinner from "../components/LoadingSpinner"

const BASE_URL = import.meta.env.BASE_URL

function Home() {
    const [fastFood, setFastFood] = useState([])
    const [meals, setMeals] = useState([])
    const [drinks, setDrinks] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {

        setLoading(true)
        const fetchFastFood = async () => {
            const result = await axios.get(`${BASE_URL}/products?categories=fast-food`)
            setFastFood(result.data)
            setLoading(false)
            fetchDrinks()
        }
        fetchFastFood()
        const fetchDrinks = async () => {
            const result = await axios.get(`${BASE_URL}/products?categories=drinks`)
            setDrinks(result.data)
            setLoading(false)
            fetchMeals()
        }

        const fetchMeals = async () => {
            const result = await axios.get(`${BASE_URL}/products?categories=meals`)
            setMeals(result.data)
            setLoading(false)
        }
    }, [])

    return (
        <div div className="">
            <Header />
            <Main />
            <div className="flex flex-col gap-1 lg:mt-5">
                <div className="flex flex-col flex-1 md:rounded-lg border-1">
                    
                    {loading
                        ? <LoadingSpinner size={100} color={'#4299e1'} />
                        : (
                            <>
                                <FastFood fastFood={fastFood} />
                                <Drinks drinks={drinks} />
                                <Meal meals={meals} />
                            </>
                        )}
                </div>
            </div>
            <Featured />
            <Footer />
        </div>
    )
}

export default Home