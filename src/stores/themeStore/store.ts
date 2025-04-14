import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import {ThemeStore} from "./store.type.ts";



const useThemeStore = create<ThemeStore>()(
    persist(
        (set, get) => ({
            theme: 'light',
            toggleTheme: () => set((state) => ({
                theme: state.theme === 'light' ? 'dark' : 'light'
            })),
            // toggleTheme: () => {
            //     const newTheme = get().theme === 'light' ? 'dark' : 'light'
            //     set({ theme: newTheme })
            //
            //     const root = window.document.documentElement
            //     root.classList.remove('light', 'dark')
            //     root.classList.add(newTheme)
            // },
        }),
        {
            name: 'theme-storage',
        }
    )
)

export default useThemeStore
