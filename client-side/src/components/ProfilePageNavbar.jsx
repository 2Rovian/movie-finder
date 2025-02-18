import React from 'react'
import { Link } from 'react-router-dom'

function ProfilePageNavbar() {
    return (
        <div className='h-[70px] relative'>
            <div className='absolute h-full w-[100px] bg-slate-950 items-center flex justify-center rounded-br-xl'>
                <Link to='/'>
                    <i className="fa-solid fa-house text-4xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400" />
                </Link>
            </div>

            <div className='bg-slate-950 w-[150px] absolute right-0 h-full rounded-bl-xl text-slate-100'>Your Profile Pic!</div>

        </div>
    )
}

export default ProfilePageNavbar