import React from 'react'
import { useQuery } from 'react-query'
import MovieCard from './MovieCard';
import MostViewedCard from './MostViewedCard';

function FetchMovies() {

    const API_KEY = "654a53458a083339f9d52923d42d34a0";

    const { data, isLoading, error } = useQuery('movies', () =>
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=1`)
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
            
            <MostViewedCard data={ data }/>
        </div>
    )
}

export default FetchMovies