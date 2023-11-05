import React, { useEffect } from 'react'
import { Card, CardBody, CardHeader } from "@material-tailwind/react"
import { useState } from 'react'
import { useParams } from "react-router-dom"
import axios from "axios"

const BASE_URL = "https://mern-restaurant-5rre.onrender.com/api/v1/user"

function Profile() {
    const { id } = useParams()
    const [user, setUser] = useState(null)

    const handleChange = (e) => {
        setUser(({ ...user, [e.target.name]: e.target.value }))
    }

    useEffect(  () => {
        const fetch = async () => { 
            const data = await axios.get(`${BASE_URL}/${id}`)
            console.log(data)
        }
        fetch()
    }, [id])

    return (
        <>
            <Card className='mt-12 px-0 sm:px-4 md:px-8 lg:-12'>
                <CardHeader className='text-center p-2 text-xl shadow-2xl font-semibold text-gray-500'>
                    Manage Account
                </CardHeader>
                <CardBody className='flex items-center mt-6'>
                    <div className='flex flex-col-reverse sm:flex-row-reverse '>
                        <div className='flex flex-col gap-8 p-8 w-full'>
                            <img
                                className="h-24 w-24 rounded-full cursor-pointer"
                                src={user?.photo}
                                alt=""
                            />
                            <button className='p-2 flex justify-center text-white rounded-md bg-teal-300 hover:opacity-90'>
                                Update
                            </button>
                        </div>
                        <div className='flex flex-col gap-5 w-full'>
                            <input
                                type="text"
                                name='username'
                                value={user?.username}
                                placeholder='Username'
                                onChange={handleChange}
                                className='hover:outline-none  p-2 shadow-md rounded-lg w-96' required
                            />
                            <input
                                type="text"
                                name='email'
                                value="smikiyas37@gmail.com"
                                disabled
                                placeholder='Email'
                                className='hover:outline-none  p-2 shadow-md rounded-lg w-96' required
                            />
                            <input
                                type="password"
                                name='password'
                                value={user?.password}
                                placeholder='password'
                                onChange={handleChange}
                                className='hover:outline-none  p-2 shadow-md rounded-lg w-96' required
                            />
                        </div>
                    </div>
                </CardBody>
            </Card>
        </>
    )
}

export default Profile