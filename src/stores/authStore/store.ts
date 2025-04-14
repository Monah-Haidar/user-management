import { create } from "zustand";
import {persist} from "zustand/middleware";
import {AuthStore} from "./store.type.ts";



const useAuthStore = create(
    persist<AuthStore>(
        (set) => ({
            expiresIn: null,
            accessToken: null,

            login: ({ accessToken, expiresIn}) => set(() => ({
                expiresIn,
                accessToken,
            })),

            logout: () => {
                set(
                    () =>
                        ({
                            expiresIn: null,
                            accessToken: null,
                        })
                );
                const storageKey = 'auth-storage';
                localStorage.removeItem(storageKey);
            }


        }),
        {
            name: 'auth-storage'
        }
    )
);

export default useAuthStore;