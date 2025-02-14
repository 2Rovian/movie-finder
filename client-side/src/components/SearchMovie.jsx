import { useState } from 'react';
import { useQuery } from 'react-query';
import MovieCard from './MovieCard';
import Spin from './Spin';
import img_404 from '../assets/img_erro_404.png';

import { useDebounce } from 'react-use';

function SearchMovie({ movieName }) {
    const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
    const BASE_URL = "https://api.themoviedb.org/3/"

    const [debouncedSearch, setDebouncedSearch] = useState(movieName);

    useDebounce(() => {
        setDebouncedSearch(movieName);
    }, 500, [movieName]);

    const { data, isLoading, error } = useQuery(['movie_name', debouncedSearch], () =>
        fetch(`${BASE_URL}search/movie?api_key=${API_KEY}&query=${movieName}`)
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
        <div className='sm:px-4 grow'>
            <div className='movie-grid-2'>
                {data?.results.map((movie) => (
                    <div key={movie.id} className='flex flex-col items-center '>
                        <MovieCard movie={movie} />

                    </div>
                ))}

                {data.results == 0 && (
                    <div className='mt-20 mx-auto size-[200px] rounded-full col-span-full flex justify-center items-center outline-4 outline-blue-400 bg-slate-900'>
                        <span className='text-4xl text-blue-400 font-semibold'>404</span>
                    </div>
                )}

            </div>
        </div>
    )
}

export default SearchMovie