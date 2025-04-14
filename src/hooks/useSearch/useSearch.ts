import axios, {CanceledError} from "axios";
import {useEffect, useState} from "react";
import useAuthStore from "../../stores/authStore/store";
import {FetchResponse, User} from "./../useUsers/useUsers.type.ts";



const useSearch = (keyword: string) => {
    const [isLoading, setIsLoading] = useState(false);
    const [searchedUsers, setSearchedUsers] = useState<User[]>([]);

    const accessToken = useAuthStore(state => state.accessToken);



    useEffect(() => {
        if (!accessToken || !keyword.trim()) {
            setSearchedUsers([]);
            return
        };

        const controller = new AbortController();

        setIsLoading(true);
        axios
            .get<FetchResponse>('/api/users', {
                signal: controller.signal,
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
                params: {
                    search: `${keyword}`
                }
            })
            .then(res => {
                setSearchedUsers(res.data.result.data.users);
                setIsLoading(false);
            })
            .catch((err) => {
                if (err instanceof CanceledError) return;
                setIsLoading(false);
            })

        return () => controller.abort();
    }, [accessToken, keyword]);


    return { isLoading, searchedUsers}
}

export default useSearch;