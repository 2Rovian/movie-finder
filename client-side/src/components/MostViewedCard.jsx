import React, { useState } from 'react'

function MostViewedCard() {
    const [DayBtn, setDayBtn] = useState(true);
    const [WeekBtn, setWeekBtn] = useState(false);
    const [MonthBtn, setMonthBtn] = useState(false);
    return (
        <div className='w-[95%] mx-auto lg:max-w-[400px] lg:mt-5 lg:mr-3'>
            <main className='w-full bg-slate-900 h-[700px] rounded-t-xl'>
                <div className='py-5 lg:py-3 flex px-4 gap-x-4 items-center bg-slate-950 rounded-t-xl lg:flex-col'>
                    <span className='text-blue-400 font-bold text-xl lg:pb-3 lg:text-2xl lg:tracking-wide'>Most Viewed</span>

                    <div className='items-center flex h-full gap-x-4'>
                        <button className={`border-2 rounded-xl px-4 py-1 cursor-pointer duration-500 ease-in-out ${DayBtn ? "border-blue-400 text-blue-400" : "border-blue-900 text-blue-900"}`}
                        onClick={() => {setDayBtn(true); setWeekBtn(false); setMonthBtn(false)}}
                        >Day</button>
                        <button className={`border-2 rounded-xl px-4 py-1 cursor-pointer duration-500 ease-in-out ${WeekBtn ? "border-blue-400 text-blue-400" : "border-blue-900 text-blue-900"}`}
                        onClick={() => {setDayBtn(false); setWeekBtn(true); setMonthBtn(false)}}
                        >Week</button>
                        <button className={`border-2 rounded-xl px-4 py-1 cursor-pointer duration-500 ease-in-out ${MonthBtn ? "border-blue-400 text-blue-400" : "border-blue-900 text-blue-900"}`}
                        onClick={() => {setDayBtn(false); setWeekBtn(false); setMonthBtn(true)}}
                        >Month</button>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default MostViewedCard