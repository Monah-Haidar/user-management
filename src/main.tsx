import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css';
import {ThemeProvider, useThemeStore} from "./stores/themeStore";
import AppRouter from "./routing/AppRouter.tsx";



const theme = useThemeStore.getState().theme
document.documentElement.classList.remove('light', 'dark')
document.documentElement.classList.add(theme)


createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <ThemeProvider>
        <AppRouter />
      </ThemeProvider>
  </StrictMode>,
)
