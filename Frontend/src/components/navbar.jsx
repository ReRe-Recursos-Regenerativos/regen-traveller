import React, { useContext } from 'react'
import { Link } from 'react-router-dom';

import { AuthContext } from '../context/AuthContext';



function navbar() {


    const { newuser } = useContext(AuthContext)
    console.log("From Navbar", newuser);
    return (



        <nav className=" w-full h-20 bg-gray-300 fixed top-0 flex justify-between rounded-lg">

            <div className="rounded-lg">
                <img className="p-2 w-40 h-20 object-cover  " src="https://thesujanlife.com/documents/35366/89973/travellerlogo.png/85daf9a7-11c8-ba81-3eba-54513cddd358?t=1573159572162" alt="Card Image" />

            </div>
            <div className="flex flex-row justify-evenly mt-1 mr-2">
                <Link to="/" className='text-xl text-gray-600 p-6 hover:cursor-pointer hover:text-gray-950 '>Home</Link>
                <Link className='text-xl text-gray-600 p-6 hover:cursor-pointer hover:text-gray-950 '>Hotels</Link>
                <Link className='text-xl text-gray-600 p-6 hover:cursor-pointer hover:text-gray-950 '>Guide</Link>
                <Link to="/top-destination" className='text-xl text-gray-600 p-6 hover:cursor-pointer hover:text-gray-950 '>Destination</Link>
            </div>


            <div className=" mt-3.5 mr-2 justify-center">
                <div className='p-2  bg-green-500 rounded-lg hover:bg-slate-400 hover:cursor-pointer transition duration-300 ease-in-out transform hover:-translate-y+1 hover:scale-105'>
                    {newuser ? (
                        <Link className="text-xl text-black w-1/6 h-8" to="/user_profile"  >
                            {newuser.Name}

                        </Link>
                    ) : (
                        <Link className="text-xl text-black w-1/6 h-8" to="/User_login">
                            Create Account
                        </Link>
                    )}
                </div>

            </div>
        </nav>

    )
}

export default navbar
