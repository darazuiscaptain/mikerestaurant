import { Card } from "@material-tailwind/react"
import { HiOutlineLocationMarker } from "react-icons/hi"

function CardLoader({ image, open, title }) {
    return (
        <Card className='w-[25rem] shadow-md rounded-md overflow-hidden '>
            <div className="">
                <img src={image} alt={title} className='relative cursor-pointer h-[200px] min-w-full rounded-t-md ' />
                <div className='p-3 flex flex-col gap-0 absolute bottom-0 bg-black opacity-60 border-none w-full'>
                    <h1 className="text-white text-2xl font-extrabold">{title}</h1>
                    <h3 className="flex gap-2 items-center text-blue-gray-50 font-bold text-lg">
                        <HiOutlineLocationMarker />
                        Lorem, ipsum dolor.
                    </h3>
                </div>
            </div>
        </Card>
    )
}

export default CardLoader