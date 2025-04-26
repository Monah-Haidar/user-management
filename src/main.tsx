import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
import { ThemeProvider, useThemeStore } from "./stores/themeStore";
import AppRouter from "./routing/AppRouter.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

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
            </QueryClientProvider>
        </ThemeProvider>
    </StrictMode>
);
