import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAuthStore from "../../stores/authStore/store";
import { FetchResponse } from "./../useUsers/useUsers.type.ts";
import { useState, useEffect } from 'react';

const useDebounce = (value: string, delay: number = 500) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(timer);
        };
    }, [value, delay]);

    return debouncedValue;
};

const useSearch = (keyword: string) => {
    const accessToken = useAuthStore((state) => state.accessToken);
    const debouncedKeyword = useDebounce(keyword);

    return useQuery({
        queryKey: ["search", debouncedKeyword],
        queryFn: ({ signal }) =>
            axios
                .get<FetchResponse>("/api/users", {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                        "Content-Type": "application/json",
                    },
                    params: {
                        search: debouncedKeyword,
                    },
                    signal,
                })
                .then((res) => res.data),
        staleTime: 1000 * 60 * 60 * 24, // 24 hours
        enabled: !!accessToken && debouncedKeyword.trim().length > 0,
    });
};

export default useSearch;
