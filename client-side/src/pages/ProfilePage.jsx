import ProfilePageNavbar from '../components/ProfilePageNavbar';
import useProfileStore from '../zustand/profileStore';

function ProfilePage() {
    const { profilePics, currentIndex, changeProfilePic, nextPfp, prevPfp, toggleChangeProfilePic } = useProfileStore();

    return (
        <div>
            <ProfilePageNavbar />
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
                            onClick={toggleChangeProfilePic}
                        />

                    </div>
                    <p className='text-xl font-bold'>Profile Name</p>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage