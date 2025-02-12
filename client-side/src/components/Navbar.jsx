import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='h-[70px] bg-slate-900 text-white'>
        <div className='container lg:max-w-none mx-auto px-4 flex items-center h-full'>
            <Link to='/' className='xl:mx-12'>
                <div className='text-xl md:text-2xl font-bold'>
                    <span className='bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent'>Movie Finder</span>
                </div>
            </Link>

            <div className='grow flex items-center rounded-xl py-1 pl-2 bg-slate-800 mx-4'>
                <input type="text" className='w-full pl-2 py-1 outline-none '/>
                <i className="fa-solid fa-magnifying-glass mx-auto px-4 cursor-pointer"></i>
            </div>
            <Link to='/login'>
                <div className='bg-gradient-to-r from-blue-400 to-indigo-400 hover:bg-gradient-to-l cursor-pointer p-1 rounded-lg text-xl xl:mx-12'>
                    <div className='w-full h-full rounded-md bg-slate-900 px-3 py-1 '>
                        <i className="fa-solid fa-user"></i>
                    </div>
                </div>
            </Link>
        </div>
    </div>
  )
}

export default Navbar