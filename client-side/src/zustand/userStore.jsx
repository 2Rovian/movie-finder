import { create } from 'zustand';

const useUserStore = create((set) => ({
    user: null, //inicialmente sem usuário
    token: null,
    setUser: (userData) => set({ user: userData.user, token: userData.token }), // Define o usuário
    logout: () => set({ user: null, token: null }), // Faz logout limpando o estado
}))

export default useUserStore;