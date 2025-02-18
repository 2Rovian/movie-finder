import { Link } from 'react-router-dom';
import { useState, useEffect, useRef, useContext } from 'react';
import { useQuery } from 'react-query';
import AuthContext from '../AuthContext';

function Navbar({ onSearch }) {
    const { user, logout } = useContext(AuthContext);

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
        <div className='min-h-[70px] bg-slate-900 text-white flex items-center'>
            <div className='container max-w-[1300px] mx-auto px-4 flex items-center h-full'>
                <Link to='/' className='xl:mx-5'>
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
                        className='w-full pl-2 py-1 outline-none'
                        onFocus={() => setisInputFocus(true)}
                        value={movie_name}
                        onChange={handleInputChange}
                    />
                    <i className="fa-solid fa-magnifying-glass mx-auto px-4 cursor-pointer"></i>
                </div>

                {user ?
                    <Link to='/profile-page'>
                        <div className='bg-gradient-to-r from-blue-400 to-indigo-400 hover:bg-gradient-to-l cursor-pointer p-1 rounded-lg text-xl xl:mx-5'>
                            <div className='w-full h-full rounded-md bg-slate-900 px-3 py-1 '>
                                <i className="fa-solid fa-user"></i>
                            </div>
                        </div>
                    </Link>
                    :
                    <Link to='/login'>

                    </Link>}


            </div>
        </div>
    );
}

export default Navbar;
