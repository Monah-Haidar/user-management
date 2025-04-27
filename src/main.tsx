import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
import { ThemeProvider, useThemeStore } from "./stores/themeStore";
import AppRouter from "./routing/AppRouter.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const theme = useThemeStore.getState().theme;
document.documentElement.classList.remove("light", "dark");
document.documentElement.classList.add(theme);

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <ThemeProvider>
            <QueryClientProvider client={queryClient}>
                <AppRouter />
                <ReactQueryDevtools />
                <ToastContainer position="top-right" theme={theme} />
            </QueryClientProvider>
        </ThemeProvider>
    </StrictMode>
);
