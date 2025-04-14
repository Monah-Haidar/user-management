import { useEffect } from 'react';
import {useThemeStore} from "./index.ts";


const ThemeProvider = ({ children }) => {
    const { theme } = useThemeStore();

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        document.documentElement.classList.toggle('dark', theme === 'dark');
    }, [theme]);

    return <>{children}</>;
};

export default ThemeProvider;