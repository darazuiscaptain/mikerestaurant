import Featured from "../UI/Featured"
import Main from "../UI/Main"
import Meal from "../UI/Meal"
import Drinks from "../UI/Drinks"
import Statistics from "../UI/Statistics"

function Home() {
    return (
        <>
            <div className="max-w-[900px] mx-auto">
                <Main />
                <br />
                <Statistics />
                <Meal />
                <Drinks />
                <Featured />
            </div>
        </>
    )
}

export default Home