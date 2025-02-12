import React from 'react'

function MovieCard({ movie }) {
    return (
        <div className=' pt-2 px-2 rounded-xl bg-slate-900 outline-2 outline-transparent hover:outline-blue-400 hover:duration-[400ms] hover:scale-105'>
            <div className='relative rounded-xl'>
                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" className='object-cover rounded-md w-52 sm:w-60 h-60 sm:h-64 rounded-t-xl' />
                <p className='absolute font-semibold text-lg top-0 text-slate-100 w-full py-2 bg-slate-950/70 text-center rounded-t-xl'>{movie.original_title}</p>
            </div>
            
            <div className='my-0 flex justify-between py-2'>
                <div className='flex items-center gap-x-1'>
                    <span className='uppercase text-blue-400 font-semibold flex'>{movie.original_language}</span>
                    <span className='text-blue-500'>•</span>
                    <span className='text-blue-500'>{movie.release_date.split("-")[0]}</span>
                </div>
                <div className='flex items-center outline outline-blue-400 rounded-full p-1'>
                    <i className='bx bxs-star text-amber-300 ml-1 mr-2'></i>
                    <span className='text-blue-400 mr-1'>{movie.vote_average.toFixed(1)}</span>
                </div>
            </div>
        </div>
    )
}

export default MovieCard