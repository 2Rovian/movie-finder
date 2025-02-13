import React from 'react'
import { useQuery } from 'react-query';
import MovieCard from './MovieCard';

function SearchMovie({ movieName }) {
    const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
    const BASE_URL = "https://api.themoviedb.org/3/"

    const { data, isLoading, error } = useQuery(['movie_name', movieName], () =>
        fetch(`${BASE_URL}search/movie?api_key=${API_KEY}&query=${movieName}`)
            .then((res) => res.json())
    );

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Erro: {error.message}</div>;

    return (
        <div className='sm:px-4'>
            <div className='movie-grid-2'>
                {data?.results.map((movie) => (
                    <div key={movie.id} className='flex flex-col items-center '>
                        <MovieCard movie={movie} />
                        
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SearchMovie