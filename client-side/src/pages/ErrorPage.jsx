import React from 'react'
import { Link } from 'react-router-dom'

function ErrorPage() {
    return (
        <div>
            <main className='text-blue-400 bg-slate-900 mt-20 w-[80%] max-w-[600px] h-fit mx-auto rounded-lg text-center px-7 shadow'>
                <div className='text-6xl pt-8 pb-4'>🙁</div>
                <p className='text-2xl font-bold'>Sorry!</p>
                <p className='py-2'>The page you are looking for don't exist  </p>
                <p className='pb-8 pt-4'>Go back to
                    <Link to='/' className='border-2 rounded-full px-3 py-2 ml-2 cursor-pointer hover:border-slate-100 hover:bg-blue-400 hover:text-slate-900 font-bold ease-in-out duration-500 active:bg-blue-300'>Home</Link>
                </p>
            </main>
        </div>
    )
}

export default ErrorPage