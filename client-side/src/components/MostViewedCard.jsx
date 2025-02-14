import React, { useState, useEffect } from 'react'
import { useQuery } from 'react-query';
import Spin from './Spin';

function MostViewedCard({ BASE_URL, API_KEY }) {
    const [DayBtn, setDayBtn] = useState(true);
    const [WeekBtn, setWeekBtn] = useState(false);
    const [MonthBtn, setMonthBtn] = useState(false);

    const [time, setTime] = useState('day');

    const { data, isLoading, error } = useQuery(['trending_movies', time], () =>
        fetch(`${BASE_URL}trending/movie/${time}?api_key=${API_KEY}`)
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
        <main className='w-full bg-slate-900 h-fit rounded-t-xl rounded-b-lg flex flex-col'>
            <div className='py-5 lg:py-3 flex px-4 gap-x-4 items-center bg-slate-950 rounded-t-xl lg:flex-col'>
                <span className='text-blue-400 font-bold text-xl lg:pb-3 lg:text-2xl lg:tracking-wide'>Most Viewed</span>

                <div className='items-center flex h-full gap-x-4'>
                    <button className={`border-2 rounded-xl px-4 py-1 cursor-pointer duration-500 ease-in-out ${DayBtn ? "border-blue-400 text-blue-400" : "border-blue-900 text-blue-900"}`}
                        onClick={() => { setDayBtn(true); setWeekBtn(false); setMonthBtn(false); setTime('day') }}
                    >Day</button>
                    <button className={`border-2 rounded-xl px-4 py-1 cursor-pointer duration-500 ease-in-out ${WeekBtn ? "border-blue-400 text-blue-400" : "border-blue-900 text-blue-900"}`}
                        onClick={() => { setDayBtn(false); setWeekBtn(true); setMonthBtn(false); setTime('week') }}
                    >Week</button>
                    <button className={`border-2 rounded-xl px-4 py-1 cursor-pointer duration-500 ease-in-out ${MonthBtn ? "border-blue-400 text-blue-400" : "border-blue-900 text-blue-900"}`}
                        onClick={() => { setDayBtn(false); setWeekBtn(false); setMonthBtn(true); setTime('day') }}
                    >Month</button>
                </div>
            </div>

            <div className='grow p-2'>
                <div className='gap-y-2 flex flex-col'>
                    {data?.results.slice(0, 10).map((movie) => (
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

export default MostViewedCard