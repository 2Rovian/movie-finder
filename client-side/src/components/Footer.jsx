import React from 'react'
import logo from '../assets/tmdb.svg'

function Footer() {
  return (
    <div className='min-h-[70px] mt-5 lg:mt-0 bg-slate-900 flex justify-between items-center text-slate-400'>
        <div className='pl-4 lg:pl-7 w-[200px] h-full items-center flex'>Made by <span className='text-slate-300 font-semibold hover:underline cursor-pointer ml-1'>
            <a href="https://github.com/2Rovian" target='_blank'>Rovian</a></span>.
        </div>

        <div className=' px-4 lg:px-7 flex max-w-[250px] md:max-w-none'>
          <span className='text-xs lg:text-md'>This product uses the TMDB API but is not endorsed or certified by <a href="https://www.themoviedb.org/" className=' bg-gradient-to-r from-[#0d253f] via-[#01b4e4] to-[#90cea1] bg-clip-text text-transparent font-semibold'>TMDB</a>.</span>
        </div>
    </div>
  )
}

export default Footer