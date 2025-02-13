import React from 'react'
import { useQuery } from 'react-query'


function TopRatedCard({ BASE_URL, API_KEY }) {

    const { data, isLoading, error } = useQuery('Top_Rated', () =>
        fetch(`${BASE_URL}movie/top_rated?api_key=${API_KEY}`)
            .then((res) => res.json())
    );

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Erro: {error.message}</div>;

    return (
        <main className='w-full bg-slate-900 h-fit rounded-t-xl rounded-b-lg flex flex-col'>
            <div className='py-5 flex justify-center bg-slate-950 rounded-t-xl '>
                <span className='text-blue-400 font-bold text-2xl tracking-wide'>Top Rated</span>

            </div>
            
            <div className='grow p-2'>
                <div className='gap-y-2 flex flex-col'>
                    {data?.results.slice(0, 6).map((movie) => (
                        <div key={movie.id} className='bg-slate-800 rounded-lg flex p-2 gap-x-2 hover:outline-blue-400 duration-[400ms] hover:shadow hover:scale-105 ease-in-out cursor-pointer outline outline-transparent'>
                            <div>
                                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" className='object-cover rounded-md size-16' />
                            </div>
                            <div className=' '>
                                <p className='py-1 text-slate-100 text-lg font-semibold'>{movie.original_title}</p>
                                <div className='flex gap-x-2 text-slate-400'>
                                    <div className='flex text-slate-300'>
                                        <span className='items-center flex'>
                                            <i className='bx bx-star ml-0 mr-0'></i>
                                        </span>

                                        <span>{movie.vote_average.toFixed(1)}</span>
                                    </div>

                                    <div className='flex gap-x-1'>
                                        <span>{movie.release_date.split("-")[0]}</span>
                                        <span>•</span>
                                        <span className='uppercase'>{movie.original_language}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    )
}

export default TopRatedCard