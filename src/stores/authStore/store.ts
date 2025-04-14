import { create } from "zustand";
import {persist} from "zustand/middleware";

interface AuthStore {
    expiresIn: number | null,
    accessToken: string | null,
        login: (data: { accessToken: string; expiresIn: number}) => void,
    logout: () => void,
}


const useAuthStore = create(
    persist<AuthStore>(
        (set) => ({
            expiresIn: null,
            accessToken: null,

            login: ({ accessToken, expiresIn}) => set(() => ({
                expiresIn,
                accessToken,
            })),

            logout: () => set(() => ({
                expiresIn: null,
                accessToken: null,
            })),

        }),
        {
            name: 'auth-storage'
        }
    )
);

export default useAuthStore;