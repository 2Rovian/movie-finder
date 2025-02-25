import { useState } from 'react'
import { useQuery } from 'react-query'
import MovieCard from './MovieCard';
import MostViewedCard from './MostViewedCard';
import TopRatedCard from './TopRatedCard';
import Spin from './Spin';

function FetchMovies() {

    const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
    const BASE_URL = "https://api.themoviedb.org/3/"

    const { data, isLoading, error } = useQuery('movies', () =>
        fetch(`${BASE_URL}movie/popular?api_key=${API_KEY}&page=1`)
            .then((res) => res.json())
    );

    if (isLoading) return (
        <div className='grow '>
            <div className='flex mt-10'>
                <div className='flex items-center mx-auto bg-slate-900 text-slate-100  px-3 rounded-md py-2 shadow-lg'>
                    <span className='text-xl mr-2'>Loading Movies</span>
                    <Spin />
                </div>
            </div>
        </div>
    );

    if (error) return (<div className='grow '>
        <div className='flex mt-10'>
            <div className='flex items-center mx-auto bg-slate-900 text-slate-100  px-3 rounded-md py-2 shadow-lg'>
                <span className='text-xl mr-2'>Erro: {error.message}</span>
            </div>
        </div>
    </div>);

    return (
        <div className='container max-w-[1490px] lg:flex mx-auto gap-x-0'>
            <div className='movie-grid'>
                {data?.results.map((movie) => (
                    <div key={movie.id} className='flex flex-col items-center '>
                        <MovieCard movie={movie}/>
                    </div>
                ))}
            </div>
            
            <div className='w-[95%] mx-auto lg:max-w-[400px] lg:mt-5 lg:mr-3 flex flex-col gap-y-4'>
                <MostViewedCard BASE_URL={ BASE_URL } API_KEY={ API_KEY }/>
                <TopRatedCard BASE_URL={ BASE_URL } API_KEY={ API_KEY }/>
            </div>
        </div>
    )
}

export default FetchMovies