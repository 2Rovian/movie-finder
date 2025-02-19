import { Link } from 'react-router-dom';
import { useState, useEffect, useRef, useContext } from 'react';

import AuthContext from '../AuthContext';

import useProfileStore from '../zustand/profileStore';

function Navbar({ onSearch }) {
    const { user, logout } = useContext(AuthContext);

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const { profilePics, currentIndex } = useProfileStore();

    const [isInputFocus, setisInputFocus] = useState(false);
    const inputRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (inputRef.current && !inputRef.current.contains(event.target)) {
                setisInputFocus(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const [movie_name, setMovie_name] = useState('');

    const handleInputChange = (e) => {
        const value = e.target.value;
        setMovie_name(value)
        onSearch(value);
    }

    return (
        <div className='min-h-[75px] text-white flex items-center'>
            <div className='container max-w-[1300px] mx-auto px-4 flex items-center h-full bg-slate-900 xl:rounded-b-lg shadow'>
                <Link to='/' className='xl:mx-1'>
                    <div className='text-xl md:text-2xl font-bold'>
                        <span className='bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent'>Movie Finder</span>
                    </div>
                </Link>

                <div
                    className={`grow flex items-center rounded-xl py-1 pl-2 bg-slate-800 outline-2 mx-4 ease-in-out duration-500 ${isInputFocus ? 'outline-indigo-400' : 'outline-transparent'
                        }`}
                    ref={inputRef}
                >
                    <input
                        type="text"
                        className='w-full pl-2 py-[5px] outline-none'
                        onFocus={() => setisInputFocus(true)}
                        value={movie_name}
                        onChange={handleInputChange}
                    />
                    <i className="fa-solid fa-magnifying-glass mx-auto px-4 cursor-pointer"></i>
                </div>

                {user ?
                    <div className='relative '>
                        <div className='bg-gradient-to-r from-blue-400 to-indigo-400 hover:from-blue-300 hover:to-indigo-300 duration-500 ease-in-out cursor-pointer p-1 rounded-full transition-all hover:opacity-80  '
                            onClick={() => { setIsDropdownOpen(!isDropdownOpen) }}
                        >
                            <img src={profilePics[currentIndex]} alt="" className='size-[40px] md:size-[50px] rounded-full cursor-pointer' />
                        </div>

                        {/* Dropdown Menu */}
                        {isDropdownOpen &&
                            <div className='absolute top-[55px] md:top-[60px] left-1/2 -translate-x-1/2 bg-slate-100 text-slate-950 z-40 flex flex-col items-center px-1 shadow-lg rounded-lg text-lg'>
                                <div className='absolute left-1/2 top-0 size-3 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-slate-100' />
                                <div className='flex-col flex z-50 font-semibold py-1 gap-y-1 '>
                                    <Link to='profile-page' className='bg-slate-100 cursor-pointer hover:bg-slate-950 hover:text-slate-100 text-slate-950 text-center rounded-md px-1 py-1 duration-500 ease-in-out'>Profile</Link>
                                    <span className='bg-slate-100 cursor-pointer hover:bg-slate-950 hover:text-slate-100 text-slate-950 text-center rounded-md px-1 py-1 duration-500 ease-in-out'
                                    onClick={logout}
                                    >Logout</span>
                                </div>
                            </div>
                        }
                    </div>

                    :
                    <Link to='/login'>
                        <div className='bg-gradient-to-r from-blue-400 to-indigo-400 hover:bg-gradient-to-l cursor-pointer p-1 rounded-lg text-xl xl:mx-5'>
                            <div className='w-full h-full rounded-md bg-slate-900 px-3 py-1 '>
                                <i className="fa-solid fa-user"></i>
                            </div>
                        </div>
                    </Link>}


            </div>
        </div>
    );
}

export default Navbar;
