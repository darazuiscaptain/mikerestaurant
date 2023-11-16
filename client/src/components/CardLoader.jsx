import { Card } from "@material-tailwind/react"
import { HiOutlineLocationMarker } from "react-icons/hi"

function CardLoader({ image, open, title }) {
    return (
        <Card className='w-[99%] sm:w-[48%] md:w-[32%] shadow-md rounded-md overflow-hidden '>
            <div className="">
                <img src={image} alt={title} className='relative cursor-pointer h-[170px] sm:h-[200px] min-w-full rounded-t-2xl' />
                <div className='px-3 p-1 flex flex-col absolute bottom-0 backdrop-blur-[3px] border-none w-full'>
                    <h1 className="text-white text-lg font-extrabold">{title}</h1>
                    <h3 className="flex gap-2 items-center text-blue-gray-50 font-bold text-sm">
                        <HiOutlineLocationMarker />
                        Lorem, ipsum dolor.
                    </h3>
                </div>
            </div>
        </Card>
    )
}

export default CardLoader