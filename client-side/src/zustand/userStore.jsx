import { create } from 'zustand';

const useUserStore = create((set) => ({
    user: null, //inicialmente sem usuário
    setUser: (userData) => set({ user: userData }), // Define o usuário
    logout: () => set({ user: null }), // Faz logout limpando o estado
}))

export default useUserStore;