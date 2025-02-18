import { create } from 'zustand';
import pfp1 from '../assets/profilePic/girl_pfp1.png';
import pfp2 from '../assets/profilePic/girl_pfp2.png';
import pfp3 from '../assets/profilePic/girl_pfp3.png';
import pfp4 from '../assets/profilePic/guy_pfp1.png';
import pfp5 from '../assets/profilePic/guy_pfp2.png';
import pfp6 from '../assets/profilePic/guy_pfp3.png';

const useProfileStore = create((set) => ({
    profilePics: [pfp1, pfp2, pfp3, pfp4, pfp5, pfp6],
    currentIndex: 0,
    changeProfilePic: false,

    nextPfp: () => set((state) => ({
        currentIndex: (state.currentIndex + 1) % state.profilePics.length
    })),

    prevPfp: () => set((state) => ({
        currentIndex: state.currentIndex === 0 ? state.profilePics.length - 1 : state.currentIndex - 1
    })),

    toggleChangeProfilePic: () => set((state) => ({
        changeProfilePic: !state.changeProfilePic
    }))
}));

export default useProfileStore;