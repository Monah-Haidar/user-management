import { create } from "zustand";
import {persist} from "zustand/middleware";

interface AuthStore {
    expiresIn: number | null,
    accessToken: string | null,
    isLoggedIn: boolean,
    login: (data: { accessToken: string; expiresIn: number}) => void,
    logout: () => void,
}


const useAuthStore = create(
    persist<AuthStore>(
        (set) => ({
            expiresIn: null,
            accessToken: null,
            isLoggedIn: false,

            login: ({ accessToken, expiresIn}) => set(() => ({
                expiresIn,
                accessToken,
                isLoggedIn: true,
            })),

            logout: () => set(() => ({
                expiresIn: null,
                accessToken: null,
                isLoggedIn: false,
            })),

        }),
        {
            name: 'auth-storage'
        }
    )
);

export default useAuthStore;