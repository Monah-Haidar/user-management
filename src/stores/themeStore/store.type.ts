export interface ThemeStore {
    theme: 'light' | 'dark'
    toggleTheme: () => void
}