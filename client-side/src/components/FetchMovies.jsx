import { useState } from 'react'
import { useQuery } from 'react-query'
import MovieCard from './MovieCard';
import MostViewedCard from './MostViewedCard';

function FetchMovies() {

    const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
    const BASE_URL = "https://api.themoviedb.org/3/"

    // const API_OPTIONS = {
    //     method: 'GET',
    //     headers: {
    //         accept: 'application/json',
    //         Authorization: `Bearer ${API_KEY}`
    //     }
    // }

    const { data, isLoading, error } = useQuery('movies', () =>
        fetch(`${BASE_URL}movie/popular?api_key=${API_KEY}&page=1`)
            .then((res) => res.json())
    );

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Erro: {error.message}</div>;

    return (
        <div className='container max-w-[1490px] lg:flex mx-auto gap-x-0'>
            <div className='movie-grid'>
                {data?.results.map((movie) => (
                    <div key={movie.id} className='flex flex-col items-center '>
                        <MovieCard movie={movie}/>
                    </div>
                ))}
            </div>
            
            <MostViewedCard BASE_URL={ BASE_URL } API_KEY={ API_KEY }/>
        </div>
    )
}

export default FetchMovies