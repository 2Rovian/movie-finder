import { useState } from 'react';
import pfp1 from '../assets/profilePic/girl_pfp1.png';
import pfp2 from '../assets/profilePic/girl_pfp2.png';
import pfp3 from '../assets/profilePic/girl_pfp3.png';
import pfp4 from '../assets/profilePic/guy_pfp1.png';
import pfp5 from '../assets/profilePic/guy_pfp2.png';
import pfp6 from '../assets/profilePic/guy_pfp3.png';

import ProfilePageNavbar from '../components/ProfilePageNavbar';

function ProfilePage() {
    const [changeProfilePic, setChangeProfilePic] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const [profilePics] = useState([pfp1, pfp2, pfp3, pfp4, pfp5, pfp6])

    const prevPfp = () => {
        setCurrentIndex((prevIndex) => ( prevIndex === 0 ? profilePics.length - 1 : prevIndex - 1 ));
    };

    const nextPfp = () => {
        setCurrentIndex((prevIndex) => (prevIndex === profilePics.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div>
            <ProfilePageNavbar profilePic={profilePics[currentIndex]}/>
            <div className='w-[400px] h-fit lg:w-[500px] mx-auto mt-[40px] bg-slate-900 rounded-lg text-blue-400 shadow'>
                <div className='flex py-5 flex-col items-center gap-y-4'>
                    <div className='relative'>
                        <img src={profilePics[currentIndex]} alt="profile picture"
                            className='object-cover rounded-full size-[250px] shadow'
                        />
                        {changeProfilePic && <div className='absolute top-26 flex justify-between w-[125%] div-referencia left-1/2 -translate-x-1/2'>
                            <i className="fa-solid fa-left-long text-2xl p-2 rounded-lg bg-slate-950 text-slate-100 cursor-pointer hover:text-slate-950 hover:bg-slate-100 duration-300 ease-in-out"
                                onClick={prevPfp}
                            />
                            <i className="fa-solid fa-right-long text-2xl p-2 rounded-lg bg-slate-950 text-slate-100 cursor-pointer hover:text-slate-950 hover:bg-slate-100 duration-300 ease-in-out"
                                onClick={nextPfp}
                            />
                        </div>}

                        <i className={`fa-solid fa-${changeProfilePic ? "check bg-slate-100 text-slate-950 outline-4 outline-slate-950" : "feather outline-2 bg-slate-950 text-slate-100 hover:text-slate-950 hover:bg-slate-100"} bottom-3 right-4 absolute p-3 text-lg  rounded-full cursor-pointer  duration-300 ease-in-out `}
                            onClick={() => { setChangeProfilePic(!changeProfilePic) }}
                        />

                    </div>
                    <p className='text-xl font-bold'>Profile Name</p>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage