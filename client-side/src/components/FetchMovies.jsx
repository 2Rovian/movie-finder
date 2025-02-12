import React from 'react'
import { useQuery } from 'react-query'

function FetchMovies() {

    const API_KEY = "654a53458a083339f9d52923d42d34a0";

    const { data, isLoading, error } = useQuery('movies', () =>
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=1`)
            .then((res) => res.json())
    );

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Erro: {error.message}</div>;

    return (
        <div className='container max-w-[1450px] lg:flex mx-auto gap-x-2'>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 sm:gap-x-3 sm:mx-5 xl:mx-0 gap-y-4 my-5 grow'>
                {data?.results.map((movie) => (
                    <div key={movie.id} className='flex flex-col items-center '>
                        <div className=' pt-2 px-2 rounded-xl bg-slate-900'>

                            <div className='relative rounded-xl'>
                                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" className='object-cover rounded-md w-52 h-60 rounded-t-xl' />
                                <p className='absolute font-semibold text-lg top-0 text-slate-100 w-full py-2 bg-slate-950/70 text-center rounded-t-xl'>{movie.original_title}</p>
                            </div>
                            <div className='my-0 flex justify-between py-2'>
                                <div className='flex items-center gap-x-1'>
                                    <span className='uppercase text-blue-400 font-semibold flex'>{movie.original_language}</span>
                                    <span className='text-blue-800'>•</span>
                                    <span className='text-blue-800'>{movie.release_date.split("-")[0]}</span>
                                </div>
                                <div className='flex items-center outline outline-blue-400 rounded-full p-1'>
                                    <i class='bx bxs-star text-amber-300 ml-1 mr-2'></i>
                                    <span className='text-blue-400 mr-1'>{movie.vote_average}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className='my-5 pl-3 pr-5'>
                <div className='bg-slate-900 h-[400px] rounded-2xl max-w-[450px] mx-auto lg:w-[300px]'>

                    <div className='flex lg:flex-col py-3 gap-y-3 bg-slate-950 rounded-t-2xl '>
                        <div className='text-blue-400 lg:text-base font-semibold lg:text-center'><span className="text-xl tracking-wider">Most Viewed</span></div>
                        <div className="flex justify-evenly">
                            <button className='cursor-pointer outline rounded-lg px-5 lg:px-2 outline-blue-400 text-blue-100 lg:py-1'>Day</button>
                            <button className='cursor-pointer outline rounded-lg px-5 lg:px-2 outline-blue-400 text-slate-500 lg:py-1'>Week</button>
                            <button className='cursor-pointer outline rounded-lg px-5 lg:px-2 outline-blue-400 text-slate-500 lg:py-1'>Month</button>
                        </div>
                    </div>


                </div>
            </div>

        </div>
    )
}

export default FetchMovies