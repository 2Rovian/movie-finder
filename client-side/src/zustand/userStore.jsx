import { create } from 'zustand';

const useUserStore = create((set) => ({
    user: null, //inicialmente sem usuário
    token: null,
    profilePic: null,
    setProfilePic: (pic) => set({ profilePic: pic }), // atualiza pfp
    setUser: (userData) => set({ user: userData.user, token: userData.token, profilePic: userData.profilePic || null }), // Define o usuário
    logout: () => set({ user: null, token: null, profilePic: null }), // Faz logout limpando o estado
}))

export default useUserStore;