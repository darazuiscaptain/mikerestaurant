import React, { useEffect } from 'react'
import { Card, CardBody, CardHeader } from "@material-tailwind/react"
import { useState } from 'react'
import axios from "axios"
import { toast } from 'react-toastify'
import { useSelector } from 'react-redux'

const BASE_URL = "https://mern-restaurant-5rre.onrender.com"


function Profile() {
    const [user, setUser] = useState(null)
    const { currentUser } = useSelector((state) => state.auth)

    const handleChange = (e) => {
        setUser(({ ...user, [e.target.name]: e.target.value }))
    }

    const handleUpdate = async (e) => {
        e.preventDefault()
        if (!currentUser) return toast.error("Invalid Update")
        else {
            try {
                const { currentPassword, newPassword } = user

                if (currentPassword === undefined && newPassword) {
                    toast.error("Current password Required!")
                } else {
                    await axios.put(`${BASE_URL}/user/${currentUser?._id}`, user)
                    toast.success("Update success")
                }
            } catch (error) {
                if (error.response) {
                    // Handle specific error codes
                    if (error.response.status === 409) {
                        toast.error(error.response.data)
                    } else if (error.response.status === 400) {
                        toast.error(error.response.data.errors[0].message)
                    } else {
                        toast.error(error.response.data.message)
                    }
                } else {
                    toast.error("Network error")
                }
            }
        }
    }

    useEffect(() => {
        const fetch = async () => {
            if (currentUser) {
                const result = await axios.get(`${BASE_URL}/${currentUser?._id}`)
                setUser(result.data)
            }
        }
        fetch()
    }, [currentUser])

    return (
        <>
            <Card className='mt-12 px-0 sm:px-4 md:px-8 lg:-12'>
                <CardHeader className='text-center p-2 text-xl shadow-2xl font-semibold text-gray-500'>
                    Manage Account
                </CardHeader>
                <CardBody className='flex items-center mt-6'>
                    <form
                        onSubmit={handleUpdate}
                        className='flex flex-col-reverse sm:flex-row-reverse '>
                        <div className='flex flex-col gap-8 p-8 w-full'>
                            <img
                                className="h-24 w-24 rounded-full cursor-pointer"
                                src={user?.photo}
                                alt=""
                            />
                            <button
                                type='submit'
                                className='p-2 flex justify-center text-white rounded-md bg-teal-300 hover:opacity-90'>
                                Update
                            </button>
                        </div>
                        <div className='flex flex-col gap-5 w-full'>
                            <input
                                type="text"
                                name='email'
                                value={user?.email}
                                disabled
                                placeholder='Email'
                                className='hover:outline-none  hover:opacity-60 p-2 shadow-md rounded-lg w-96' required
                            />
                            <input
                                type="text"
                                name='username'
                                value={user?.username}
                                placeholder='Username'
                                onChange={handleChange}
                                minLength={3}
                                className='hover:outline-none  p-2 shadow-md rounded-lg w-96' required
                            />
                            <input
                                type="password"
                                name='currentPassword'
                                placeholder='Current Password'
                                onChange={handleChange}
                                className='hover:outline-none  p-2 shadow-md rounded-lg w-96'
                            />
                            <input
                                type="password"
                                name='newPassword'
                                placeholder='New Password'
                                onChange={handleChange}
                                className='hover:outline-none  p-2 shadow-md rounded-lg w-96'
                            />
                        </div>
                    </form>
                </CardBody>
            </Card>
        </>
    )
}

export default Profile